import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
const Intro = ({ToNext,display="block"}) => {
  return (
    <Container fluid style={{display:`${display}`,position:"relative",padding:"0"}}>
       <img
        style={{ width: "100%" }}
        src={process.env.PUBLIC_URL + "/images/Letter/Intro/back.png"}
        alt="back"
      />
       <img
        className={styles.IntroText}
        src={process.env.PUBLIC_URL + "/images/Letter/Intro/text.png"}
        alt="text"
        onClick={()=>ToNext()}
      />
     

    </Container>
  )
}

export default Intro