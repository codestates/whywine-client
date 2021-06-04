import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

interface TagTypes {
  tagTitle: string;
  degreeKOR: string[];
  degreeENG: string[];
  tags: string;
  userTags: string;
  userMainTag: string[];
  setUserMainTag: React.Dispatch<React.SetStateAction<string[]>>;
  wineFlavor: string;
}

const MainTags = ({
  tagTitle,
  degreeENG,
  degreeKOR,
  tags,
  userTags,
  userMainTag,
  setUserMainTag,
  wineFlavor,
}: TagTypes) => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);
  const degreeArr: (string | boolean)[][] = [
    [low, degreeKOR[0]],
    [mid, degreeKOR[1]],
    [high, degreeKOR[2]],
  ];
  const handleTagClick = (degree: string | boolean) => {
    sessionStorage.setItem("selectTags", "true");
    switch (degree) {
      case degreeKOR[0]:
        setLow(!low);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, degreeENG[0]]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== degreeENG[0]) {
            setUserMainTag([...userMainTag, degreeENG[0]]);
          } else if (userMainTag[i] === degreeENG[0]) {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== degreeENG[0])
            );
          }
        }
        break;
      case degreeKOR[1]:
        setMid(!mid);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, degreeENG[1]]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== degreeENG[1]) {
            setUserMainTag([...userMainTag, degreeENG[1]]);
          } else if (userMainTag[i] === degreeENG[1]) {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== degreeENG[1])
            );
          }
        }
        break;
      case degreeKOR[2]:
        setHigh(!high);
        if (userMainTag.length === 0) {
          setUserMainTag([...userMainTag, degreeENG[2]]);
        }
        for (let i = 0; i < userMainTag.length; i++) {
          if (userMainTag[i] !== degreeENG[2]) {
            setUserMainTag([...userMainTag, degreeENG[2]]);
          } else if (userMainTag[i] === degreeENG[2]) {
            setUserMainTag(
              userMainTag.filter((tag: string) => tag !== degreeENG[2])
            );
          }
        }
        break;

      default:
        break;
    }
  };

  //* 설문에서 받아온 기본 태그를 메인에 띄워줌
  //! 중복된 태그가 배열에 들어감 마지막 당도만
  useEffect(() => {
    switch (userTags) {
      case degreeENG[0]:
        handleTagClick(degreeKOR[0]);
        break;
      case degreeENG[1]:
        handleTagClick(degreeKOR[1]);
        break;
      case degreeENG[2]:
        handleTagClick(degreeKOR[2]);
        break;
      default:
        break;
    }
  }, []);
  return (
    <div className="mainWineTagBox">
      <span className="toolTip">
        {tagTitle}
        <span className="toolTipText">{wineFlavor}</span>
      </span>

      <div className="mainWineTags">
        {degreeArr.map((degree: (string | boolean)[], idx) => {
          return (
            <div
              className={
                degree[0] ? `mainWineTypeTag active` : `mainWineTypeTag`
              }
              onClick={() => {
                handleTagClick(degree[1]);
              }}
              key={idx}
            >
              {degree[1]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainTags;
