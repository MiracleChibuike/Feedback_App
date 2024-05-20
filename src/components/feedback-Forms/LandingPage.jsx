import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../feedback-Forms/LandingPage.css";
import hand_wave from "../feedback-Forms/images/hand_wave.png";
import avatar_user from "../feedback-Forms/images/avatar_user.png";
import product_feedback from "../feedback-Forms/images/Product_Feedback.png"
import service_feedback from "../feedback-Forms/images/Service_Feedback.png";
import log_out from "../feedback-Forms/images/log_out.png"


const LandingPage = () => {

    const username_Text = localStorage.getItem("userData");

    const LoginNav = useNavigate();

    const Navigate_To_login = () =>{
        LoginNav("/SignUp")
    }

    

    const toggle_log_out_box = () => {
        const log_out_Box = document.querySelector(".log_OutContainer");
        if (log_out_Box.style.display = "none") {
            log_out_Box.style.display = "block"
        }
    }


    return (
      <div className="main">
        <h2 className="main_title">Feedback Collection App</h2>
        <div className="navbar">
          <div className="logo">
            {" "}
            <img src={hand_wave} id="LP_logo" alt="feedback_logo react_dev" />
          </div>
          <div className="accounts">
            <img
              src={avatar_user}
              id="user_Icon"
              alt="react_dev_user"
            />
            <div className="log_OutContainer">
              <img src={log_out} id="log_out_icon" alt="log_out from session" />{" "}
              <br />
              <button id="log_out_btn">
                <Link to={"/SignUp"}> Log out of session </Link>
              </button>
            </div>
            <div className="identifier">
              <p id="userData_Name">{username_Text}</p>
            </div>
          </div>
        </div>
        {/* Feedback Forms */}
        <div className="form_Container">
          <div className="welcomeMessage">
            <h1 id="displayBold_user">Welcome, {username_Text}</h1>
            <p>
              Please select the form you want to submit to help us improve our
              services to serve you better.
            </p>
          </div>

          <div className="form_Dislayer">
            <div className="product_feedback">
              <Link to={"/Customerfeedback"}>
                <img
                  src={product_feedback}
                  id="product_feedback_form"
                  alt="submit a survey for the product feedback"
                />
                <div className="product_info">
                  <h3>Product Feedback & Service Feedback</h3>
                  <p>
                    Help us enhance our products by sharing your thoughts <br />{" "}
                    and experiences. Your feedback is invaluable in helping{" "}
                    <br /> us understand what works well and what needs
                    improvement. <br /> Let us know how our products are meeting
                    your needs and <br /> where we can make them even better.
                  </p>
                </div>
              </Link>
            </div>
            <div className="service_feedback">
              <Link to={"/Appfeedback"}>
                <img
                  src={service_feedback}
                  id="service_feedback_form"
                  alt="submit a survey for the product feedback"
                />
                <div className="service_info">
                  <h3>Experience Feedback & Feature Feedback</h3>
                  <p>
                    Share your ideas and suggestions for new features or <br />
                    improvements to existing ones. Your insights help us <br />{" "}
                    innovate and prioritize the features that matter most to
                    you. <br /> Let us know what functionalities you'd like to
                    see and how <br /> we can make our products more useful for
                    you.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

};

export default LandingPage;
