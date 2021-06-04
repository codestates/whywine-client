import * as React from "react";
import { useHistory } from "react-router-dom";

const GoToMainBtn: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <div onClick={() => history.push("/main")}>서비스 바로 이용하기</div>
    </div>
  );
};

export default GoToMainBtn;
