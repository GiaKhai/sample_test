import React from "react";
import { Modal } from "antd";
import { Form, Input, Row, Col, Select } from "antd";
import TableTest from "../../containers/Test";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 15,
  },
};

const validateMessages = {
  required: "$Please input!",
};

const ModalAddSample = ({ visibleAdd, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        title="Add sample"
        centered
        visible={visibleAdd}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <h1 className="title">Sample Request Form</h1>
        <div className="data-sample-request">
          <Form
            {...layout}
            name="nest-messages"
            // onFinish={onFinish}
            validateMessages={validateMessages}
            // form={form}
          >
            <Row>
              <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 11 }}>
                <Form.Item
                  label="Sample Description"
                  name="sample_descripton"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Client"
                  name="client_name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Test Decriptoin"
                  name="test_decriptoin"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Source"
                  name="source"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 11 }}>
                <Form.Item
                  label="Name of Sample"
                  name="name_of_sample"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Attention"
                  name="attention"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Comments"
                  name="comments"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Other info"
                  name="other"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xs={{ span: 11 }}>
                <Form.Item
                  label="Worksheet"
                  name="worksheet"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select defaultValue="worksheet1" style={{ width: 162 }}>
                    <Option value="worksheet1" allowClear>
                      worksheet1
                    </Option>
                    <Option value="worksheet2">worksheet2</Option>
                    <Option value="worksheet3">worksheet3</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <div className="table-wordsheet">
              <TableTest />
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddSample;
