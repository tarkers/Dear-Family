import React, { useState, useEffect } from "react";
import Shape from "./Shape";
import ReceivePerson from "./ReceivePerson";
import Send from "./Send";
import QRcode from "./QRcode";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
const Main = () => {
  const [searchParams, _] = useSearchParams();
  const person = searchParams.get("person");
  const kind = searchParams.get("kind");
  const [page, SetPage] = useState({
    Shape: { show: "block", shape: "" },
    /*
    person: send person
    name :receive name
    reveivePerson : reveivePerson
    shape: card shape
    */
    ReceivePerson: { show: "none", name: "", reveivePerson: "" },
    Letter: { show: "none", link: "" },
    QRcode: { show: "none" },
  });
  const ToQRcode = (link) => {
    // console.log(link)
    SetPage({
      ...page,
      Letter: { show: "none", link: link },
      QRcode: { show: "block" },
    });
  };
  const ToReceivePerson = (shape) => {
    SetPage({
      ...page,
      Shape: { show: "none", shape: (shape+1).toString() },
      ReceivePerson: { ...page.ReceivePerson, show: "block" },
    });
    console.log(shape, "ttt");
  };
  const ToLetter = (name, reveivePerson) => {
    console.log(name, reveivePerson);
    SetPage({
      ...page,
      ReceivePerson: {
        ...page.ReceivePerson,
        reveivePerson: reveivePerson,
        name: name,
        show: "none",
      },
      Letter: { ...page.Letter, show: "block" },
    });
  };

  // useEffect(() => {
  //   props.setAuthenticated(true);
  // }, []);
  return (
    <>
      <Shape
        display={page.Shape.show}
        ShowNext={ToReceivePerson}
        param={{ person: person, kind: kind }}
      />
      <ReceivePerson display={page.ReceivePerson.show} ShowNext={ToLetter} />
      <Send
        display={page.Letter.show}
        data={{
          name: page.ReceivePerson.name,
          reveivePerson: page.ReceivePerson.reveivePerson,
          kind: kind,
          person: person,
          shape:page.Shape.shape
        }}
        ShowNext={ToQRcode}
      />
      <QRcode display={page.QRcode.show} imageLink={page.Letter.link} />
      <Outlet />
    </>
  );
};

export default Main;
