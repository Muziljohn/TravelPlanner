import React, { useContext } from "react";
import "./adminDashboard.css";
import Logo from "../assets/logo.png";
import home1 from "../assets/home1.svg";

import person from "../assets/person.svg";
import bus from "../assets/bus.svg";
import appointment1 from "../assets/appointment1.svg";
import calendar1 from "../assets/calendar1.svg";
import settings from "../assets/settings.svg";
import quer from "../assets/question-square.svg";
import hotel from "../assets/hotel-service.svg";
import Logout from "../assets/logout.svg";
import { Link as Link1 } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function AdminDashobard({ children }) {
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_SUCCESS" });
    navigate("/login");
  };
  return (
    <div style={{ boxSizing: "border-box" }}>
      <nav className="Sidebar ">
        <div className="Sidebar-inner">
          <header className="Sidebar-header">
            <img src={Logo} className="Sidebar-logo" />
          </header>
          <nav className="Sidebar-menu">
            <Link1 style={{ textDecoration: "none" }}>
              <button className="buttons">
                <img src={home1} />
                <span>Home</span>
              </button>
            </Link1>

            <Link1 to={"/AdminClient"} style={{ textDecoration: "none" }}>
              <button className="buttons">
                <img src={person} />
                <span>Users</span>
              </button>
            </Link1>

            <Link1 to={"/AddAdmin"} style={{ textDecoration: "none" }}>
              <button className="buttons ">
                <img src={calendar1} />
                <span>Add new Trip</span>
              </button>
            </Link1>
            <Link1 to={"/transport"} style={{ textDecoration: "none" }}>
              <button className="buttons ">
                <img src={bus} />
                <span>Transport</span>
              </button>
            </Link1>
            <Link1 to={"/hotelBooking"} style={{ textDecoration: "none" }}>
              <button className="buttons ">
                <img src={hotel} />
                <span>Hotel Service</span>
              </button>
            </Link1>
            <Link1 to={"/resturants"} style={{ textDecoration: "none" }}>
              <button className="buttons has-border">
                <img src={appointment1} />
                <span>Resturants Bookings</span>
              </button>
            </Link1>
            <Link1 to={"/userQuery"} style={{ textDecoration: "none" }}>
              <button className="buttons">
                <img src={quer} />
                <span>Queries</span>
              </button>
            </Link1>
            <button className="buttons">
              <img src={settings} />
              <span>Account Settings</span>
            </button>

            <button className="buttons" onClick={handleClick}>
              <img src={Logout} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </nav>
      <div
        className="content"
        style={{ marginLeft: "18rem", marginTop: "0", paddingTop: "0" }}
      >
        {children}
      </div>
    </div>
  );
}

export default AdminDashobard;
