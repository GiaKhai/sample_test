import React from "react";
import "./style.css";
import FormSample from "./FormSample";
import { Form, Input, Row, Col, Table, Button } from "antd";

const columns = [
  {
    title: "TEST",
    dataIndex: "test",
    key: "test",
  },
  {
    title: "UNIT",
    dataIndex: "unit",
    key: "unit",
  },
  {
    title: "METHOD",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "SPEC",
    dataIndex: "spec",
    key: "spec",
  },
  {
    title: "RESULT",
    dataIndex: "result",
    key: "result",
  },
  {
    title: "INITIAL",
    dataIndex: "initial",
    key: "initial",
  },
];

const data = [{}, {}];

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 15,
  },
};

const validateMessages = {
  required: "$Please input!",
};

const Worksheet = () => {
  const onFinish = (values) => {};
  return (
    <>
      <FormSample />
      <h1 className="title">Worksheet</h1>
      <div className="data-sample-request">
        <div className="form-item">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 11 }}>
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
              <Col xs={{ span: 24 }} lg={{ span: 11 }}>
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
        </div>
      </div>
      <div className="table-wordsheet">
        <Table
          className
          columns={columns}
          dataSource={data}
          bordered={true}
          pagination={false}
          scroll={{ y: 240 }}
        />
      </div>
      <div className="data-sample-request">
        <Form
          labelCol={{ span: 3 }}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Remarks"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </div>
      <div className="data-sample-request">
        <div className="form-item">
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 11 }}>
                <Form.Item
                  label="Test by"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 11 }}>
                <Form.Item
                  label="Cleared by"
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
        </div>
      </div>
      <div className="btn-footer">
        <Button className="btn-submit" type="primary">
          Submit
        </Button>
        <Button type="primary">Cancel</Button>
      </div>
    </>
  );
};

export default Worksheet;
