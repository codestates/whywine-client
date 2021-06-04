import React, { useState, useEffect, useCallback } from "react";
import SurResultBtns from "../../organisms/Buttons/surResultBtns";
import SurResultCards from "../../organisms/Cards/surResultCards";
import axios from "axios";
import dotenv from "dotenv";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER;

let tagsArrJson: any = sessionStorage.getItem("userTag");
let tagsArr = JSON.parse(tagsArrJson);

const SurveyResultQ = () => {
  const [wines, setWines] = useState();
  const [randomWine, setRandomWine] = useState<object[]>([]);
  useEffect(() => {
    // * 세션 스토리지에 있는 선택한 태그들을 tagsArr에 할당
    updateUserTags();
    postTags();
    // ! 세션 스토리지에서 데이터 받을시에 꼭 JSON.parse으로 JSON형태로 저장된 데이터 배열로 바꿔줘야함
  }, []);
  const updateUserTags = async () => {
    await axios
      .post(
        `${server}user/update`,
        { tags: tagsArr.filter((el: string) => el !== "") },
        // * (el: string) => el !== "") 빈문자열 제외하는 부분
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((data) => console.log(data));
  };

  //* 서버에 태그 요청
  const postTags = useCallback(async () => {
    if (tagsArr.length !== 0) {
      await axios
        .post(
          `${server}main/tags`,
          {
            tags: tagsArr.filter((el: string) => el !== ""),
            // sort: userTypeTag,
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
  }, [tagsArr]);

  return (
    <div id="result" className="surResultContainer">
      <SurResultCards randomWine={randomWine} />
      <SurResultBtns />
    </div>
  );
};

export default SurveyResultQ;
