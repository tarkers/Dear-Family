import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import * as t from "./Page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<t.Loading />} />
          <Route path="*" element={<t.Loading />} />
          <Route path="story" element={<t.Story />} />
          <Route path="letter" element={<t.Letter />}>
            <Route path=":id" element={<t.Download />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
