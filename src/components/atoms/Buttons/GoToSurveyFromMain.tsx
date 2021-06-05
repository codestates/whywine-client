import * as Raect from "react";
import { useHistory } from "react-router-dom";

const GoToSurveyFromMain: Raect.FC = () => {
  const history = useHistory();
  return (
    <div>
      <button
        className="goToSurveyFromMain"
        onClick={() => history.push("/survey")}
      >
        테스트 시작
      </button>
    </div>
  );
};

export default GoToSurveyFromMain;
