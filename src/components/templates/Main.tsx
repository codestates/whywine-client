import React, { useState, useEffect, useRef } from "react";
import ClickWine from "../atoms/Imgs/ClickWine";
import MainNav from "../organisms/Buttons/MainNav";
import MainWineCon from "../organisms/Containers/MainWineCon";
import MainWineTagCon from "../organisms/Containers/MainWineTagCon";
import MainSearchBar from "../organisms/Inputs/MainSearchBar";
import ReviewModal from "../organisms/Modal/ReviewModal";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";

const Main: React.FC = () => {
  const [mainPage, setMainPage] = useState(false);

  useEffect(() => {
    setMainPage(true);
    const HeaderEl: any = document.querySelector(".LandingHeader");
    HeaderEl.className = "MainHeader";
  }, []);

  return (
    <div>
      <Header />
      <MainSearchBar />
      <div className="mainContainers">
        <MainWineTagCon />
        <MainWineCon />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
