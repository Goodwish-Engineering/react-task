import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

const Layout = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(Context);

  const handleClick = async () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/signin");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/edit">
                  Edit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view">
                  View
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link" onClick={handleClick}>
                    Logout
                  </button>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
      <div className="container overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
