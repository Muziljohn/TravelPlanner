import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import dineImage from "../assets/dine-in.jpg";
import Hero from "./Hero";

export default function ResturantFrom() {
  const [resturant, setResturant] = useState({
    name: undefined,
    email: undefined,
    cnic: undefined,
    contactNumber: undefined,
    ResturantName: undefined,
    tables: undefined,
    numberOfPersons: undefined,
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
        `/user/resturantBooking/${user._id}`,
        resturant
      );
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={dineImage}
        title="Resturant Booking"
        btnClass="hide"
      />
      <div className="from-container">
        <h1>Dine with us ;)</h1>
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
            id="conactNumber"
            onChange={handleChange}
          />

          <label className="form-label">Select Resturant:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="resturantName"
            onChange={handleChange}
            required
          >
            <option value={""}>Resturants</option>
            <option value={"Food Planet-Naran"}>Food Planet-Naran</option>
            <option value={"Mr. Broaster-Naran"}>Mr. Broaster-Naran</option>
            <option value={"Lasani Resturant-Naran"}>
              Lasani Resturant-Naran
            </option>
            <option value={"Mc'Donalds-Shogran"}>Mc'Donalds-Shogran</option>
          </select>

          <label className="form-label">No. of Tables</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="tables"
            onChange={handleChange}
          >
            {" "}
            <option value={""}>Tables</option>
            <option value={"1-Small"}>1-Small</option>
            <option value={"1-Large"}>1-Large</option>
            <option value={"2-Large"}>2-Large</option>
            <option value={"Floor"}>Floor</option>
            <option value={"Hall"}>Hall</option>
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
            {" "}
            <option value={""}>Number of Persons</option>
            <option value={"1-2"}>1-2</option>
            <option value={"3-5"}>3-5</option>
            <option value={"5-8"}>5-8</option>
            <option value={"9-10"}>9-10</option>
          </select>

          <label>Select Arrival Date & Time:</label>
          <input
            type="datetime-local"
            required
            id="arrivalTime"
            onChange={handleChange}
          ></input>

          <textarea
            placeholder="Customer Note"
            rows="3"
            id="cusomerNote"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Book</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
