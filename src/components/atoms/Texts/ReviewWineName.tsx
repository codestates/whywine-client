import React from "react";
// 서버에서 와인 이름만 가져오는 atom
interface Props {
  name: string;
}
const ReviewWineName = ({ name }: Props) => {
  return (
    <div>
      <div className="reviewWineName">{name}</div>
    </div>
  );
};

export default ReviewWineName;
