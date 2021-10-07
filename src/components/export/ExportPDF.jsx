import React, { useRef } from "react";
import { Row, Col, Table } from "antd";
import { useReactToPrint } from "react-to-print";
import "./export.css";

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
    title: "RESULTS",
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

class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="container">
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
                <td>Date reported</td>
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
            Name
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Requestor:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            Name
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Sample Receoved Date:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            13-12-2021
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Date Tested:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            12-11-2021
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Product:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            Name
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
            ABC
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Description:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            Other...
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Sample Container:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            ABH
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Batch/Lot No:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            ----
          </Col>
          <Col className="name" xs={{ span: 8 }}>
            Plant/ Location:
          </Col>
          <Col className="content" xs={{ span: 16 }}>
            VietNam11
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
                // dataSource={data}
                bordered={true}
                pagination={false}
              />
              <div className="title-table">
                <span className="name">Remarks:</span> APHA-The results upon
                anylysis obtained were as
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 12 }}>
            <div className="singned">Singned</div>
          </Col>
          {/* <Col xs={{ span: 12 }}>
            <div>
              <Button type="primary" size="large">
                Sent
              </Button>
            </div>
          </Col> */}
        </Row>
      </div>
    );
  }
}
const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Export</button>
    </div>
  );
};

export default Example;
