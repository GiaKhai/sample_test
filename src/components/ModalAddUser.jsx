import React from "react";
import { Form, Input, Row, Col, Modal, Select } from "antd";
const { Option } = Select;

const validateMessages = {
  required: "Please input!",
};

const ModalAddUser = ({ form, handleSubmit, handleCancel, isModalVisible }) => {
  return (
    <div>
      <Modal
        title="Add User"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          className="form-modal"
          wrapperCol={{ span: 20 }}
          layout="vertical"
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Row>
            <Col xs={{ span: 12 }}>
              <Form.Item
                name="first_name"
                id="first_name"
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
                name="last_name"
                id="last_name"
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
                name="role"
                id="role"
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
            </Col>
            <Col xs={{ span: 12 }}>
              <Form.Item
                name="password2"
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
    </div>
  );
};

export default ModalAddUser;
