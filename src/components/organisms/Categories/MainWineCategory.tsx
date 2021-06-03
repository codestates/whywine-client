import React, { useState, useEffect } from "react";
import MainWineCard from "../Cards/MainWineCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../../atoms/Imgs/Loading";

interface WineData {
  randomWine: object[];
}
const MainWineCategory = ({ randomWine }: WineData) => {
  // let wineData = [
  //   <MainWineCard randomWine={randomWine[0]} />,
  //   <MainWineCard randomWine={randomWine[1]} />,
  //   <MainWineCard randomWine={randomWine[2]} />,
  // ];

  const [isTagArr, setIsTagArr] = useState(true);

  const tags: any = sessionStorage.getItem("userTag");
  if (!tags) {
    setIsTagArr(false);
  }

  // TODO Loading에 이미지 파일 주기
  return (
    <div>
      {isTagArr ? (
        <div className="mainWineCategory">
          {/* <div style={{ width: "240px" }}></div> */}
          <ul className="mainWineCardBox">
            {[1, 2, 3].map((data, index) => {
              return (
                <MainWineCard randomWine={randomWine[index]} key={index} />
              );
            })}
          </ul>
        </div>
      ) : (
        <div>추천와인이 없습니다 </div>
      )}
    </div>
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
