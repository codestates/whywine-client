import { MouseEventHandler, useState } from "react";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";
import SurveyModal from "../../organisms/Modal/surveyModal";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import { Animated } from "react-animated-css";

interface Props {
  openSurveyModal?: MouseEventHandler<HTMLElement>;
}

function FirstPage(props: Props) {
  const animatedItem = UseScrollFadeIn("down", 1, 0.5);
  const [openSurvey, setOpenSurvey] = useState<boolean>(false);

  function openSurveyModal() {
    setOpenSurvey(true);
  }

  return (
    <div className="firstPageCon">
      <div className="FirstPage_Summery">
        <p {...animatedItem}>와인을 처음 시작하는 당신을 위해</p>
        <h1>Best Wine For You.</h1>
      </div>
      <Animated
        animationIn="fadeInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <SurveyModal isOpen={openSurvey} />
      </Animated>

      <div className="FirstPage_route">
        <div
          className="FirstPage_InputSurvey"
          onClick={() => openSurveyModal()}
        >
          <div>내 취향 와인 찾으러가기</div>
          <i className="fas fa-arrow-alt-circle-right"></i>
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
