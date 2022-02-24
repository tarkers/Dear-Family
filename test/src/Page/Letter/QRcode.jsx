import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconButton } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import QRCode from "qrcode.react";
import {  createFileName } from "use-react-screenshot";
const QRcode = ({imageLink=null,display="block"}) => {
  // const Download = ({ name = "img", extension = "png" } = {}) => {
  //   const a = document.createElement("a");
  //   a.href = imageLink;
  //   a.download = createFileName(extension, Date().toLocaleString());
  //   a.click();
  // };
  
  return (
    <Container  style={{display:`${display}`}}>
      <Row>
        <Col className="justify-content-center mb-2 mt-5">
          <img
            src={"/images/Story/back.png"}
            alt={"title"}
            style={{ width: "50%" }}
            onClick={() => console.log("click")}
          />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center m-2"  style={{ width: "45%" }}  >
          <QRCode value={imageLink.tag??""}  style={{ width: "inherit",height:"auto" }}/>
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center " >
          <IconButton
            color="primary"
            aria-label="doenload picture"
            component="span"
            onClick={()=>imageLink.click()}
          >
            <DownloadForOfflineIcon sx={{ fontSize: 60 }} />
          </IconButton>
          
        </Col>
      </Row>
     
      {/* <DownloadForOfflineIcon fontSize="50px" /> */}
    </Container>
  );
};

export default QRcode;
