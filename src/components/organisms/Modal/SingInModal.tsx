import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SocialLogin from "../../atoms/Buttons/SocialLogin";
import axios from "axios";

interface Props {
  isOpen: Boolean;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
  //   loginHandler: any;
}

function SignInModal({ isOpen, closeModal }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issueAccessToken, setIssueAccessToken] = useState();
  const [isNone, setIsNone] = useState(false);

  const history = useHistory();

  const loginHandler = () => {
    history.push("/Waiting");
  };

  const loginRequestHandler = (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      axios
        .post(
          "https://api.cakes.com/auth/signin",
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          loginHandler();
        })
        .catch((err) => {
          if (err) {
            setTimeout(() => {
              setIsNone(true);
              setIsNone(false);
            }, 2000);
          }
        });
    } else if (e.keyCode === 27) {
      close();
    }
  };

  const emailInputValue = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordInputValue = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <div className={isOpen ? "openModal modal" : "modal"}>
      {isOpen ? (
        <div className="SignInModal">
          <div
            className="failed_singin"
            style={{ opacity: isNone ? "1" : "0" }}
          >
            이메일과 비밀번호를 확인해주세요.
          </div>
          <div>로그인</div>
          <input
            name="email"
            type="text"
            placeholder="이메일"
            onChange={emailInputValue}
            onKeyDown={loginRequestHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="패스워드"
            onChange={passwordInputValue}
            onKeyDown={loginRequestHandler}
          />
          <button type="submit" onClick={loginRequestHandler}>
            로그인
          </button>
          <div className="socialLogin">
            <SocialLogin />
          </div>
          <div className="closeModal" onClick={closeModal}>
            closeModal
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SignInModal;
