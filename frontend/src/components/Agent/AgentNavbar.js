import React from "react";
import "../../css/home.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.jpg";

function AgentNavBar() {
  const name = sessionStorage.getItem("username");
  const endSession = () => {
    sessionStorage.removeItem("user");
    sessionStorage.clear();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div class="container">
          <Link
            class="navbar-brand text-white fs-3 font-weight-bold ps-5"
            to="/agenthome"
          >
            Agent Dashboard
          </Link>

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
              <li class="nav-item fs-5 pe-3">
                <Link to="/agentprofile" class="nav-link text-white">
                  PROFILE
                </Link>
              </li>

              <li class="nav-item mt-2 ">
                <form onSubmit={endSession} action="/">
                  <button type="submit" class="btn btn-sm btn-warning">
                    <span className="fs-6 ">LOGOUT</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="ps-3 pe-5 text-center">
          <h5 className="text-dark ">
            Welcome
            <br />
            <span>{name}</span>
          </h5>
        </div>
      </nav>
    </div>
  );
}

export default AgentNavBar;
