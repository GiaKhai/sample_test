import React from "react";
import { Table } from "antd";

const TableTest = ({ testList }) => {
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
    <div>
      <Table
        pagination={false}
        bordered
        dataSource={testList}
        columns={columns}
      />
    </div>
  );
};

export default TableTest;
