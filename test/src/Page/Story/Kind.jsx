import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import {useNavigate} from 'react-router-dom'
const Kind = ({ ShowNext, person, display = "block" }) => {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Story/PB5.png)`,
      }}
    >
      <Row>
        <Col className="d-flex justify-content-start mt-5"style={{marginBottom:"15%"}} >
          <img
            style={{ width: "35px", margin: "10px" }}
            src={process.env.PUBLIC_URL + "/images/Story/P5.png"}
            alt="back"
            onClick={()=>navigate("/?section=to-gender")}
          />
          <img
            style={{ width: "35px", margin: "10px" }}
            src={process.env.PUBLIC_URL + "/images/Story/P5-1.png"}
            alt="test"
          />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center mt-3 mb-3">
          <img
            style={{ width: "25vw " }}
            src={process.env.PUBLIC_URL + "/images/Story/P5-2.png"}
            alt="test"
          />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center mt-5" style={{position:"relative"}}>
          <img
            style={{ width: "80vw", marginLeft: "15vw" }}
            src={process.env.PUBLIC_URL + "/images/Story/P5-3.png"}
            alt="select"
          />
           <div className={styles.p5BornDiv} onClick={()=>ShowNext()}></div>
           <div className={styles.p5GrowDiv} onClick={()=>ShowNext()}></div>
           <div className={styles.p5StrongDiv} onClick={()=>ShowNext()}></div>
        </Col>
       
      </Row>
    </Container>
  );
};

export default Kind;
