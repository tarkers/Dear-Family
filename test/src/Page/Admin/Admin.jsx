import React, { useEffect, useState, useRef } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./style.module.scss";
const axios = require("axios");
const Admin = ({ setAdmin }) => {
  const [inform, setInform] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [disablenext, disableNext] = useState(false);
  const [logright, setlogright] = useState(true);
  const [logdata, setlogdata] = useState({ user: "", password: "" });
  const deleteItem = async (id) => {
    setLoading(true);
    let url = `https://dear-family-server.herokuapp.com/letters/${id}`;
    console.log(url)
    await axios
      .delete(url)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    return true;
  };
  const DataList = ({ text = "", person = "", id = "" }) => {
    const [deleted, setdeleted] = useState(false);
    return (
      // <div>
      <Row className="m-3">
        <Col>
          <Row>
            {" "}
            <label>人名: {person}</label>
          </Row>
          <Row>
            {" "}
            <label>文字: {text}</label>
          </Row>
        </Col>
        <Col xs={2}>
          <Button
            variant="danger"
            disabled={deleted}
            onClick={() => {
              setdeleted(true);
              deleteItem(id);
            }}
          >
            {deleted ? "已刪除" : "刪除"}
          </Button>
        </Col>
      </Row>
      // </div>
    );
  };

  const getData = async (newpage = page) => {
    let limit = 5;
    let url = `https://dear-family-server.herokuapp.com/letters/?_page=${newpage}&_limit=${limit}`;
    await axios
      .get(url)
      .then((resp) => {
        let data = "";
        data = resp.data;
        const orderCount = resp.headers["x-total-count"];
        console.log(orderCount);
        if (orderCount <= limit * newpage) {
          disableNext(true);
        }
        let tmp = [];
        data.forEach((e, i) => {
          // console.log(e.gender)
          tmp.push(
            <DataList key={i} id={e.id} text={e.text} person={e.person} />
          );
        });
        setInform(tmp);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(newpage);
    return true;
  };
  useEffect(() => {
    setAdmin(true);
  }, [setAdmin]);
  useEffect(() => {
    // getData();
  }, []);
  useEffect(() => {
    setLoading(false);
    console.log(inform);
  }, [inform]);
  // useEffect(() => {
  //  console.log(logdata)
  // }, [logdata]);
  const checkLog = () => {
    if (logdata.user === "admin" && logdata.password === "abc0000") {
      setLoading(true);
      getData(1);
      setlogright(false);
    } else {
      alert("輸入錯誤");
    }
  };
  return (
    <div className="mt-3">
      {logright ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>帳號</Form.Label>
            <Form.Control
              onChange={(e) => setlogdata({ ...logdata, user: e.target.value })}
              type="string"
              placeholder="account"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) =>
                setlogdata({ ...logdata, password: e.target.value })
              }
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" onClick={() => checkLog()}>
            確認
          </Button>
        </Form>
      ) : (
        <div>
          <Row>{inform}</Row>
          <Row className="mt-2">
            <Col className={" d-flex justify-content-around"}>
              <Button
                onClick={() => {
                  setLoading(true);
                  disableNext(false);
                  getData(page - 1);
                }}
                disabled={page === 1}
              >
                Prev
              </Button>
              <Button
                onClick={() => {
                  setLoading(true);
                  getData(page + 1);
                }}
                disabled={disablenext}
              >
                Next
              </Button>
            </Col>
          </Row>
        </div>
      )}
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
    </div>
  );
};

export default Admin;
