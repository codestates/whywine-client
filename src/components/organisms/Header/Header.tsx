import React, { useState, useEffect } from "react";
import Title from "../../atoms/Title/Title";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import SignIn from "../../atoms/Buttons/SignIn";
import SignUp from "../../atoms/Buttons/SignUp";
import SingInModal from "../Modal/SignInModal";
import SignUpModal from "../Modal/SignUpModal";
import Logout from "../../atoms/Buttons/Logout";
import MyAccount from "../../organisms/Togle/MyAccount";
import { useHistory } from "react-router-dom";
import { join } from "path/posix";
import MainSearchBar from "../Inputs/MainSearchBar";

interface State {
  handleSearchInput: (e: any) => void;
  handleClickSearchBtn: () => void;
}

function LandingHeader({ handleSearchInput, handleClickSearchBtn }: State) {
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
    let login: any = localStorage.getItem("login");
    if (JSON.parse(login)) {
      setIslogin(true);
    } else if (!JSON.parse(login)) {
      setIslogin(false);
    }
  });

  return (
    <>
      {isLogin ? (
        <div className="MainHeader ">
          <Title />
          <MainSearchBar
            handleSearchInput={handleSearchInput}
            handleClickSearchBtn={handleClickSearchBtn}
          />

          <div className="headerMeun">
            <GoToMainBtn />
            <Logout setIslogin={setIslogin} />
            <MyAccount />
          </div>
        </div>
      ) : (
        <div className="MainHeader ">
          <Title />
          <MainSearchBar
            handleSearchInput={handleSearchInput}
            handleClickSearchBtn={handleClickSearchBtn}
          />

          <div className="headerMeun">
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
