import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Main = () => {
  const navigate = useNavigate();
  const [load, isLoading] = useState(true);
  const ToStory=()=>{
    navigate(`/story`);
  }
  return (
    <Container fluid >
      <div className={styles.maxHeight}>
        <img className={styles.leftimg} src={"/images/Main/load.png"} alt="loadPic" />
        <img className={styles.rightimg} src={"/images/Main/load.png"} alt="loadPic" />
        <Button variant="contained" color="primary" onClick={()=>ToStory()}>Next</Button>
      </div>
    
    </Container>
  );
};

export default Main;
