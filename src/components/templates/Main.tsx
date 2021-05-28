import React, { useState, useEffect, useRef } from "react";
import MainWineCon from "../organisms/Containers/MainWineCon";
import MainWineTagCon from "../organisms/Containers/MainWineTagCon";
import MainSearchBar from "../organisms/Inputs/MainSearchBar";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import axios from "axios";
import dotenv from "dotenv";
import { join } from "path/posix";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER;

const Main: React.FC = () => {
  const [mainPage, setMainPage] = useState(false);
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

  return (
    <div>
      <Header />
      <MainSearchBar />
      <div className="mainContainers">
        <MainWineTagCon />
        <MainWineCon />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
