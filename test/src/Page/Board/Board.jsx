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
    console.log(inform)
  }, [inform]);
  useEffect(() => {
    if (isVisible) {
      // setLoading(true);
      getThing();
    }
  }, [isVisible]);
  useEffect(() => {
    // var myDiv = document.getElementById('containerDiv');
    // myDiv.top = 0;
  }, [month])

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

      >

        <div className={styles.childDiv} >
          <img
            className={styles.imgBack}
            src={process.env.PUBLIC_URL + `/images/Board/${receive}.png`}
            alt="gender"
          />
          <label className={styles.labelBig}>{`我想對${person}說`}</label>
          <br></br>
          <label className={styles.labelSmall}>{text}</label>
          {/* <div className={styles.labelDiv}>
            <label className={styles.labelBig}>{`我想對${person}說`}</label>
            <br></br>
            <label className={styles.labelSmall}>{text}</label>
          </div> */}
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
        // console.log(orderCount);
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
    // console.log(url);
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
          // console.log("nomore", page, limit);
          setNomore(true);
          setLoading(false);
        } else {
          setPage(page + 1);
        }
        // console.log(orderCount);
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
        padding: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        margin: 0,
      }}
    >

      <img
        className={styles.board_back}
        src={process.env.PUBLIC_URL + "/images/Board/intro_back.png"}
        alt="back"
      />
        <img
        className={styles.upper_shine }
        src={process.env.PUBLIC_URL + `/images/Board/upper_shine.png`}
        alt="month"
      />
        <img
        className={styles.lower_shine }
        src={process.env.PUBLIC_URL + `/images/Board/lower_shine.png`}
        alt="month"
      />
        <img
        className={styles.boardcloudright }
        src={process.env.PUBLIC_URL + `/images/Board/cloudright.png`}
        alt="month"
      />
        <img
        className={styles.boardcloudleft }
        src={process.env.PUBLIC_URL + `/images/Board/cloudleft.png`}
        alt="month"
      />
        <img
        className={styles.lowerpic }
        src={process.env.PUBLIC_URL + `/images/Board/lowerpic.png`}
        alt="month"
      />
        <img
        className={styles.nextIcon }
        src={process.env.PUBLIC_URL + `/images/Board/nextIcon.png`}
        alt="month"
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
            className={styles.upbutton + " m-2"}
            style={{ height: "4vh" }}
            src={process.env.PUBLIC_URL + `/images/Board/month.png`}
            alt="month"
          />
          {/* {console.log(month)} */}
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
      <img
        className={styles.monthtext + " m-2"}
        src={process.env.PUBLIC_URL + `/images/Board/Month/${month}月字.png`}
        alt="month"
      />
      <img
        className={styles.prev + " m-2"}
        src={process.env.PUBLIC_URL + `/images/Board/prev.png`}
        onClick={() => {
          setNomore(false);
          setPage(1);
          if (month === 3) {
            newMonthGet(6);
            setMonth(6);
          } else {
            newMonthGet(month - 1);
            setMonth(month - 1);
          }
        }}
        alt="prev"
      />
      <img
        className={styles.next + " m-2"}
        src={process.env.PUBLIC_URL + `/images/Board/next.png`}
        onClick={() => {
          setNomore(false);
          setPage(1);
          if (month === 6) {
            newMonthGet(3);
            setMonth(3);
          } else {
            newMonthGet(month + 1);
            setMonth(month + 1);
          }
          // setMonth(month + 1 === 7 ? 3 : month + 1);
        }}
        alt="next"
      />
      <Row
        className={" d-flex justify-content-center"}
        style={{ marginTop: "9vh", height: "70vh", overflow: "scroll" }}
      >
        <div id="containerDiv">
          {inform}
        </div>

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
      <img
        className={styles.boardremind + " m-2"}
        src={process.env.PUBLIC_URL + `/images/Board/remind.png`}
        alt="month"
      />
     
    </Container>
  );
};

export default Board;
