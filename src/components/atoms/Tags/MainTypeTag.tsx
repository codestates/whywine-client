import React, { useReducer, useState } from "react";

interface TypeTag {
  wineType: Array<string>;
}

const MainTypeTag: React.FC<TypeTag> = ({ wineType }) => {
  const [red, setRed] = useState(false);
  const [white, setWhite] = useState(false);
  const [rose, setRose] = useState(false);
  const [sparkling, setSparkling] = useState(false);

  const handleTypeTagClick = (e: any) => {
    switch (e.target.textContent) {
      case "레드":
        setRed(!red);
        break;
      case "화이트":
        setWhite(!white);
        break;
      case "로제":
        setRose(!rose);
        break;
      case "스파클링":
        setSparkling(!sparkling);
        break;

      default:
        break;
    }
  };
  return (
    <div className="mainWineTypeBox">
      <span className="toolTip">
        와인 타입
        <div style={{ fontSize: "12px" }}>*중복 선택 가능</div>
      </span>
      <div className="mainWineTypeTags">
        <div
          className={red ? `mainWineTypeTag active` : `mainWineTypeTag`}
          style={{ marginRight: "5px" }}
          onClick={handleTypeTagClick}
        >
          레드
        </div>
        <div
          className={white ? `mainWineTypeTag active` : `mainWineTypeTag`}
          style={{ marginRight: "5px" }}
          onClick={handleTypeTagClick}
        >
          화이트
        </div>
        <div
          className={rose ? `mainWineTypeTag active` : `mainWineTypeTag`}
          style={{ marginRight: "5px" }}
          onClick={handleTypeTagClick}
        >
          로제
        </div>
        <div
          className={sparkling ? `mainWineTypeTag active` : `mainWineTypeTag`}
          style={{ marginRight: "5px" }}
          onClick={handleTypeTagClick}
        >
          스파클링
        </div>
      </div>
    </div>
  );
};

export default MainTypeTag;
