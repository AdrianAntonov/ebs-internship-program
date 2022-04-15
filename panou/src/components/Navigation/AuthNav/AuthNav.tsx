import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
        to="/registration"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
