import * as React from "react";
import { useHistory } from "react-router-dom";
import WineIcon from "../Icons/Wine";
import wine from "../../../img/wine_main2.png";
// import wine from "../../../img/wine_styles.png";

// interface Props {
//   goBack: () => void;
// }

function Title(params: any) {
  const history = useHistory();

  return (
    <div className="title">
      <h4 onClick={() => window.location.replace("/main")}>
        whywine&nbsp;
        {/* <WineIcon /> */}
      </h4>
      <img src={wine} />
    </div>
  );
}

export default Title;
