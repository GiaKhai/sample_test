import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Forget = () => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = () => {
    console.log("log forget");
  };
  return (
    <div className="login-page">
      <Form
        className="form login-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <h4>Please input your email</h4>
        <Form.Item
          className="form-email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div>
          <Button className="btn-cancel" type="primary">
            <Link to="/">Cancel</Link>
          </Button>
          <Button className="btn-submit" type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Forget;
