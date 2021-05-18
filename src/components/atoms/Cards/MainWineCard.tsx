import React from "react";
import photo from "../../../img/whywine_redWine_sample.png";

interface wineData {
  name: string;
  photo: HTMLImageElement; //? 그냥 사진을 바로 불러와도 되려나
  like: number;
}

const MainWineCard = () => {
  return (
    <div>
      <div className="mainWineCard">
        <img src={photo} alt="와인" className="mainWinePhoto" />
        <div className="mainWineData">
          <div className="mainWineNameBox">
            <div className="mainWineName">Lupi Rezerva</div>
            <div className="mainWineYear">2016</div>
          </div>

          <div className="mainWineLikeTagBox">
            <div className="mainWineLike">좋아요: 100</div>
            <div className="mainWineTag">#레드#씁쓸한#인기있는</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWineCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
