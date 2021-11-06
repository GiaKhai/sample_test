import React from "react";
import { Form } from "antd";
import Forget from "../components/login/Forget";
import { resetPassword } from "../actions/forgot.action";

const ForgetPasswordContainer = () => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    let email = form.getFieldValue("email");
    const test = await resetPassword(email);
    // if (success) {
    //   form.resetFields();
    // console.log(test);
    // } else {
    //   notification.error({
    //     message: "Error",
    //     description: message,
    //   });
    // }
  };
  return <Forget form={form} handleOk={handleSubmit} />;
};

export default ForgetPasswordContainer;
