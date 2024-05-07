import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../feedback-Forms/Customer.css";
import cancelIcon from '../feedback-Forms/images/cancelIcon.png';
import hand_wave from "../feedback-Forms/images/hand_wave.png";
import Customerbg1 from "../feedback-Forms/images/Customerbg1.jpeg";
import Customerbg2 from "../feedback-Forms/images/Customerbg2.jpeg"


// For The Customer Feedback Form

const CustomerFeedback = () => {
    return (
      <div className="Body_Form">
        <div className="formMain">
          <div className="cancelDiv">
            <img src={cancelIcon} id="cancel_icon" alt="" />
          </div>
          <div className="formTitleDiv">
            <img src={hand_wave} id="hand_wave" alt="" />
            <h2 className="FormTitle">Help Us Improve</h2>
          </div>
          <hr />
          <div className="form_Details">
            <form action="" autoComplete="on">
              <div className="AppUsage">
                <label htmlFor="Usage" id="AppUsageLabel">
                  How often do you use our app?
                </label>
                <select name="" id="UsageInput">
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
                />
              </div>
              <div className="AppFeature">
                <label htmlFor="Feature" id="feature_Label">
                  What is your most used feature?
                </label>
                <input type="text" id="Feature" />
              </div>
              <div className="AppImprove">
                <label htmlFor="Improved" id="Improved_Label">
                  What would you like to see improved the most?
                </label>
                <input type="text" id="Improved" />
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
        </div>
      </div>
    );
};

export default CustomerFeedback;
