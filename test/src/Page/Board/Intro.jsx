import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./style.module.scss";
const Intro = ({ toBoard, toMenu, toQRcode }) => {
  return (
    <Container fluid className={styles.intro}>
      <img
        className={styles.introback}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/intro_back.png"}
        alt="pic3"
      />
      <img
        className={styles.cloudleft}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/cloudleft.png"}
        alt="pic3"
      />
      <img
        className={styles.cloudright}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/cloudright.png"}
        alt="pic3"
      />
      <img
        className={styles.introtitle}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/title.png"}
        alt="title"
      />
      <img
        className={styles.introtext}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/text.png"}
        alt="text"
      />
      <img
        className={styles.bottom}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/bottom.png"}
        alt="bottom"
      />

      <img
        className={styles.pic1}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/pic1.png"}
        alt="pic1"
      />
      <img
        className={styles.pic2}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/pic2.png"}
        alt="pic2"
      />
      <img
        className={styles.pic3}
        src={process.env.PUBLIC_URL + "/images/Board/Intro/pic3.png"}
        alt="pic3"
      />
      <Row>
        <Col className="d-flex justify-content-between">
          <img
            className={styles.returnbtn}
            style={{ height: "5vh" }}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/returnbtn.png"}
            alt="back"
            onClick={() => toQRcode()}
          />
          <img
            className={styles.menubtn}
            style={{ height: "5vh" }}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/menubtn.png"}
            alt="menubtn"
            onClick={() => toMenu()}
          />
        </Col>
      </Row>
      <img
            className={styles.down_rect}
            src={process.env.PUBLIC_URL + "/images/Board/Intro/down_rect.png"}
            alt="title"
          />
      <img
        className={styles.toBoard}
        src={process.env.PUBLIC_URL + `/images/Board/Intro/toBoard.png`}
        alt="toBoard"
        onClick={() => toBoard()}
      />
    </Container>
  );
};

export default Intro;
