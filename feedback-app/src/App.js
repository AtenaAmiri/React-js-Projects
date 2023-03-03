import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import propTypes from "prop-types";
import FeedbackList from "./component/FeedbackList";
import FeedbackData from "./data/FeedbackData";
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};
