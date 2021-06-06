import React, {
  SetStateAction,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import SurMainText from "../../atoms/Texts/surMainText";
import SurTypeTags from "../../atoms/Tags/surTypeTag";
import SurBtns from "../../organisms/Buttons/surBtns";

interface Props {
  animatedItem: any;
  userTag: string[];
  setUserTag: React.Dispatch<SetStateAction<string[]>>;
}

const Survey4 = ({ animatedItem, userTag, setUserTag }: Props) => {
  const answer: string[] = [];
  const [tag, setTag] = useState("");
  const btnRef: any = useRef();

  const sweetness: any = {
    sweetness_sweet: "달달",
    sweetness_medium: "담백",
    sweetness_dry: "씁쓸",
    "": "잘모르겠어요",
  };
  // *             태그들               * //

  const getTag = useCallback(
    (tag: string, e: any) => {
      setTag(tag);
      const el: any = document.querySelector(".wineTypeBox");

      if (e.target.style.backgroundColor === "skyblue") {
        e.target.style.backgroundColor = "white";
      } else {
        for (let i = 0; i < 4; i++) {
          el.childNodes[i].childNodes[0].style.backgroundColor = "white";
        }
        e.target.style.backgroundColor = "skyblue";
      }
    },
    [tag]
  );

  useEffect(() => {
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
        <p>와인의 당도를 물어보는 단계입니다.</p>
      </div>
      <hr className="hr"></hr>
      <SurMainText
        text1={"황금 같은 주말이 다가왔다. "}
        text2={"친구들과 집에서 와인파티를 하기로 했다."}
        text3={"어떤 와인을 마시겠습니까?"}
      />
      <SurTypeTags num={4} answer={answer} getTag={getTag} />
    </div>
  );
};

export default Survey4;
