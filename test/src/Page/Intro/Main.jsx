import React, { useState ,useEffect} from "react";
import Loading from "./Loading";
import Envelope from "./Envelope";
import Go from "./Go";
import Gender from "./Gender";
import { useSearchParams } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
const Main = () => {
  const [searchParams] = useSearchParams();
  const [page, SetPage] = useState({
    Loading: { show: "block" },
    Envelope: { show: "block" },
    Go: { show: "block" },
    Gender: { show: "block" },
  });
  useEffect(() => {
   scrollTo(searchParams.get("section"),1000)
  },[]);
  const scrollTo = (element,delay=100,smooth="easeOutQuad") => {
    console.log(element);
    scroller.scrollTo(element, {
      duration: 300,
      delay: delay,
      smooth:smooth,
    });
  };
  Events.scrollEvent.register("end", function (to, element) {
    console.log("end", to, element);
  });
  
  return (
    <>
    {/* {scrollTo(searchParams.get("section"))} */}
      {/* <button onClick={()=>scrollTo(searchParams.get("section"))}>test</button> */}
      <Loading scrollToEnvelope={scrollTo} />
      <Element name="to-envelope" className="element">
        <Envelope scrollToGo={scrollTo} />
      </Element>
      <Element name="to-go" className="element">
        <Go toGender={scrollTo} />
      </Element>
      <Element name="to-gender" className="element">
        <Gender toGender={scrollTo} />
      </Element>
    </>
  );
};

export default Main;
