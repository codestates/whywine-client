import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "../../atoms/Buttons/GoogleSocialLogin";
import KakaoLogin from "../../atoms/Buttons/KakaoSocialLogin";
import Title from "../../atoms/Title/Title";
import SignUpModal from "../../organisms/Modal/SignUpModal";
import axios from "axios";
import SignUpBtn from "../../atoms/Buttons/SignUpBtn";
import SignUpPoto from "../../../img/people-2295052_640.jpg";

require("dotenv").config();

const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

interface Props {
  isOpen: Boolean;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
  //   loginHandler: any;
}

function SignInModal({ isOpen, closeModal }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNone, setIsNone] = useState(false);
  const [message, setMessage] = useState("");

  const history = useHistory();

  //로그인 모달에서도 회원가입 모달 띄워주기
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const openSignUpModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignUpOpen(true);
  };
  const closeSignUpModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignUpOpen(false);
  };
  const handleSignUpModal = () => {
    setIsSignUp(true);
  };

  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(`${server}userinfo`, {
        withCredentials: true,
      });

      sessionStorage.setItem(
        "userInfo",
        JSON.stringify(userInfo.data.data.userInfo)
      );
      // * 유저 정보 세션스토리지 저장
    } catch (error) {}
  };

  const loginRequestHandler = async (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      await axios
        .post(
          `${server}auth/signin`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          window.location.reload();
          closeModal(e);
          getUserInfo();
          sessionStorage.setItem("login", JSON.stringify(true));
          history.push("/main");
        })
        .catch((err) => {
          setIsNone(false);
          setMessage("이메일과 비밀번호를 확인해주세요.");
          setTimeout(() => {
            setIsNone(true);
          }, 2000);
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
        <div className="SignInModal" style={{ backgroundColor: "white" }}>
          <h2 className="login_h2">
            <span> whywine</span> | <span>Log in</span>
          </h2>
          <div className={"failed "} style={{ opacity: isNone ? "0" : "1" }}>
            {message}
          </div>
          <input
            name="email"
            type="email"
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

          <div className="siginBox">
            <button
              className="signin-button"
              type="submit"
              onClick={loginRequestHandler}
            >
              로그인
            </button>
          </div>
          <SignUpBtn openModal={openSignUpModal} />
          <SignUpModal isOpen={signUpOpen} closeModal={closeSignUpModal} />
          <div className="login_or">
            <p>or</p>
          </div>

          <div className="socialLogin">
            <GoogleLogin />
            <KakaoLogin />
          </div>
          <i className="fas fa-times" onClick={closeModal}></i>
        </div>
      ) : null}
    </div>
  );
}

export default SignInModal;
