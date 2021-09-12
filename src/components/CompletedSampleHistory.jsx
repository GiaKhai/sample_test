import React from "react";
import FormSample from "./FormSample";
import { Button } from "antd";

const CompletedSampleHistory = () => {
  return (
    <>
      <div>
        <h1 className="title">Completed Sample History</h1>
        <FormSample />
      </div>
      <div className="btn-down">
        <Button className="down-ws" type="primary">
          Download Worksheet
        </Button>
        <Button className="down-rp" type="primary">
          Download Report
        </Button>
      </div>
    </>
  );
};

export default CompletedSampleHistory;
