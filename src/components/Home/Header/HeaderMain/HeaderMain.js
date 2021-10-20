import React from "react";
import { Link } from "react-router-dom";
import test from "../../../../image/disease-test-2.jpg";
import Button from "../../../UI/Button/Button";
import './HeaderMain.css'

export const HeaderMain = () => {
  return (
    <main className="container-fluid">
      <div
        style={{ height: "300px ", marginTop:"100px" }}
        className="row d-flex align-items-center mt-5 pt-5"
      >
        <div className="col-md-4 offset-md-1  header-main">
          <h1 style={{ color: "#3a4256" }}>Treatments</h1>
          <p className="">
            In every health care setting, including hospitals, coordination is the soul of hospital management. Hospital management relates to all aspects of a hospital; a coordination of all elements of a hospital.
          </p>
          <Link to="/appointment">
            <Button className="btn btn-primary"> GET APPOINTMENT</Button>
          </Link>
        </div>
        <div className="col-md-6 image">
          <img className="img-fluid" src={test} alt="" />
        </div>
      </div>
    </main>
  );
};
