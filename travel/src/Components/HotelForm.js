import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HotelBookingImage from "../assets/ResturantBooking.jpg";
import Hero from "./Hero";

export default function ResturantForm() {
  const [resturant, setResturant] = useState({
    name: undefined,
    email: undefined,
    cnic: undefined,
    contactNumber: undefined,
    ResturantName: undefined,
    room: undefined,
    numberOfPersons: undefined,
    stay: undefined,
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
      const res = await axios.post(`/user/hotelBooking/${user._id}`, resturant);
    }
  };
  console.log(resturant);
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={HotelBookingImage}
        title="Hotel Booking"
        btnClass="hide"
      />
      <div className="from-container">
        <h1>Stay with us ;)</h1>
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

          <label className="form-label">Select Hotel:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="hotelName"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Pine View Hotel-Naran">Pine View Hotel-Naran</option>
            <option value={"Hotel One-Naran"}>Hotel One-Naran</option>
            <option value={"Troutland Hotel-Naran"}>
              Troutland Hotel-Naran
            </option>
            <option value={"Hill View Hotel-Shogran"}>
              Hill View Hotel-Shogran
            </option>
          </select>

          <label className="form-label">Select Room Type:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="room"
            required
            onChange={handleChange}
          >
            {" "}
            <option value=""></option>
            <option value={"Economy"}>Economy</option>
            <option value={"Luxury"}>Luxury</option>
            <option value={"Super Luxury"}>Super Luxury</option>
            <option value={"VIP"}>VIP</option>
            <option value={"WIP"}>VVIP</option>
          </select>

          <label className="form-label">Select No. of Persons:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            required
            id="numberOfPersons"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value={"1-2"}>1-2</option>
            <option value={"3-5"}>3-5</option>
            <option value={"5-8"}>5-8</option>
            <option value={"9-10"}>9-10</option>
          </select>

          <label>Select Arrival Date:</label>
          <input
            type="date"
            required
            id="arrivalDate"
            onChange={handleChange}
          ></input>

          <input
            placeholder="Number of days to Stay"
            type="number"
            min="1"
            max="30"
            id="stay"
            required
            onChange={handleChange}
          ></input>

          <textarea
            placeholder="Customer Note"
            rows="3"
            id="customerNote"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Book Hotel</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
