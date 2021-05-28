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
}

const MainTags = ({
  tagTitle,
  degreeENG,
  degreeKOR,
  tags,
  userTags,
  userMainTag,
  setUserMainTag,
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

  //   //* 태그 최신화
  //   useEffect(() => {
  //     postTags();
  //   }, [userMainTag]);

  //* 서버에 태그 요청
  //   const postTags = useCallback(() => {
  //     if (userMainTag.length !== 0) {
  //       axios
  //         .post(
  //           "https://localhost:4000/main/tags",
  //           { tags: userMainTag.filter((el: string) => el !== "") },
  //           // * (el: string) => el !== "") 빈문자열 제외하는 부분
  //           {
  //             headers: { "Content-Type": "application/json" },
  //             withCredentials: true,
  //           }
  //         )
  //         .then((data) => console.log(data.data.data.wines.sorted));
  //     }
  //   }, [userMainTag]);
  //* 설문에서 받아온 기본 태그를 메인에 띄워줌
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
        <span className="toolTipText">
          와인에서 말하는 바디란 와인을 마실 때 입안에서 느껴지는 무게감을
          뜻합니다.
        </span>
      </span>

      <div className="mainWineTags">
        {degreeArr.map((degree: (string | boolean)[]) => {
          return (
            <div
              className={
                degree[0] ? `mainWineTypeTag active` : `mainWineTypeTag`
              }
              onClick={() => {
                handleTagClick(degree[1]);
              }}
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
