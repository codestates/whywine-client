import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Loading from "../components/atoms/Icons/Loading";
import axios from "axios";
import dotenv from "dotenv";
import WineModal from "../components/organisms/Modal/WineModal";
require("dotenv").config();

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
      sessionStorage.removeItem("userInfo");
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
          <Route path="main/modal" component={WineModal} />
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
