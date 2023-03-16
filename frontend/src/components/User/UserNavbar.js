import React from "react";
import "../../css/home.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.jpg";

function UserNavbar() {
  const name = sessionStorage.getItem("username");
  const endSession = () => {
    sessionStorage.removeItem("userSession");
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("username");
    localStorage.removeItem("user");
    sessionStorage.clear();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <img src={logo} alt="" style={{ height: "60px", width: "150px" }} />

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center" id="collapsenavbar">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item  ms-4 mt-1 fs-50">
                <Link
                  to="/home"
                  className="nav-link text-white font-weight-bold"
                >
                  Home
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-1 fs-50">
                <Link
                  to="/donate"
                  className="nav-link text-white font-weight-bold"
                >
                  Donate
                </Link>
              </li>

              <li class="nav-item ms-4 mt-1 fs-50">
                <Link to="/view" class="nav-link text-white font-weight-bold">
                  Pending Donations
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-1 fs-50">
                <Link
                  to="/donations"
                  class="nav-link text-white font-weight-bold"
                >
                  View Donations
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-1 fs-50">
                <Link
                  to="/userprofile"
                  class="nav-link text-white font-weight-bold"
                >
                  Profile
                </Link>
              </li>

              <li class="nav-item  nav-logout mt-2 ">
                <form onSubmit={endSession} action="/">
                  <button type="submit" class="btn btn-sm btn-primary">
                    <span className="fs-8 ">Logout</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-link text-white font-weight-bold">
          <h6 className="text-white ">
            Welcome
            <br />
            <span>{name}</span>
          </h6>
        </div>
      </nav>
    </div>
  );
}

export default UserNavbar;
