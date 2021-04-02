import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";

import "./navbar.css";

const NavBar = ({ authenticated, setAuthenticated }) => {
  const sessionUser = useSelector((state) => state?.session?.user);

  return authenticated ? (
    <nav className="navBarContainer">
      <ul className="topNavBarLinks">
        <div className="homeLogo">
          <h2>KappaBnB </h2>
        </div>

        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" exact={true} activeClassName="active">
            Explore
          </NavLink>
        </li>
        <li>
          {" "}
          <img src={sessionUser?.profileImage} className="profileImage" />
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="navBarContainer">
      <ul className="topNavBarLinks">
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
