import React, { useState } from "react";
import Moment from "react-moment";
import AddUser from "containers/AddUser";

import "./style.css";

import { Table, Button, Switch } from "antd";

const Administration = ({
  userList,
  checked,
  updateUser,
  onChange,
  updateListUser,
  checkStatusUsers,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const rowSelection = {
    onChange: (rowKey, row) => onChange(rowKey, row),
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const checkButton = (checkStatusUsers) => {
  //   if (checkStatusUsers === "Active") return true;
  // };

  const columns = [
    {
      key: "no",
      title: "No",
      dataIndex: "no",
      align: "center",
      fixed: "left",
      width: 70,
      render: (_, __, index) => index + 1,
    },
    {
      key: "first_name",
      title: "First Name",
      dataIndex: "first_name",
      align: "center",
      fixed: "left",
      width: 105,
    },
    {
      key: "last_name",
      title: "Last Name",
      dataIndex: "last_name",
      align: "center",
      width: 110,
    },
    {
      key: "title",
      title: "Title",
      dataIndex: "title",
      align: "center",
      width: 120,
    },
    { key: "email", title: "Email", dataIndex: "email", align: "center" },
    {
      key: "access_level",
      title: "Access Level",
      dataIndex: "access_level",
      align: "center",
      width: 130,
    },
    {
      key: "last_login",
      title: "Last Login",
      dataIndex: "last_login",
      align: "center",
      render: (record) => {
        return (
          <Moment format="D MMM YYYY HH:mm" withTitle>
            {record}
          </Moment>
        );
      },
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (value, row, index) => {
        return (
          <Switch
            checkedChildren="Active"
            unCheckedChildren="Inactive"
            defaultChecked={checked(value)}
            checked={value === "Active" ? true : false}
            onChange={() => updateUser(value, row.id)}
          />
        );
      },
      width: 130,
    },
  ];
  return (
    <div className="container">
      <h1 className="title">Administration</h1>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={userList}
        bordered={true}
        pagination={false}
        scroll={{ x: 1000 }}
        rowKey={(item) => item.id}
      />
      <div className="btn-export">
        <Button type="primary">Export</Button>
      </div>
      <div className="group-btn-admin">
        <Button className="btn-admin" onClick={showModal} type="primary">
          Add User
        </Button>
        <AddUser isModalVisible={isModalVisible} handleCancel={handleCancel} />
        <Button
          className="btn-admin"
          type="primary"
          disabled={
            checkStatusUsers === "Suspended" || checkStatusUsers === "other"
          }
          onClick={updateListUser}
        >
          Suspend User
        </Button>
        <Button
          className="btn-admin"
          type="primary"
          disabled={
            checkStatusUsers === "Active" ||
            checkStatusUsers === "other" ||
            checkStatusUsers === "all"
          }
          onClick={updateListUser}
        >
          Enable User
        </Button>
      </div>
    </div>
  );
};
export default Administration;
