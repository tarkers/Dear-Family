import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import style from './style.module.scss'
const StoryPic = ({ShowNext,kind,display="block"}) => {
  
  return (
    <Container fluid style={{display:`${display}`}}>
      <Row>
        <img
          style={{ width: "100%", padding: "0" }}
          src={"/images/Story/text.png"}
          alt="select"
        />
        <Row className="p-0 m-0">
          <div  className={style.teset}>
            {/* <img
              style={{ width: "100%", padding: "0" }}
              src={"/images/Story/story.png"}
              alt="select"
            /> */}

            <Button className={style.absoluteButton} variant="contained" color="success" onClick={()=>ShowNext()}>
              Send
            </Button>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default StoryPic;
