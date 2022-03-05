import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import styles from "./style.module.scss";
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
       <img className={styles.downloadDiv} 
       src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/download.png"}
       alt="download"
       onClick={()=>imageLink.click()}/>
       <img className={styles.backtoMain}
        src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/logo.png"}
        alt="logo"
       
       onClick={()=> navigate(`/`)}/>

    </Container>
  );
};

export default QRcode;
