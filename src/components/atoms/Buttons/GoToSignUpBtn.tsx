import React from "react";

const GoToSignUpBtn = () => {
  return (
    <div>
      <div className="goToSignUpBox">
        <button className="goToSignUpBtn">회원가입</button>
        <div className="pleaseSignUp">
          회원가입을 하시면 추천받은 와인 태그가 저장됩니다.
        </div>
      </div>
    </div>
  );
};

export default GoToSignUpBtn;
