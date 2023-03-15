import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <Link to="/">
              <button className="loginButton">Log In</button>
            </Link>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
