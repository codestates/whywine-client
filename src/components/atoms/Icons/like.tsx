import React, { useState, useMemo, useEffect, useCallback } from "react";
import axios from "axios";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

interface Props {
  id: number;
}

// const active = useMemo(() => Active(boolean), [isLike]);

function Like({ id }: Props) {
  const [isLike, setIsLike] = useState<boolean>();
  const [noLike, setNoLike] = useState(false);

  const handleLikeBtn = useCallback(async () => {
    setIsLike(!isLike);

    if (!isLike) {
      console.log(1);
      await axios

        .post(
          `${server}user/like`,
          { wineId: id },
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
          { wineId: id },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then(() => {
          // getUserInfo();
        })
        .catch((err) => console.dir(err));
      console.log("isLike 싫어요 요청", isLike);
    }
  }, [isLike]);

  useEffect(() => {
    if (sessionStorage.getItem("userInfo")) {
      let userInfo: any = sessionStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      let { wines } = userInfo;

      // * 유저 정보에서 찜한 와인 목록 구조분해할당
      if (wines) {
        wines.map((el: any) => {
          if (id === el.id) {
            return setNoLike(true);
          } else {
            return setIsLike(false);
          }
        });
      }

      // * 유저가 찜한 와인 배열에서 같은 와인 id가 있으면 islike 상태를 true로 반환한다.
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
