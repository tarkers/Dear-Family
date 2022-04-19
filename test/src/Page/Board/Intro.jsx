import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";
const Intro = ({toBoard}) => {
  return (
    <Container fluid className={styles.intro}>
      <div className={styles.introback}>
        <img
          src={process.env.PUBLIC_URL + "/images/Board/Intro/back.png"}
          alt="back"
        />
      </div>
      <Row>
        <Col style={{ paddingTop: "25vh" }}>
          <img
            className={styles.introtitle}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/title.png"}
            alt="title"
          />
        </Col>
      </Row>
      <Row>
        <Col >
          <img
            className={styles.intromonth}
            src={
              process.env.PUBLIC_URL +
              `/images/Board/Month/${new Date().getMonth() + 1}.png`
            }
            alt="Month"
            onClick={()=>toBoard()}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingTop: "2vh" }}>
          <img
            className={styles.introtext}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/text.png"}
            alt="text"
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingTop: "2vh" }}>
          <img
            className={styles.intromid}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/mid.png"}
            alt="mid"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={5} style={{ paddingTop: "2vh" }}>
          <img
            className={styles.introleft}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/left.png"}
            alt="mid"
          />
        </Col>
        <Col style={{ paddingTop: "2vh" }}>
          <img
            className={styles.introright}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/right.png"}
            alt="mid"
          />
        </Col>
      </Row>
      <div className={styles.uppermonth}>
        <Row>
          <Col style={{ paddingTop: "2vh" }}>
            <img
              className={styles.rightt}
              src={process.env.PUBLIC_URL + "/images/Board/Intro/rightt.png"}
              alt="rightt"
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingTop: "1vh" }}>
            <img
              className={styles.midt}
              src={process.env.PUBLIC_URL + "/images/Board/Intro/midt.png"}
              alt="midt"
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-row " style={{ paddingTop: "1vh" }}>
            <img
              className={styles.leftt}
              src={process.env.PUBLIC_URL + "/images/Board/Intro/leftt.png"}
              alt="leftt"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Intro;
