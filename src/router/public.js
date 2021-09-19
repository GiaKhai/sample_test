import React from "react";
import { Switch, Route } from "react-router-dom";
import ResetPass from "../components/login/ResetPass";
import Forget from "../containers/Forget";
import Login from "../containers/login";

const Public = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/forget">
          <Forget />
        </Route>
        <Route exact path="/password-reset">
          <ResetPass />
        </Route>
      </Switch>
    </>
  );
};

export default Public;
