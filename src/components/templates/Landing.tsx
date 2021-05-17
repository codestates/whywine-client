import * as React from "react";
import logo from "../../img/로고.png";
import illustration from "../../img/랜딩페이지 일러스트.png";
import Survey from "../organisms/surveyModal";

const Landing: React.FC = () => {
  return (
    <div className="langdingImg">
      <img src={logo}></img>
      <img src={illustration}></img>
      <Survey />
    </div>
  );
};
export default Landing;
