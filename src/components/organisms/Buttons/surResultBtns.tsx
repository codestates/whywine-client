import React from "react";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import GoToSignUpBtn from "../../atoms/Buttons/GoToSignUpBtn";

const surResultBtns = () => {
  return (
    <div>
      <div className="resultBtnBox">
        <GoToMainBtn />
        <GoToSignUpBtn />
      </div>
    </div>
  );
};

export default surResultBtns;
