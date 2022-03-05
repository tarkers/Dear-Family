import React, { useState ,useEffect} from "react";
import Loading from "./Loading";
import Envelope from "./Envelope";
import Go from "./Go";
import Gender from "./Gender";
import { useSearchParams } from 'react-router-dom';
import {
  Element,
  scroller,
} from "react-scroll";
const Main = () => {
  const [searchParams] = useSearchParams();
  const InitPage=()=>{
    if(searchParams.get("section")==="Gender"){
      return {
        Loading: { show: "block" },
        Envelope: { show: "block" },
        Go: { show: "block" },
        Gender: { show: "block" },
      }
    }else{
      return{
        Loading: { show: "block" },
        Envelope: { show: "none" },
        Go: { show: "none" },
        Gender: { show: "none" },
      }
    }
  }
  const [page, SetPage] = useState(InitPage);
  useEffect(() => {
    scrollTo(searchParams.get("section"),1000)
  },[]);
  const scrollTo = (element,delay=300,smooth="easeOutQuad") => {
    SetPage({...page,[element]:{show:"block"}})
    scroller.scrollTo(element, {
      duration: 300,
      delay: delay,
      smooth:smooth,
    });
  };
  
  return (
    <>
      <Loading display={page.Loading.show} scrollToEnvelope={scrollTo} />
      <Element  name="Envelope" className="element">
        <Envelope display={page.Envelope.show} scrollToGo={scrollTo} />
      </Element>
      <Element name="Go" className="element">
        <Go display={page.Go.show} toGender={scrollTo} />
      </Element>
      <Element name="Gender" className="element">
        <Gender  display={page.Gender.show}  toGender={scrollTo} />
      </Element>
    </>
  );
};

export default Main;
