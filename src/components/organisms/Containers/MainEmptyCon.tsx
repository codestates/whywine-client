import React from "react";
import emptyWine from "../../../img/main_wine_empty.png";
import GoToSurveyFromMain from "../../atoms/Buttons/GoToSurveyFromMain";
import ScrollDown from "../../atoms/Scroll/ScrollDown";

const MainEmptyCon = () => {
  return (
    <div>
      <div className="mainEmpty">
        <p>태그를 눌러 와인을 추천 받아보세요.</p>

        <div>
          <img src={emptyWine} />
          <ScrollDown />
        </div>

        <div className="mainEmptyDes">
          <p>어떤 태그를 골라야할지 고민이라면 </p>
          <p>주저없이 와인 성향 테스트를 진행해보세요.</p>
          <p>. </p>
          <p>. </p>
          <p>. </p>
          <p>간단한 취향 테스트를 통해 당신을 위한 와인을 추천해드립니다. </p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <GoToSurveyFromMain />
        </div>
      </div>
    </div>
  );
};

export default MainEmptyCon;
