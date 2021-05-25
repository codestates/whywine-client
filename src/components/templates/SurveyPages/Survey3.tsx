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

const Survey3 = ({ animatedItem, userTag, setUserTag }: Props) => {
  const answer: string[] = [];
  const [tag, setTag] = useState("");
  const btnRef: any = useRef();

  const acidity: any = {
    acidic: "고급진 스테이크",
    medium: "아무거나 괜찮아",
    soft: "안주는 사치야",
    "": "잘모르겠어요",
  };

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
    console.log("3", tag);
    let target = "";
    Object.keys(acidity).map((el) => {
      if (acidity[el] === tag) {
        target = el;
      }
    });
    return setUserTag([...userTag, target]);
  }, [tag]);

  Object.keys(acidity).map((el) => answer.push(acidity[el]));
  // * 질문 객체의 키 값을 answer에 넣어줘서 SurTypeTags의 배열로 전달해서 질문을 maping 시킴

  return (
    <div id="survey3" className="surveyBox">
      <div className="question">
        <h1>와인성향테스트</h1>
        <p>와인의 산미를 물어보는 단계입니다.</p>
      </div>
      <hr className="hr"></hr>
      <SurMainText
        text1={"새해선물로 생전 처음보는 와인이 들어왔다."}
        text2={"이 와인과 같이 먹고싶은 음식은?"}
      />
      <SurTypeTags num={3} answer={answer} getTag={getTag} />
    </div>
  );
};

export default Survey3;
