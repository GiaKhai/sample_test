import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Layout } from "antd";

import SampleRequestForm from "../components/SampleSubmission/SampleRequestForm";
import CompletedSampleHistory from "../components/CompletedSampleHistory.jsx";
import User from "../containers/User.jsx";
import ProductQualityReport from "../components/ProductQualityReport";
import SampleTesting from "../components/SampleTesting/SampleTesting";
import PageNotFound from "components/NotFound";

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
              <SampleRequestForm />
            </Route>
            <Route exact path="/sample-testing">
              <SampleTesting />
            </Route>
            <Route exact path="/completed-sample-history">
              <CompletedSampleHistory />
            </Route>
            <Route exact path="/administration">
              <User />
            </Route>

            <Route exact path="/product-quality-report">
              <ProductQualityReport />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Authed;
