import React, { useState } from "react";
import Another from './Another'
import Kind from './Kind'
import { useParams, useNavigate } from "react-router-dom";
import StoryPic from './StoryPic'
const Main = () => {
  // const params = useParams().name;
  const { person } = useParams();
  const navigate =useNavigate();
  const [page, SetPage] = useState({
    // Gender: { show: "block", person: "" },
    Kind: { show: "block", kind:"" },
    StoryPic: { show: "none" },
    Another: { show: "none" },
  });
  const ToStoryPic=(kind)=>{
    SetPage({
      ...page,
      Kind: { show: "none", kind: kind },
      StoryPic: { show: "block",  },
    })
  }
  const ToAnother=()=>{
    SetPage({
      ...page,
      StoryPic: { show: "none"},
      Another: { show: "block",  },
    })
  }
  const ToSend=()=>{
    navigate(`/letter/${page.Kind.kind??"Born"}?person=${person}`);
  }
  return (
    <> 
      <Kind display={page.Kind.show} ShowNext={ToStoryPic} person={person??"Girl"}/>
      <StoryPic  display={page.StoryPic.show}  ShowNext={ToAnother} kind={page.Kind.kind}/>
      <Another display={page.Another.show} ToSend={ToSend}  ShowNext={ToStoryPic}/>
    </>
  )
}

export default Main