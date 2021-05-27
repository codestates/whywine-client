import * as React from "react";
import GoToMainBtn from "../../atoms/Buttons/GoToMainBtn";
import GoToSurveyBtn from "../../atoms/Buttons/GoToSurveyBtn";

interface Props {
  ModalEl: any;
}

function WineModal({ ModalEl }: Props) {
  return <div ref={ModalEl}>모달</div>;
}

export default WineModal;
