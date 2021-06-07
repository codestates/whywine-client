import { useState } from "react";
import FirstPage from "./LandingPage/FirstPage";
import SecondPage from "./LandingPage/SecondPage";
import ThirdPage from "./LandingPage/ThirdPage";
import FourthPage from "./LandingPage/FourthPage";
import FifthPage from "./LandingPage/Fifth";
import Header from "../organisms/Header/Header";

interface Handler {
  data: string;
}

function Landing() {
  return (
    <div className="LandingWrap">
      {/* <Header /> */}
      <div className="container">
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
        <section className="FifthPage">
          <FifthPage />
        </section>
      </div>
    </div>
  );
}
export default Landing;
