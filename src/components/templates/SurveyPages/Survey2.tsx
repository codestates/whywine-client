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

export default function Survey2({ animatedItem, userTag, setUserTag }: Props) {
  const answer: string[] = [];
  const [tag, setTag] = useState("");

  const tannins: any = {
    tannic: "하 인생..",
    medium: "오늘은 버스말고 택시탈까?",
    smooth: "밀린 업무 끝! 상쾌하다",
    "": "잘모르겠어요",
  };

  const getTag = useCallback(
    (tag: string) => {
      setTag(tag);
    },
    [tag]
  );

  useEffect(() => {
    console.log("2", tag);
    let target = "";
    Object.keys(tannins).map((el) => {
      if (tannins[el] === tag) {
        target = el;
      }
    });
    return setUserTag([...userTag, target]);
  }, [tag]);

  Object.keys(tannins).map((el) => answer.push(tannins[el]));
  // * 질문 객체의 키 값을 answer에 넣어줘서 SurTypeTags의 배열로 전달해서 질문을 maping 시킴

  return (
    <div id="survey2" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 탄님감을 물어보는 단계입니다.</p>
      </div>
      <SurMainText
        text1={"방금 꿀맛같은 퇴근을한 당신, 오늘의 기분은?"}
        text2={""}
      />
      <SurTypeTags num={2} answer={answer} getTag={getTag} />
    </div>
  );
}
