import React, { useState, useMemo, useEffect, useCallback } from "react";
import axios from "axios";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

interface Props {
  isUserInfo: {
    id: number;
    email: string;
    nickname: string;
    image: string;
    likes: number;
    bad: [];
    good: [];
    tags?: [];
    wines?: [];
  };
  wineId: number;
}

function Like({ wineId, isUserInfo }: Props) {
  const [isLike, setIsLike] = useState<boolean>(false);

  const handleLikeBtn = async () => {
    setIsLike(!isLike);
    if (!isLike) {
      console.log(1);
      await axios
        .post(
          `${server}user/like`,
          { wineId: wineId },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then(() => {});
    } else {
      console.log(2);
      await axios
        .post(
          `${server}user/unlike`,
          { wineId: wineId },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then(() => {})
        .catch((err) => console.dir(err));
    }
  };

  useEffect(() => {
    if (isUserInfo.wines) {
      isUserInfo.wines.map((el: any) => {
        if (el.id === wineId) {
          return setIsLike(() => true);
        }
      });
    }
  }, []);
  return (
    <i
      onClick={() => handleLikeBtn()}
      className={isLike ? "like icon-red" : "unlike icon-black"}
    ></i>
  );
}

export default Like;
