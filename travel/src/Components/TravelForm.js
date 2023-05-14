import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TravelImage from "../assets/travel.jpg";
import Hero from "./Hero";

export default function TravelForm() {
  const [resturant, setResturant] = useState({
    name: undefined,
    email: undefined,
    cnic: undefined,
    contactNumber: undefined,
    route: undefined,
    busType: undefined,
    arrivalDate: undefined,
    customerNote: undefined,
  });
  const handleChange = (e) => {
    setResturant((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleClick = async (e) => {
    if (!user) {
      navigate("/login");
    } else {
      const res = await axios.post(
        `/user/transportBooking/${user._id}`,
        resturant
      );
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={TravelImage}
        title="Travel"
        btnClass="hide"
      />
      <div className="from-container">
        <h1>Travel with us ;)</h1>
        <form onSubmit={handleClick}>
          <input
            placeholder="Name"
            required
            id="name"
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            required
            id="email"
            onChange={handleChange}
          />
          <input
            placeholder="CNIC"
            type="number"
            maxLength="13"
            required
            id="cnic"
            onChange={handleChange}
          />
          <input
            placeholder="Contact Number"
            type="number"
            maxLength="13"
            required
            id="contactNumber"
            onChange={handleChange}
          />

          <label className="form-label">Select Route:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onChange={handleChange}
            id="route"
            required
          >
            {" "}
            <option value={""}>Routes</option>
            <option value={"Naran-Babusar Top(Round Trips Only)"}>
              Naran-Babusar Top(Round Trips Only)
            </option>
            <option value={"Naran-Batakundi(Round Trips Only)"}>
              Naran-Batakundi(Round Trips Only)
            </option>
            <option value={"Naran-Shogran & Siri Paye(Round Trips Only)"}>
              Naran-Shogran & Siri Paye(Round Trips Only)
            </option>
            <option value={"Naran-Lake Saif-ul-Malook(Round Trips Only)"}>
              Naran-Lake Saif-ul-Malook(Round Trips Only)
            </option>
          </select>

          <label className="form-label">Select Bus Type:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onChange={handleChange}
            id="busType"
            required
          >
            {" "}
            <option value={""}>busType</option>
            <option value={"jeep"}>Jeep</option>
            <option value={"Vigo 4 by 4"}>Vigo 4 by 4</option>
            <option value={"Toyota Hiace(16 Seater)"}>
              Toyota Hiace(16 Seater)
            </option>
            <option value={"Coaster(30 Seater)"}>Coaster(30 Seater)</option>
          </select>

          <label>Select Arival Date & Time:</label>
          <input
            type="datetime-local"
            required
            id="arrivalDate"
            onChange={handleChange}
          ></input>

          <textarea
            placeholder="Customer Note"
            rows="3"
            id="customerNote"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Book </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
