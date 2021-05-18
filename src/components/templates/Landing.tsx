import * as React from "react";
import logo from "../../img/로고.png";
import illustration from "../../img/랜딩페이지 일러스트.png";
import SurveyModal from "../organisms/surveyModal";

function Landing() {
  const [isOpen, setIsipen] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsipen(true);
    }, 3000);
  }, []);

  return (
    <div className="langdingImg">
      <img src={logo}></img>
      <img src={illustration}></img>
      <SurveyModal isOpen={isOpen} />
    </div>
  );
}
export default Landing;
