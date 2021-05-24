import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

const Survey3 = () => {
  const [surNext, setSurNext] = useState("result");
  const [surPrev, setSurPrev] = useState("second");

  return (
    <div id="survey3" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 산미를 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={"새해선물로 생전 처음보는 와인이 들어왔다."}
        text2={"이 와인과 같이 먹고싶은 음식은?"}
      />
      <SurTypeTags num={3} />
      <SurBtns surNext={surNext} surPrev={surPrev} />
    </div>
  );
};

export default Survey3;
