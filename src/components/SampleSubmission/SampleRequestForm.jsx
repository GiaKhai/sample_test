import React, { useState } from "react";
import "../style.css";
import FormSample from "containers/SampleRequest";
import { Button } from "antd";
import ModalAddSample from "containers/AddSample";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";

const SampleRequestForm = () => {
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [data, setData] = useState();
  const [form] = useForm();

  const showModal = () => {
    setVisibleAdd(true);
  };

  const handleCancel = () => {
    setVisibleAdd(false);
    setData([]);
    form.resetFields();
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
        data={data}
        setData={setData}
        form={form}
      />
      <FormSample />
    </div>
  );
};

export default SampleRequestForm;
