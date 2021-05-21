import React, { useRef, useEffect, useState } from "react";
import GoToSurveyBtn from "../../atoms/Buttons/GoToSurveyBtn";
import MainMyPageBtn from "../../atoms/Buttons/MainMyPageBtn";
import MainSignInBtn from "../../atoms/Buttons/MainSignInBtn";
import MainSignUpBtn from "../../atoms/Buttons/MainSignUpBtn";
import MainLogo from "../../atoms/Logos/MainLogo";
import MainSearchBar from "../Inputs/MainSearchBar";
import navBars from "../../../img/bars-solid.svg";

const MainNav = () => {
  const [menu, setMenu] = useState(false);
  //! react에서 권장하는 방식이 아님
  // useEffect(() => {
  //   const bars = document.querySelector(".navBars");
  //   const navMenu = document.querySelector(".mainNavMenu");
  //   bars?.addEventListener("click", () => {
  //     navMenu?.classList.toggle("active");
  //   });
  // }, []);
  const handleMenu = () => {
    setMenu(!menu);
  };
  //*class name을 띄우고 쓰면 여러개 가능
  return (
    <div className="mainNav">
      <div className="mainLogoSearchBox">
        <MainLogo />
        <MainSearchBar />
      </div>
      <div className={menu ? "mainNavMenu active" : "mainNavMenu"}>
        <GoToSurveyBtn />
        <MainMyPageBtn />
      </div>
      <img src={navBars} alt="Bars" className="navBars" onClick={handleMenu} />
    </div>
  );
};

export default MainNav;
