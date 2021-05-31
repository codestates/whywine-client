import React, { useState, useEffect, useCallback, useMemo } from "react";
import MainNav from "../organisms/Buttons/MainNav";
import MainWineCon from "../organisms/Containers/MainWineCon";
import MainWineTagCon from "../organisms/Containers/MainWineTagCon";
import MainSearchBar from "../organisms/Inputs/MainSearchBar";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
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
  const [userMainTag, setUserMainTag] = useState<string[]>(JSON.parse(tags)); // 유저의 와인 맛 태그
  const [userTypeTag, setTypeTag] = useState<string[]>([]); // 유저의 와인 타입 태그
  const [randomWine, setRandomWine] = useState<object[]>([]);

  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(`${server}/userinfo`, {
        withCredentials: true,
      });

      console.log("userInfo", userInfo);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(userInfo.data.data.userInfo)
      );
      // * 유저 정보 로컬스토리지 저장
    } catch (error) {}
  };

  useEffect(() => {
    setMainPage(true);

    const HeaderEl: any = document.querySelector(".LandingHeader");
    HeaderEl.className = "MainHeader";
    // * 해더 색깔 바꿔주는 부분

    getUserInfo();
  }, []);

  const postTags = useCallback(async () => {
    if (userMainTag.length !== 0) {
      console.log("userTypeTag", userTypeTag, "userMainTag", userMainTag);
      await axios
        .post(
          `${server}/main/tags`,
          {
            tags: userMainTag.filter((el: string) => el !== ""),
            sort: userTypeTag,
          },
          // * (el: string) => el !== "") 빈문자열 제외하는 부분
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((data) => {
          console.log(data.data.data.wines.sorted.random3);
          setRandomWine(data.data.data.wines.sorted.random3);
        });
    }
  }, [userMainTag, userTypeTag]);

  //* 태그 최신화
  useEffect(() => {
    postTags();
  }, [userMainTag, userTypeTag]);

  //* 서버에 태그 요청

  return (
    <div>
      <Header />
      <MainSearchBar />
      <div className="mainContainers">
        <MainWineTagCon
          userMainTag={userMainTag}
          setUserMainTag={setUserMainTag}
          userTypeTag={userTypeTag}
          setTypeTag={setTypeTag}
          tags={tags}
        />
        <MainWineCon randomWine={randomWine} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
