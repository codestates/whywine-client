import { useState, useEffect } from "react";
import SocialLogin from "../../atoms/Buttons/SocialLogin";
import axios from "axios";

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
  const [isNone, setIsNone] = useState(true);
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
        console.log("error");
        console.log(error);
      }
    }
  };

  return (
    <div className={isOpen ? "openModal modal" : "modal"}>
      {isOpen ? (
        <div className="SignInModal">
          <div
            className="failed_signin"
            style={{ opacity: isNone ? "0" : "1" }}
          >
            {message}
          </div>
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
          <button onClick={signUpHandler} className="signup_btn">
            회원가입
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
