import React from "react";
import { Table, Button } from "antd";
import "./style.css";

const columns = [
  {
    title: "Sample Request ID",
    dataIndex: "Sample Request ID ",
    key: "id",
  },
  {
    title: "Client Name",
    dataIndex: "Client Name",
    key: "clientName",
  },
  {
    title: "Name of Sample",
    dataIndex: "Name of Sample",
    key: "name",
  },
  {
    title: "Sample Description",
    dataIndex: "Description",
    key: "description",
  },
  {
    title: "Worksheet Reference No",
    dataIndex: "worksheet",
    key: "worksheet",
  },
  {
    title: "Test Description",
    dataIndex: "testDescription",
    key: "testDescription",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Received Date",
    dataIndex: "receivedDate ",
    key: "receivedDate",
  },
  {
    title: "Testing Date",
    dataIndex: "testingDate",
    key: "testingDate",
  },
  {
    title: "Completion Date",
    dataIndex: "completionDate",
    key: "completionDate",
  },
  {
    title: "Approval Date",
    dataIndex: "approvalDate",
    key: "approvalDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Remarks",
    dataIndex: "remarks",
    key: "remarks",
  },
  {
    title: "Retest",
    dataIndex: "retest",
    key: "retest",
  },
  {
    title: "Comments",
    dataIndex: "Comments",
    key: "comments",
  },
];

const data = [{}, {}];

const Form = () => {
  return (
    <>
      <div className="table">
        <Table
          className
          columns={columns}
          dataSource={data}
          bordered={true}
          pagination={false}
          scroll={{ x: 1000 }}
        />
        <div className="btn-export">
          <Button type="primary">Export</Button>
        </div>
      </div>
    </>
  );
};

export default Form;
