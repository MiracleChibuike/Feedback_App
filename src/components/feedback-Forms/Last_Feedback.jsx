import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../feedback-Forms/Last_Feedback.css"
import CancelIcon from "../feedback-Forms/images/cancelIcon.png";
import hand_wave from "../feedback-Forms/images/hand_wave.png";
import Customerbg1 from "../feedback-Forms/images/Customerbg1.jpeg";
import Customerbg2 from "../feedback-Forms/images/Customerbg2.jpeg";
import success_Icon from "../feedback-Forms/images/success_Icon.png";
import lastfeedbackImg from "../feedback-Forms/images/last_feedback.png"

const Last_Feedback = () => {

    const navigate_landing = useNavigate()

    const Landing_nav = () => {
        navigate_landing("/LandingPage");
    }
 
    return (
      <div className="container">
        <div className="form_Body">
          <div className="canCel">
            <img
              src={CancelIcon}
              id="cancel_icon"
              onClick={Landing_nav}
              alt="canceL_Dev"
            />
          </div>
          <div className="heading">
            <h2>TRAINING FEEDBACK FORM</h2>
          </div>
          <div className="formHead">
            <form action="">
              <div className="form_Title">
                <label htmlFor="Form-Title" className="labelIn">
                  TITLE OF TRAINING{" "}
                </label>{" "}
                <br />
                <input
                  type="email"
                  placeholder="Ex. Web Development"
                  required
                  id="Form-Title"
                />
              </div>
              <div className="form_Location">
                <label htmlFor="Form-locate">LOCATION</label> <br />
                <input
                  type="text"
                  placeholder="Ex. India"
                  required
                  id="form-locate"
                />
              </div>
              <div className="trainers">
                <label htmlFor="form_trainer">TRAINERS</label> <br />
                <input
                  type="text"
                  placeholder="Ex. Pitarbas"
                  required
                  id="form_trainer"
                />
              </div>
              <div className="date">
                <label htmlFor="form_date">DATE</label> <br />
                <input type="date" placeholder="d/m/y" />
              </div>
            </form>
          </div>
        </div>
        <div className="Experience_rate">
          <p>
            Please Provide a rating for each of the statements below, by
            checking in the corresponding box
          </p>
          <div className="First_rating">
            <p>The training objectives were clearly defined at the beginning</p>
            <div className="check_rate">
              <div className="S_Agree">
                <input type="checkbox" id="S_Agree" /> <br />
                <label htmlFor="S_Agree">Strongly Agree</label>
              </div>
              {/* Agree */}
              <div className="Agree">
                <input type="checkbox" id="Agree" /> <br />
                <label htmlFor="Agree">Agree</label>
              </div>
              {/* Neutral */}
              <div className="Neutral">
                <input type="checkbox" id="Neutral" /> <br />
                <label htmlFor="Neutral">Neutral</label>
              </div>
              {/* Disagree */}
              <div className="Disagree">
                <input type="checkbox" id="Disagree" /> <br />
                <label htmlFor="Disagree">Disagree</label>
              </div>
              {/* Strongly_Disagree */}
              <div className="S_Disagree">
                <input type="checkbox" id="S_Disagree" /> <br />
                <label htmlFor="S_Disagree">Strongly Disagree</label>
              </div>
            </div>
          </div>
          {/* EXP 2 */}
          <div className="First_rating">
            <p>Participation was encouraged throughout the training.</p>
            <div className="check_rate">
              <div className="S_Agree_2">
                <input type="checkbox" id="S_Agree_2" /> <br />
                <label htmlFor="S_Agree_2">Strongly Agree</label>
              </div>
              {/* Agree */}
              <div className="Agree_2">
                <input type="checkbox" id="Agree_2" /> <br />
                <label htmlFor="Agree_2">Agree</label>
              </div>
              {/* Neutral */}
              <div className="Neutral_2">
                <input type="checkbox" id="Neutral_2" /> <br />
                <label htmlFor="Neutral_2">Neutral</label>
              </div>
              {/* Disagree */}
              <div className="Disagree_2">
                <input type="checkbox" id="Disagree_2" /> <br />
                <label htmlFor="Disagree_2">Disagree</label>
              </div>
              {/* Strongly_Disagree */}
              <div className="S_Disagree_2">
                <input type="checkbox" id="S_Disagree_2" /> <br />
                <label htmlFor="S_Disagree_2">Strongly Disagree</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Last_Feedback;
