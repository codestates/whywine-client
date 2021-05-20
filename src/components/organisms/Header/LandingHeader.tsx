import * as React from "react";
import Title from "../../atoms/Title/Title";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";

function LandingHeader() {
  return (
    <div className="LandingHeader">
      <Title />
      <GoToMainBtn />
    </div>
  );
}

export default LandingHeader;
