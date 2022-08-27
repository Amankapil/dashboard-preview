import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./home.css";
import { useNavigate } from 'react-router';


import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// import AddIcon from "@mui/icons-material/Add";
const Home = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/event')
  }
    return (
    <>
      <div className="home">
        
        <Sidebar />
        <div className="homedata">
          <h1>Welcome Ravi</h1>
          <h3 className="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <button onClick={handleClick} className="homebtn"> <AddCircleOutlineIcon className="icon"/> Add Event</button>
        </div>
      </div>
    </>
  );
};

export default Home;
