import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerFeedback from "../components/feedback-Forms/CustomerFeedback";
import "./SignUp.css";

const SignUp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false)
  const navigateToLogin = useNavigate();

  const handlenavigateLogin = () => {
    navigateToLogin("/");
  };

  // const seeFeedback = useNavigate();

  // const gotoFeedback = () => {
  //   seeFeedback("/CustomerFeedback");
  // }

  const validateSignUp = (e) => {
    e.preventDefault();

    var email = document.getElementById("emailUser");
    var name = document.getElementById("nameUser");
    var passCodeUser = document.getElementById("passwordUser");

    var valiDateEmail = email.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(valiDateEmail)) {
      alert("Invalid email");
    } else if (name.value.trim() === "") {
      alert("Invalid name");
    } else if (passCodeUser.value.trim() === "") {
      alert("A password is required");
    } else if (passCodeUser.value.trim().length <= 5) {
      alert("Password must be greater than 5 characters");
    } else {
      alert(`Sign Up Successful \n You are now logged in as ${name.value}`);
      setIsSignedUp(true); // Set state to indicate successful signup
      document.querySelector("form").reset();
    }
  };

  if (isSignedUp) {
    return <CustomerFeedback />;
  }


//   // Validate Form Sign Up
// var email = document.getElementById("emailUser");
//  var name = document.getElementById("nameUser");
//  var passCodeUser = document.getElementById("passwordUser");
//  var form = document.querySelector("form")
 
//   const runSignUp = (e) => {
//       e.preventDefault();
//     var valiDateEmail = email.value.trim();
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(valiDateEmail)) {
//       alert("invalid email");
//     } else if (name.value == "") {
//       alert("invalid name");
//     } else if (passCodeUser.value == "") {
//       alert("A password is required");
//     } else if (passCodeUser.value.length <= 5) {
//       alert("Password has to be greater than 5 characters");
//     } else {
//       alert(`Sign Up Succesful \n You are now logged in as ${name.value}`);
//       form.reset();
//     }
//     // var email = userEmail.value.trim();
//     // var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // var username = document.getElementById("userName");
//     // var userPasscode = document.getElementById("userPassword");
//     // var userEmail = document.getElementById("userEmail");
//     // e.preventDefault();
//     // if (!emailPattern.test(email)) {
//     //   alert("Invalid Email");
//     // } else if (username.value == "") {
//     //   alert("Please enter your name");
//     // } else if (userPasscode.value == "") {
//     //   alert("Please Enter a Password");
//     // } else if (userPasscode.value.length <= 5) {
//     //   alert("Password must be greater than 5 charaters");
//     // } else {
//     //   alert(`You are now logged in as ${username.value}`);
//     // }
//   };

  return (
    <div className="formBody">
      <div className="formContainer">
        <h2 className="title" >
          
          Sign Up
        </h2>
        <div className="form">
          <form action="" onSubmit={validateSignUp}>
            <div className="username">
              <input type="text" id="nameUser" placeholder="Enter Your name" />
            </div>
            <div className="email">
              <input
                // type="email"
                id="emailUser"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="passWord">
              <input type="password" id="passwordUser" placeholder="Password" />
            </div>
            <div className="loginHelpful">
              <div className="notice">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember me</label>
              </div>
              {/* <div className="forgot"> */}
              {/* Try seeing if you can re-direct them to a section where they can
                            tpe in their email ans reset their password */}
              {/* <p>Forgot Password?</p> */}
              {/* </div> */}
            </div>
            <div className="loginContainer">
              <button type="submit" id="signUpBtn">
                Sign Up
              </button>
            </div>
            <div className="Create_Account">
              <p className="signUpLink">
                Already have an account?{" "}
                <strong onClick={handlenavigateLogin}>Login</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
