import { useState } from "react";
import Survey1 from "./SurveyPages/Survey1";
import Survey2 from "./SurveyPages/Survey2";
import Survey3 from "./SurveyPages/Survey3";
import Survey4 from "./SurveyPages/Survey4";

import Result from "./SurveyPages/SurveyResultQ";
import UseScrollFadeIn from "../atoms/Scroll/UseScrollFadeIn";

function Survey() {
  const animatedItem = UseScrollFadeIn("Down", 1, 0.5);
  return (
    <div className="container">
      <section className="survey">
        <Survey1 animatedItem={animatedItem} />
      </section>
      <section className="survey">
        <Survey2 />
      </section>
      <section className="survey">
        <Survey3 />
      </section>
      <section className="survey">
        <Survey4 />
      </section>
      <section className="survey">
        <Result />
      </section>
    </div>
  );
}

export default Survey;
