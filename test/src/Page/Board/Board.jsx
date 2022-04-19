import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import useOnScreen from "./visible";
const axios = require("axios");
const Board = ({ setBoard }) => {
  const [inform, setInform] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nomore, setNomore] = useState(false);
  const [page, setPage] = useState(1);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const navigate = useNavigate();
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    setLoading(false);
    console.log(inform);
  }, [inform]);
  useEffect(() => {
    console.log(isVisible);
    if (isVisible) {
      // setLoading(true);
      getThing();
    }
  }, [isVisible]);

  const cardBoard = (
    gender = "Boy",
    receive = "dad",
    text = "",
    person = "",
    id = ""
  ) => {
    return (
      <div
        key={id}
        className={styles.boardDiv}
        // style={{
        //   background: `no-repeat center/70%  url("${
        //     process.env.PUBLIC_URL + "/images/Board/border.png"
        //   }")`,
        // }}
      >
        <div className={styles.childDiv}>
          <img
            className={styles.imgBack}
            src={process.env.PUBLIC_URL + "/images/Board/border.png"}
            alt="gender"
          />
          <Row>
            <Col  className={" d-flex justify-content-center"}>
              <img
                style={{height:"150px",width:"auto"}}
                src={process.env.PUBLIC_URL + `/images/Board/${gender}.png`}
                alt="gender"
              />
              {/* </Col> */}
              <Col xs={9} style={{ maxWidth: "200px" }}>
                <label className={styles.labelBig}>{`我想對${person}說`}</label>
                <br></br>
                <label className={styles.labelSmall}>{text}</label>
              </Col>
              {/* <Col xs={3}> */}
              <img
               style={{height:"150px",width:"auto"}}
                src={process.env.PUBLIC_URL + `/images/Board/${receive}.png`}
                alt="receive"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  };
  const newMonthGet = async (searchMonth = month) => {
    let limit = 5;
    const url = `https://dear-family-server.herokuapp.com/letters/?month=${searchMonth}&_page=${1}&_limit=${limit}`;
    console.log("newmonth: ", url);
    await axios
      .get(url)
      .then((resp) => {
        let data = "";
        data = resp.data;
        const orderCount = resp.headers["x-total-count"];
        let tmp = [];
        data.forEach((e) => {
          tmp.push(cardBoard(e.gender, e.receive, e.text, e.person, e.id));
        });
        setInform([...tmp]);
        if (limit > orderCount) {
          setNomore(true);
          setLoading(false);
        }
        setPage(1);
        console.log(orderCount);
      })
      .catch((error) => {
        console.log(error);
      });
    return true;
  };
  const getThing = async () => {
    if (nomore) {
      return;
    }
    setLoading(true);
    let limit = 5;
    let url = `https://dear-family-server.herokuapp.com/letters/?month=${month}&_page=${page}&_limit=${limit}`;
    console.log(url);
    await axios
      .get(url)
      .then((resp) => {
        let data = "";
        data = resp.data;
        const orderCount = resp.headers["x-total-count"];
        let tmp = [];
        data.forEach((e) => {
          tmp.push(cardBoard(e.gender, e.receive, e.text, e.person, e.id));
        });
        setInform([...inform, tmp]);

        if (page * limit > orderCount) {
          console.log("nomore", page, limit);
          setNomore(true);
          setLoading(false);
        } else {
          setPage(page + 1);
        }
        console.log(orderCount);
      })
      .catch((error) => {
        console.log(error);
      });
    return true;
  };
  return (
    <Container
      fluid
      style={{
        padding: "0",
        width: "100vw",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        margin: 0,
      }}
    >
      <img
        className={styles.back}
        src={process.env.PUBLIC_URL + "/images/Board/back.png"}
        alt="back"
      />
      <Row className={styles.normal}>
        <Col className={styles.Col + " d-flex justify-content-between"}>
          <img
            className={styles.upbutton}
            src={process.env.PUBLIC_URL + "/images/Board/main.png"}
            alt="main"
            onClick={() => {
              setBoard(false);
              navigate(`/`);
            }}
          />
          <img
            className={styles.upbutton}
            src={process.env.PUBLIC_URL + `/images/Board/Month/${month}.png`}
            alt="month"
            onClick={() => {
              setNomore(false);
              setPage(1);
              if (month === 6) {
                console.log("test");
                newMonthGet(3);
                setMonth(3);
              } else {
                newMonthGet(month + 1);
                setMonth(month + 1);
              }
            }}
          />
          {/* {month} */}
          <img
            className={styles.upbutton}
            src={process.env.PUBLIC_URL + "/images/Board/letter.png"}
            alt="letter"
            onClick={() => {
              setBoard(false);
              navigate(`/letter?kind=Born&gender=Boy&write=true`);
            }}
          />
        </Col>
      </Row>
      <Row
        className={" d-flex justify-content-center"}
        style={{ marginTop: "5vh", height: "80vh", overflow: "scroll" }}
      >
        {/* <Col > */}
        {inform}
        {/* </Col> */}
        <div ref={ref}>
          {isVisible ? `Yep, I'm on screen` : "not in screen"}
        </div>
      </Row>
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
    </Container>
  );
};

export default Board;
