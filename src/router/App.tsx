import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Landing from "../components/templates/Landing";
import Main from "../components/templates/Main";
import Mypage from "../components/templates/Mypage";
import Survey from "../components/templates/Survey";
import result from "../components/templates/SurveyPages/SurveyResultQ";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/main" component={Main} />
        <Route path="/survey" exact component={Survey} />
        <Route path="/userInfo" component={Mypage} />
        <Route path="/survey/result" component={result}></Route>
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
