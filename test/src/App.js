import './App.css';
import {
  HashRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import * as t from "./Page";
function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes >
          <Route path="/" element={<t.Intro />} >
            {/* <Route path="*" element={<t.Intro />} /> */}
          </Route>
          <Route path="*" element={<t.Intro />} />
          <Route path="story" element={<t.Story />} >
            {/* <Route path=":person" element={<t.Story />} /> */}
          </Route>
          <Route path="letter" element={<t.Letter />}/>

          <Route path="download/:id" element={<t.Download />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
