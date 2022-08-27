import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./event.css";
import { useNavigate } from "react-router";

const Event = () => {
  const [Data, setData] = useState([]);
  const [user, setUser] = useState({
    eventName: "",
    banner: "",
    Description: "",
    area: "",
    language: "",
    price: "",
    duration: "",
    date: "",
    link: "",
    time: "",
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });

    // console.log(name, value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("data", JSON.stringify([...Data, user]));
    navigate("/preview");
  };
  let navigate = useNavigate();

  function handleClick() {
    navigate("/preview");
  }

  function handleClik() {
    navigate("/");
  }
  return (
    <>
      <div className="event">
        <div className="header">
          <div className="back">
            <button className="backbtn" onClick={handleClik}>
              <ArrowBackIcon className="icon" />
              back
            </button>
          </div>
          <div className="prev">
            <button onClick={handleClick} className="prevbtn">
              Preview
            </button>
          </div>
        </div>
        <h2>Create Event</h2>
        <div className="formm">
          <form>
            <div className="side-1">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text ml-5" id="inputGroup-sizing-sm">
                  Event Name
                </span>
                <input
                  type="text"
                  name="eventName"
                  maxLength="80"
                  value={user.eventName}
                  onChange={handlechange}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text mx-l" id="inputGroup-sizing-sm">
                  Banner
                </span>
                <input
                  type="text"
                  name="banner"
                  value={user.banner}
                  onChange={handlechange}
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text " id="inputGroup-sizing-sm">
                  short Description
                </span>

                <input
                  type="text"
                  name="Description"
                  maxLength="100"
                  value={user.Description}
                  onChange={handlechange}
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="mb-3">
                <textarea
                  name="area"
                  value={user.area}
                  onChange={handlechange}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="side-2">
              <select
                class="form-select mb-3"
                name="language"
                value={user.language}
                onChange={handlechange}
                aria-label="Default select example"
              >
                <option>Select language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text ml-5" id="inputGroup-sizing-sm">
                  Price (in INR)
                </span>
                <input
                  name="price"
                  value={user.price}
                  onChange={handlechange}
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text ml4" id="inputGroup-sizing-sm">
                  Duration (in minutes)
                </span>

                <input
                  type="data"
                  name="duration"
                  value={user.duration}
                  onChange={handlechange}
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text m" id="inputGroup-sizing-sm">
                  Chose date
                </span>

                <input
                  type="date"
                  name="date"
                  value={user.date}
                  onChange={handlechange}
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div  class="input-group input-group-sm mb-3">
                <span class="input-group-text ml-5" id="inputGroup-sizing-sm">
                  Link
                </span>

                <input
                  type="link"
                  name="link"
                  value={user.link}
                  onChange={handlechange}
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <div class="input-group input-group-sm mb-">
                <span class="input-group-text ml-5" id="inputGroup-sizing-sm">
                  Time
                </span>
                <input
                  type="time"
                  name="time"
                  value={user.time}
                  onChange={handlechange}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              
            </div>
          </form>
          <div className="savebtn mt-5">
            <button onClick={handlesubmit} class="btn btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
