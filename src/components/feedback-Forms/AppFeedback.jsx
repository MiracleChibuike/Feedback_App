import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../feedback-Forms/AppFeedback.css";
import CancelIcon from "../feedback-Forms/images/cancelIcon.png";
import hand_wave from "../feedback-Forms/images/hand_wave.png";
import Customerbg1 from "../feedback-Forms/images/Customerbg1.jpeg";
import Customerbg2 from "../feedback-Forms/images/Customerbg2.jpeg";
import success_Icon from "../feedback-Forms/images/success_Icon.png";

const AppFeedback = () => {

  const navigate_to_Home = useNavigate();

  const goto_Landing_page = () =>{
    navigate_to_Home("/LandingPage");
  }
  const rate = [document.querySelectorAll(".rate")];

  const toggleBtns = (e) => {
    setTimeout(function () {
      const button = e.target;
      rate.forEach((rates) => {
        button.classlist.add("toggleButtonsPref");
      });
    }, 1000);
  };
  console.log(rate);

  const remove_Modal_Icon = document.querySelector(".removeMode");

  // Validate App feedback to store responses to the console or alert

  const validate_App = (event, modalToggle) => {
    event.preventDefault();

    const modalDisplay = document.querySelector(".modal");
    var featureResponse = document.getElementById("feature");
    var email = document.getElementById("Email_client");
    var error_Msg = document.querySelector(".errorMsg");
    var response_error_Msg = document.querySelector(".response_error_Msg");

    var validateApp_Email = email.value.trim();
    var App_EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!App_EmailPattern.test(validateApp_Email)) {
      email.style.border = "1px solid var(--clr-error)";
      error_Msg.style.display = "block";
    } else if (featureResponse.value.trim() === "") {
      featureResponse.style.border = "1px solid var(--clr-error)";
      response_error_Msg.style.display = "block";
    } else {
      modalDisplay.style.display = "block";
      console.log(`User Response: ${featureResponse.value}  \n
                User Email: ${email.value}`);
    }

    document.querySelector("form").reset();
  };

  const modalToggle = () => {
    const modalStrong = document.getElementById("modal_strong");
    modalStrong.style.display = "none";
  };

  return (
    <div className="App_Container">
      <div className="App_Form">
        <div className="cancelDiv">
          <img
            src={CancelIcon}
            id="cancel_icon"
            onClick={goto_Landing_page}
            alt=""
          />
        </div>
        <div className="caption">
          <h2 className="titleHeading">{""} Customer satisfaction survey</h2>
          <p>
            How likely are you to recommend our <br /> service to a friend or
            colleague?
          </p>
        </div>
        <div className="preference">
          <div className="prefernceButtons">
            <button className="rate">0</button>
            <button className="rate">1</button>
            <button className="rate">2</button>
            <button className="rate">3</button>
            <button className="rate">4</button>
            <button className="rate">5</button>
          </div>
          <div className="secondPref">
            <button className="rate">6</button>
            <button className="rate">7</button>
            <button className="rate">8</button>
            <button className="rate">9</button>
            <button className="rate">10</button>
          </div>
          <div className="likes_Rate">
            <div className="extreme">
              <small>0 - Extremely Unlikely</small>
            </div>
            <div className="LikeMore">
              {" "}
              <small>10 - Extremely Likely</small>{" "}
            </div>
          </div>
        </div>
        {/* Form Container for App Feedback */}
        <div className="Comments">
          <form onSubmit={validate_App} autoComplete="on">
            <div className="feature_to_Add">
              <label htmlFor="feature">
                What feature can we add to improve?
              </label>
              <input
                type="text"
                placeholder="We'd love to hear your suggestions"
                id="feature"
              />
              <small className="response_error_Msg">
                This field is required
              </small>
            </div>
            <div className="client_email">
              <label htmlFor="Email_client">Email (optional)</label>
              <input
                type="email"
                placeholder="youremail.com"
                id="Email_client"
                autoComplete="email"
              />
              <small className="errorMsg">Please enter a valid email</small>
            </div>
            <div className="App_Feedback_submit">
              <button id="submit_formfeedback" type="submit">
                SEND FEEDBACK
              </button>
            </div>
          </form>
        </div>
        {/* MODAL TO SHOW A SUCCESSFUL USER SUBMISSION */}
        <div className="modal" id="modal_strong">
          <div className="modal_Display">
            <div className="modalContainer">
              <div className="cancelDiv">
                <img
                  src={CancelIcon}
                  // id="cancel_icon"
                  className="removeMode"
                  onClick={modalToggle}
                  alt=""
                />
              </div>
              <p className="feedback_success_Msg">
                Feedback submitted succesfully <br />
                <img
                  src={success_Icon}
                  alt="successful feedback indicator"
                  id="successful"
                />{" "}
                <br />
                Thank You
              </p>
              {/* Button Home */}
              <button id="landing_route_btn" onClick={goto_Landing_page}>
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeedback;
