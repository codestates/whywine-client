import React from "react";
import githubLogo from "../../../img/github_logo.svg";
import twitterLogo from "../../../img/twitter_logo.png";
import instarLogo from "../../../img/instargram_logo.png";

const Footer = () => {
  const handleOpenGitProfile = (userName: string): void => {
    window.open(`https://github.com/${userName}`, "_blank");
  };

  const handleOpenTwtter = () => {
    window.open("https://twitter.com/", "_blank");
  };
  const handleOpenInstar = () => {
    window.open("https://nstargram.com/", "_blank");
  };

  return (
    <div className="footer">
      <div className="footerCrews">
        <div className="creator">
          <span className="footerCORK">Team.CORK</span>

          <div onClick={() => handleOpenGitProfile("JaeHeon-Kim")}>
            <img
              src="https://avatars.githubusercontent.com/u/76954805?v=4"
              alt="깃허브 프로필 사진"
              style={{
                width: "30px",

                margin: "0 5px 0 0px",
              }}
            />
            <span>김재헌</span>
          </div>

          <div onClick={() => handleOpenGitProfile("yoon-jisung")}>
            <img
              src="https://avatars.githubusercontent.com/u/71217375?v=4"
              alt="깃허브 프로필 사진"
              style={{
                width: "30px",

                margin: "0 5px 0 5px",
              }}
            />
            <span>윤승호</span>
          </div>

          <div onClick={() => handleOpenGitProfile("nittre")}>
            <img
              src="https://avatars.githubusercontent.com/u/40795719?v=4"
              alt="깃허브 프로필 사진"
              style={{
                width: "30px",

                margin: "0 5px 0 5px",
              }}
            />
            <span>이유진</span>
          </div>

          <div onClick={() => handleOpenGitProfile("cjs1301")}>
            <img
              src="https://avatars.githubusercontent.com/u/77596321?v=4"
              alt="깃허브 프로필 사진"
              style={{
                width: "30px",

                margin: "0 5px 0 5px",
              }}
            />
            <span>최재송</span>
          </div>
        </div>

        <div className="footerGitHub">
          <img
            src={instarLogo}
            alt="인스타 로고"
            onClick={() => handleOpenInstar()}
          />
          <img
            src={twitterLogo}
            alt="트위터 로고"
            onClick={() => handleOpenTwtter()}
          />
          <img
            src={githubLogo}
            alt="깃허브 로고"
            onClick={() => handleOpenGitProfile("codestates/whywine-client")}
          />
        </div>
      </div>

      <hr className="hr2"></hr>

      <div className="footerTitle">
        <div className="footerLogo">whywine v1.0.0 🍷 what to drink?</div>

        <div className="footerContent">
          © 2021. whywine all rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
