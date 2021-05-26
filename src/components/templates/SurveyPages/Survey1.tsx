import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

interface Props {
  animatedItem: any;
}

const Survey1 = ({ animatedItem }: Props) => {
  const answer: Array<string> = [];

  const body: object = {
    light: "내일 출근해야되는데...",
    medium: "와인은 분위기로 마시는거지",
    bold: "오늘은 쫌 취하고 싶은데?",
  };

  for (let prop in body) {
  }
  return (
    <div id="survey1" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 바디감을 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={"오랜만에 친구들과 술을 마시기로했다."}
        text2={"맨날 마시는 소주,맥주 말고 와인을 마셔보자 하는데..."}
      />
      <SurTypeTags num={1} />
    </div>
  );
};

export default Survey1;

// TODO: surNext와 surPrev 상태를 적절하게 주어 설문조사 페이지를 왔다 갔다 할 수 있게 해준다
