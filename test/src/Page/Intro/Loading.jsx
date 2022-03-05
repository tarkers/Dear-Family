import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Envelope from "./Envelope";
const Loading = ({ display, scrollToEnvelope }) => {
  // const [load, isLoading] = useState(true);

  return (
    <Container
      fluid
      className={styles.containerDiv}
      style={{ backgroundColor: "#ae4439", display: `${display}` }}
    >
      
      <div
        className={styles.P1Pic + " d-flex justify-content-center"}
        onClick={() => scrollToEnvelope("Envelope")}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/Intro/P1/name.png"}
          alt="loadPic"
        />

        <div className="d-flex " style={{ position: "relative" }}>
        <img
            className={styles.P1Heart}
            src={process.env.PUBLIC_URL + "/images/Intro/P1/heart.png"}
            alt="heart"
          />
          <img
            className="align-self-end"
            style={{ height: "60%" }}
            src={process.env.PUBLIC_URL + "/images/Intro/P1/envelope.png"}
            alt="envelope"
          />
        </div>
      </div>
    </Container>
    // <Envelope/>
  );
};

export default Loading;
