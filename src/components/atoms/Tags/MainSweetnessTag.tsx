import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import dotenv from "dotenv";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER;

let tags: any;
if (!localStorage.getItem("userTag")) {
  localStorage.setItem("userTag", JSON.stringify([]));
  tags = localStorage.getItem("userTag");
}
tags = localStorage.getItem("userTag");
const MainSweetnessTag = () => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);
  const [userMainTag, setUserMainTag] = useState<string[]>(JSON.parse(tags));
  const handleSweetnessTagClick = (sweetness: string) => {
    switch (sweetness) {
      case "씁쓸한":
        setLow(!low);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, "sweetness_dry"]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== "sweetness_dry") {
            setUserMainTag([...userMainTag, "sweetness_dry"]);
          } else if (userMainTag[i] === "sweetness_dry") {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== "sweetness_dry")
            );
          }
        }
        break;
      case "적당한":
        setMid(!mid);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, "sweetness_medium"]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== "sweetness_medium") {
            setUserMainTag([...userMainTag, "sweetness_medium"]);
          } else if (userMainTag[i] === "sweetness_medium") {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== "sweetness_medium")
            );
          }
        }
        break;
      case "달달한":
        setHigh(!high);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, "sweetness_sweet"]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== "sweetness_sweet") {
            setUserMainTag([...userMainTag, "sweetness_sweet"]);
          } else if (userMainTag[i] === "sweetness_sweet") {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== "sweetness_sweet")
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
          `${server}/main/tags`,
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
