
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomerFeedback from "../components/feedback-Forms/CustomerFeedback";
import "./Login.css";

const Login = () =>{

  const [isSignedUp, setIsSignedUp] = useState(false)

    // const navigateToSignUp = useNavigate();

        // const handleNavigate = () => {
        //     navigateToSignUp("/SignUp");
        // }

        // Validate Form

        const validateForm = (e) => {
             var form = document.querySelector("form");
            var username = document.getElementById("userName");
            var userPasscode = document.getElementById("userPassword");
                e.preventDefault()
            if (username.value == "") {
                alert("Please enter your user name");
            }else if (userPasscode.value == "") {
                alert("Please Enter your password")
            }else{
              alert(` Welcome Back ${username.value}`);
              setIsSignedUp(true); // Set state to indicate successful signup
            }
          
        };

        if (isSignedUp) {
          return <CustomerFeedback />;
        }

        // Login Container/Component

        return (
          <div className="formBody">
            <div className="formContainer">
              <h2 className="title">
                Welcome back <br />
                LogIn
              </h2>
              <div className="form">
                <form action="">
                  <div className="username">
                    <input type="text" id="userName" placeholder="UserName" />
                  </div>
                  <div className="passWord">
                    <input
                      type="password"
                      id="userPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="loginHelpful">
                    <div className="notice">
                      <input type="checkbox" id="check" />
                      <label htmlFor="check">Remember me</label>
                    </div>
                    <div className="forgot">
                      {/* Try seeing if you can re-direct them to a section where they can
                            tpe in their email ans reset their password */}
                      <p>Forgot Password?</p>
                    </div>
                  </div>
                  <div className="loginContainer">
                    <button type="submit" id="submitBtn" onClick={validateForm}>
                      Login
                    </button>
                  </div>
                  <div className="Create_Account">
                    <p className="signUpLink">
                      Don't have an account?{" "}
                      <strong>
                        {" "}
                        <Link to="/SignUp">Register</Link>{" "}
                      </strong>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
}

export default Login