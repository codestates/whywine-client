import React, { SetStateAction, useState } from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../atoms/Tags/surTypeTag";
import SurBtns from "../../organisms/Buttons/surBtns";
import { useCallback } from "react";
import { useEffect } from "react";

interface Props {
  animatedItem: any;
  userTag: string[];
  setUserTag: React.Dispatch<SetStateAction<string[]>>;
}

const Survey4 = ({ animatedItem, userTag, setUserTag }: Props) => {
  const answer: string[] = [];
  const [tag, setTag] = useState("");

  const sweetness: any = {
    sweet: "달달",
    medium: "담백",
    dry: "씁쓸",
    "": "잘모르겠어요",
  };

  const getTag = useCallback(
    (tag: string) => {
      setTag(tag);
    },
    [tag]
  );

  useEffect(() => {
    console.log("4", tag);
    let target = "";
    Object.keys(sweetness).map((el) => {
      if (sweetness[el] === tag) {
        target = el;
      }
    });
    return setUserTag([...userTag, target]);
  }, [tag]);

  Object.keys(sweetness).map((el) => answer.push(sweetness[el]));
  // * 질문 객체의 키 값을 answer에 넣어줘서 SurTypeTags의 배열로 전달해서 질문을 maping 시킴

  return (
    <div id="survey4" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 탄산를 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={
          "황금 같은 주말이 다가왔다./n친구들과 집에서 와인파티를 하기로 했다."
        }
        text2={"어떤 와인을 마시겠습니까?"}
      />
      <SurTypeTags num={4} answer={answer} getTag={getTag} />
    </div>
  );
};

export default Survey4;
