import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  isOpen: Boolean;
  loginHandler: any;
}

function SignInModal({ isOpen, loginHandler }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const loginRequestHandler = (e: any) => {
  //     if (e.key === "Enter" || e.type === "click") {
  //       axios
  //         .post(
  //           "http://localhost:4000/login",
  //           { email, password },
  //           {
  //             headers: { "Content-Type": "application/json" },
  //             withCredentials: true,
  //           }
  //         )
  //         .then((res) => {
  //           loginHandler(res.data);
  //         })
  //         .catch((err) => {
  //           if (err) {
  //             setIsNone(false);
  //             setTimeout(() => {
  //               setIsNone(true);
  //             }, 2000);
  //           }
  //         });
  //     } else if (e.keyCode === 27) {
  //       close();
  //     }
  //   };

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
          <h1>로그인</h1>
          <input
            name="email"
            className="signin_input"
            type="text"
            placeholder="이메일"
            onChange={emailInputValue}
            // onKeyDown={loginRequestHandler}
          />
          <input
            name="password"
            className="signin_input"
            type="password"
            placeholder="패스워드"
            onChange={passwordInputValue}
            // onKeyDown={loginRequestHandler}
          />
          <button
            type="submit"
            className="signin_btn"
            // onClick={loginRequestHandler}
          >
            로그인
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default SignInModal;
