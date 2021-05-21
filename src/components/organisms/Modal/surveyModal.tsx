import * as React from "react";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import GoToSurveyBtn from "../../atoms/Buttons/GoToSurveyBtn";

interface Props {
  isOpen: Boolean;
}

function SurveyModal({ isOpen }: Props) {
  return (
    <div className={isOpen ? "openModal modal" : "modal"}>
      {isOpen ? (
        <div className="SurveyModal">
          <h1>와인 추천 받아보시겠습니까?</h1>
          <div className="SurveyModalBtn">
            <GoToSurveyBtn />
            <GoToMainBtn />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SurveyModal;
