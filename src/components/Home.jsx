import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Sample Management System</h1>
      <Row>
        <Col xs={{ span: 12 }}>
          <Button className="btn-link" type="primary">
            <Link to="/sample-request-form">Sample Submission</Link>
          </Button>
        </Col>
        <Col xs={{ span: 12 }}>
          <Button className="btn-link" type="primary">
            <Link to="/product-quality-report">Sample Testing</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }}>
          <Button className="btn-link" type="primary">
            <Link to="/worksheet">Sample Approval</Link>
          </Button>
        </Col>
        <Col xs={{ span: 12 }}>
          <Button className="btn-link" type="primary">
            <Link to="/completed-sample-history">Completed Sample History</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }}>
          <Button className="btn-link" type="primary">
            <Link to="/">Audit Trail</Link>
          </Button>
        </Col>
        <Col xs={{ span: 12 }}>
          <Button className="btn-link" type="primary">
            <Link to="/administration">Administration</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
