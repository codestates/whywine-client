import React, { useState, useEffect } from "react";
import Title from "../../atoms/Title/Title";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import SignIn from "../../atoms/Buttons/SignIn";
import SignUp from "../../atoms/Buttons/SignUp";
import SingInModal from "../Modal/SingInModal";
import SignUpModal from "../Modal/SingUpModal";
import Logout from "../../atoms/Buttons/Logout";
import Myaccount from "../../atoms/Buttons/MyAccount";

function LandingHeader() {
  const [signInOpen, setSignInOpen] = useState<boolean>(false);
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
  const [isLogin, setIslogin] = useState<boolean>(false);

  const openSignInModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignInOpen(true);
  };
  const closeSignInModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignInOpen(false);
  };

  const openSignUpModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignUpOpen(true);
  };
  const closeSignUpModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignUpOpen(false);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIslogin(true);
    }
  });

  return (
    <>
      {isLogin ? (
        <div className="LandingHeader">
          <Title />
          <div>
            <Myaccount />
            <GoToMainBtn />
            <Logout setIslogin={setIslogin} />
          </div>
        </div>
      ) : (
        <div className="LandingHeader">
          <Title />
          <div>
            <SignIn openModal={openSignInModal} />
            <SignUp openModal={openSignUpModal} />
            <GoToMainBtn />
          </div>
          <SingInModal isOpen={signInOpen} closeModal={closeSignInModal} />
          <SignUpModal isOpen={signUpOpen} closeModal={closeSignUpModal} />
        </div>
      )}
    </>
  );
}

export default LandingHeader;
