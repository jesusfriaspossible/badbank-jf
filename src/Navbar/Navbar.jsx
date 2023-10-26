import { NavLink } from "react-router-dom";
import React from "react";


export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink style={navLinkStyles} title="Welcome to the home page of the Bad Bank" className="nav-link first-nav"
                        to="/">
                        Bad Bank
                    </NavLink>
                    <NavLink title="Create an account with us" style={navLinkStyles} className="nav-link"
                        to="/createaccount">
                        Create Account
                    </NavLink>
                    <NavLink title="Deposit money into your account" style={navLinkStyles} className="nav-link"
                        to="/deposit">
                        Deposit
                    </NavLink>
                    <NavLink title="Withdraw money from your account" style={navLinkStyles} className="nav-link"
                        to="/withdraw">
                        Withdraw
                    </NavLink>

                    <NavLink title="You'll find a list of all registered users here" style={navLinkStyles}
                        className="nav-link" to="/alldata">
                        All Data
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  );
}
