import React from "react";
import "./style.css";
import FormSample from "./FormSample";
import { Form, Input, Row, Col, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 15,
  },
};

function handleChange(value) {
  // console.log(`selected ${value}`);
}

const validateMessages = {
  required: "$Please input!",
};

const SampleRequestForm = () => {
  const onFinish = (values) => {};
  return (
    <>
      <FormSample />
      <h1 className="title">Sample Request Form</h1>
      <div className="data-sample-request">
        <div className="data-item">Sample Request ID: SSM_YYYYMMXXXXX</div>
        <div className="data-item">Date Received: 12 Aug 2021</div>
        <div className="data-item">Time Received: 1432 hours</div>
        <div className="form-item">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Row>
              <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 11 }}>
                <Form.Item
                  label="Sample Number "
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Date Received"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Sample Description"
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
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Date / Time of sampling"
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
          </Form>

          <div className="form-select">
            <Form
              labelCol={{ span: 8 }}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Row>
                <Col xs={{ span: 11 }}>
                  <Form.Item
                    label="Worksheet"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      defaultValue="1"
                      style={{ width: 162 }}
                      onChange={handleChange}
                    >
                      <Option value="1">Item1</Option>
                      <Option value="2">Item2</Option>
                      <Option value="3">Item3</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleRequestForm;
