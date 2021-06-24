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

const Survey5 = ({ animatedItem, userTag, setUserTag }: Props) => {
  const answer: string[] = [];
  const [tag, setTag] = useState("");
  const btnRef: any = useRef();

  const sparkling: any = {
    sparkling_fizzy: "톡톡 터져보자",
    sparkling_gentle: "마동석 무서워;;",
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
    Object.keys(sparkling).map((el) => {
      if (sparkling[el] === tag) {
        target = el;
      }
    });
    return setUserTag([...userTag, target]);
  }, [tag]);

  Object.keys(sparkling).map((el) => answer.push(sparkling[el]));
  // * 질문 객체의 키 값을 answer에 넣어줘서 SurTypeTags의 배열로 전달해서 질문을 maping 시킴

  return (
    <div id="survey5" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 탄산를 물어보는 단계입니다.</p>
      </div>
      <hr className="hr"></hr>
      <SurMainText text1={"마동석 왈"} text2={"톡톡 터져볼래?"} />
      <SurTypeTags num={5} answer={answer} getTag={getTag} />
    </div>
  );
};

export default Survey5;
