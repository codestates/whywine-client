import * as Raect from "react";
import { useHistory } from "react-router-dom";

const GoToSurveyBtn: Raect.FC = () => {
  const history = useHistory();
  return (
    <button onClick={() => history.push("/survey")}>
      설문조사 하러 갈래요!
    </button>
  );
};

export default GoToSurveyBtn;
