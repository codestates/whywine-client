import { MouseEventHandler, useState } from "react";
import { useHistory } from "react-router-dom";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";
import SurveyModal from "../../organisms/Modal/surveyModal";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";

interface Props {
  openSurveyModal?: MouseEventHandler<HTMLElement>;
}

function FirstPage(props: Props) {
  const history = useHistory();
  const animatedItem = UseScrollFadeIn("up", 2, 1);
  const [openSurvey, setOpenSurvey] = useState<boolean>(false);

  function openSurveyModal() {
    setOpenSurvey(true);
  }

  return (
    <div className="firstPageCon">
      <div className="FirstPage_Summery">
        <h1>Best Wine</h1>
        <h1>For You.</h1>
        <p {...animatedItem}>와인을 처음 시작하는 당신을 위해</p>
      </div>
      <SurveyModal isOpen={openSurvey} />

      <div className="FirstPage_route">
        <div className="FirstPage_InputSurvey">
          <div>설문하기</div>
          <i
            className="fas fa-arrow-alt-circle-right"
            onClick={() => openSurveyModal()}
          ></i>
        </div>
        <div className="FirstPage_GoTomain">
          <GoToMainBtn />
        </div>
      </div>

      <div className="scroll-down">
        <div>
          <i className="fas fa-angle-down animated bounce"></i>
        </div>
        <p>SCROLL DOWN</p>
      </div>
    </div>
  );
}

export default FirstPage;
