import React from "react";
import styles from "./style.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Go = ({toGender}) => {
  //   const navigate = useNavigate();
  // const ToStory = () => {
  //   navigate(`/story`);
  // };
  return (
    <Container
      fluid
      className={styles.containerDiv}
      style={{ backgroundColor: "#e4acaa" }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <Row>
          <div
            className={styles.P3IconUp}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/Loading/P3-1.png)`,
            }}
          ></div>
          <Col
            style={{ marginTop: "10%", position: "relative", height: "70%" }}
          >
            <img
              style={{ maxWidth: "90vw" }}
              src={process.env.PUBLIC_URL + "/images/Loading/P3.png"}
              alt="logo"
            />
            <div className={styles.centerDiv}>
              <Row>
                <label className={styles.redFont}> 它在彼此間流動著</label>{" "}
              </Row>
              <Row>
                <label className={styles.redFont}>孤獨卻自在地擁抱彼此</label>{" "}
              </Row>
              <Row>
                <label className={styles.redFont}>當相片退去顏色過後</label>{" "}
              </Row>
              <Row>
                <label className={styles.redFont}>你對我笑的樣子</label>{" "}
              </Row>
              <Row>
                <label className={styles.redFont}>在記憶裡卻依然清晰</label>{" "}
              </Row>
              <Row>
                {" "}
                <label className={styles.redFont}>記著我們的記憶</label>{" "}
              </Row>
              <Row>
                <label className={styles.redFont}>情感將延續—不會老去</label>{" "}
              </Row>
            </div>
          </Col>
        </Row>
        <div    className={styles.P3IconDown}>
          <img
            src={process.env.PUBLIC_URL + "/images/Loading/P3-2.png"}
            alt="loadPic"
            style={{ height: "8vh", float: "right", width: "auto" }}
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Loading/P3-3.png"}
            alt="go"
            className={styles.P3Next}
            onClick={()=>toGender("to-gender")}
          />
        </div>
      </div>
    </Container>
  );
};

export default Go;
