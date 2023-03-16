import axios from "axios";
import React, { useState, useEffect } from "react";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import Donationcard from "./Donationcard";
import "../../css/home.css";

const Donations = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "View Donations";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
    viewDonations(userdata);
  }, []);

  const viewDonations = (data) => {
    axios.post(`${base_url}/viewdonations`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: "There are no donations",
            icon: "error",
            button: "Ok",
          });
        }
        setRequests(response.data);
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };
  const [requests, setRequests] = useState([]);

  return (
    <div>
      <div class="bgimg">
        <h1 className="text-center text-dark display-7 pt-5 mt-2 fw-bold ">
          <u>Donations</u>
        </h1>
        <table className="table table-striped table-dark  m-auto mt-5 mb-5">
          <thead>
            <tr className="fs-6">
              <th scope="col">Donation ID</th>
              <th scope="col">Payment </th>
              <th scope="col">Quantity </th>
              <th scope="col">E-waste Donated</th>
              <th scope="col">Address</th>
              <th scope="col">Images</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((item) => <Donationcard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No donations done yet</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donations;
