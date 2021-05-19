import * as React from "react";
import MainNav from "../organisms/Buttons/MainNav";
import MainWineCon from "../organisms/Containers/MainWineCon";
import MainSearchBar from "../organisms/Inputs/MainSearchBar";

const Main: React.FC = () => {
  return (
    <div>
      <MainNav />
      <ul className="mainWineConBox">
        <MainWineCon />
        <MainWineCon />
        <MainWineCon />
        <MainWineCon />
      </ul>
    </div>
  );
};

export default Main;
