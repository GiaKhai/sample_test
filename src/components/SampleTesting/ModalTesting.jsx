import React, { useState } from "react";

import {
  Modal,
  Form,
  Input,
  Row,
  Col,
  Table,
  Popconfirm,
  Typography,
  Button,
  DatePicker,
} from "antd";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ModalTesting = ({
  isModalVisible,
  handleOk,
  handleCancel,
  data,
  form,
  setData,
  formTable,
}) => {
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    formTable.setFieldsValue({
      result: "",
      initial: "",
      ...record,
    });
    setEditingKey(record.id);
    // console.log(record);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await formTable.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.id);
      console.log(key, index);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "TEST",
      dataIndex: "test",
      key: "test",
      render: (_, record) => {
        return record?.test?.test;
      },
    },
    {
      title: "UNIT",
      dataIndex: "unit",
      key: "unit",
      render: (_, record) => {
        return record?.test?.unit;
      },
    },
    {
      title: "METHOD",
      dataIndex: "method",
      key: "method",
      render: (_, record) => {
        return record?.test?.method;
      },
    },
    {
      title: "SPEC",
      dataIndex: "spect",
      key: "spect",
      render: (_, record) => {
        return record?.test?.spect;
      },
    },
    {
      title: "RESULT",
      dataIndex: "result",
      key: "result",
      editable: true,
    },
    {
      title: "INITIAL",
      dataIndex: "initial",
      key: "initial",
      editable: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              // href="javascript:;"
              onClick={() => {
                save(record.id);
              }}
              style={{
                marginRight: 8,
              }}
              size="small"
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button size="small">Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => {
              // console.log(record);
              edit(record);
            }}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Modal
        title="Product Quality Report"
        visible={isModalVisible}
        width={1000}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          name="nest-messages"
          form={form}
        >
          <div className="form-input-product">
            <h1 className="title">Product Quality Report</h1>
            <div className="data-sample-request">
              <Row>
                <Col xs={{ span: 24 }} lg={{ span: 20 }}>
                  <Form.Item
                    label="Customer Name"
                    name="customer"
                    rules={[
                      {
                        required: true,
                        message: "Please input customer name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Requestor"
                    name="requestor"
                    rules={[
                      {
                        required: true,
                        message: "Please input requetor",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Sample Received Date"
                    name="receivedDate"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    label="Date Tested"
                    name="dateTested"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    label="Product"
                    name="product"
                    rules={[
                      {
                        required: true,
                        message: "Please input product",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Sample Date"
                    name="sampleDate"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    label="Sample Source/ Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input Sample Source/ Description",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Sample Container"
                    name="sampleContainer"
                    rules={[
                      {
                        required: true,
                        message: "Please input sample container",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Batch/ Lot No"
                    name="batch"
                    rules={[
                      {
                        required: true,
                        message: "Please input Batch/ Lot No",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Plant/ Location"
                    name="plant"
                    rules={[
                      {
                        required: true,
                        message: "Please input plant/ location",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="table-wordsheet">
              <Form form={formTable} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={data}
                  columns={mergedColumns}
                  rowClassName="editable-row"
                  pagination={false}
                  rowKey={(item) => {
                    return item.id;
                  }}
                />
              </Form>
            </div>
            <div className="data-sample-request">
              <Row>
                <Col xs={{ span: 24 }} lg={{ span: 20 }}>
                  <Form.Item
                    label="Remarks"
                    name="remarks"
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
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalTesting;
