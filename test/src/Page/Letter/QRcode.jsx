import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import QRCode from "qrcode.react";
import styles from "./style.module.scss";
import {  createFileName } from "use-react-screenshot";
const QRcode = ({imageLink=null,display="block"}) => {
  const navigate =useNavigate();
  return (
    <Container  style={{display:`${display}`,position:"relative"}}>
       <img
        style={{ width: "100%" }}
        src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/back.png"}
        alt="back"
      />
       <div className={styles.QRcodeStyle}>
       <QRCode value={imageLink.tag??""} fgColor="#e5a96b"  style={{ width: "inherit",height:"auto" }}/>
      </div>
       <div className={styles.downloadDiv} onClick={()=>imageLink.click()}/>
       <div className={styles.backtoMain} onClick={()=> navigate(`/`)}/>

    </Container>
  );
};

export default QRcode;
