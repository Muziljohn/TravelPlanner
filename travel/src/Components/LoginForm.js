import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import image from "../assets/1.jpg";
import "./Login.css";
import "material-symbols";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/user/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  console.log(user);
  return (
    <div className="login-body">
      <div class="login">
        <div class="avatar">
          <img alt="avatar" src={image} />
        </div>
        <h2>Login</h2>
        <h3>Welcome back</h3>

        <form class="login-form">
          <div class="textbox">
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <span class="material-symbols-outlined"> account_circle </span>
          </div>
          <div class="textbox">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <span class="material-symbols-outlined"> lock </span>
          </div>
          <button type="submit" onClick={handleClick}>
            LOGIN
          </button>
          <p>Don't Have an Account? </p>
          <a href="/signup">Signup Here</a>
        </form>
      </div>
    </div>

    // <div className="from-container">
    // <h1>Send a message to us!</h1>
    // <form>
    //     <input placeholder="Name"/>
    //     <input placeholder="Email"/>
    //     <input placeholder="Subject"/>
    //     <textarea placeholder="Message" rows="4"></textarea>
    //     <button>Send Message</button>

    // </form>
    // </div>
  );
}
