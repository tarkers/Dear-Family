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
  const [month, setMonth] = useState(3);
  const navigate = useNavigate();
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  useEffect(() => {
    setBoard(true);
    // getThing();
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [inform]);
  useEffect(() => {

    if (isVisible && !nomore) {
      setLoading(true);
      getThing();
    }
  }, [isVisible, nomore]);

  const cardBoard = (
    gender = "Boy",
    receive = "dad",
    text = "",
    person = ""
  ) => {
    return (
      <div
        className={styles.boardDiv}
        style={{
          background: `no-repeat center/90%  url("${
            process.env.PUBLIC_URL + "/images/Board/border.png"
          }")`,
        }}
      >
        <Row>
          <Col className={" d-flex justify-content-center"}>
            <img
              src={process.env.PUBLIC_URL + `/images/Board/${gender}.png`}
              alt="gender"
            />
            {/* </Col> */}
            <Col xs={5}>
              <label className={styles.labelBig}>{`我想對${person}說`}</label>
              <br></br>
              <label className={styles.labelSmall}>{text}</label>
            </Col>
            {/* <Col xs={3}> */}
            <img
              src={process.env.PUBLIC_URL + `/images/Board/${receive}.png`}
              alt="receive"
            />
          </Col>
        </Row>
      </div>
    );
  };
  const getThing = async (newmonth = false,searchMonth=month) => {
    setLoading(true)
    let limit = 4;
    let url =`https://dear-family-server.herokuapp.com/letters/?month=${searchMonth}&_page=${page}&_limit=${limit}`
    if(newmonth){
      setPage(1)
     url =`https://dear-family-server.herokuapp.com/letters/?month=${searchMonth}&_page=${1}&_limit=${limit}`
    }
    await axios
      .get(
        url
      )
      .then((resp) => {
        let data = "";
        data = resp.data;
        const orderCount = resp.headers["x-total-count"];
        let tmp = [];
        data.forEach((e) => {
          // console.log(e.gender)
          tmp.push(cardBoard(e.gender, e.receive, e.text, e.person));
        });
        newmonth ? setInform(tmp) : setInform([...inform, tmp]);

        if (page * limit > orderCount) {
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
        // backgroundColor: "#ae4439",
        position: "relative",
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
              if (month === 6) {
                setMonth(3);
                getThing(true,3)
              } else {
                setMonth(month + 1);
                getThing(true,month+1)
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
              navigate(`/letter?kind=Born&gender=Boy`);
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
