import React from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ComplainMain from "../components/Complain/ComplainMain";
import ComplainSide from "../components/Complain/ComplainSide";
import Test from "../components/Complain/test";

const ComplainScreen = () => {
  return (
    <div>
      <Header />
      <Container fluid className="mx-auto">
        <Row>
          <Col className="ms-5">
            {/* <ComplainSide /> */}
            <Test />
          </Col>
          <Col>
            <ComplainMain />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComplainScreen;
