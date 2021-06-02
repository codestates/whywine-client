import React, { useState } from "react";
import LikeListCon from "../organisms/Containers/LikeListCon";
import MyPageHeader from "../organisms/Header/MyPageHeader";

//* 세션 스토리지에 담겨있는 유저인포 불러오기
let userInfo: any;
if (!sessionStorage.getItem("userInfo")) {
  sessionStorage.setItem("userInfo", JSON.stringify([]));
  userInfo = sessionStorage.getItem("userInfo");
}
userInfo = sessionStorage.getItem("userInfo");
// * 유저인포에서 찜 된 와인 리스트 가져오기
let likeWines = JSON.parse(userInfo).wines;

const LikeList = () => {
  const [userLikeWines, setUserLikeWines] = useState<object[]>(likeWines);

  console.log(userLikeWines);
  return (
    <div>
      <MyPageHeader />
      <LikeListCon userLikeWines={userLikeWines} />
    </div>
  );
};

export default LikeList;
