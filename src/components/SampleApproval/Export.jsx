import React, { useRef } from "react";
import Moment from "react-moment";
import { Row, Col, Table, Modal } from "antd";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.PureComponent {
  render() {
    const columns = [
      {
        title: "TEST",
        dataIndex: "test",
        key: "test",
        align: "center",
        render: (_, record) => {
          return record?.test?.test;
        },
      },
      {
        title: "UNIT",
        dataIndex: "unit",
        key: "unit",
        align: "center",
        render: (_, record) => {
          return record?.test?.unit;
        },
      },
      {
        title: "METHOD",
        dataIndex: "method",
        key: "method",
        align: "center",
        render: (_, record) => {
          return record?.test?.method;
        },
      },
      {
        title: "SPEC",
        dataIndex: "spect",
        key: "spect",
        align: "center",
        render: (_, record) => {
          return record?.test?.spect;
        },
      },
      {
        title: "RESULT",
        dataIndex: "result",
        key: "result",
        align: "center",
      },
      {
        title: "INITIAL",
        dataIndex: "initial",
        key: "initial",
        align: "center",
      },
    ];
    console.log(this.props.testExport);
    return (
      <div className="container-pdf">
        <Row>
          <Col xs={{ span: 24 }}>
            <div className="form-header">
              <table>
                <tr>
                  <td>Reference No:</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Page No:</td>
                  <td>2</td>
                </tr>
                <td>Date reported:</td>
                <td>10/10/2000</td>
              </table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }}>
            <div className="title">Product Quality Report</div>
          </Col>
        </Row>
        <Row>
          <Col className="name" xs={{ span: 8 }}>
            Customer Name:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.client_name}
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Requestor:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            Name
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Sample Received Date:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            <Moment format="D MMM YYYY" withTitle>
              {this.props.testExport.received_date}
            </Moment>
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Date Tested:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.testing_date == null ? (
              ""
            ) : (
              <Moment format="D MMM YYYY" withTitle>
                {this.props.testExport.testing_date}
              </Moment>
            )}
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Product:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.product}
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Sample Date:
          </Col>
          <Col className="content" xs={{ span: 5 }}>
            21-12-2021
          </Col>
          <Col className="content" xs={{ span: 8 }}>
            Time: 21:22
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Sample Source:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.source}
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Description:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.sample_description}
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Sample Container:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.sample_contaier}
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Batch/Lot No:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.batch}
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Plant/ Location:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            {this.props.testExport.location}
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }}>
            <div className="table">
              <div className="title-table">
                The results upon anylysis obtained were as follows:
              </div>
              <Table
                columns={columns}
                dataSource={this.props.testExport.results}
                bordered={true}
                pagination={false}
                scroll={{ x: 700 }}
              />
              <div className="title-table">
                <span className="name">Remarks:</span>
                {this.props.testExport.remarks}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 12 }}>
            <div className="singned"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

const Export = ({ isModalPdf, testExport, handleCancel }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Modal
      title="Preview report"
      visible={isModalPdf}
      width={1000}
      closable={true}
      onOk={handlePrint}
      onCancel={handleCancel}
      okText="Export"
    >
      <div>
        <ComponentToPrint testExport={testExport} ref={componentRef} />
      </div>
    </Modal>
  );
};

export default Export;
