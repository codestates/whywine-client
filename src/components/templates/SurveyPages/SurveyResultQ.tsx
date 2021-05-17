import React, { useState } from "react";
import SurResultBtns from "../../organisms/Buttons/surResultBtns";
import SurResultCards from "../../organisms/Imgs/surResultCards";

const SurveyResultQ = () => {
  return (
    <div className="surResultContainer">
      <SurResultCards />
      <SurResultBtns />
    </div>
  );
};

export default SurveyResultQ;
