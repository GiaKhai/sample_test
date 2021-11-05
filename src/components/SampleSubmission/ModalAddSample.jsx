import React, { useEffect } from "react";
import { Form, Input, Row, Col, Select, Table, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "utils/getCookie";
import { getWorksheet } from "actions/sample-request.action";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 15,
  },
};

const ModalAddSample = ({
  visibleAdd,
  handleSubmit,
  handleCancel,
  form,
  setData,
  data,
}) => {
  let token = getCookie("token");
  const dispatch = useDispatch();
  const worksheetList = useSelector(
    (state) => state.worksheetReducers.worksheetList.results
  );
  useEffect(() => {
    dispatch(getWorksheet(token));
  }, [dispatch, token]);

  const onselect = (value) => {
    const test = worksheetList.find((item) => item.id === value);
    setData(test.tests);
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
  ];
  return (
    <>
      <Modal
        title="Add sample"
        centered
        visible={visibleAdd}
        onOk={handleSubmit}
        onCancel={handleCancel}
        width={1000}
      >
        <h1 className="title">Sample Request Form</h1>
        <div className="data-sample-request">
          <Form
            {...layout}
            name="nest-messages"
            // onFinish={onFinish}
            form={form}
          >
            <Row>
              <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 11 }}>
                <Form.Item
                  label="Sample Description"
                  name="sample_descripton"
                  rules={[
                    {
                      required: true,
                      message: "Please input sample description",
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
                      message: "Please input client name",
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
                      message: "Please input test description",
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
                      message: "Please input source",
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
                      message: "Please input name of sample",
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
                      message: "Please input attention",
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
                      message: "Please input comments",
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
                      message: "Please input other",
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
                      message: "Please select worksheet",
                    },
                  ]}
                >
                  <Select style={{ width: 162 }} onSelect={onselect}>
                    {worksheetList?.length > 0 &&
                      worksheetList.map((list) => {
                        return (
                          <Option value={list.id} key={list.id}>
                            {list.name}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <div className="table-wordsheet">
              <Table
                pagination={false}
                bordered
                dataSource={data}
                columns={columns}
                rowKey={(item) => item.id}
              />
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddSample;
