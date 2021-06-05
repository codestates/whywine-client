import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

let surveyTags: any;
if (!sessionStorage.getItem("userTag")) {
  sessionStorage.setItem("userTag", JSON.stringify([]));
  surveyTags = sessionStorage.getItem("userTag");
}
surveyTags = sessionStorage.getItem("userTag");

interface TagTypes {
  tagTitle: string;
  degreeKOR: string[];
  degreeENG: string[];
  tags: string;
  userTags: string;
  userMainTag: string[];
  handleSetUserTag: (userTag: string[]) => void;
  wineFlavor: string;
}

const MainTags = ({
  tagTitle,
  degreeENG,
  degreeKOR,
  tags,
  userTags,
  userMainTag,
  handleSetUserTag,
  wineFlavor,
}: TagTypes) => {
  const [high, setHigh] = useState(false);
  const [mid, setMid] = useState(false);
  const [low, setLow] = useState(false);
  const degreeArr: (string | boolean)[][] = [
    [low, degreeKOR[0], degreeENG[0]],
    [mid, degreeKOR[1], degreeENG[1]],
    [high, degreeKOR[2], degreeENG[2]],
  ];
  //* 메인페이지에서 태그를 누르면 userMainTag를 업데이트 시켜주는 함수
  //! 배열은 참조값이기 때문에 if문이 제대로 먹지 않음
  const handleTagClick = (degree: string | boolean) => {
    sessionStorage.setItem("selectTags", "true");
    switch (degree) {
      case degreeKOR[0]:
        setLow(!low);
        if (userMainTag.length === 0) {
          handleSetUserTag([...userMainTag, degreeENG[0]]);
          // setUserMainTag([...userMainTag, degreeENG[0]]);
        }
        userMainTag.map((tag: string) => {
          if (tag !== degreeENG[0]) {
            handleSetUserTag([...userMainTag, degreeENG[0]]);
          } else if (tag === degreeENG[0]) {
            handleSetUserTag(
              userMainTag.filter((tag: string) => tag !== degreeENG[0])
            );
          }
        });
        // for (let i = 0; i < userMainTag.length; i++) {
        //   if (userMainTag[i] !== degreeENG[0]) {
        //     handleSetUserTag([...userMainTag, degreeENG[0]]);

        //     // setUserMainTag([...userMainTag, degreeENG[0]]);
        //   } else if (userMainTag[i] === degreeENG[0]) {
        //     handleSetUserTag(
        //       userMainTag.filter((tag: string) => tag !== degreeENG[0])
        //     );

        //     // setUserMainTag(
        //     //   userMainTag.filter((tag: string) => tag !== degreeENG[0])
        //     // );
        //   }
        // }
        break;
      case degreeKOR[1]:
        setMid(!mid);
        if (userMainTag.length === 0) {
          handleSetUserTag([...userMainTag, degreeENG[1]]);

          // setUserMainTag([...userMainTag, degreeENG[1]]);
        }
        userMainTag.map((tag: string) => {
          if (tag !== degreeENG[1]) {
            handleSetUserTag([...userMainTag, degreeENG[1]]);
          } else if (tag === degreeENG[1]) {
            handleSetUserTag(
              userMainTag.filter((tag: string) => tag !== degreeENG[1])
            );
          }
        });
        // for (let i = 0; i < userMainTag.length; i++) {
        //   if (userMainTag[i] !== degreeENG[1]) {
        //     handleSetUserTag([...userMainTag, degreeENG[1]]);

        //     // setUserMainTag([...userMainTag, degreeENG[1]]);
        //   } else if (userMainTag[i] === degreeENG[1]) {
        //     handleSetUserTag(
        //       userMainTag.filter((tag: string) => tag !== degreeENG[1])
        //     );

        //     // setUserMainTag(
        //     //   userMainTag.filter((tag: string) => tag !== degreeENG[1])
        //     // );
        //   }
        // }
        break;
      case degreeKOR[2]:
        setHigh(!high);
        if (userMainTag.length === 0) {
          handleSetUserTag([...userMainTag, degreeENG[2]]);
          // setUserMainTag([...userMainTag, degreeENG[2]]);
        }
        userMainTag.map((tag: string) => {
          if (tag !== degreeENG[2]) {
            console.log(2222222222222);

            handleSetUserTag([...userMainTag, degreeENG[2]]);
          } else if (tag === degreeENG[2]) {
            console.log(33333333333333);

            handleSetUserTag(
              userMainTag.filter((tag: string) => tag !== degreeENG[2])
            );
          }
          console.log(userMainTag);
        });

        // for (let i = 0; i < userMainTag.length; i++) {
        //   if (userMainTag[i] !== degreeENG[2]) {
        //     console.log(2222222222222);

        //     handleSetUserTag([...userMainTag, degreeENG[2]]);

        //     // setUserMainTag([...userMainTag, degreeENG[2]]);
        //   } else if (userMainTag[i] === degreeENG[2]) {
        //     console.log(333333333333);

        //     handleSetUserTag(
        //       userMainTag.filter((tag: string) => tag !== degreeENG[2])
        //     );

        // setUserMainTag(
        //   userMainTag.filter((tag: string) => tag !== degreeENG[2])
        // );
        //   }
        // }
        break;

      default:
        break;
    }
  };

  // console.log(userMainTag[0] === degreeENG[2]);

  // console.log(degreeENG[2]);
  //* 설문에서 받아온 기본 태그를 메인에 띄워줌
  //! handleTagClick이 실행되지만 태그 배열이 바뀌지 않음
  // const setSurveyTags = useCallback(() => {
  //   switch (userTags) {
  //     case degreeENG[0]:
  //       handleTagClick(degreeKOR[0]);
  //       break;
  //     case degreeENG[1]:
  //       handleTagClick(degreeKOR[1]);
  //       break;
  //     case degreeENG[2]:
  //       handleTagClick(degreeKOR[2]);
  //       break;
  //     default:
  //       break;
  //   }
  // }, []);
  // useEffect(() => {
  //   setSurveyTags();
  // }, []);
  //! 처음 상태를 바꾸지 못하는 오류를 해결하기 위해 클래스 하나를 더 만들어  입히는 방식으로 해결

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
                degree[0]
                  ? `mainWineTypeTag active`
                  : degree[2] === userMainTag[0]
                  ? "mainWineTypeTag diagonal"
                  : degree[2] === userMainTag[1]
                  ? "mainWineTypeTag diagonal"
                  : degree[2] === userMainTag[2]
                  ? "mainWineTypeTag diagonal"
                  : degree[2] === userMainTag[3]
                  ? "mainWineTypeTag diagonal"
                  : `mainWineTypeTag`
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
        {/* <div
          className={
            userMainTag[0] === "body_light"
              ? "mainWineTypeTag diagonal "
              : high
              ? `mainWineTypeTag active`
              : `mainWineTypeTag`
          }
          onClick={() => {
            handleTagClick(degreeKOR[0]);
          }}
        >
          {degreeKOR[0]}
        </div>
        <div
          className={
            userMainTag[0] === "body_medium"
              ? "mainWineTypeTag diagonal "
              : high
              ? `mainWineTypeTag active`
              : `mainWineTypeTag`
          }
          onClick={() => {
            handleTagClick(degreeKOR[1]);
          }}
        >
          {degreeKOR[1]}
        </div>
        <div
          className={
            userMainTag.map((tag) => {
              console.log(tag);
              if (tag === degreeENG[2]) {
                return true;
              }
            })
              ? "mainWineTypeTag diagonal "
              : high
              ? `mainWineTypeTag active`
              : `mainWineTypeTag`
          }
          onClick={() => {
            handleTagClick(degreeKOR[2]);
          }}
        >
          {degreeKOR[2]}
        </div> */}
      </div>
    </div>
  );
};

export default MainTags;
