import React, { useState } from "react";
import "../style.css";
import FormSample from "containers/SampleRequest";
import { Button } from "antd";
import ModalAddSample from "./ModalAddSample";
import { PlusCircleOutlined } from "@ant-design/icons";

const SampleRequestForm = () => {
  const [visibleAdd, setVisibleAdd] = useState(false);

  const showModal = () => {
    setVisibleAdd(true);
  };
  const handleOk = () => {
    setVisibleAdd(false);
  };

  const handleCancel = () => {
    setVisibleAdd(false);
  };

  return (
    <div className="container">
      <h1 className="title">Sample Submission</h1>

      <Button
        className="add-sample"
        type="primary"
        onClick={showModal}
        icon={<PlusCircleOutlined />}
        size="middle"
      >
        Add Sample
      </Button>
      <ModalAddSample
        visibleAdd={visibleAdd}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
      <FormSample />
    </div>
  );
};

export default SampleRequestForm;
