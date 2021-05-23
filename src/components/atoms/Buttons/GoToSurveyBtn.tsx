import * as Raect from "react";
import { useHistory } from "react-router-dom";

const GoToSurveyBtn: Raect.FC = () => {
  const history = useHistory();
  return (
    <div>
      <button className="goToSurveyBtn" onClick={() => history.push("/survey")}>
        넵
      </button>
    </div>
  );
};

export default GoToSurveyBtn;
