import React, { useState } from "react";
import photo from "../../../img/whywine_redWine_sample.png";

import ClickWine from "../../atoms/Imgs/ClickWine";

import Rating from "../Ratings/Rating";

interface wineData {
  // name: string;
  // photo: HTMLImageElement; //? 그냥 사진을 바로 불러와도 되려나
  // like: number;
  // tag: any;
  // onClick: () => void;
}

const MainWineSearchCard: React.FC<wineData> = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleIsClicked = () => {
    setIsClicked(true);
  };

  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  return (
    <li className="mainWineSearchCard" onClick={handleIsClicked}>
      {/* <Rating /> */}
      <div className="mainWineSearchProfile">
        <img src={photo} alt="와인" />
      </div>

      <div className="mainWineSearchData">
        <div className="mainWineSearchContent">
          <h2>Lupi Rezerva</h2>
          <span>2016</span>
        </div>
        {/* <div className="mainWineLikeTagBox">
          <div className="mainWineTag">#레드 #씁쓸한 #인기있는</div>
        </div> */}
        <ClickWine isClicked={isClicked} />
      </div>
      <div className="wineReviewModal"></div>
    </li>
  );
};

export default MainWineSearchCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
