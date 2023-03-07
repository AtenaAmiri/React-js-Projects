import React from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import { FeedbackProvider } from "./context/FeedbackContext";
export default function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  );
}
