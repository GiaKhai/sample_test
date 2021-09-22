import React, { useState } from "react";
import Moment from "react-moment";
import AddUser from "containers/AddUser";

import "./style.css";

import { Table, Button, Switch } from "antd";

const Administration = ({ userList, checked, onChange }) => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const onSelectChange = (selectedRowKeys) => {
  //   console.log("selectedRowKeys changed: ", selectedRowKeys);
  //   setSelectedRowKeys({ selectedRowKeys });
  // };

  // const rowSelection = {
  //   // selectedRowKeys,
  //   // onChange: onSelectChange(),
  // };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      render: (value, row, index) => {
        return (
          <Switch
            checkedChildren="Active"
            unCheckedChildren="Inactive"
            defaultChecked={checked(value)}
            onChange={() => onChange(value, row.id)}
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
        // rowSelection={rowSelection}
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
