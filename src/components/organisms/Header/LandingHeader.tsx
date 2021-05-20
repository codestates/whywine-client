import * as React from "react";
import Title from "../../atoms/Title/Title";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import SignIn from "../../atoms/Buttons/SignIn";
import SignUp from "../../atoms/Buttons/SignUp";

function LandingHeader() {
  return (
    <div className="LandingHeader">
      <Title />
      <div>
        <SignIn />
        <SignUp />
        <GoToMainBtn />
      </div>
    </div>
  );
}

export default LandingHeader;
