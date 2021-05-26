import React, { useState } from "react";

const MainSweetnessTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);

  const handleSweetnessTagClick = (e: any) => {
    switch (e.target.textContent) {
      case "씁쓸한":
        setLow(!low);
        if (high === true) {
          setHigh(!high);
        } else if (mid === true) {
          setMid(!mid);
        }
        break;
      case "적당한":
        setMid(!mid);
        if (high === true) {
          setHigh(!high);
        } else if (low === true) {
          setLow(!low);
        }
        break;
      case "달달한":
        setHigh(!high);
        if (mid === true) {
          setMid(!mid);
        } else if (low === true) {
          setLow(!low);
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="mainWineSweetnessBox">
      <span className="toolTip">
        당도
        <span className="toolTipText">
          와인에서 말하는 바디란 와인을 마실 때 입안에서 느껴지는 무게감을
          뜻합니다.
        </span>
      </span>
      <div className="mainWineTypeTags">
        <div
          className={low ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleSweetnessTagClick}
        >
          씁쓸한
        </div>
        <div
          className={mid ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleSweetnessTagClick}
        >
          적당한
        </div>
        <div
          className={high ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleSweetnessTagClick}
        >
          달달한
        </div>
      </div>
    </div>
  );
};

export default MainSweetnessTag;
