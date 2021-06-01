import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

interface Props {
  id: number;
}

const Like = ({ id }: Props) => {
  const [isLike, setIsLike] = useState(false);

  const handleLikeBtn = async () => {
    setIsLike(!isLike);
    if (isLike) {
      await axios.post(
        `${server}/user/like`,
        { wineId: id },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } else {
      await axios.post(
        `${server}/user/unlike`,
        { wineId: id },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    }
  };

  const getUserInfo = async () => {
    try {
      let data = await axios.get(`${server}/userinfo`, {
        withCredentials: true,
      });
      localStorage.setItem("userInfo", JSON.stringify(data.data.data.userInfo));
      // * 유저 정보 로컬스토리지 저장
    } catch (error) {}
  };

  useEffect(() => {
    getUserInfo();
    if (localStorage.getItem("userInfo")) {
      let userInfo: any = localStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      let { wines } = userInfo;
      // * 유저 정보에서 찜한 와인 목록 구조분해할당
      wines.forEach((el: number) => {
        if (id === el) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      });
      // * 유저가 찜한 와인 배열에서 같은 와인 id가 있으면 islike 상태를 true로 반환한다.
    }
  }, []);

  return (
    <div onClick={handleLikeBtn} className={isLike ? "like" : "unlike"}></div>
  );
};

export default Like;
