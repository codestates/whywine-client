import React, { useState, useEffect, useCallback } from "react";
import SurResultBtns from "../../organisms/Buttons/surResultBtns";
import SurResultCards from "../../organisms/Cards/surResultCards";
import noSurvey from "../../../img/no_survey.png";
import GoToSurveyFromRes from "../../atoms/Buttons/GoToSurveyFromRes";
import axios from "axios";
import dotenv from "dotenv";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER;

let tagsArrJson: any = sessionStorage.getItem("userTag");
let tagsArr = JSON.parse(tagsArrJson);

const SurveyResultQ = () => {
  const [isEmpty, setIsEmpty] = useState(false);
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
          if (data.status !== 204) {
            setIsEmpty(false);
            setRandomWine(data.data.data.wines.sorted.random3);
          } else {
            setIsEmpty(true);
          }
        });
    }
  }, [tagsArr]);
  console.log(randomWine);
  return (
    <div>
      {isEmpty ? (
        <div className="noSurvey">
          <img src={noSurvey} />
          <div>
            <p>저런 와인 성향 테스트에서 아무것도 고르지 못 하셨군요.</p>
            <p>테스트를 다시 한번 진행해보시겠어요?</p>
            <GoToSurveyFromRes />
            <p>아니면 바로 저희 서비스를 이용해보시겠어요?</p>
            <div className="goToMainFromRes">
              <GoToMainBtn />
            </div>
          </div>
        </div>
      ) : (
        <div id="result" className="surResultContainer">
          <SurResultCards randomWine={randomWine} />
          <SurResultBtns />
        </div>
      )}
    </div>
  );
};

export default SurveyResultQ;
