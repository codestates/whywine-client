import React, { useState, useEffect, useCallback, useMemo } from "react";
import MainWineCon from "../../organisms/Containers/MainWineCon";
import MainWineTagCon from "../../organisms/Containers/MainWineTagCon";
import Header from "../../organisms/Header/Header";
import Search from "./Search";
import Footer from "../../organisms/Footer/Footer";

import axios from "axios";
import dotenv from "dotenv";
import { list } from "@chakra-ui/styled-system";
import Loading from "../../atoms/Imgs/Loading";
dotenv.config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

//* 로컬스토리지에 담겨있는 태그 불러오기
let tags: any;
if (!localStorage.getItem("userTag")) {
  localStorage.setItem("userTag", JSON.stringify([]));
  tags = localStorage.getItem("userTag");
}
tags = localStorage.getItem("userTag");

let wineDataArr: any = [];

const Main = () => {
  const [userMainTag, setUserMainTag] = useState<string[]>(JSON.parse(tags)); // 유저의 와인 맛 태그
  const [userTypeTag, setTypeTag] = useState<string[]>([]); // 유저의 와인 타입 태그
  const [randomWine, setRandomWine] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const userTagUpdata = async () => {
    let tagsArr: any = localStorage.getItem("userTag");
    // * 로컬 스토리지에 있는 선택한 태그들을 tagsArr에 할당
    console.log("tags:", JSON.parse(tagsArr));
    // ! 로컬스토리지에서 데이터 받을시에 꼭 JSON.parse으로 JSON형태로 저장된 데이터 배열로 바꿔줘야함

    await axios.post(
      `${server}/user/update`,
      { tags: JSON.parse(tagsArr).filter((el: string) => el !== "") },
      // * (el: string) => el !== "") 빈문자열 제외하는 부분
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };
  useEffect(() => {
    userTagUpdata();
    getUserInfo();
    handleLoading();
  }, []);

  //* 서버에 태그 요청
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
          setRandomWine(data.data.data.wines.sorted.random3);
        });
    }
  }, [userMainTag, userTypeTag]);

  //* 로딩
  const handleLoading = () => {
    setTimeout(() => setIsLoading(false), 500);
  };

  //* 태그 최신화
  useEffect(() => {
    postTags();
  }, [userMainTag, userTypeTag]);

  //* 검색
  const [hasData, setHasData] = useState(true);
  const [searchWine, setSearchWine] = useState<object[][]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  //* 와인 데이터 이중배열
  const getWineData2 = (row: number, data: object[]) => {
    wineDataArr = Array(row).fill([]);
    getWineDataArr(data);
  };
  const getWineDataArr = useCallback(
    (data: object[]) => {
      let i = 0;
      while (data.length > 0) {
        wineDataArr[i].push(data.shift());
        if (wineDataArr[i].length === 3) {
          i++;
        }
      }
      console.log(wineDataArr);
      setSearchWine(wineDataArr);
      setIsSearch(true);
    },
    [searchWine]
  );
  //* 서버에 검색 요청
  const handleClickSearchBtn = (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      axios
        .get(`${server}/main/search?word=${searchWord}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((data) => {
          if (!data.data.data) {
            setIsSearch(true);
            setHasData(false);
          } else {
            // setSearchWine(data.data.data.wines);
            // setIsSearch(true);
            setHasData(true);
            let wineNum = Math.ceil(data.data.data.wines.length / 3);
            getWineData2(wineNum, data.data.data.wines);
          }
        })
        .then(() => {
          e.target.value = "";
        });
      //로딩 이미지 보여줬다가 사라짐..너무야매..
      setIsLoading(true);
      handleLoading();
    }
  };
  const handleSearchInput = (e: any) => {
    setSearchWord(e.target.value);
  };
  const goBack = () => {
    setIsSearch(false);
  };
  return (
    <div>
      <Header
        handleSearchInput={handleSearchInput}
        handleClickSearchBtn={handleClickSearchBtn}
      />
      <MainWineTagCon
        userMainTag={userMainTag}
        setUserMainTag={setUserMainTag}
        userTypeTag={userTypeTag}
        setTypeTag={setTypeTag}
        tags={tags}
      />
      {isLoading ? (
        <Loading />
      ) : isSearch ? (
        <div>
          <button onClick={goBack}>뒤로가기</button>
          <Search searchWine={searchWine} hasData={hasData} />
        </div>
      ) : (
        <div className="mainContainers">
          <MainWineCon randomWine={randomWine} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Main;
