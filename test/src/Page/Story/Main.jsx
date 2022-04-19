import React, { useState, useRef, useEffect } from "react";
import Another from "./Another";
import Kind from "./Kind";
import styles from "./style.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import StoryPic from "./StoryPic";
import { setData } from "../../sound";
const Main = ({ setMusic }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  const kind = searchParams.get("kind");
 
  useEffect(() => {
    setMusic(kind);
    window.scrollTo(0, 0)
  }, []);
  const ClearData = (newkind) => {
    setMusic(newkind);
  };
  const initSetup = (newkind) => {
    let tmp = {};
    switch (newkind) {
      case "Born":
        tmp = { first: "Grow", second: "Strong" ,gender:gender};
        break;

      case "Grow":
        tmp = { first: "Born", second: "Strong" ,gender:gender};
        break;

      case "Strong":
        tmp = { first: "Born", second: "Grow" ,gender:gender};
        break;
      default:
        tmp = { first: "Grow", second: "Strong" ,gender:gender};
        break;
    }
    return tmp;
  };
  const navigate = useNavigate();
  const [page, SetPage] = useState({
    // Kind: { show: "block", kind: null },
    StoryPic: { show: "block" },
    Another: { show: "none", other: initSetup(kind) },
  });

  const ToStoryPic = (newkind) => {
    setSearchParams({
      kind: newkind,
      gender: gender,
    });
    ClearData(newkind);
    SetPage({
      // Kind: { show: "block", kind: null },
      StoryPic: { show: "block" },
      Another: { show: "none", other: initSetup(newkind) },
    });
    scroll.scrollToTop();
  };

  const ToAnother = () => {
    SetPage({
      ...page,
      StoryPic: { show: "none" },
      Another: { ...page.Another, show: "block" },
    });
    window.scrollTo(0, 0)
  };
  const ToSend = () => {
    navigate(`/letter?kind=${kind ?? "Born"}&gender=${gender}`);
  };
  return (
    <>
      <div className={styles.BackIcon + " d-flex justify-content-start"}>
        <img
          src={process.env.PUBLIC_URL + "/images/backIcon.png"}
          alt="back"
          onClick={() => navigate("/?section=Gender")}
        />
      </div>

      <StoryPic
        display={page.StoryPic.show}
        ShowNext={ToAnother}
        data={setData(kind).json}
        params={{ gender: gender, kind: kind }}
        // playMusic={playMusic}
      />
      {console.log(kind)}
      <Another
        other={page.Another.other}
        display={page.Another.show}
        ToSend={ToSend}
        ShowNext={ToStoryPic}
      />
    </>
  );
};

export default Main;
