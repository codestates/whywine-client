import * as Raect from "react";
import { useHistory } from "react-router-dom";

const GoToSurveyFromRes: Raect.FC = () => {
  const history = useHistory();
  return (
    <div>
      <button
        className="goToSurveyFromMain"
        onClick={() => history.push("/survey")}
      >
        테스트 다시하기
      </button>
    </div>
  );
};

export default GoToSurveyFromRes;
