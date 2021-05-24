import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

const Survey4 = () => {
  const [surNext, setSurNext] = useState("result");
  const [surPrev, setSurPrev] = useState("second");

  return (
    <div id="survey4" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 탄산를 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={
          "황금 같은 주말이 다가왔다./n친구들과 집에서 와인파티를 하기로 했다."
        }
        text2={"어떤 와인을 마시겠습니까?"}
      />
      <SurTypeTags num={4} />
      <SurBtns surNext={surNext} surPrev={surPrev} />
    </div>
  );
};

export default Survey4;
