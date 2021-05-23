import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

interface Props {
  animatedItem: any;
}

const SurveyFirstQ = ({ animatedItem }: Props) => {
  const [surNext, setSurNext] = useState("second");
  const [surPrev, setSurPrev] = useState("first");
  // 페이지 구분을 위해 <h1>태그를 달아놓았음
  return (
    <div className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 바디감을 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={"오랜만에 친구들과 술을 마시기로했다."}
        text2={"맨날 마시는 소주,맥주 말고 와인을 마셔보자 하는데..."}
      />
      <SurTypeTags />
      <SurBtns surNext={surNext} surPrev={surPrev} />
    </div>
  );
};

export default SurveyFirstQ;

// TODO: surNext와 surPrev 상태를 적절하게 주어 설문조사 페이지를 왔다 갔다 할 수 있게 해준다
