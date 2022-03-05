import React, { createRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./style.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import style from "./style.module.scss";
import Input from "@mui/material/Input";
import { useScreenshot, createFileName } from "use-react-screenshot";

const axios = require("axios");
const Letter = ({ ShowNext, data, display = "block" }) => {
  const [backline, setBackLine] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const ref = createRef(null);
  const [_, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  // const Download = (image, { name = "img", extension = "jpg" } = {}) => {
  //   SaveData(image, "123");
  // };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(SaveData);
  const SaveData = (image, { name = `to_${data.name}_${new Date().toLocaleTimeString()}`, extension = "jpg" } = {}) => {
    axios
      .post("https://dear-family-server.herokuapp.com/letters", {
        image: image,
        name: name,
      })
      .then((resp) => {
        console.log(resp.data.id, name);
        const a = document.createElement("a");
        a.href = image;
        a.tag = `https://tarkers.github.io/Dear-Family/#/download/${resp.data.id}`;
        a.download = createFileName("jpg", name);
        ShowNext(a);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setLineArray = () => {
    var tmp = [];
    for (let i = 0; i < 4; ++i) {
      tmp.push(
        // <input ></input>
        <input
        type="text" 
        size="15" 
        className={styles.texttt}
        maxLength={15}
          // inputProps={{
          //   maxLength: 15,
          //   // textAlign: "center",
          //   style: {
          //     height: "2.4vh",
          //     width: "inherit",
          //     fontSize: "1vh",
          //     textAlign: "center",
          //     fontWeight: "bold",
          //     
          //   },
          // }}
          // style={{}}
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
    <Container
      fluid
      className={styles.PDiv}
      style={{
        display: `${display}`,
        position: "relative",
        width: "100vw",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Letter/Send/back.png)`,
      }}
    >
      <div className={styles.SendLetterPic} ref={ref}>
   
        <img
          className={styles.LetterStyle}
          src={process.env.PUBLIC_URL + `/images/Letter/Send/${data.kind}/${data.person}/${data.shape}.png`}
          alt="back"
        />
        <img
          className={styles.HeadStyle}
          src={process.env.PUBLIC_URL + `/images/Letter/Send/Head/${data.person}.png`}
          alt="head"
        />
        <img
          className={styles.ReceiveStyle}
          src={process.env.PUBLIC_URL +  `/images/Letter/Send/Head/${data.reveivePerson}.png`}
          alt="head"
        />
        <div className={styles.ReceiveName}>{data.name}</div>
        <div className={styles.LineDiv} id="linesDiv">
          {setLineArray()}
        </div>
      </div>
    
      {loading ? (
        <div className={styles.loadingDiv}>
          <CircularProgress
            className={styles.LoadingBar}
            color="inherit"
            thickness={5}
            size={150}
          />
        </div>
      ) : (
        <div className={styles.SendIcon}>
          <img
            className={styles.ReceiveStyle}
            src={process.env.PUBLIC_URL + "/images/Letter/Send/send.png"}
            alt="send"
            onClick={() => {
              setLoading(true);
              downloadScreenshot();
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default Letter;
