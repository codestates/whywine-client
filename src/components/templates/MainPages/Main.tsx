import React, { useState, useEffect, useCallback, useRef } from "react";
import MainWineCon from "../../organisms/Containers/MainWineCon";
import MainWineTagCon from "../../organisms/Containers/MainWineTagCon";
import Header from "../../organisms/Header/Header";
import Search from "./Search";
import Footer from "../../organisms/Footer/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import Loading from "../../atoms/Icons/Loading";
import WineModal from "../../organisms/Modal/WineModal";
import MainEmptyCon from "../../organisms/Containers/MainEmptyCon";
import GoToTop from "../../atoms/Buttons/GoToTop";

dotenv.config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

//* 세션 스토리지에 담겨있는 태그 불러오기
let userTags: any;
let userTagsJSON: any;
if (!sessionStorage.getItem("userTag")) {
  sessionStorage.setItem("userTag", JSON.stringify([]));
  userTags = sessionStorage.getItem("userTag");
}
userTagsJSON = sessionStorage.getItem("userTag");
userTags = JSON.parse(userTagsJSON);
type SubWine = {
  1: any[];
  2: any[];
  3: any[];
  4: any[];
};

const Main = () => {
  const [userMainTag, setUserMainTag] = useState<string[]>([]); // 유저의 와인 맛 태그
  const [userTypeTag, setTypeTag] = useState<string[]>([]); // 유저의 와인 타입 태그
  const [randomWine, setRandomWine] = useState<any>([]);
  const [subWine, setSubWine] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSetUserTag = useCallback(
    (userTag: string[]) => {
      setUserMainTag(userTag);
    },
    [userMainTag]
  );
  const handleSetTypeTag = useCallback(
    (typeTag: string[]) => {
      setTypeTag(typeTag);
    },
    [userTypeTag]
  );
  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(`${server}userinfo`, {
        withCredentials: true,
      });

      sessionStorage.setItem(
        "userInfo",
        JSON.stringify(userInfo.data.data.userInfo)
      );
      // * 유저 정보 세션스토리지 저장
    } catch (error) {
      sessionStorage.setItem("login", JSON.stringify(false));
    }
  };

  const userTagUpdata = async () => {
    let tagsArr: any = sessionStorage.getItem("userTag");
    // * 로컬 스토리지에 있는 선택한 태그들을 tagsArr에 할당

    // ! 세션 스토리지에서 데이터 받을시에 꼭 JSON.parse으로 JSON형태로 저장된 데이터 배열로 바꿔줘야함

    await axios.post(
      `${server}user/update`,
      { tags: JSON.parse(tagsArr).filter((el: string) => el !== "") },
      // * (el: string) => el !== "") 빈문자열 제외하는 부분
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };

  //* 서버에 태그 요청
  const postTags = useCallback(async () => {
    userMainTag;

    await axios
      .post(
        `${server}main/tags`,
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
        if (data.status !== 204) {
          data;

          setIsEmpty(false);
          setRandomWine(data.data.data.wines.sorted.random3);
          setSubWine(data.data.data.wines.sorted);
        } else if (data.status === 204) {
          data;
          setIsEmpty(true);
        }
      });
  }, [userMainTag, userTypeTag]);

  //* 로딩
  const handleLoading = (time: number | undefined) => {
    setTimeout(() => setIsLoading(false), time);
  };

  useEffect(() => {
    userTagUpdata();
    handleLoading(300);
    getUserInfo();

    if (
      !sessionStorage.getItem("userInfo") ||
      sessionStorage.getItem("login")
    ) {
      getUserInfo();
    }
    if (!sessionStorage.getItem("login")) {
      sessionStorage.removeItem("userInfo");
    }
  }, []);

  //* 태그 최신화
  useEffect(() => {
    postTags();
  }, [userMainTag, userTypeTag]);
  //* 검색

  const [hasData, setHasData] = useState(true);
  const [searchWine, setSearchWine] = useState<object[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  //* 서버에 검색 요청
  const handleClickSearchBtn = (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      axios
        .get(`${server}main/search?word=${searchWord}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((data) => {
          if (!data.data.data) {
            setIsSearch(true);
            setHasData(false);
          } else {
            data.data.data.wines;
            setSearchWine(data.data.data.wines);
            setIsSearch(true);
            setHasData(true);
          }
        });

      //로딩 이미지 보여줬다가 사라짐
      setIsLoading(true);
      handleLoading(300);
    }
  };
  const handleSearchInput = (e: any) => {
    setSearchWord(e.target.value);
  };
  const goBack = () => {
    setIsSearch(false);
  };

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
      <Header
        handleSearchInput={(e) => handleSearchInput(e)}
        handleClickSearchBtn={(e) => handleClickSearchBtn(e)}
      />

      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : isSearch ? (
        <div>
          {/* <GoBackBtn goBack={goBack} /> */}
          <Search searchWine={searchWine} hasData={hasData} goBack={goBack} />
        </div>
      ) : (
        <div className="mainContainers">
          <MainWineTagCon
            userMainTag={userMainTag}
            handleSetUserTag={handleSetUserTag}
            userTypeTag={userTypeTag}
            handleSetTypeTag={handleSetTypeTag}
            tags={userTags}
          />

          {isEmpty || randomWine.length === 0 ? (
            <MainEmptyCon />
          ) : (
            <MainWineCon
              randomWine={randomWine}
              subWine={subWine}
              handleLoading={handleLoading}
            />
          )}
        </div>
      )}
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

export default Main;
