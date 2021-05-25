import React, { useState, useEffect } from "react";
import SurResultBtns from "../../organisms/Buttons/surResultBtns";
import SurResultCards from "../../organisms/Cards/surResultCards";
import axios from "axios";

const SurveyResultQ = () => {
  const [wines, setWines] = useState();

  useEffect(() => {
    const tagsArr = localStorage.getItem("userTag");
    // * 로컬 스토리지에 있는 선택한 태그들을 tagsArr에 할당
    console.log(tagsArr);

    axios
      .post(
        "https://localhost:4000/main/tags",
        { tags: tagsArr },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((data) => console.log(data));
  }, []);

  return (
    <div id="result" className="surResultContainer">
      <SurResultCards />
      <SurResultBtns />
    </div>
  );
};

export default SurveyResultQ;
