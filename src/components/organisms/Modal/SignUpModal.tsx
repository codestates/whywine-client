import { useState, useEffect } from "react";
import SocialLogin from "../../atoms/Buttons/SocialLogin";
import axios from "axios";
import dotenv from "dotenv";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

interface Props {
  isOpen: Boolean;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
}

function SignInModal({ isOpen, closeModal }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [isNone, setIsNone] = useState(false);
  const [message, setMessage] = useState("");

  const emailInputValue = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordInputValue = (e: any) => {
    setPassword(e.target.value);
  };

  const nickNameInputValue = (e: any) => {
    setNickName(e.target.value);
  };

  const signUpHandler = async (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      try {
        const data = await axios.post(
          `${server}/auth/signup`,
          { email, password, nickname },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        close();
        console.log(data);
      } catch (error) {
        setIsNone(false);
        // setMessage(error.response.data.message);
        setTimeout(() => {
          setIsNone(true);
        }, 2000);
      }
    }
  };

  return (
    <div className={isOpen ? "openModal modal" : "modal"}>
      {isOpen ? (
        <div className="SignInModal">
          <h2 className="login_h2">
            <span> whywine</span> | <span>Log in</span>
          </h2>
          <input
            name="email"
            className="signup_input"
            type="text"
            placeholder="이메일"
            onChange={emailInputValue}
            onKeyDown={signUpHandler}
          />
          <input
            name="password"
            className="signup_input"
            type="password"
            placeholder="패스워드"
            onChange={passwordInputValue}
            onKeyDown={signUpHandler}
          />
          <input
            name="nickname"
            className="signup_input"
            type="text"
            placeholder="닉네임"
            onChange={nickNameInputValue}
            onKeyDown={signUpHandler}
          />
          <button onClick={signUpHandler} className="signin-button">
            회원가입
          </button>
          <div className="login_or">
            <p>or</p>
          </div>
          <div className="socialLogin">
            <SocialLogin />
          </div>
          <i className="fas fa-times" onClick={closeModal}></i>
        </div>
      ) : null}
    </div>
  );
}

export default SignInModal;
