import React from "react";
import { Switch, Route } from "react-router-dom";
import Forget from "../components/login/Forget";
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
      </Switch>
    </>
  );
};

export default Public;
