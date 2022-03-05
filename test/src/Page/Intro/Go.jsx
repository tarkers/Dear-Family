import React from "react";
import styles from "./style.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Go = ({display,toGender}) => {
  //   const navigate = useNavigate();
  // const ToStory = () => {
  //   navigate(`/story`);
  // };
  return (
    <Container
      fluid
      className={styles.containerDiv}
      style={{ backgroundColor: "#F3C89D" ,display:`${display}`}}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <Row>
          <div
            className={styles.P3IconUp}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/Intro/P3/sun.png)`,
            }}
          ></div>
          <Col
            style={{ marginTop: "10%", position: "relative", height: "70%" }}
          >
            <img
              style={{ maxWidth: "90vw" }}
              src={process.env.PUBLIC_URL + "/images/Intro/P3/text.png"}
              alt="logo"
            />
          </Col>
        </Row>
        <div    className={styles.P3IconDown}>
          <img
            src={process.env.PUBLIC_URL + "/images/Intro/P3/cloud.png"}
            alt="loadPic"
            style={{ height: "8vh", float: "right", width: "auto" }}
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Intro/P3/go.png"}
            alt="go"
            className={styles.P3Next}
            onClick={()=>toGender("Gender")}
          />
        </div>
      </div>
    </Container>
  );
};

export default Go;
