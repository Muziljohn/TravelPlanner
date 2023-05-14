import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pic from "../assets/logo.svg";
import "./Signup.css";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", credentials);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
    console.log(credentials);
  };
  return (
    <div className="body">
      <div className="background"></div>
      <div className="card">
        <img className="logo" alt="logo" src={pic} />
        <h2>Create Account</h2>
        <form className="form">
          <input
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleClick}>
            SIGN UP
          </button>
        </form>
        <footer>
          Existing users, sign in
          <a href="/login"> here</a>
        </footer>
      </div>
    </div>
  );
}
