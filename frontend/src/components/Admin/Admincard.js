import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../../api/bootapi.js";
import "../../css/simplecarddesign.css";

function Admincard({ request }) {
  const [confirm, setConfirm] = useState({
    reqid: request.reqid,
    name: request.name,
    email: request.email,
    address: request.address,
    city: request.city,
    quantity: request.quantity,
    ewasteQty: request.ewasteQty,
    status: true,
  });
  const [imageseturl, imageSetUrl] = useState("");
  const [imageload, setImageLoad] = useState(false);

  const collectedDonation = (data) => {
    axios.put(`${base_url}/requests`, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const deleteRequest = () => {
    axios.delete(`${base_url}/requests/${request.reqid}`).then(
      (response) => {
        //console.log(response);
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

  const handleDelete = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest();
          swal
            .fire("Deleted!", "Request has been Deleted", "success")
            .then(function () {
              window.location = "/admin";
            });
        }
      });
  };
  const supplierPage = () => {
    swal
      .fire("Taking To Agent DashBoard", ".......", "success")
      .then(function () {
        sessionStorage.setItem("city_request", request.city);
        sessionStorage.setItem("product_request", request.reqid);
        console.log(sessionStorage.getItem("city_request"));
        window.location = "/admincitywise";
      });
  };

  const fetchImages = () => {
    const requestimageid = request.reqid;
    const url = `${base_url}/files/${requestimageid}`;
    console.log(url);
    axios.get(url, { responseType: "blob" }).then((res) => {
      console.log(res);
      const imgurl = URL.createObjectURL(res.data);
      imageSetUrl(imgurl);
      setImageLoad(true);
    });
  };
  const [readMore, setReadMore] = useState(false);
  const imagecss = {
    width: "100px",
    height: "100px",
  };
  return (
    <div className="col-xs-12 col-sm-6 col-md-5">
      <div class="card mb-8 mt-2">
        <div className="card card-bg">
          <div className="view overlay">
            {imageload ? (
              <img
                className="card-img-top"
                src={imageseturl}
                alt="Card image cap"
              />
            ) : (
              ""
            )}
            <a href="#!">
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>

          <div className="card-body">
            <h5 className="card-text" style={{ color: "black" }}>
              {request.name}
            </h5>
            <h5 style={{ color: "black" }}>{request.email}</h5>
            <p className="card-text bt" style={{ color: "black" }}>
              Request ID : {request.reqid}
            </p>
            <p className="card-text bt">City : {request.city}</p>
            <p className="card-text bt" style={{ color: "black" }}>
              {readMore
                ? request.ewasteQty
                : `${request.ewasteQty.substring(0, 5)}...`}
              &nbsp;
              <button
                onClick={() => setReadMore(!readMore)}
                className="btn btn-light btn-sm"
              >
                {readMore ? " show less" : " read more"}
              </button>
            </p>
            <button
              className="btn btn-danger btn-sm mr-7"
              onClick={handleDelete}
            >
              Delete
            </button>
            &nbsp; &nbsp; &nbsp;
            {imageload ? (
              ""
            ) : (
              <button
                onClick={fetchImages}
                className="btn btn-warning btn-sm mr-7"
              >
                Show Image
              </button>
            )}
            &nbsp; &nbsp; &nbsp;
            <button className="btn btn-success btn-sm" onClick={supplierPage}>
              Assign agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admincard;
