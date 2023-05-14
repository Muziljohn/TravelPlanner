import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TripImage from "../assets/trip.jpg";
import Hero from "./Hero";

export default function TripForm() {
  const [trip, setTrip] = useState({
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
    setTrip((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleClick = async (e) => {
    if (!user) {
      navigate("/login");
    } else {
      const res = await axios.post(`/user/tripBooking/${user._id}`, trip);
    }
  };
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={TripImage}
        title="Plan Trips"
        btnClass="hide"
      />
      <div className="from-container">
        <h1>Be a Companion of us ;)</h1>
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
            id="route"
            required
            onChange={handleChange}
          >
            {" "}
            <option value={""}></option>
            <option value={"Kaghan & Naran"}>Kaghan & Naran</option>
            <option value={"Shogran & Siri-Paye Meadows"}>
              Shogran & Siri-Paye Meadows
            </option>
            <option value={"Naran & Batakundi"}>Naran & Batakundi</option>
            <option value={"Naran & Babusar-Top"}>Naran & Babusar-Top</option>
          </select>

          <label className="form-label">Select Plan:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="plan"
            required
            onChange={handleChange}
          >
            <option value={""}>Plans</option>
            <option value={"Economy(3 Days)"}>Economy(3 Days)</option>
            <option value={"Luxury(5 Days)"}>Luxury(5 Days)</option>
            <option value={"Adventurous(7 Days)"}>Adventurous(7 Days)</option>
            <option value={"Nature Lovers(10 Days)"}>
              Nature Lovers(10 Days)
            </option>
          </select>

          <input
            type="number"
            min="1"
            max="30"
            placeholder="No. of Persons"
            id="numberOfPersons"
            required
            onChange={handleChange}
          />

          <label>Arrival Date & Time:</label>
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
          <button type="submit">Book</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
