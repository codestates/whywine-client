import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

interface typeTag {
  answer: Array<string>;
  num: number;
  getTag: any;
}
//* 설문이 끝나면 설문 결과페이지로 이동
const surTypeTag: React.FC<typeTag> = ({ answer, num, getTag }) => {
  const history = useHistory();
  return (
    <div className="wineTypeBox">
      {answer.map((type, index) => {
        return (
          <a
            href={num !== 4 ? `#survey${num + 1}` : "/survey/result"}
            className="wineTypeTag"
          >
            <button onClick={(e) => getTag(type, e)}>{type}</button>
          </a>
        );
      })}
    </div>
  );
};

// TODO: 사용자가 태그를 선택하면 로컬스토리지에 저장해주어야 함. 설문 flow가 완료되면 작업할 예정
export default surTypeTag;
