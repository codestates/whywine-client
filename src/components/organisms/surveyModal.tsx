import * as React from "react";
import GoToMainBtn from "../atoms/Buttons/goToMainBtn";
import GoToSurveyBtn from "../atoms/Buttons/goToSurveyBtn";

const SurveyModal: React.FC = () => {
  const [isOpen, setIsipen] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsipen(true);
    }, 3000);
  }, []);

  return (
    <div>
      {isOpen ? (
        <div className="SurveyModal">
          <h1>와인 추천 받아보시겠습니까?</h1>
          <div className="SurveyModalBtn">
            <GoToMainBtn />
            <GoToSurveyBtn />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SurveyModal;
