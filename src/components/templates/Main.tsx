import * as React from "react";
import MainNav from "../organisms/Buttons/MainNav";
import MainWineCon from "../organisms/Containers/MainWineCon";
import MainWineTagCon from "../organisms/Containers/MainWineTagCon";
import MainSearchBar from "../organisms/Inputs/MainSearchBar";

const Main: React.FC = () => {
  return (
    <div>
      <MainNav />
      <div className="mainContainers">
        <MainWineCon />
        <MainWineTagCon />
      </div>
    </div>
  );
};

export default Main;
