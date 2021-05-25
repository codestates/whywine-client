import React, { SetStateAction, useState, useEffect, useCallback } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../atoms/Tags/surTypeTag";
import SurBtns from "../../organisms/Buttons/surBtns";

interface Props {
  animatedItem: any;
  userTag: string[];
  setUserTag: React.Dispatch<SetStateAction<string[]>>;
}

const Survey1 = ({ animatedItem, userTag, setUserTag }: Props) => {
  const answer: string[] = [];
  const [tag, setTag] = useState("");

  const body: any = {
    bold: "오늘은 쫌 취하고 싶은데?",
    medium: "와인은 분위기로 마시는거지",
    light: "내일 출근해야되는데...",
    "": "잘모르겠어요",
  };

  const getTag = useCallback(
    (tag: string) => {
      setTag(tag);
    },
    [tag]
  );

  useEffect(() => {
    console.log("1", tag);
    let target = "";

    Object.keys(body).map((el) => {
      if (body[el] === tag) {
        target = el;
      }
    });

    return setUserTag([target]);
  }, [tag]);

  Object.keys(body).map((el) => answer.push(body[el]));
  // * 질문 객체의 키 값을 answer에 넣어줘서 SurTypeTags의 배열로 전달해서 질문을 maping 시킴

  return (
    <div id="survey1" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 바디감을 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={"오랜만에 친구들과 술을 마시기로했다."}
        text2={"맨날 마시는 소주,맥주 말고 와인을 마셔보자 하는데..."}
      />
      <SurTypeTags num={1} answer={answer} getTag={getTag} />
    </div>
  );
};

export default Survey1;

// TODO: surNext와 surPrev 상태를 적절하게 주어 설문조사 페이지를 왔다 갔다 할 수 있게 해준다
