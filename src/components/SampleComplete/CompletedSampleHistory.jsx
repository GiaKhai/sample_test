import React from "react";
import { Button } from "antd";

import FormSample from "containers/SampleRequest";

const CompletedSampleHistory = () => {
  return (
    <div className="container">
      <h1 className="title">Completed Sample History</h1>
      <FormSample />
      <div className="btn-down">
        <Button className="down-ws" type="primary">
          Download Worksheet
        </Button>
        <Button className="down-rp" type="primary">
          Download Report
        </Button>
      </div>
    </div>
  );
};

export default CompletedSampleHistory;
