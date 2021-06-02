import React, { useState } from "react";
import LikeListCon from "../organisms/Containers/LikeListCon";
import MyPageHeader from "../organisms/Header/MyPageHeader";

//* 로컬스토리지에 담겨있는 유저인포 불러오기
let userInfo: any;
if (!localStorage.getItem("userInfo")) {
  localStorage.setItem("userInfo", JSON.stringify([]));
  userInfo = localStorage.getItem("userInfo");
}
userInfo = localStorage.getItem("userInfo");
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
