import React from "react";
import styles from "./style.module.scss";
import { Container, Row, Col } from "react-bootstrap";
const Go = ({ display, toGender }) => {
  return (
    <Container
      fluid
      className={styles.P3D}
      style={{
        display: `${display}`,
        position: "relative",
        backgroundColor: "#ae4439",
        height: " 100vh",
        width: "100vw",
      }}
    >
      <img
        className={styles.Back}
        src={`${process.env.PUBLIC_URL}/images/Intro/P3/back.png`}
        alt="back"
      />
      <img
        className={styles.middle}
        src={`${process.env.PUBLIC_URL}/images/Intro/P3/middle.png`}
        alt="middle"
      />
      <img
        className={styles.lleaf}
        src={`${process.env.PUBLIC_URL}/images/Intro/P3/lleaf.png`}
        alt="middle"
      />
      <img
        className={styles.rleaf}
        src={`${process.env.PUBLIC_URL}/images/Intro/P3/rleaf.png`}
        alt="middle"
      />
      <Row>
        <Col className="d-flex justify-content-center">
          <img
            style={{ height: "8vh", marginTop: "10vh",position:"relative",zIndex:3 }}
            src={`${process.env.PUBLIC_URL}/images/Intro/P3/text.png`}
            alt="back"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "27vh",position:"relative",zIndex:3 }}>
        <Col className="d-flex justify-content-center">
          <img
            style={{ height: "8vh" }}
            src={`${process.env.PUBLIC_URL}/images/Intro/P3/text2.png`}
            alt="back"
          />
        </Col>
      </Row>
      <img
        className={styles.P3Click}
        // style={{position: "relative", zIndex: 1 }}
        src={`${process.env.PUBLIC_URL}/images/Intro/P3/click.png`}
        alt="click"
        onClick={() => toGender("Gender")}
      />
    </Container>
  );
};

export default Go;
