import * as React from "react";
import FirstPage from "./LandingPage/FirstPage";
import SecondPage from "./LandingPage/SecondPage";
import ThirdPage from "./LandingPage/ThirdPage";
import FourthPage from "./LandingPage/FourthPage";
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
