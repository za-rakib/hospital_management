import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext);
  console.log(" from nav", loggedInUser);
  return (
    <nav className="navbar-main  navbar-expand-lg ml-auto text-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2"> <FontAwesomeIcon icon={faBars} /></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul>
            <div className="name mt-3">
              <h2>
                <span to="/home">HOSPITAL</span>  MANAGEMENT
              </h2>
            </div>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link ms-3 active "
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link ms-3 " to="/dashboard">
                Dashboard
              </Link>
            </li>
            {loggedInUser.isSigned ? (
              <img className='nav-img p-2' src={loggedInUser.photo} alt="" />
            ) : (
              <li className="nav-item">
                <Link className="nav-link ms-3 " to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
