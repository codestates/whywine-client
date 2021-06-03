import { useState, useEffect } from "react";
import Survey1 from "./SurveyPages/Survey1";
import Survey2 from "./SurveyPages/Survey2";
import Survey3 from "./SurveyPages/Survey3";
import Survey4 from "./SurveyPages/Survey4";
import Survey5 from "./SurveyPages/Survey5";
import Result from "./SurveyPages/SurveyResultQ";
import UseScrollFadeIn from "../atoms/Scroll/UseScrollFadeIn";

function Survey() {
  const animatedItem = UseScrollFadeIn("Down", 1, 0.5);
  const [userTag, setUserTag] = useState<string[]>([]);

  useEffect(() => {
    console.log("배열", userTag);
    if (userTag.length === 5) {
      sessionStorage.setItem("userTag", JSON.stringify(userTag));
      // * 선택한 답변의 갯수가 5개가 되면 세션스토리지에 "userTag"으로 태그들을 저장함
    }
  });

  return (
    <div className="SurveyWrap">
      <div className="container">
        <section className="survey">
          <Survey1
            animatedItem={animatedItem}
            userTag={userTag}
            setUserTag={setUserTag}
          />
        </section>
        <section className="survey">
          <Survey2
            animatedItem={animatedItem}
            userTag={userTag}
            setUserTag={setUserTag}
          />
        </section>
        <section className="survey">
          <Survey3
            animatedItem={animatedItem}
            userTag={userTag}
            setUserTag={setUserTag}
          />
        </section>
        <section className="survey">
          <Survey4
            animatedItem={animatedItem}
            userTag={userTag}
            setUserTag={setUserTag}
          />
        </section>
        <section className="survey">
          <Survey5
            animatedItem={animatedItem}
            userTag={userTag}
            setUserTag={setUserTag}
          />
        </section>
      </div>
    </div>
  );
}

export default Survey;
