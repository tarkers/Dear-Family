import React, { createRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import style from "./style.module.scss";
import { useScreenshot, createFileName } from "use-react-screenshot";

const axios = require("axios");
const Letter = ({ ShowNext, display = "block" }) => {
  const [backline, setBackLine] = useState(false);
  const ref = createRef(null);
  const [_, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  // const Download = (image, { name = "img", extension = "jpg" } = {}) => {
  //   SaveData(image, "123");
  // };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(SaveData);
  // const [inputLines, setInputLines] = useState([
  //   <TextField
  //     id="standard-basic"
  //     variant="standard"
  //     onKeyDown={(e) => {
  //       if (e.key === "Enter") {
  //         //   typeWord();
  //       }
  //     }}
  //   />,
  // ]);
  const SaveData = (image, { name = "img", extension = "jpg" } = {}) => {
    axios
      .post("https://dear-family-server.herokuapp.com/letters", {
        image: image,
        name: name,
      })
      .then((resp) => {
        console.log(resp.data.id,name);
        const a = document.createElement("a");
        a.href =image;
        a.tag=`https://tarkers.github.io/Dear-Family/letter/${resp.data.id}`;
        a.download = createFileName("jpg", name);
        ShowNext(a);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setLineArray = () => {
    var tmp = [];
    for (let i = 0; i < 6; ++i) {
      tmp.push(
        <TextField
          margin="normal"
          id={`line_${i}`}
          key={i}
          variant="standard"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              changeLine(i + 1);
            } else if (e.key === "Backspace" && backline) {
              changeLine(i - 1);
            }
            setBackLine(false);
          }}
          onChange={(e) => {
            if (e.target.value === "") {
              setBackLine(true);
            }
          }}
        />
      );
    }
    return tmp;
  };
  const changeLine = (id, back = false) => {
    document.getElementById(`line_${id}`)?.focus();
    // alert(document.getElementById(`line_${id}`)?.innerHTML);

    // e.target.parentElement.elements[id + 1].focus();
    // e.preventDefault();
  };

  return (
    <Container fluid style={{ display: `${display}` }}>
      <Row className="justify-content-center" style={{ margin: "3rem" }}>
        {/* <Col>寄信頁面</Col> */}
      </Row>
      <Row ref={ref}>
        <Col className={`${style.letterDiv} mt-5`}>
          <Row style={{ margin: "1rem" }}>
            <Col className="justify-content-center">
              <img
                style={{ width: "50%" }}
                src={process.env.PUBLIC_URL+"/images/Letter/select.png"}
                alt="select"
              />
            </Col>
          </Row>
          <Row className={"pl-3"}>
            <Col style={{ fontSize: "18px", textAlign: "left" }}>
              <label>Dear: somebody</label>
            </Col>
          </Row>
          <Row id="linesDiv" className={"p-3 pt-0"}>
            {setLineArray()}
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: "2rem" }}>
        <Col>
          <Button
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
            onClick={() => downloadScreenshot()}
          >
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Letter;
