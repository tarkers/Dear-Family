import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import styles from "./style.module.scss";
const QRcode = ({ imageLink = null, display = "block", ToBack }) => {
  // console.log(imageLink)
  const navigate = useNavigate();
  return (
    <Container fluid style={{ display: `${display}`, position: "relative" }}>
      <img
       
        style={{ width: "100%" }}
        src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/background.png"}
        alt="back"
      />

      <div className={styles.QRcodeStyle}>
        <QRCode
          value={imageLink.tag ?? ""}
          fgColor="#e5a96b"
          style={{ width: "inherit", height: "auto" }}
        />
      </div>

      {/* <Row> */}
      <div className={styles.downloadDiv}>
        <img
          className={styles.fadeStyle}
          style={{ height: "3vh", width: "auto" }}
          src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/fade.png"}
          alt="fade"
        />
        <div
          className=" d-flex justify-content-center"
          style={{ height: "12vh", marginTop: "10vh" }}
        >
          <img
            style={{ height: "inherit", width: "auto" }}
            className="p-3"
            src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/download.png"}
            alt="download"
            onClick={() => imageLink.click()}
          />
          <img
            style={{ height: "inherit", width: "auto" }}
            className="p-3"
            src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/board.png"}
            alt="download"
            onClick={() => navigate(`/board`)}
          />
          <img
            style={{ height: "inherit", width: "auto" }}
            className="p-3"
            src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/back.png"}
            alt="download"
            onClick={() => navigate(`/`)}
          />
        </div>
      </div>
      {/* </Row> */}
      <img
        className={styles.QRBack}
        src={process.env.PUBLIC_URL + "/images/Letter/Qrcode/backBtn.png"}
        alt="back"
        onClick={() => ToBack()}
      />
    </Container>
  );
};

export default QRcode;
