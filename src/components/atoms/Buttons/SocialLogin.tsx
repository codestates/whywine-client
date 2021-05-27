import * as React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

export default function SocialLogin() {

  const googleLoginHandler = () => {
    //window.location.assign(GoogleLoginUrl);
    window.location.assign('https://localhost:4000/auth/kakao');
  };

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
