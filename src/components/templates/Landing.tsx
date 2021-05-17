import * as React from "react";
import logo from "../../img/로고.png";
import illustration from "../../img/랜딩페이지 일러스트.png";

const Landing: React.FC = () => {
  return (
    <div className="langdingImg">
      <img src={logo}></img>
      <img src={illustration}></img>
    </div>
  );
};

export default Landing;
