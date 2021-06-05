import React, { useReducer, useState } from "react";

interface Tags {
  userTypeTag: string[];
  setTypeTag: React.Dispatch<React.SetStateAction<string[]>>;
}
const MainTypeTag = ({ userTypeTag, setTypeTag }: Tags) => {
  const [red, setRed] = useState(false);
  const [white, setWhite] = useState(false);
  const [rose, setRose] = useState(false);
  const [sparkling, setSparkling] = useState(false);
  const handleTypeTagClick = (e: any) => {
    sessionStorage.setItem("selectTags", "true");
    switch (e.target.textContent) {
      case "레드":
        setRed(!red);
        if (userTypeTag.length === 0) {
          setTypeTag([...userTypeTag, "red"]);
        }
        for (let i = 0; i < userTypeTag.length; i++) {
          if (userTypeTag[i] !== "red") {
            setTypeTag([...userTypeTag, "red"]);
          } else if (userTypeTag[i] === "red") {
            setTypeTag(userTypeTag.filter((tag: string) => tag !== "red"));
          }
        }
        break;
      case "화이트":
        setWhite(!white);
        if (userTypeTag.length === 0) {
          setTypeTag([...userTypeTag, "white"]);
        }
        for (let i = 0; i < userTypeTag.length; i++) {
          if (userTypeTag[i] !== "white") {
            setTypeTag([...userTypeTag, "white"]);
          } else if (userTypeTag[i] === "white") {
            setTypeTag(userTypeTag.filter((tag: string) => tag !== "white"));
          }
        }
        break;
      case "로제":
        setRose(!rose);
        if (userTypeTag.length === 0) {
          setTypeTag([...userTypeTag, "rose"]);
        }
        for (let i = 0; i < userTypeTag.length; i++) {
          if (userTypeTag[i] !== "rose") {
            setTypeTag([...userTypeTag, "rose"]);
          } else if (userTypeTag[i] === "rose") {
            setTypeTag(userTypeTag.filter((tag: string) => tag !== "rose"));
          }
        }
        break;
      case "스파클링":
        setSparkling(!sparkling);
        if (userTypeTag.length === 0) {
          setTypeTag([...userTypeTag, "sparkling"]);
        }
        for (let i = 0; i < userTypeTag.length; i++) {
          if (userTypeTag[i] !== "sparkling") {
            setTypeTag([...userTypeTag, "sparkling"]);
          } else if (userTypeTag[i] === "sparkling") {
            setTypeTag(
              userTypeTag.filter((tag: string) => tag !== "sparkling")
            );
          }
        }
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
        <div className="redWhite">
          <div
            className={red ? `mainWineTypeTag active` : `mainWineTypeTag`}
            onClick={handleTypeTagClick}
          >
            레드
          </div>
          <div
            className={white ? `mainWineTypeTag active` : `mainWineTypeTag`}
            onClick={handleTypeTagClick}
          >
            화이트
          </div>
        </div>

        <div className="roseSparkling">
          <div
            className={rose ? `mainWineTypeTag active` : `mainWineTypeTag`}
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
    </div>
  );
};

export default MainTypeTag;
