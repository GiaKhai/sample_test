import React, { useState, useRef } from "react";
import { Table, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Moment from "react-moment";
import "./style.css";

const columns = [
  {
    title: "Sample Request ID",
    dataIndex: "sample_request_id",
    key: "sample_request_id",
    width: 110,
    align: "center",
  },
  {
    title: "Client Name",
    dataIndex: "client_name",
    key: "client_name",
    width: 110,
    align: "center",
  },
  {
    title: "Name of Sample",
    dataIndex: "name_of_sample",
    key: "name_of_sample",
    width: 110,
    align: "center",
  },
  {
    title: "Sample Description",
    dataIndex: "sample_descripton",
    key: "sample_descripton",
    width: 110,
    align: "center",
  },
  {
    title: "Worksheet Reference No",
    dataIndex: "worksheet",
    key: "worksheet",
    width: 110,
    align: "center",
    sorter: {
      compare: (a, b) => a.worksheet - b.worksheet,
      multiple: 1,
    },
  },
  {
    title: "Test Description",
    dataIndex: "test_decriptoin",
    key: "test_decriptoin",
    width: 110,
    align: "center",
  },
  {
    title: "Owner",
    dataIndex: "owner_name",
    key: "owner_name",
    width: 110,
    align: "center",
  },
  {
    title: "Received Date",
    dataIndex: "received_date",
    key: "received_date",
    width: 110,
    align: "center",
    render: (record) => {
      return (
        <div>
          {record == null ? (
            ""
          ) : (
            <Moment format="D MMM YYYY" withTitle>
              {record}
            </Moment>
          )}
        </div>
      );
    },
  },
  {
    title: "Testing Date",
    dataIndex: "testing_date",
    key: "testing_date",
    width: 110,
    align: "center",
    render: (record) => {
      return (
        <div>
          {record == null ? (
            ""
          ) : (
            <Moment format="D MMM YYYYm" withTitle>
              {record}
            </Moment>
          )}
        </div>
      );
    },
  },
  {
    title: "Completion Date",
    dataIndex: "completion_date",
    key: "completion_date",
    width: 110,
    align: "center",
    render: (record) => {
      return (
        <div>
          {record == null ? (
            ""
          ) : (
            <Moment format="D MMM YYYY" withTitle>
              {record}
            </Moment>
          )}
        </div>
      );
    },
  },
  {
    title: "Approval Date",
    dataIndex: "approval_date",
    key: "approval_date",
    width: 110,
    align: "center",
    render: (record) => {
      return (
        <div>
          {record == null ? (
            ""
          ) : (
            <Moment format="D MMM YYYY" withTitle>
              {record}
            </Moment>
          )}
        </div>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 110,
    align: "center",
  },
  {
    title: "Remarks",
    dataIndex: "remarks",
    key: "remarks",
    width: 110,
    align: "center",
  },
  {
    title: "Retest",
    dataIndex: "retest",
    key: "retest",
    width: 110,
    align: "center",
  },
  {
    title: "Comments",
    dataIndex: "Comments",
    key: "comments",
    width: 110,
    align: "center",
  },
  {
    title: "Action",
    key: "action",
    render: () => <Button type="primary">Export</Button>,
    width: 30,
    align: "center",
  },
];

const FormSample = ({ sampleList, setIsModalVisible, show }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const typingTimeoutRef = useRef(null);

  const onsubmit = (newfilter) => {
    setFilter(newfilter);
    console.log(filter);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!onsubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = { search: value };
      onsubmit(formValue);
    }, 400);
  };
  return (
    <>
      <div className="search-input">
        <form>
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="table">
        <Table
          className
          columns={columns}
          dataSource={sampleList}
          bordered={true}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 2000 }}
          rowKey={(item) => item.id}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                console.log(record.id);
                show && setIsModalVisible(true);
              }, // click row
            };
          }}
        />
      </div>
    </>
  );
};

export default FormSample;
