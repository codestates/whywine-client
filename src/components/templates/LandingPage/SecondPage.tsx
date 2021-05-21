import * as React from "react";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";

function SecondPage() {
  const animatedItem = UseScrollFadeIn("up", 2, 1);

  React.useEffect(() => {}, []);

  return (
    <div>
      <div className="SecondPage_Summery" {...animatedItem}>
        <h1>특별한날에 와인이 필요하시나요 ?</h1>
        <h1>어떤 와인을 골라야할지 고민이신가요 ? </h1>
      </div>
    </div>
  );
}

export default SecondPage;
