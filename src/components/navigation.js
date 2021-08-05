import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/orders">
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
