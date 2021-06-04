import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import SignUpResult from "../../atoms/Buttons/SignUpResult";
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
        <div className="resultDes">
          <p>방금 진행하신 테스트를 바탕으로 와인을 추천해드렸습니다.</p>
          <p>와인 이미지를 클릭해 추천 와인을 확인해보세요.</p>
        </div>
        <div className="pleaseSignUp">
          <p>회원가입을 하시면 와인 태그가 저장됩니다.</p>
          <p>회원가입을 진행 하시겠습니까?</p>
        </div>
        <div className="resultBtnBoxBtn">
          <SignUpResult openModal={openSignUpModal} />
          <div className="goToMain">
            <GoToMainBtn />
          </div>
        </div>
      </div>
      <SignUpModal isOpen={signUpOpen} closeModal={closeSignUpModal} />
    </div>
  );
};

export default surResultBtns;
