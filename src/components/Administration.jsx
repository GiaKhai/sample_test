import React, { useState } from "react";
import "./style.css";

import { Form, Input, Row, Col, Table, Button, Modal, Select } from "antd";
const { Option } = Select;

const columns = [
  {
    title: "No",
    dataIndex: "no",
    align: "center",
    fixed: "left",
    width: 70,
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    align: "center",
    fixed: "left",
    width: 100,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    align: "center",
    width: 100,
  },
  {
    title: "Title",
    dataIndex: "title",
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
    dataIndex: "accessLevel",
    align: "center",
    width: 120,
  },
  {
    title: "Last Login (Date)",
    dataIndex: "date",
    align: "center",
  },
  {
    title: "Last Login (Time)",
    dataIndex: "time",
    align: "center",
  },
];
const data = [
  {
    key: "1",
    no: "1",
    firstName: "Albert",
    lastName: "Last Name",
    title: "Manager",
    email: "xxx@abc.com",
    accessLevel: "Manager",
    status: "active",
    date: "17-Aug-21",
    time: "1533h",
  },
  {
    key: "2",
    no: "2",
    firstName: "Albert",
    lastName: "Last Name",
    title: "Manager",
    email: "xxx@abc.com",
    accessLevel: "Manager",
    status: "active",
    date: "17-Aug-21",
    time: "1533h",
  },
  {
    key: "3",
    no: "3",
    firstName: "Albert",
    lastName: "Last Name",
    title: "Manager",
    email: "xxx@abc.com",
    accessLevel: "Manager",
    status: "active",
    date: "17-Aug-21",
    time: "1533h",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const validateMessages = {
  required: "$Please input!",
};

const Administration = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modal = (
    <Modal
      title="Add User"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        className="form-modal"
        wrapperCol={{ span: 20 }}
        layout="vertical"
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Row>
          <Col xs={{ span: 12 }}>
            <Form.Item
              label="First Name:"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={{ span: 12 }}>
            <Form.Item
              label="Last Name:"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={{ span: 12 }}>
            <Form.Item
              label="Title:"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={{ span: 12 }}>
            <Form.Item
              name="gender"
              label="Access Level*"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 12 }}>
            <Form.Item
              label="Email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={{ span: 12 }}>
            <Form.Item
              label="Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );

  return (
    <div className="container">
      <h1 className="title">Administration</h1>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
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
        {modal}
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
