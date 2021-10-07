import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Layout } from "antd";

import SampleRequestForm from "../components/SampleSubmission/SampleRequestForm";
import CompletedSampleHistory from "../components/SampleComplete/CompletedSampleHistory.jsx";
import User from "../containers/User.jsx";
import SampleTesting from "../components/SampleTesting/SampleTesting";
import PageNotFound from "components/NotFound";
import SampleApproval from "components/SampleApproval/SampleApproval";
// import ExportPDF from "components/export/ExportPDF";
import { useSelector } from "react-redux";

const { Content } = Layout;

const Authed = () => {
  const me = useSelector((state) => state.meReducers.me.access_level);

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
            {/* <Route exact path="/">
              <ExportPDF />
            </Route> */}
            <Route exact path="/sample-testing">
              <SampleTesting />
            </Route>

            {me === "Manager" && (
              <>
                <Route exact path="/sample-approval">
                  <SampleApproval />
                </Route>
                <Route exact path="/completed-sample-history">
                  <CompletedSampleHistory />
                </Route>
                <Route exact path="/administration">
                  <User />
                </Route>
              </>
            )}
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
