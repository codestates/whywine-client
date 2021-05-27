import React, { useState } from "react";

const MainBodyTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);

  const handleBodyTagClick = (e: any) => {
    switch (e.target.textContent) {
      case "가벼운":
        setLow(!low);
        break;
      case "적당한":
        setMid(!mid);

        break;
      case "무거운":
        setHigh(!high);

        break;

      default:
        break;
    }
  };
  return (
    <div className="mainWineBodyBox">
      <span className="toolTip">
        바디.
        <span className="toolTipText">
          와인에서 말하는 바디란 와인을 마실 때 입안에서 느껴지는 무게감을
          뜻합니다.
        </span>
      </span>
      <div className="mainWineTypeTags">
        <div
          className={low ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleBodyTagClick}
        >
          가벼운
        </div>
        <div
          className={mid ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleBodyTagClick}
        >
          적당한
        </div>
        <div
          className={high ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleBodyTagClick}
        >
          무거운
        </div>
      </div>
    </div>
  );
};

export default MainBodyTag;
