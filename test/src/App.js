import './App.css';
import {
  HashRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import * as t from "./Page";
import { setData } from './sound';
import React, { useState, useEffect, useRef } from "react";
// import SW from './SW';
function App() {
  // const [audioSrc, setAudioSrc] = useState(null)
  const [loadComplete,setLoadComplete]=useState(false)
  const btnRef=useRef()
  const audioRef = useRef(null);
  const setAudioSrc=(src)=>{
    audioRef.current.pause()
    audioRef.current.setAttribute('src', setData(src).music);
  }
  return (
    <div className="App">
      <t.Audio ref={audioRef}  props={""} />
      <button ref={btnRef} style={{display:"none"}} onClick={() => audioRef.current.play()}>Click me</button>
      <HashRouter >
        <Routes >
          <Route path="/" element={<t.Intro setMusic={setAudioSrc}  InitPlay={()=>btnRef.current.click()}/>} >
            {/* <Route path="*" element={<t.Intro />} /> */}
          </Route>
          <Route path="*" element={<t.Intro setMusic={setAudioSrc}/>} />
          <Route path="story" element={<t.Story setMusic={setAudioSrc} />} >
            {/* <Route path=":person" element={<t.Story />} /> */}
          </Route>
          <Route path="letter" element={<t.Letter setMusic={setAudioSrc}/>} />

          <Route path="download/:id" element={<t.Download />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
