import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const ResetPass = ({ form, handleOk }) => {
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed", errorInfo);
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
        onFinish={handleOk}
        form={form}
        onFinishFailed={onFinishFailed}
      >
        <h4>Please type in new password</h4>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <h4>Please confirm your password</h4>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
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
export default ResetPass;
