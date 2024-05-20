import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../feedback-Forms/Customer.css";
import CancelIcon from "../feedback-Forms/images/cancelIcon.png";
import hand_wave from "../feedback-Forms/images/hand_wave.png";
import Customerbg1 from "../feedback-Forms/images/Customerbg1.jpeg";
import Customerbg2 from "../feedback-Forms/images/Customerbg2.jpeg";
import success_Icon from "../feedback-Forms/images/success_Icon.png";

// For The Customer Feedback Form

const CustomerFeedback = () => {

   const navigate_to_Home = useNavigate();

   const goto_Landing_page = () => {
     navigate_to_Home("/LandingPage");
   };

   
    const modalToggle = () => {
      const modalStrong = document.getElementById("modal_strong");
      modalStrong.style.display = "none";
    };


  //  Validate Feedback Form

  const FeedbackVal = (event) =>{
          event.preventDefault();
           const modalStrong = document.getElementById("modal_strong");
         
          // OftenUsed
          var OftenUsed = document.getElementById("UsageInput");
          // motivation
          var motivation_To_use = document.getElementById("Motivation");
          // usedFeature
          var usedFeature = document.getElementById("Feature");
          // improvedMost
          var improvedMost = document.getElementById("Improved")
          modalStrong.style.display = "block";
           document.querySelector("form").reset();
          
  }


  
  
  return (
    <div className="Body_Form">
      <div className="formMain">
        <div className="cancelDiv">
          <img
            src={CancelIcon}
            id="cancel_icon"
            onClick={goto_Landing_page}
            alt=""
          />
        </div>
        {/* Form Representation/Caption */}
        <h3 className="caption"></h3>
        <div className="formTitleDiv">
          <img src={hand_wave} id="hand_wave" alt="" />
          <h2 className="FormTitle"> Help Us Improve</h2>
        </div>
        <hr />
        <div className="form_Details">
          <form onSubmit={FeedbackVal} autoComplete="on">
            <div className="AppUsage">
              <label htmlFor="Usage" id="AppUsageLabel">
                How often do you use our App?
              </label>
              <select name="" id="UsageInput" required>
                <option value="Everyday">Everyday</option>
                <option value="Once a week">Once a week</option>
                <option value="Bi-weekly">Bi-weekly</option>
                <option value="Not Often">Not Often</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="Appmotivation">
              <label htmlFor="Motivation" id="Motivation_label">
                What is your motivation to use our app?{" "}
              </label>
              <input
                type="text"
                id="Motivation"
                placeholder="What problem does it solve for you?"
                required
              />
            </div>
            <div className="AppFeature">
              <label htmlFor="Feature" id="feature_Label">
                What is your most used feature?
              </label>
              <input type="text" id="Feature" required />
            </div>
            <div className="AppImprove">
              <label htmlFor="Improved" id="Improved_Label">
                What would you like to see improved the most?
              </label>
              <input type="text" id="Improved" required />
            </div>
            <div className="follow-up">
              <input type="checkbox" name="" id="receive" />
              <label htmlFor="receive" id="follow-Up">
                Receive personal follow-up to your feedback.{" "}
              </label>
            </div>
            <div className="submitDiv">
              <button type="submit" id="submit_Btn">
                Submit feedback
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

export default CustomerFeedback;
