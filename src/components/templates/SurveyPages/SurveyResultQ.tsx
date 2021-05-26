import React, { useState, useEffect } from "react";
import SurResultBtns from "../../organisms/Buttons/surResultBtns";
import SurResultCards from "../../organisms/Cards/surResultCards";
import axios from "axios";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

const SurveyResultQ = () => {
  const [wines, setWines] = useState();

  useEffect(() => {
    let tagsArr: any = localStorage.getItem("userTag");
    // * 로컬 스토리지에 있는 선택한 태그들을 tagsArr에 할당
    console.log("tags:", JSON.parse(tagsArr));
    // ! 로컬스토리지에서 데이터 받을시에 꼭 JSON.parse으로 JSON형태로 저장된 데이터 배열로 바꿔줘야함

    axios
      .post(
        "https://localhost:4000/main/tags",
        { tags: JSON.parse(tagsArr).filter((el: string) => el !== "") },
        // * (el: string) => el !== "") 빈문자열 제외하는 부분
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((data) => console.log(data.data.data.wines));
  }, []);

  return (
    <div id="result" className="surResultContainer">
      <SurResultCards />
      <SurResultBtns />
    </div>
  );
};

export default SurveyResultQ;
