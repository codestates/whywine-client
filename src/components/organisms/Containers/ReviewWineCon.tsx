import React from "react";
import photo from "../../../img/whywine_redWine_sample.png";

const ReviewWineCon = () => {
  return (
    <div className="reviewWineCon">
      <div className="reviewWineImg">
        <img style={{ height: "500px" }} src={photo} alt="와인 사진" />
      </div>
      <div className="reviewWineBox">
        <div className="wineTags">와인태그</div>
        <div className="wineDescription">와인설명</div>
      </div>
    </div>
  );
};

export default ReviewWineCon;
