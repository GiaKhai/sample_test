import React from "react";
import { Form, Input, Row, Col, Table, Button } from "antd";
import "./style.css";

const validateMessages = {
  required: "$Please input!",
};

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
];

const data = [{}, {}];

const ProductQualityReport = () => {
  return (
    <>
      <div className="form-input-product">
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Row>
            <Col xs={{ span: 15 }}></Col>
            <Col xs={{ span: 8 }}>
              <Form.Item
                label="Reference No:"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Page No"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Date Reported"
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
        <h1 className="title">Product Quality Report</h1>
        <div className="data-sample-request">
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            name="nest-messages"
            validateMessages={validateMessages}
          >
            <Row>
              <Col xs={{ span: 11 }}>
                <Form.Item
                  label="Customer Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Requestor"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Sample Received Date"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Date Tested"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Product"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Sample Date"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Sample Source/ Description"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Sample Container"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Batch/ Lot No"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Plant/ Location"
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
      </div>
      <div className="btn-footer">
        <Button type="primary">Send</Button>
      </div>
    </>
  );
};

export default ProductQualityReport;
