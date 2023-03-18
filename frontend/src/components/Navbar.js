import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div></div>
          <h4 class="text-white">
            &nbsp;&nbsp;&nbsp;Welcome To Evanesce E-Waste
          </h4>

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
                  to="/register"
                  className="nav-link text-white font-weight-bold"
                >
                  Register
                </Link>
              </li>

              <li class="nav-item ms-4 mt-1 fs-50">
                <Link to="/login" class="nav-link text-white font-weight-bold">
                  Login
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-1 fs-50">
                <Link
                  to="/Agentlogin"
                  class="nav-link text-white font-weight-bold"
                >
                  Agent Login
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-1 fs-50">
                <Link
                  to="https://widerohit.github.io/"
                  class="nav-link text-white font-weight-bold"
                >
                  Visit Dev - Rohit Patil
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
