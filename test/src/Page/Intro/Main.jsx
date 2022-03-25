import React, { useState, useEffect, useRef } from "react";
import Loading from "./Loading";
import Envelope from "./Envelope";
import Go from "./Go";
import Gender from "./Gender";
import Kind from "./Kind";
import Swiper from "react-id-swiper";
import { useSearchParams } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
const Main = ({ setMusic, InitPlay }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  /* IF Get The Gender Link auto scroll to link*/
  const InitPage = () => {
    if (searchParams.get("section") === "Gender") {
      return {
        Loading: { show: "block" },
        Envelope: { show: "block" },
        Go: { show: "block" },
        Gender: { show: "block" },
        Kind: { show: "none" },
      };
    } else {
      return {
        Loading: { show: "block" },
        Envelope: { show: "none" },
        Go: { show: "none" },
        Gender: { show: "none", gender: null },
        Kind: { show: "none" },
      };
    }
  };
  const [page, SetPage] = useState(InitPage);


  const scrollTo = (element, delay = 300, smooth = "easeOutQuad") => {
    SetPage({ ...page, [element]: { show: "block" } });
    scroller.scrollTo(element, {
      duration: 300,
      delay: delay,
      smooth: smooth,
    });
  };

  const ToKind = (gender) => {
    SetPage({
      ...page,
      Kind: { show: "block" },
      Gender: { show: "block", gender: gender },
    });
    scroller.scrollTo("Kind", {
      duration: 300,
      delay: 300,
      smooth: "easeOutQuad",
    });
  };
  const ToEnvelope = () => {
    SetPage({ ...page, Envelope: { show: "block" } });
    scroller.scrollTo("Envelope", {
      duration: 300,
      delay: 300,
      smooth: "easeOutQuad",
    });
  };
  const ToGender = () => {
    SetPage({
      ...page,
      Loading: { show: "none" },
      Envelope: { show: "none" },
      Go: { show: "none" },
      Gender: {...page.Gender, show: "block"},
      Kind: {show: "none" },
    });
  };
  const ToStory = (name) => {
    navigate(`/story?kind=${name ?? "Born"}&gender=${page.Gender.gender}`);
  };
  useEffect(() => {
    setMusic();  
    if(searchParams.get("section")==="Gender"){
      console.log(searchParams.get("section"))
      SetPage({
        ...page,
        Loading: { show: "none" },
        Envelope: { show: "none" },
        Go: { show: "none" },
        Gender: {...page.Gender, show: "block"},
      });
    }
    
  }, []);
  return (
    <>
      <Loading
        display={page.Loading.show}
        ToEnvelope={(e) => {
          ToEnvelope();
          InitPlay();
        }}
      />
      <Element name="Envelope" className="element">
        <Envelope display={page.Envelope.show} scrollToGo={scrollTo} />
      </Element>
      <Element name="Go" className="element">
        <Go display={page.Go.show} toGender={()=>ToGender()} />
      </Element>
      <Element name="Gender" className="element">
        <Gender display={page.Gender.show} ToKind={ToKind} />
      </Element>
      <Element name="Kind" className="element">
        <Kind
          display={page.Kind.show}
          gender={page.Gender.gender ?? "Boy"}
          ToStory={ToStory}
        />
      </Element>
    </>
  );
};

export default Main;
