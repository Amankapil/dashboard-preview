import React, { useState } from "react";
import pic from "./code.png";
import "./preview.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LanguageIcon from '@mui/icons-material/Language';

const Preview = () => {
  // const [userd, setUserd] = useState(false);
  //   console.log(userd)

  const getdata = localStorage.getItem("data");
  const userdata = JSON.parse(getdata);

  return (
    <>
      <div className="continer ">
        <img className="imgg" src={pic} alt="" />
      </div>
      <div className="container mt-5">
        {getdata ? (
          <div className="right">
            <h3>{userdata[0].eventName}</h3>
            <h5>{userdata[0].banner}</h5>
            <span className="short">
              {" "}
              <h5>Short description:</h5>
              {userdata[0].Description}
            </span>
            <span className="area">
              <h3>what you will get ?</h3>
              {userdata[0].area}
            </span>
          </div>
        ) : (
          "please fill the detain to fix the metting"
        )}
        {getdata ? (
          <div className="cad">
            <div className="card">
              <CalendarMonthIcon className="calendar" />
              {userdata[0].date}
            </div>
            <div className="belowdata">
              <div className="video">
                <ScheduleIcon className="timee video " />

                {userdata[0].time}
              </div>
              <div className="link time">
                <VideoCameraFrontIcon className="video timee" />
                {userdata[0].link}
              </div>
              <div className="price video">
                <MonetizationOnIcon className=" timee video" />
                {userdata[0].price}
              </div>
              <div className="price video">
                <LanguageIcon className=" timee video" />
                {userdata[0].language}
              </div>
              <div className="duration video">
                Duration :{userdata[0].duration} Minute
              </div>
            </div>
          </div>
        ) : (
          "please fill the detain to fix the metting"
        )}
      </div>
    </>
  );
};

export default Preview;
