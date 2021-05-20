import * as React from "react";
import { useHistory } from "react-router-dom";
import FirstPage from "./LandingPage/FirstPage";
import SecondPage from "./LandingPage/SecondPage";
import ThirdPage from "./LandingPage/ThirdPage";
import FourthPage from "./LandingPage/FourthPage";
import LandingHeader from "../organisms/Header/LandingHeader";

interface Handler {
  data: string;
}

function Landing() {
  const history = useHistory();

  const loginHandler = (data: object) => {
    return history.push("/main");
  };

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
