import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">PauloCorrea</h3>
          <span className="loginDesc">
            Connect with friends and the world <br /> around you on PauloCorrea
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sing Up</button>
            <Link to="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
