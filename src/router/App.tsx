import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Landing from "../components/templates/Landing";
import Main from "../components/templates/MainPages/Main";
import Mypage from "../components/templates/Mypage";
import Survey from "../components/templates/Survey";
import result from "../components/templates/SurveyPages/SurveyResultQ";

// const Main = lazy(() => import("../components/templates/MainPages/Main"));
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Route path="/" exact component={Landing} />
        <Route path="/main" component={Main} />
        <Route path="/survey" exact component={Survey} />
        <Route path="/userInfo" component={Mypage} />
        <Route path="/survey/result" component={result}></Route>
        <Redirect path="*" to="/" />
        {/* </Suspense> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
