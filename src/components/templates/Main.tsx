import React, { useState, useEffect, useCallback } from "react";
import MainNav from "../organisms/Buttons/MainNav";
import MainWineCon from "../organisms/Containers/MainWineCon";
import MainWineTagCon from "../organisms/Containers/MainWineTagCon";
import MainSearchBar from "../organisms/Inputs/MainSearchBar";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import axios from "axios";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

//* 로컬스토리지에 담겨있는 태그 불러오기
let tags: any;
if (!localStorage.getItem("userTag")) {
  localStorage.setItem("userTag", JSON.stringify([]));
  tags = localStorage.getItem("userTag");
}
tags = localStorage.getItem("userTag");

const Main: React.FC = () => {
  const [mainPage, setMainPage] = useState(false);
  const [userMainTag, setUserMainTag] = useState<string[]>(JSON.parse(tags));
  const Token: any = localStorage.getItem("token");

  // const socialToken = async () => {
  //   await axios
  //     .get(`${server}/auth/refreshTokenReq`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     })
  //     .then((deta) => {
  //       console.log(deta);
  //     });

  // const saveToken = await localStorage.getItem(
  //   "token",
  //   JSON.stringify(getAccessToken)
  // );
  // };

  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(`${server}/userinfo`, {withCredentials: true});

      console.log(userInfo);
      //localStorage.setItem("userInfo", JSON.stringify(userInfo.data.data));
      // * 유저 정보 로컬스토리지 저장
    } catch (error) {
      console.error();
    }
  };
  const a = async () => {
    // await socialToken();
    await getUserInfo();
  };


  useEffect(() => {
    setMainPage(true);
    const HeaderEl: any = document.querySelector(".LandingHeader");
    HeaderEl.className = "MainHeader";
    // * 해더 색깔 바꿔주는 부분
    a();
  }, []);

  //* 태그 최신화
  useEffect(() => {
    postTags();
  }, [userMainTag]);

  //* 서버에 태그 요청
  const postTags = useCallback(() => {
    if (userMainTag.length !== 0) {
      axios
        .post(
          `${server}/main/tags`,
          { tags: userMainTag.filter((el: string) => el !== "") },
          // * (el: string) => el !== "") 빈문자열 제외하는 부분
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((data) => console.log(data.data.data.wines.sorted));
    }
  }, [userMainTag]);

  return (
    <div>
      <Header />
      <MainSearchBar />
      <div className="mainContainers">
        <MainWineTagCon
          userMainTag={userMainTag}
          setUserMainTag={setUserMainTag}
        />
        <MainWineCon />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
