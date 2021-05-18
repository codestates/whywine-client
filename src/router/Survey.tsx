import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SurveyFirstQ from "../components/templates/SurveyPages/SurveyFirstQ";

const Survey: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/survey" component={SurveyFirstQ} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Survey;
