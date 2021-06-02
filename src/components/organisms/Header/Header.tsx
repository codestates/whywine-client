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
import MainSearch from "../../atoms/Inputs/MainSearch";
import userEvent from "@testing-library/user-event";

interface State {
  handleSearchInput?: (e: any) => void;
  handleClickSearchBtn?: (e: any) => void;
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
    let login: any = sessionStorage.getItem("login");
    if (JSON.parse(login)) {
      setIslogin(true);
    } else if (!JSON.parse(login) && !login) {
      setIslogin(false);
      if (!isLogin) {
        sessionStorage.removeItem("userInfo");
      }
    }
  });

  return (
    <div className="HeaderWrap">
      {isLogin ? (
        <div className="MainHeader ">
          <Title />
          \
          <MainSearch
            handleSearchInput={handleSearchInput}
            handleClickSearchBtn={handleClickSearchBtn}
          />
          <div className="headerMenu">
            <GoToMainBtn />
            <Logout setIslogin={setIslogin} />
            <MyAccount />
          </div>
        </div>
      ) : (
        <div className="MainHeader ">
          <Title />
          \
          <MainSearch
            handleSearchInput={handleSearchInput}
            handleClickSearchBtn={handleClickSearchBtn}
          />
          <div className="headerMenu">
            \
            <SignIn openModal={openSignInModal} />
            <SignUp openModal={openSignUpModal} />
            <GoToMainBtn />
          </div>
          <SingInModal isOpen={signInOpen} closeModal={closeSignInModal} />
          <SignUpModal isOpen={signUpOpen} closeModal={closeSignUpModal} />
        </div>
      )}
    </div>
  );
}

export default LandingHeader;
