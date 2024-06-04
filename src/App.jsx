import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CustomerFeedback from "./components/feedback-Forms/CustomerFeedback";
import AppFeedback from "./components/feedback-Forms/AppFeedback";
import LandingPage from "./components/feedback-Forms/LandingPage";
import Last_Feedback from "./components/feedback-Forms/Last_Feedback";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  if (isSignedUp) {
    return <LandingPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/SignUp"
          element={<SignUp setIsSignedUp={setIsSignedUp} />}
        />
        <Route path="/Customerfeedback" element={<CustomerFeedback />}>
          {" "}
        </Route>
        <Route path="/Appfeedback" element={<AppFeedback />}>
          {" "}
        </Route>
        <Route path="/LandingPage" element={<LandingPage />}>
          {" "}
        </Route>
        <Route path="/Last_Feedback" element={<Last_Feedback />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
