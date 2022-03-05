import React,{useState} from 'react'
import { Container } from "react-bootstrap";
import styles from "./style.module.scss";
import classNames from 'classnames';
const Intro = ({ToNext,display="block"}) => {
  const [show,setShow]=useState(false)
  return (
    <Container fluid style={{display:`${display}`,position:"relative",padding:"0"}}>
       <img
        style={{ width: "100%" }}
        src={process.env.PUBLIC_URL + "/images/Letter/Intro/back.png"}
        alt="back"
      />
       <img
        className={show?classNames(styles.IntroText,styles.show):styles.IntroText}
        src={process.env.PUBLIC_URL + "/images/Letter/Intro/text.png"}
        alt="text"
        onLoad={()=>setShow(true)}
        onClick={()=>ToNext()}
      />
     

    </Container>
  )
}

export default Intro