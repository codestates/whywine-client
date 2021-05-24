import React, { useState } from "react";
import SurResultBtns from "../../organisms/Buttons/surResultBtns";
import SurResultCards from "../../organisms/Cards/surResultCards";

const SurveyResultQ = () => {
  return (
    <div id="result" className="surResultContainer">
      <SurResultCards />
      <SurResultBtns />
    </div>
  );
};

export default SurveyResultQ;
