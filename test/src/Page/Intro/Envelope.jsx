import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
// import { useNavigate } from "react-router-dom";
const Envelope = ({ display, scrollToGo }) => {
  // const navigate = useNavigate();
  // const ToStory = () => {
  //   navigate(`/story`);
  // };
  return (
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        position: "relative",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Intro/P2/back.png)`,
      }}
    >
         <img
          className={styles.P2img}
          src={process.env.PUBLIC_URL + "/images/Intro/P2/next.png"}
          alt="next"
          onClick={()=>scrollToGo("Go")}
        />
    </Container>
  );
};

export default Envelope;
