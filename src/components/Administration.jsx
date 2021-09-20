import React, { useState } from "react";
import Moment from "react-moment";

import "./style.css";

import {
  Form,
  Input,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Select,
  Switch,
} from "antd";

const { Option } = Select;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

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
  required: "Please input!",
};

const Administration = ({ userList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      dataIndex: "role",
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
          unCheckedChildren="Inactvie"
          checked={checked(record)}
          onChange={onChange}
        />
      ),
      width: 130,
    },
  ];

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
              name="firstName"
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
              name="lastName"
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
              name="title"
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
              name="level"
              label="Access Level:"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select allowClear>
                <Option value="manager">Manager</Option>
                <Option value="emale">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 12 }}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>{" "}
          <Col xs={{ span: 12 }}>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={{ span: 12 }}>
            <Form.Item
              name="email"
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
              name="status"
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
