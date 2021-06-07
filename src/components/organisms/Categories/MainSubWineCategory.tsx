import React, { useState, useEffect } from "react";
import MainWineCard from "../Cards/MainWineCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../../atoms/Icons/Loading";
import { useHistory } from "react-router-dom";
import MainEmptyCon from "../Containers/MainEmptyCon";
import MainSubWineCard from "../Cards/MainSubWineCard";
import mainBottom from "../../../img/main_bottom.jpg";
interface WineData {
  subWine: any;
}
let tags: any = sessionStorage.getItem("userTag");
tags = JSON.parse(tags);

const MainSubWineCategory = ({ subWine }: WineData) => {
  const history = useHistory();
  const [isTagArr, setIsTagArr] = useState(true);

  // const handleIsTagArr = () => {
  //   setIsTagArr(true);
  //   history.push("/survey");
  //   window.location.reload();
  // };

  // TODO Loading에 이미지 파일 주기
  return (
    <div>
      <div className="mainSubCategory">
        {/* {Object.keys(subWine).includes("2") ? ( */}
        <div className="mainSubCategoryName">
          <h2>
            이런 와인은 <span>어떠세요?</span>
          </h2>
          <p>
            추천 와인이 마음에 들지 않으신다면 여기서 원하는 와인을 찾아보세요.
          </p>
        </div>
        {/* // ) : null} */}

        <ul className="mainSubWineBox">
          {subWine[4]
            ? Object.keys(subWine).length === 0
              ? null
              : subWine[4].map((wine: any, idx: number) => {
                  return <MainSubWineCard subWine={wine} key={idx} />;
                })
            : null}
          {subWine[3]
            ? Object.keys(subWine).length === 0
              ? null
              : subWine[3].map((wine: any, idx: number) => {
                  return <MainSubWineCard subWine={wine} key={idx} />;
                })
            : null}
          {subWine[2]
            ? Object.keys(subWine).length === 0
              ? null
              : subWine[2].map((wine: any, idx: number) => {
                  return <MainSubWineCard subWine={wine} key={idx} />;
                })
            : null}
          {subWine[1]
            ? Object.keys(subWine).length === 0
              ? null
              : subWine[1].map((wine: any, idx: number) => {
                  return <MainSubWineCard subWine={wine} key={idx} />;
                })
            : null}
        </ul>
      </div>
      {/* <div className="mainSubCategory">
        <div className="mainCategoryName">
          <h2>
            당신을 위한 <span>최악의 와인</span>
          </h2>
          <p>
            방금 고르신 태그와 맞지 않은 와인입니다. 다른 와인을 찾아보세요!
          </p>
        </div>
        <ul className="mainSubWineBox">
          {subWine[1]
            ? Object.keys(subWine).length === 0
              ? null
              : subWine[1].map((wine: any) => {
                  return <MainSubWineCard subWine={wine} />;
                })
            : null}
        </ul>
      </div> */}
    </div>
  );
};
export default MainSubWineCategory;
