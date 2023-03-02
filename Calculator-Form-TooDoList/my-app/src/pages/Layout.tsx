import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Styles/Layout.css";
export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
