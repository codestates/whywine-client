import React from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurColorTags from "../../organisms/Tags/surTypeTags";
import SurBtns from "../../organisms/Buttons/surBtns";

const SurveyFirstQ: React.FC = () => {
  return (
    <div>
      <div className="surFirstBox">
        <SurMainText />
        <SurColorTags />
        <SurBtns />
      </div>
    </div>
  );
};

export default SurveyFirstQ;
