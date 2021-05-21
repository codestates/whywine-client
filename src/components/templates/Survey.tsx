import { useState } from "react";
import First from "./SurveyPages/SurveyFirstQ";
import Second from "./SurveyPages/SurveySecondQ";
import Third from "./SurveyPages/SurveyThirdQ";
import Result from "./SurveyPages/SurveyResultQ";

function Survey() {
  return (
    <div className="container">
      <section>
        <First />
      </section>
      <section>
        <Second />
      </section>
      <section>
        <Third />
      </section>
      <section>
        <Result />
      </section>
    </div>
  );
}

export default Survey;
