import * as React from "react";
import { useHistory } from "react-router-dom";

const GoToMainBtn: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <div onClick={() => history.push("/main")}>메인페이지</div>
    </div>
  );
};

export default GoToMainBtn;
