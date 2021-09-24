import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { message as Message } from "antd";
import { Layout } from "antd";
import { logoutUser } from "../actions/logout.action";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { getCookie } from "utils/getCookie";

const logoutOnClick = async () => {
  const refresh = getCookie("refresh");

  const { success, message } = await logoutUser(refresh);
  if (success) {
    document.cookie =
      "token=; expires=" + new Date().toUTCString() + ";path=/;";
    setTimeout(() => {
      window.location.replace(`/`);
    }, 500);
    Message.success(message);
  } else {
    Message.error(message);
  }
};

const { Header } = Layout;

class Head extends React.Component {
  render() {
    return (
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <Button
          className="btn-logout"
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={logoutOnClick}
        >
          Logout
        </Button>
      </Header>
    );
  }
}
export default Head;
