import * as React from "react";
import FirstPage from "../organisms/LandingPage/FirstPage";
import SecondPage from "../organisms/LandingPage/SecondPage";
import ThirdPage from "../organisms/LandingPage/ThirdPage";
import FourthPage from "../organisms/LandingPage/FourthPage";
import LandingHeader from "../organisms/Header/LandingHeader";

function Landing() {
  return (
    <>
      <LandingHeader />
      <div className="contanier">
        <section className="FirstPage">
          <FirstPage />
        </section>
        <section className="SecondPage">
          <SecondPage />
        </section>
        <section className="ThirdPage">
          <ThirdPage />
        </section>
        <section className="FourthPage">
          <FourthPage />
        </section>
      </div>
    </>
  );
}
export default Landing;
