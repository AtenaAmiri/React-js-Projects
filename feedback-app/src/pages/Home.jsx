import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Header from "../component/Header";
import propTypes from "prop-types";
import FeedbackList from "../component/FeedbackList";
import FeedbackStats from "../component/FeedbackStats";
import FeedbackForm from "../component/FeedbackForm";
import AboutPage from "../pages/AboutPage";
import AboutIconLink from "../component/AboutIconLink";
import { layer } from "@fortawesome/fontawesome-svg-core";
export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
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
