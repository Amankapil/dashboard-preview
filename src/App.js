// import logo from './logo.svg';
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./components/event/Event";
import Preview from "./components/event/Preview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="event" element={<Event/>}></Route>
          <Route path="preview" element={<Preview />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
