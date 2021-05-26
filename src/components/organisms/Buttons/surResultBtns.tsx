import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import SignUp from "../../atoms/Buttons/SignUp";
import SignUpModal from "../../organisms/Modal/SignUpModal";

const surResultBtns = () => {
  const history = useHistory();
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);

  const openSignUpModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignUpOpen(true);
  };
  const closeSignUpModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignUpOpen(false);
  };

  return (
    <div>
      <div className="resultBtnBox">
        <div className="resultBtnBoxBtn">
          <GoToMainBtn />
          <SignUp openModal={openSignUpModal} />
        </div>
        <div className="pleaseSignUp">
          회원가입을 하시면 추천받은 와인 태그가 저장됩니다.
        </div>
      </div>
      <SignUpModal isOpen={signUpOpen} closeModal={closeSignUpModal} />
    </div>
  );
};

export default surResultBtns;
