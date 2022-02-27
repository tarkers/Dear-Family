import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Envelope from "./Envelope";
const Loading = ({ scrollToEnvelope }) => {
  // const [load, isLoading] = useState(true);

  return (
    <Container
      fluid
      className={styles.containerDiv}
      style={{ backgroundColor: "#ae4439" }}
    >
      <div
        className={styles.rightimg + " d-flex justify-content-center"}
        onClick={() => scrollToEnvelope("to-envelope")}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/Loading/P1.png"}
          alt="loadPic"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/Loading/P1-2.png"}
          alt="loadPic"
        />
      </div>
    </Container>
    // <Envelope/>
  );
};

export default Loading;
