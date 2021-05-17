import * as Raect from "react";
import { useHistory } from "react-router-dom";

const GoToMainBtn: Raect.FC = () => {
  const history = useHistory();
  return (
    <button onClick={() => history.push("/main")}>메인페이지로 가기</button>
  );
};

export default GoToMainBtn;
