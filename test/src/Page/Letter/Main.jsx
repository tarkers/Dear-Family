import React, { useState, useEffect } from "react";
import Shape from "./Shape";
import ReceivePerson from "./ReceivePerson";
import Letter from "./Letter";
import QRcode from "./QRcode";
import { Container } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
const Main = () => {
  const [page, SetPage] = useState({
    Shape: { show: "block", shape: "" },
    ReceivePerson: { show: "none", person: "", name: "" },
    Letter: { show: "none", link: "" },
    QRcode: { show: "none" },
  });
  const ShowQRcode = (link) => {
    // console.log(link)
    SetPage({
      ...page,
      Letter: { show: "none", link: link },
      QRcode: { show: "block" },
    });
  };
  const ShowReceivePerson = (shape) => {
    SetPage({
      ...page,
      Shape: { show: "none", shape: shape },
      ReceivePerson: { ...page.ReceivePerson, show: "block"  },
    });
    console.log(shape, "ttt");
  };
  const ShowLetter=(name, pic)=> {
    console.log(name, pic);
    SetPage({
      ...page,
      ReceivePerson: { ...page.ReceivePerson,person:pic,name:name, show: "none" },
      Letter: { ...page.Letter, show: "block" },
    });
  }

  // useEffect(() => {
  //   props.setAuthenticated(true);
  // }, []);
  return (
    <Container>
      <Shape display={page.Shape.show} ShowNext={ShowReceivePerson} />
      <ReceivePerson display={page.ReceivePerson.show} ShowNext={ShowLetter} />
      <Letter  display={page.Letter.show} data={{name:page.ReceivePerson.name,pic:page.ReceivePerson.pic}}  ShowNext={ShowQRcode} />
      <QRcode display={page.QRcode.show} imageLink={page.Letter.link} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shape ShowNext={ShowReceivePerson}/>} />
          <Route path="/receive" element={<ReceivePerson />} />
          <Route path="/teams" element={<Letter />} />
          <Route path="/qrcode" element={<QRcode letterImage={page.Letter.image} />} />
        </Routes>
      </BrowserRouter> */}
      <Outlet/>
    </Container>
  );
};

export default Main;
