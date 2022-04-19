import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
const Envelope = ({ display, scrollToGo }) => {
  return (
    <Container
      fluid
      className={styles.EnDiv}
      style={{
        display: `${display}`,
        position: "relative",
        backgroundColor: "#ae4439",
        height: " 100vh",
        width: "100vw",
      }}
    >
      <img
        className={styles.envelopeBack}
        src={`${process.env.PUBLIC_URL}/images/Intro/P2/back.png`}
        alt="back"
      />
      <Row>
        <Col className={styles.P2Text}>
          <Row>
            <img
              style={{ height: "4vh" }}
              src={`${process.env.PUBLIC_URL}/images/Intro/P2/text.png`}
              alt="back"
            />
          </Row>
          <Row>
            <img
              style={{ height: "7vh",marginTop:"5vh" }}
              src={`${process.env.PUBLIC_URL}/images/Intro/P2/text2.png`}
              alt="back"
            />
          </Row>
          <Row>
            <img
              style={{position:"relative",zIndex:'2', height: "7vh",marginLeft:"45vw",marginTop:"15vh" }}
              src={`${process.env.PUBLIC_URL}/images/Intro/P2/text3.png`}
              alt="back"
            />
          </Row>
          <Row>
            <img
              style={{ height: "8vh",marginTop:"13vh",position:"relative",zIndex:"2" }}
              src={`${process.env.PUBLIC_URL}/images/Intro/P2/text4.png`}
              alt="back"
            />
          </Row>
        </Col>
        <img
            className={styles.P2Click}
            src={`${process.env.PUBLIC_URL}/images/Intro/P2/click.png`}
            alt="back"
            onClick={()=>scrollToGo("Go")}
          />
      </Row>
    </Container>
  );
};

export default Envelope;
