import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CustomerFeedback from "./components/feedback-Forms/CustomerFeedback";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  if (isSignedUp) {
    return <CustomerFeedback />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/SignUp"
          element={<SignUp setIsSignedUp={setIsSignedUp} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
