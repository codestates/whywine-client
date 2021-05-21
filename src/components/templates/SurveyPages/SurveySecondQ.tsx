import React, { useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurColorTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

export default function SurveyFirstQ() {
  const [surNext, setSurNext] = useState("third");
  const [surPrev, setSurPrev] = useState("");

  return (
    <div>
      <div id="surFirstBox" className="surFirstBox">
        <h1>2번질문</h1>
        <SurMainText />
        <SurColorTags />
        <SurBtns surNext={surNext} surPrev={surPrev} />
      </div>
    </div>
  );
}
