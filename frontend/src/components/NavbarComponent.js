import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🎬 MovieCenter
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link">
                Add Movie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link">
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
