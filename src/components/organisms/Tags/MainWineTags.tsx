import React, { useState } from "react";
import MainResetTagBtn from "../../atoms/Buttons/MainResetTagBtn";
import MainTypeTag from "../../atoms/Tags/MainTypeTag";
import MainLabel from "../../atoms/Tags/MainLabel";
import wine from "../../../img/wine_main.png";
import MainTags from "../../atoms/Tags/MainTags";

interface Tags {
  userMainTag: string[];
  setUserMainTag: React.Dispatch<React.SetStateAction<string[]>>;
}

let tags: any;
if (!localStorage.getItem("userTag")) {
  localStorage.setItem("userTag", JSON.stringify([]));
  tags = localStorage.getItem("userTag");
}
tags = localStorage.getItem("userTag");

const MainWineTags = ({ userMainTag, setUserMainTag }: Tags) => {
  const [userTags, setUserTags] = useState(JSON.parse(tags));
  return (
    <div>
      {/* <div className="mainLabelBox">
        <MainLabel />
      </div> */}
      <div className={"mainTagBox"}>
        <img src={wine} style={{ width: "300px" }} />

        <div className="typeTag">
          <MainTypeTag />
        </div>
        <div className="bodyTanninTag">
          <MainTags
            tags={tags}
            userTags={userTags[0]}
            tagTitle="바디."
            degreeENG={["body_light", "body_medium", "body_bold"]}
            degreeKOR={["가벼운", "적당한", "무거운"]}
            userMainTag={userMainTag}
            setUserMainTag={setUserMainTag}
          />
          <MainTags
            tags={tags}
            userTags={userTags[1]}
            tagTitle="탄닌."
            degreeENG={["tannins_smooth", "tannins_medium", "tannins_tannic"]}
            degreeKOR={["부드러운", "적당한", "떫은"]}
            userMainTag={userMainTag}
            setUserMainTag={setUserMainTag}
          />
        </div>
        <div className="aciditySweetnessTag">
          <MainTags
            tags={tags}
            userTags={userTags[2]}
            tagTitle="산미."
            degreeENG={["acidity_soft", "acidity_medium", "acidity_acidic"]}
            degreeKOR={["낮은", "적당한", "높은"]}
            userMainTag={userMainTag}
            setUserMainTag={setUserMainTag}
          />
          <MainTags
            tags={tags}
            userTags={userTags[3]}
            tagTitle="당도."
            degreeENG={["sweetness_dry", "sweetness_medium", "sweetness_sweet"]}
            degreeKOR={["씁쓸한", "적당한", "달달한"]}
            userMainTag={userMainTag}
            setUserMainTag={setUserMainTag}
          />
        </div>
      </div>
    </div>
  );
};

export default MainWineTags;
