import React, { useEffect, useState } from "react";
import GoToTop from "../atoms/Buttons/GoToTop";
import LikeListCon from "../organisms/Containers/LikeListCon";
import MyPageHeader from "../organisms/Header/MyPageHeader";
import Footer from "../organisms/Footer/Footer";

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

  //* 스크롤 내리면 스크롤다운 사라짐, 맨 위로가기 생김
  const [scroll, setScroll] = useState(false);
  const handleScrollDown = () => {
    setScroll(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);

    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  });
  return (
    <div>
      <MyPageHeader />
      <LikeListCon
        userLikeWines={userLikeWines}
        scroll={scroll}
        handleScrollDown={handleScrollDown}
      />
      <div
        style={{
          opacity: scroll ? "1" : "0",
        }}
        onScroll={handleScrollDown}
      >
        <GoToTop />
      </div>
      <Footer />
    </div>
  );
};

export default LikeList;
