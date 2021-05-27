import React, { useState } from "react";

const MainTanninTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);

  const handleTanninTagClick = (e: any) => {
    switch (e.target.textContent) {
      case "부드러운":
        setLow(!low);

        break;
      case "적당한":
        setMid(!mid);

        break;
      case "떫은":
        setHigh(!high);

        break;

      default:
        break;
    }
  };
  return (
    <div className="mainWineTanninBox">
      <span className="toolTip">
        탄닌.
        <span className="toolTipText">
          와인에서 말하는 바디란 와인을 마실 때 입안에서 느껴지는 무게감을
          뜻합니다.
        </span>
      </span>
      <div className="mainWineTags">
        <div
          className={low ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleTanninTagClick}
        >
          부드러운
        </div>
        <div
          className={mid ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleTanninTagClick}
        >
          적당한
        </div>
        <div
          className={high ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={handleTanninTagClick}
        >
          떫은
        </div>
      </div>
    </div>
  );
};

export default MainTanninTag;
