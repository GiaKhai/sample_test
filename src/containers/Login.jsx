import React from "react";
import Login from "../components/login/Login";
import { loginUser } from "../actions/login.action";
import { useForm } from "antd/lib/form/Form";
import { message as Message } from "antd";

const LoginContainer = () => {
  const [form] = useForm();

  const handleSubmit = async () => {
    let formValue = form.getFieldsValue(["username", "password"]);
    const { success } = await loginUser(formValue);
    success
      ? window.location.reload()
      : Message.error("Email or password is invalid. Please check again!");
  };

  return <Login form={form} handleSubmit={handleSubmit} />;
};

export default LoginContainer;
