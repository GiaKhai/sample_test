import React, { useState, useEffect, useRef, useContext } from "react";
import { Modal, Form, Input, Row, Col, Table, DatePicker } from "antd";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const ModalTesting = ({
  isModalVisible,
  handleOk,
  handleCancel,
  form,
  data,
  setData,
}) => {
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
  ];
  const handleSave = (row) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    // setData((data) => [...data, newData]);
    setData(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const column = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
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
                    <Input disabled />
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
              <Table
                components={components}
                pagination={false}
                rowClassName={() => "editable-row"}
                bordered
                dataSource={data}
                columns={column}
                rowKey={(item) => {
                  return item.id;
                }}
              />
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
