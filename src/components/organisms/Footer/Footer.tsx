import React from "react";
import githubLogo from "../../../img/github_logo.svg";
const Footer = () => {
  const handleOpenGitProfile = (userName: string): void => {
    window.open(`https://github.com/${userName}`, "_blank");
  };
  return (
    <div className="footer">
      <div className="footerRightBox">
        <div className="footerTitle">
          <span className="footerLogo">whywine v1.0.0 🍷 what to drink?</span>
        </div>
        <div className="footerTeam">
          <span className="footerCORK">Team.CORK</span>
          <div className="footerCrews">
            <div
              className="footerCrews"
              onClick={() => handleOpenGitProfile("JaeHeon-Kim")}
            >
              <img
                src="https://avatars.githubusercontent.com/u/76954805?v=4"
                alt="깃허브 프로필 사진"
                style={{
                  width: "30px",
                  border: "2px solid black",
                  margin: "0 5px 0 0px",
                }}
              />
              <span>김재헌</span>
            </div>
            <div
              className="footerCrews"
              onClick={() => handleOpenGitProfile("yoon-jisung")}
            >
              <img
                src="https://avatars.githubusercontent.com/u/71217375?v=4"
                alt="깃허브 프로필 사진"
                style={{
                  width: "30px",
                  border: "2px solid black",
                  margin: "0 5px 0 5px",
                }}
              />
              <span>윤승호</span>
            </div>
            <div
              className="footerCrews"
              onClick={() => handleOpenGitProfile("nittre")}
            >
              <img
                src="https://avatars.githubusercontent.com/u/40795719?v=4"
                alt="깃허브 프로필 사진"
                style={{
                  width: "30px",
                  border: "2px solid black",
                  margin: "0 5px 0 5px",
                }}
              />
              <span>이유진</span>
            </div>
            <div
              className="footerCrews"
              onClick={() => handleOpenGitProfile("cjs1301")}
            >
              <img
                src="https://avatars.githubusercontent.com/u/77596321?v=4"
                alt="깃허브 프로필 사진"
                style={{
                  width: "30px",
                  border: "2px solid black",
                  margin: "0 5px 0 5px",
                }}
              />
              <span>최재송</span>
            </div>
          </div>
        </div>
      </div>
      <span className="footerContent">
        © 2021. whywine all rights reserved.
      </span>

      <img
        className="footerGitHub"
        src={githubLogo}
        alt="깃허브 로고"
        onClick={() => handleOpenGitProfile("codestates/whywine-client")}
      />
    </div>
  );
};

export default Footer;
