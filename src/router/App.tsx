import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Loading from "../components/atoms/Icons/Loading";
import Header from "../components/organisms/Header/Header";
require("dotenv").config();
// import Landing from "../components/templates/Landing";
// import Main from "../components/templates/MainPages/Main";
// import Mypage from "../components/templates/Mypage";
// import LikeList from "../components/templates/LikeList";
// import Survey from "../components/templates/Survey";
// import result from "../components/templates/SurveyPages/SurveyResultQ";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

const Landing = lazy(() => import("../components/templates/Landing"));
const Main = lazy(() => import("../components/templates/MainPages/Main"));
const Mypage = lazy(() => import("../components/templates/Mypage"));
const LikeList = lazy(() => import("../components/templates/LikeList"));
const Survey = lazy(() => import("../components/templates/Survey"));
const result = lazy(
  () => import("../components/templates/SurveyPages/SurveyResultQ")
);

const App: React.FC = () => {
  const LogInCheck = async () => {
    try {
      const userInfo = await axios.get(`${server}userinfo`, {
        withCredentials: true,
      });
      sessionStorage.setItem("login", JSON.stringify(true));
      sessionStorage.setItem(
        "userInfo",
        JSON.stringify(userInfo.data.data.userInfo)
      );
      // * 유저 정보 세션스토리지 저장
    } catch (error) {
      sessionStorage.setItem("login", JSON.stringify(false));
    }
  };
  useEffect(() => {
    LogInCheck();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Suspense
          fallback={
            <div className="loadingBackGround">
              <Loading />
            </div>
          }
        >
          <Route path="/" exact component={Landing} />
          <Route path="/main" component={Main} />
          <Route path="/survey" exact component={Survey} />
          <Route path="/userInfo" component={Mypage} />
          <Route path="/likeList" component={LikeList} />
          <Route path="/survey/result" component={result}></Route>
        </Suspense>
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
