import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

export default function Survey2() {
  return (
    <div id="survey2" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 탄님감을 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={"방금 꿀맛같은 퇴근을한 당신, 오늘의 기분은?"}
        text2={""}
      />
      <SurTypeTags num={2} />
    </div>
  );
}
