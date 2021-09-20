import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

class Sidebar extends React.Component {
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          <Menu.Item key="0">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/sample-request-form">Sample Submission</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/product-quality-report">Sample Testing</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/worksheet">Sample Approval</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/completed-sample-history">Completed Sample History</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/">Audit Trail</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/administration">Administration</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
