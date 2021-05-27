import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

if (!localStorage.getItem("userTag")) {
  localStorage.setItem("userTag", JSON.stringify([]));
}
const tags: any = localStorage.getItem("userTag");

const MainBodyTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);
  const [userMainTag, setUserMainTag] = useState(JSON.parse(tags));
  const handleBodyTagClick = (body: string) => {
    switch (body) {
      case "가벼운":
        setLow(!low);
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== "body_light") {
            setUserMainTag([...userMainTag, "body_light"]);
          } else if (userMainTag[i] === "body_light") {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== "body_light")
            );
          }
        }
        postTags();
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
  // const saveTags = useCallback(() => {
  //   localStorage.setItem("userTag", JSON.stringify(userMainTag));
  //   postTags();
  // }, [userMainTag]);
  const postTags = useCallback(() => {
    console.log(userMainTag);

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
  }, [userMainTag]);

  //* 설문에서 받아온 기본 태그를 메인에 띄워줌
  useEffect(() => {
    switch (userMainTag[0]) {
      case "body_light":
        handleBodyTagClick("가벼운");
        break;
      case "body_medium":
        handleBodyTagClick("적당한");
        break;
      case "body_bold":
        handleBodyTagClick("무거운");
        break;
      default:
        break;
    }
  }, []);
  return (
    <div className="mainWineBodyBox">
      <span className="toolTip">
        바디.
        <span className="toolTipText">
          와인에서 말하는 바디란 와인을 마실 때 입안에서 느껴지는 무게감을
          뜻합니다.
        </span>
      </span>
      <div className="mainWineTags">
        <div
          className={low ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={() => handleBodyTagClick("가벼운")}
        >
          가벼운
        </div>
        <div
          className={mid ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={() => handleBodyTagClick("적당한")}
        >
          적당한
        </div>
        <div
          className={high ? `mainWineTypeTag active` : `mainWineTypeTag`}
          onClick={() => handleBodyTagClick("무거운")}
        >
          무거운
        </div>
      </div>
    </div>
  );
};

export default MainBodyTag;
