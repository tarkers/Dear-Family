import React, { useState } from "react";
import Another from './Another'
import Kind from './Kind'
import { useParams, useNavigate } from "react-router-dom";
import StoryPic from './StoryPic'
const Main = () => {
  const params = useParams().name;
  const navigate =useNavigate();
  const [page, SetPage] = useState({
    // Gender: { show: "block", person: "" },
    Kind: { show: "block", kind:"" },
    StoryPic: { show: "block" },
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
  return (
    <>
      {/* <Gender display={page.Gender.show} ShowNext={ToKind} /> */}
      {/* <Kind display={page.Kind.show} ShowNext={ToStoryPic} person={params??"girl"}/> */}
      <StoryPic  display={page.StoryPic.show}  ShowNext={ToAnother} kind={page.Kind.kind}/>
      <Another display={page.Another.show} ShowNext={ToStoryPic} />
    </>
  )
}

export default Main