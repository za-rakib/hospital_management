import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsAlt,
  faCalendarCheck,
  faUserFriends,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isDoctor, setDoctor] = useState(false);
  console.log(isDoctor);
  useEffect(() => {
    fetch("https://glacial-everglades-10374.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({email:loggedInUser.email})
    })
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [loggedInUser.email]);

  return (
    <div className="sidebar">
      <div id="mySidenav" className="sidenav">
        <Link to="/dashboard" className="icon-a">
          <FontAwesomeIcon icon={faArrowsAlt} />
          &nbsp;&nbsp; Dashboard
        </Link>
        <Link to="/home" className="icon-a">
          <FontAwesomeIcon icon={faHouseUser} /> &nbsp;&nbsp; Home
        </Link>
       
          <div>
            <Link to="/appointment" className="icon-a">
              <FontAwesomeIcon icon={faCalendarCheck} /> &nbsp;&nbsp;Appointment
            </Link>
            <Link to="/patients" className="icon-a">
              <FontAwesomeIcon icon={faUserFriends} /> &nbsp;&nbsp;Patients
            </Link>
            {/* <Link to="/addDoctor" className="icon-a">
              <FontAwesomeIcon icon={faUserMd} /> &nbsp;&nbsp; Add Doctor
            </Link> */}
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
