import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Layout } from "antd";

import Home from "../components/Home";
import SampleRequestForm from "../components/SampleRequestForm.jsx";
import CompletedSampleHistory from "../components/CompletedSampleHistory.jsx";
import User from "../containers/User.jsx";
import Worksheet from "../components/Worksheet";
import ProductQualityReport from "../components/ProductQualityReport";

const { Content } = Layout;

const Authed = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/sample-request-form">
              <SampleRequestForm />
            </Route>
            <Route exact path="/completed-sample-history">
              <CompletedSampleHistory />
            </Route>
            <Route exact path="/administration">
              <User />
            </Route>
            <Route exact path="/worksheet">
              <Worksheet />
            </Route>
            <Route exact path="/product-quality-report">
              <ProductQualityReport />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Authed;
