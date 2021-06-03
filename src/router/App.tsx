import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Loading from "../components/atoms/Imgs/Loading";
import Header from "../components/organisms/Header/Header";
// import Landing from "../components/templates/Landing";
// import Main from "../components/templates/MainPages/Main";
// import Mypage from "../components/templates/Mypage";
// import LikeList from "../components/templates/LikeList";
// import Survey from "../components/templates/Survey";
// import result from "../components/templates/SurveyPages/SurveyResultQ";


const Landing = lazy(() => import("../components/templates/Landing"));
const Main = lazy(() => import("../components/templates/MainPages/Main"));
const Mypage = lazy(() => import("../components/templates/Mypage"));
const LikeList = lazy(() => import("../components/templates/LikeList"));
const Survey = lazy(() => import("../components/templates/Survey"));
const result = lazy(
  () => import("../components/templates/SurveyPages/SurveyResultQ")
);


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense
          fallback={
            <div className="loadingBackGround">
              <Header />
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
