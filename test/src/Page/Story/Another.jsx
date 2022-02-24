import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Another = ({ShowNext,display="block"}) => {
  const navigate = useNavigate();
  const ToSend=()=>{
    navigate(`/letter`);
  }
  return (
    <Container style={{display:`${display}`}}>
    <Row>
      <Col className="justify-content-center m-2" >
        <img
          style={{ width: "100%" }}
          src={"/images/Story/other.png"}
          alt="select"
        />
      </Col>
      <Col className="justify-content-center m-2">
        <img
          style={{ width: "100%" }}
          src={"/images/Story/other.png"}
          alt="select"
        />
      </Col>
    </Row>
    <Row>
      <Col className="justify-content-center m-2">
        <img
          style={{ width: "45%" }}
          src={"/images/Story/send.png"}
          alt="select"
          onClick={()=>ToSend()}
        />
      </Col>
    </Row>
  </Container>
  )
}

export default Another