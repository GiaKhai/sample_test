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
} from "antd";

import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "utils/getCookie.js";
import { getTest } from "actions/sample-request.action.js";
import { useEffect } from "react";

const validateMessages = {
  required: "$Please input!",
};

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

const ModalTesting = ({ isModalVisible, handleOk, handleCancel }) => {
  let token = getCookie("token");
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  useEffect(() => {
    dispatch(getTest(token));
  }, [dispatch, token]);
  const testList = useSelector((state) => state.testReducers.testList.results);
  // console.log(testList);

  useEffect(() => {
    console.log(testList);
    setData(testList);
  }, [testList]);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      id: "",
      result: "",
      initial: "",
      ...record,
    });
    setEditingKey(record.id);
    console.log(record);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

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
      dataIndex: "spect",
      key: "spect",
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
        console.log(record);
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              // href="javascript:;"
              onClick={() => save(record.key)}
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
            onClick={() => edit(record)}
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
        <div className="form-input-product">
          <div className=" data-sample-request">
            <Form
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 18 }}
              name="nest-messages"
              validateMessages={validateMessages}
            >
              <Row>
                <Col xs={{ span: 0 }} lg={{ span: 15 }}></Col>
                <Col xs={{ span: 24 }} lg={{ span: 8 }}>
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
          </div>
          <h1 className="title">Product Quality Report</h1>
          <div className="data-sample-request">
            <Form
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 10 }}
              name="nest-messages"
              validateMessages={validateMessages}
            >
              <Row>
                <Col xs={{ span: 24 }} lg={{ span: 15 }}>
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
            <Form form={form} component={false}>
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
                pagination={{
                  onChange: cancel,
                }}
                rowKey={(item) => {
                  // console.log(item.id);
                  return item.id;
                }}
              />
            </Form>
          </div>
          <div className="data-sample-request">
            <Form
              labelCol={{ span: 3 }}
              name="nest-messages"
              validateMessages={validateMessages}
            >
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
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalTesting;
