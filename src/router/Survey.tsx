import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SurveyFirstQ from "../components/templates/SurveyPages/SurveyFirstQ";
import SurveySecondQ from "../components/templates/SurveyPages/SurveySecondQ";
import SurveyThirdQ from "../components/templates/SurveyPages/SurveyThirdQ";
import SurveyResultQ from "../components/templates/SurveyPages/SurveyResultQ";

import Main from "../components/templates/Main";

const Survey: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/survey" exact component={SurveyFirstQ}></Route>
        <Route path="/survey/second" exact component={SurveySecondQ}></Route>
        <Route path="/survey/third" exact component={SurveyThirdQ}></Route>
        <Route path="/survey/result" exact component={SurveyResultQ}></Route>
        <Route path="/main" component={Main}></Route>
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Survey;
