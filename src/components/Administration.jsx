import React, { useState } from "react";
import Moment from "react-moment";
import AddUser from "containers/AddUser";

import "./style.css";

import { Table, Button, Switch } from "antd";

function onChange(checked) {
  // console.log(`switch to ${checked}`);
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(
    //   `selectedRowKeys: ${selectedRowKeys}`,
    //   "selectedRows: ",
    //   selectedRows
    // );
  },
};

const Administration = ({ userList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const checked = (record) => {
    let status = "";
    if (record === "Active") {
      status = true;
    } else if (record === "Suspended") {
      status = false;
    }
    return status;
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      align: "center",
      fixed: "left",
      width: 70,
      render: (value, row, index) => index + 1,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      align: "center",
      fixed: "left",
      width: 100,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      align: "center",
      width: 100,
    },
    {
      title: "Title",
      dataIndex: "role",
      align: "center",
      width: 100,
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Access Level",
      dataIndex: "Access Level",
      align: "center",
      width: 130,
    },
    {
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
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (record) => (
        <Switch
          checkedChildren="Active"
          unCheckedChildren="Inactive"
          checked={checked(record)}
          onChange={onChange}
        />
      ),
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
      />
      <div className="btn-export">
        <Button type="primary">Export</Button>
      </div>
      <div className="group-btn-admin">
        <Button className="btn-admin" onClick={showModal} type="primary">
          Add User
        </Button>
        <AddUser isModalVisible={isModalVisible} handleCancel={handleCancel} />
        <Button className="btn-admin" type="primary">
          Suspend User
        </Button>
        <Button className="btn-admin" type="primary">
          Enable User
        </Button>
      </div>
    </div>
  );
};
export default Administration;
