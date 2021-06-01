import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
let tags: any;
if (!localStorage.getItem("userTag")) {
  localStorage.setItem("userTag", JSON.stringify([]));
  tags = localStorage.getItem("userTag");
}
tags = localStorage.getItem("userTag");

const MainTanninTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);
  const [userMainTag, setUserMainTag] = useState<string[]>(JSON.parse(tags));

  const handleTanninTagClick = (e: any) => {
    switch (e.target.textContent) {
      case "부드러운":
        setLow(!low);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, "body_light"]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== "body_light") {
            setUserMainTag([...userMainTag, "body_light"]);
          } else if (userMainTag[i] === "body_light") {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== "body_light")
            );
          }
        }
        break;
      case "적당한":
        setMid(!mid);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, "tannins_medium"]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== "tannins_medium") {
            setUserMainTag([...userMainTag, "tannins_medium"]);
          } else if (userMainTag[i] === "tannins_medium") {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== "tannins_medium")
            );
          }
        }
        break;
      case "떫은":
        setHigh(!high);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, "tannins_tannic"]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== "tannins_tannic") {
            setUserMainTag([...userMainTag, "tannins_tannic"]);
          } else if (userMainTag[i] === "tannins_tannic") {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== "tannins_tannic")
            );
          }
        }
        break;

      default:
        break;
    }
  };
  //* 태그 최신화
  useEffect(() => {
    postTags();
  }, [userMainTag]);
  //* 서버에 태그 요청
  const postTags = useCallback(() => {
    if (userMainTag.length !== 0) {
      axios
        .post(
          "https://localhost:4000/main/tags",
          { tags: userMainTag.filter((el: string) => el !== "") },
          // * (el: string) => el !== "") 빈문자열 제외하는 부분
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((data) => console.log(data));
    }
  }, [userMainTag]);
  //* 설문에서 받아온 기본 태그를 메인에 띄워줌
  useEffect(() => {
    switch (userMainTag[0]) {
      case "tannins_smooth":
        handleTanninTagClick("부드러운");
        break;
      case "tannins_medium":
        handleTanninTagClick("적당한");
        break;
      case "tannins_tannic":
        handleTanninTagClick("떫은");
        break;
      default:
        break;
    }
  }, []);
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
