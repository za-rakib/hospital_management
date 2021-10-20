import React, { useContext, useState } from "react";
import AppointmentByData from "./AppointmentByData/AppointmentByData";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Calendar from "react-calendar";
import { UserContext } from "../../App";
const Dashboard = () => {
  const [loggedInUser] = useContext(UserContext);
  //console.log(loggedInUser)
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    //console.log(date)
    let day = date.toLocaleString("en-US", { day: "2-digit" });
    let month = date.toLocaleString("en-US", { month: "short" });
    let year = date.getFullYear().toString();
    let mySelectedDate = day + " " + month + " " + year;
    //console.log(mySelectedDate);
    // setSelectedDate(mySelectedDate);
    fetch("https://glacial-everglades-10374.herokuapp.com/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mySelectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  };

  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <div className="col-md-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h1 className="dashboardLogo text-center mt-5">
          <span>HOSPITAL </span>MANAGEMENT
        </h1>
          <div className="row">
            <div className="col-md-5  calendar">
              <Calendar
                className="ms-5"
                onChange={handleDateChange}
                value={new Date()}
              />
            </div>
            <div className="col-md-7 appointmentData">
              <AppointmentByData appointments={appointments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
