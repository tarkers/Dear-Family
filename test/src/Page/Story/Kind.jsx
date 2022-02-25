import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Kind = ({ShowNext,person,display="block"}) => {
  return (
    <Container style={{display:`${display}`}}>
      <Row>
        <Col className="justify-content-center mb-5" >
          <label>請輸入收件人</label>
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center m-2" >
          <img
            style={{ width: "60%" }}
            src={process.env.PUBLIC_URL+"/images/Story/born.png"}
            alt="select"
          />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center m-2">
          <img
            style={{ width: "60%" }}
            src={process.env.PUBLIC_URL+"/images/Story/born.png"}
            alt="select"
          />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center m-2">
          <img
            style={{ width: "60%" }}
            src={process.env.PUBLIC_URL+"/images/Story/born.png"}
            alt="select"
          />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center m-2"  onClick={()=>ShowNext(2)}>
          <img
            style={{ width: "60%",margin:"10em 0px" }}
            src={process.env.PUBLIC_URL+"/images/Story/introduction.png"}
            alt="select"
           
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Kind;
