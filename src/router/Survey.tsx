import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SurveyFirstQ from "../components/templates/SurveyPages/Survey1";
import SurveySecondQ from "../components/templates/SurveyPages/Survey2";
import SurveyThirdQ from "../components/templates/SurveyPages/Survey3";
import SurveyResultQ from "../components/templates/SurveyPages/SurveyResultQ";
import result from "../components/templates/SurveyPages/SurveyResultQ";

import Main from "../components/templates/MainPages/Main";

const Survey: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/survey" exact component={SurveyFirstQ}></Route>
        <Route path="/main" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Survey;
