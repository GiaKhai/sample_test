import React, { useState, useRef } from "react";
import Moment from "react-moment";
import AddUser from "containers/AddUser";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Button, Switch, Input } from "antd";

import "./style.css";

const Administration = ({
  userList,
  checked,
  updateUser,
  onChange,
  updateListUser,
  checkStatusUsers,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const typingTimeoutRef = useRef(null);

  const onsubmit = (newfilter) => {
    setFilter(newfilter);
    console.log(filter);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!onsubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = { search: value };
      onsubmit(formValue);
    }, 400);
  };

  const rowSelection = {
    onChange: (rowKey, row) => onChange(rowKey, row),
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <div>
            {record == null ? (
              ""
            ) : (
              <Moment format="D MMM YYYY HH:mm" withTitle>
                {record}
              </Moment>
            )}
          </div>
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
      <div className="search-input">
        <form>
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={userList}
        bordered={true}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1000 }}
        rowKey={(item) => item.id}
      />

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
