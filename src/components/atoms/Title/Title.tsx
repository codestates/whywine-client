import * as React from "react";
import { useHistory } from "react-router-dom";

interface Props {}

function Title(params: any) {
  const history = useHistory();

  return (
    <div className="title" onClick={() => history.push("/main")}>
      whywine
    </div>
  );
}

export default Title;
