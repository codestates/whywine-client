import React, { useState, useEffect } from "react";

const MainSweetnessTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);
  let tags: any = localStorage.getItem("userTag");
  let userMainTag = JSON.parse(tags);
  const handleSweetnessTagClick = (sweetness: string) => {
    switch (sweetness) {
      case "씁쓸한":
        setLow(!low);

        break;
      case "적당한":
        setMid(!mid);

        break;
      case "달달한":
        setHigh(!high);

        break;

      default:
        break;
    }
  };
  useEffect(() => {
    switch (userMainTag[3]) {
      case "sweetness_dry":
        handleSweetnessTagClick("씁쓸한");
        break;
      case "sweetness_medium":
        handleSweetnessTagClick("적당한");
        break;
      case "sweetness_sweet":
        handleSweetnessTagClick("달달한");
        break;
      default:
        break;
    }
  }, []);
  return (
    <div className="mainWineSweetnessBox">
      <span className="toolTip">
        당도.
        <span className="toolTipText">
          와인에서 말하는 바디란 와인을 마실 때 입안에서 느껴지는 무게감을
          뜻합니다.
        </span>
      </span>
      <div className="mainWineTags">
        <div
          className={low ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={() => handleSweetnessTagClick("씁쓸한")}
        >
          씁쓸한
        </div>
        <div
          className={mid ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={() => handleSweetnessTagClick("적당한")}
        >
          적당한
        </div>
        <div
          className={high ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={() => handleSweetnessTagClick("달달한")}
        >
          달달한
        </div>
      </div>
    </div>
  );
};

export default MainSweetnessTag;
