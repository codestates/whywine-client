import React, { useState, useEffect } from "react";
import GoToSurveyBtn from "../../atoms/Buttons/GoToSurveyBtn";
import MainMyPageBtn from "../../atoms/Buttons/MainMyPageBtn";
import MainSignInBtn from "../../atoms/Buttons/MainSignInBtn";
import MainSignUpBtn from "../../atoms/Buttons/MainSignUpBtn";
import MainLogo from "../../atoms/Logos/MainLogo";
import MainSearchBar from "../Inputs/MainSearchBar";
import navBars from "../../../img/bars-solid.svg";

const MainNav = () => {
  useEffect(() => {
    const bars = document.querySelector(".navBars");
    const navMenu = document.querySelector(".mainNavMenu");

    bars?.addEventListener("click", () => {
      navMenu?.classList.toggle("active");
    });
  }, []);
  return (
    <div className="mainNav">
      <div className="mainLogoSearchBox">
        <MainLogo />
        <MainSearchBar />
      </div>
      <ul className="mainNavMenu">
        <GoToSurveyBtn />
        <MainSignInBtn />
        <MainSignUpBtn />
        <MainMyPageBtn />
      </ul>
      <img src={navBars} alt="Bars" className="navBars" />
    </div>
  );
};

export default MainNav;
