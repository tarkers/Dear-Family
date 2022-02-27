import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
// import { useNavigate } from "react-router-dom";
const Envelope = ({scrollToGo}) => {
  // const navigate = useNavigate();
  // const ToStory = () => {
  //   navigate(`/story`);
  // };
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Loading/PB2.png)`,
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        <Row style={{ paddingTop: "5vh" }}>
          <label>有天他說</label>
          <label>...</label>
        </Row>
        <Row style={{ paddingTop: "33vh",lineHeight:"4vh" }}>
          <label>記憶</label>
          <label>是日積月累</label>
          <label>是歲月繞過的痕跡</label>
          <label>是無法復返的美麗</label>
          <label>是在不堪的日子中</label>
          <label>找到的那份歸屬</label>
        </Row>
        <img
          className={styles.P2img}
          src={process.env.PUBLIC_URL + "/images/Loading/P2.png"}
          alt="logo"
        />
        <div className={styles.nextDiv} onClick={() => scrollToGo("to-go")}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/Loading/P2-2.png"}
              alt="loadPic"
            />
          </div>

          <label>繼續故事</label>
        </div>
      </div>
    </Container>
  );
};

export default Envelope;
