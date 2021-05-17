import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurColorTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

const SurveyThirdQ = () => {
  const [surNext, setSurNext] = useState("last");
  const [surPrev, setSurPrev] = useState("second");

  return (
    <div>
      <div className="surFirstBox">
        <h1>3번질문</h1>
        <SurMainText />
        <SurColorTags />
        <SurBtns surNext={surNext} surPrev={surPrev} />
      </div>
    </div>
  );
};

export default SurveyThirdQ;
