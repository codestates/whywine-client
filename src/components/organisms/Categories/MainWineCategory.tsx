import React, { useState, useEffect } from "react";
import MainWineCard from "../Cards/MainWineCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../../atoms/Icons/Loading";
import { useHistory } from "react-router-dom";
import MainEmptyCon from "../Containers/MainEmptyCon";
import MainWineSearchCard from "../Cards/MainWineSearchCard";
import ScrollDown from "../../atoms/Scroll/ScrollDown";

interface WineData {
  randomWine: object[];
  handleLoading: (time: number | undefined) => void;
}

const MainWineCategory = ({ randomWine, handleLoading }: WineData) => {
  // const history = useHistory();
  // const [isTagArr, setIsTagArr] = useState(true);

  // useEffect(() => {
  //   if (sessionStorage.getItem("userTag")) {
  //     let tags: any = sessionStorage.getItem("userTag");
  //     tags = JSON.parse(tags);
  //     setIsTagArr(false);
  //     if (tags.length === 4) {
  //       setIsTagArr(true);
  //     }
  //     if (sessionStorage.getItem("selectTags")) {
  //       setIsTagArr(true);
  //     }
  //   }
  // });

  // const handleIsTagArr = () => {
  //   setIsTagArr(true);
  //   history.push("/survey");
  //   window.location.reload();
  // };
  return (
    <div>
      {
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
      }
    </div>
  );
};
//className="mainWineCardBox"
export default MainWineCategory;
