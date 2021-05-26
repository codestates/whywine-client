import * as React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

export default function SocialLogin() {
  // const socialLoginHandler = () => {
  //   const url = `https://accounts.google.com/o/oauth2/auth?
  //   client_id=970331179604-upa291p2st8pmj3676qmnm4geurg21cb.apps.googleusercontent.com&
  //   redirect_uri=http://localhost:3000&
  //   response_type=code&
  //   scope=https://www.googleapis.com/auth/userinfo.profile email`;

  //   window.location.assign(url);
  // };
  const googleId =
    "683216118295-1hm4t23tq34jn8s6g2aegc9q2spt6jii.apps.googleusercontent.com";
  const clientAddress =
    /* process.env.REACT_APP_API_ClIENT || */ "https://localhost:3000";

  const GoogleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${clientAddress}&client_id=${googleId}`;

  const googleLoginHandler = () => {
    window.location.assign(GoogleLoginUrl);
  };

  const history = useHistory();
  const getAuth = (authorizationCode: string) => {
    const server =
      /* process.env.REACT_APP_API_SERVER */ "https://localhost:4000" +
      "/auth/google";
    axios
      .post(server, { authorizationCode }, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        alert("불가능");
      });
  };
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    const googleCheck = window.location.href.indexOf("google");
    if (authorizationCode && googleCheck !== -1) {
      getAuth(authorizationCode);
    }
  });

  return (
    <div>
      <div className="social_box">
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans"
        />
        <div className="google-btn" onClick={googleLoginHandler}>
          <div className="google-icon-wrapper">
            {/* <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            /> */}
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </div>
  );
}
