import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const Login = ({ form, handleSubmit }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        form={form}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <h1>User Login</h1>
        <Form.Item
          className="item"
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="check">
          <Checkbox>Remember me</Checkbox>
        </div>
        <div>
          <Button className="btn-submit" type="primary" htmlType="submit">
            Sign in
          </Button>
        </div>
        <div className="forget">
          <Link to="/forget">Forget my password</Link>
        </div>
      </Form>
    </div>
  );
};
export default Login;
