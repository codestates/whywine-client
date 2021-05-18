import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurColorTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

const SurveyFirstQ = () => {
  const [surNext, setSurNext] = useState("second");
  const [surPrev, setSurPrev] = useState("first");
  // 페이지 구분을 위해 <h1>태그를 달아놓았음
  return (
    <div>
      <div className="surFirstBox">
        <h1>1번질문</h1>
        <SurMainText />
        <SurColorTags />
        <SurBtns surNext={surNext} surPrev={surPrev} />
      </div>
    </div>
  );
};

export default SurveyFirstQ;

// TODO: surNext와 surPrev 상태를 적절하게 주어 설문조사 페이지를 왔다 갔다 할 수 있게 해준다
