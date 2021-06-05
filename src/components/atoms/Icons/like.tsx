import React, { useState, useMemo, useEffect, useCallback } from "react";
import axios from "axios";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

interface Props {
  id: number;
}

function Active(boolean: boolean) {
  return !boolean;
}

// const active = useMemo(() => Active(boolean), [isLike]);

function Like({ id }: Props) {
  const [isLike, setIsLike] = useState<boolean>();
  const [noLike, setNoLike] = useState(false);

  const getUserInfo = async () => {
    try {
      let data = await axios.get(`${server}userinfo`, {
        withCredentials: true,
      });
      sessionStorage.setItem(
        "userInfo",
        JSON.stringify(data.data.data.userInfo)
      );
      // * 유저 정보 세션 스토리지 저장
    } catch (error) {
      console.dir(error);
    }
  };

  const handleLikeBtn = () => {
    console.log("isLike 들어올떄 ", isLike);

    setIsLike((isLike) => !isLike);

    console.log("isLike 반전", isLike);
    if (!isLike) {
      console.log(1);

      axios
        .post(
          `${server}user/like`,
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
      console.log("isLike 좋아요 요청", isLike);
    } else if (isLike) {
      console.log(2);
      axios
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
  };

  useEffect(() => {
    console.log(" isLike 랜딩될떄", isLike);
    getUserInfo();
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
