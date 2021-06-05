import React, { useState, useEffect } from "react";
import MainWineCard from "../Cards/MainWineCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../../atoms/Icons/Loading";
import { useHistory } from "react-router-dom";

interface WineData {
  randomWine: object[];
  handleLoading: (time: number | undefined) => void;
}
const MainWineCategory = ({ randomWine, handleLoading }: WineData) => {
  // let wineData = [
  //   <MainWineCard randomWine={randomWine[0]} />,
  //   <MainWineCard randomWine={randomWine[1]} />,
  //   <MainWineCard randomWine={randomWine[2]} />,
  // ];
  const history = useHistory();
  const [isTagArr, setIsTagArr] = useState(true);

  // let tags: any = sessionStorage.getItem("userTag");
  // console.log("이전: ", tags);
  // tags = JSON.parse(tags);
  // console.log("들어와 ???", tags);

  useEffect(() => {
    if (sessionStorage.getItem("userTag")) {
      let tags: any = sessionStorage.getItem("userTag");
      tags = JSON.parse(tags);
      setIsTagArr(false);
      if (tags.length === 5) {
        setIsTagArr(true);
      }
      if (sessionStorage.getItem("selectTags")) {
        setIsTagArr(true);
      }
    }
  });

  const handleIsTagArr = () => {
    setIsTagArr(true);
    history.push("/survey");
    window.location.reload();
  };
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  // TODO Loading에 이미지 파일 주기
  return (
    <div>
      {isTagArr ? (
        <div className="mainWineCategory">
          {/* <div style={{ width: "240px" }}></div> */}
          <ul className="mainWineCardBox">
            {[1, 2, 3].map((data, index) => {
              return (
                <MainWineCard
                  handleLoading={handleLoading}
                  randomWine={randomWine[index]}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <div
          onClick={() => handleIsTagArr()}
          className="guestNoSurvey"
          style={{ opacity: isTagArr ? "0" : "1" }}
        >
          추천와인이 없습니다.
          <div>나에게 맞는 와인 찾으러 가기</div>
        </div>
      )}
    </div>
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
