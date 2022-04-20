import React, { createRef, useState, useLayoutEffect, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import styles from "./style.module.scss";
import { useScreenshot, createFileName } from "use-react-screenshot";
import axios from "axios";
const Send = ({ ShowNext, data, display = "block" }) => {
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    if (loading) {
      downloadScreenshot();
    }
  }, [loading]);

  const ref = createRef(null);
  const [_, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const downloadScreenshot = () => takeScreenShot(ref.current).then(SaveData);
  const SaveData = (
    image,
    {
      name = `to_${data.name}_${new Date().toLocaleTimeString()}`,
      extension = "jpg",
    } = {}
  ) => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        "https://dear-family-server.herokuapp.com/letters",
        {
          // image: image,
          name: name,
          text: getAllText(),
          person: data.name,
          gender: data.gender,
          receive: data.reveivePerson,
          month: new Date().getMonth() + 1,
        },
        { headers: headers }
      )
      .then((resp) => {
        console.log(
          resp.data.id,
          resp.data.name,
          resp.data.text,
          resp.data.person
        );

        const a = document.createElement("a");
        a.href = image;
        a.tag = `https://tarkers.github.io/Dear-Family/#/download/${resp.data.id}`;
        a.download = createFileName("jpg", name);
        saveImageServer(resp.data.id, image, name, a);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const saveImageServer = (imageId, image, name, a) => {
    axios
      .post("https://image-server17.herokuapp.com/images", {
        id: imageId,
        image: image,
        name: name,
      })
      .then(() => {
        setLoading(false);
        ShowNext(a);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setLineArray = () => {
    var tmp = [];
    for (let i = 0; i < 7; ++i) {
      tmp.push(
        <input
          tag=""
          autoComplete="off"
          className={styles.TypeText + " yinput"}
          maxLength={15}
          id={`line_${i}`}
          key={i}
          onKeyDown={(e) => {
            // console.log(e.target.value, "6416");
            if (e.key === "Enter") {
              changeLine(i + 1);
            } else if (e.key === "Backspace" && e.target.value === "") {
              changeLine(i - 1);
            } else if (e.target.value.length === 15) {
              changeLine(i + 1);
            }
          }}
        />
      );
    }
    return tmp;
  };
  const changeLine = (id) => {
    document.getElementById(`line_${id}`)?.focus();
  };
  const getAllText = () => {
    let content = "";
    let input = document.getElementsByClassName(`yinput`);
    for (let i = 0; i < input.length; i++) {
      content += input[i].value + "\n";
    }
    return content;
  };

  return (
    <>
      <Container
        fluid
        className={styles.PDiv}
        style={{
          display: `${display}`,
          position: "relative",
          padding: 20,
          // height: "100vh",
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/Letter/Send/back.png)`,
        }}
        ref={ref}
      >
        <Row style={{ paddingTop: "18%" }}>
          <Col className="d-inline-flex p-2 bd-highlight">
            <img
              style={{ width: "24%" }}
              // className={styles.LetterStyle}
              src={process.env.PUBLIC_URL + `/images/Letter/Send/logo.png`}
              alt="logo"
            />
          </Col>
        </Row>
        <Row>
          <Col
            className="d-inline-flex  d-flex align-items-end p-2 bd-highlight"
            xs={6}
          >
            <img
              className="p-1"
              style={{ width: "25%", height: "auto" }}
              src={
                process.env.PUBLIC_URL +
                `/images/Letter/Send/Head/${data.gender}.png`
              }
              alt="gender"
            />
            <img
              className="p-1"
              style={{ width: "25%", height: "auto" }}
              src={
                process.env.PUBLIC_URL +
                `/images/Letter/Send/Head/${data.reveivePerson}.png`
              }
              alt="reveivePerson"
            />
            <img
              className="p-1"
              style={{ width: "65%", height: "80%" }}
              src={process.env.PUBLIC_URL + `/images/Letter/Send/say.png`}
              alt="say"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "5%", height: "60%" }}>
          <Col xs={7}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={
                process.env.PUBLIC_URL +
                `/images/Letter/Send/${data.kind}/${data.gender}/${data.shape}.png`
              }
              alt="test"
            />
            <Row>
              <Col className="d-flex justify-content-start" xs={7}>
                <img
                  style={{ width: "inherit", height: "auto", paddingTop: "5%" }}
                  src={
                    process.env.PUBLIC_URL + `/images/Letter/Send/number.png`
                  }
                  alt="test"
                />
              </Col>
            </Row>
          </Col>

          <Col xs={5} style={{ padding: 20 }}>
            <Row>
              <Col className="d-flex justify-content-start align-items-center">
                <img
                  style={{ width: "25%", height: "auto" }}
                  src={process.env.PUBLIC_URL + `/images/Letter/Send/deco.png`}
                  alt="test"
                />
                <span>
                  <label
                    className={styles.SendInputStyle}
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    {data.name}
                  </label>
                </span>
              </Col>
            </Row>
            <Row>
              <Col>{setLineArray()}</Col>
            </Row>
            <div style={{ position: "absolute", bottom: "10%" }}>
              {!loading ? (
                <img
                  // className="align-self-end"
                  style={{ width: "50%", height: "auto", paddingTop: "5%" }}
                  src={process.env.PUBLIC_URL + `/images/Letter/Send/send.png`}
                  alt="send"
                  onClick={() => {
                    setLoading(true);
                  }}
                />
              ) : (
                <img
                  // className="align-self-end"
                  style={{ width: "80%", height: "auto", paddingTop: "5%" }}
                  src={process.env.PUBLIC_URL + `/images/Letter/Send/mail.png`}
                  alt="send"
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
      {loading && (
        <div className={styles.loadingDiv}>
          <CircularProgress
            className={styles.LoadingBar}
            color="inherit"
            thickness={5}
            size={150}
          />
        </div>
      )}
    </>
  );
};

export default Send;
