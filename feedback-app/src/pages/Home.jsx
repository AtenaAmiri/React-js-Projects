import React from "react";
// import { BrowserRouter, Route, Router, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../component/Header";
import propTypes from "prop-types";
import FeedbackList from "../component/FeedbackList";
import FeedbackData from "../data/FeedbackData";
import FeedbackStats from "../component/FeedbackStats";
import FeedbackForm from "../component/FeedbackForm";
import AboutPage from "../pages/AboutPage";
// import { FeedbackProvider } from "../contex/FeedbackContex";
import AboutIconLink from "../component/AboutIconLink";
import { layer } from "@fortawesome/fontawesome-svg-core";
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = new Date().getTime();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are ypu sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <AboutIconLink />
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