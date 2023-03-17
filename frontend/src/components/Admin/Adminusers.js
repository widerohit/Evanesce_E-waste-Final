import React, { useEffect, useState } from "react";
import Adminusercard from "./Adminusercard";
import base_url from "../../api/bootapi.js";
import swal from "sweetalert2";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import { textFilter } from "react-bootstrap-table2-filter";
import "../../css/admin.css";
function Adminusers() {
  useEffect(() => {
    document.title = "Users List";
    if (sessionStorage.getItem("admin") !== "admin") {
      window.location = "/";
    }
    viewUsers();
  }, []);

  const page = paginationFactory({
    page: 1,
    sizePerPage: 5,
    nextPageText: ">",
    firstPageText: "<<",
    lastPageText: ">>",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log(page);
      console.log(sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log(page);
      console.log(sizePerPage);
    },
  });

  const deleteUser = (userEmail) => {
    axios.delete(`${base_url}/deleteuser/${userEmail}`).then(
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
  const handleDelete = (row) => {
    console.log("asdfsdfsdfsdfdrow : " + row.email);
    swal
      .fire({
        title: "Are You Sure You Want To Delete This User?",
        text: "You Won't Be Able to Revert This!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteUser(row.email);
          swal
            .fire("Deleted!", "User Has Been Deleted", "success")
            .then(function () {
              window.location = "/adminusers";
            });
        }
      });
  };

  const columns = [
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "city", text: "City", sort: true, filter: textFilter() },
    { dataField: "phone", text: "Phone", sort: true, filter: textFilter() },
    { dataField: "email", text: "E-mail", filter: textFilter() },
    { dataField: "role", text: "Role", sort: true, filter: textFilter() },
    {
      text: "Action",
      formatter: (cell, row) => (
        <button
          type="button"
          class="btn btn-outline-danger btn-sm badge-pill"
          onClick={() => handleDelete(row)}
        >
          Delete
        </button>
      ),
    },
  ];

  const viewUsers = () => {
    axios.get(`${base_url}/getallusers`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: "Admin",
            text: "There are no users registered",
            icon: "error",
            button: "Ok",
          });
        }
        console.log(users);
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
        swal.fire("Server is down");
      }
    );
  };
  const divStyle = {
    backgroundColor: "#282c34", // Set to a dark color value
    color: "white", // Set the font color to a contrasting color
    display: "flex",
    flexDirection: "column",
  };
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div style={divStyle} class="min-vh-100 mt-5 admin-bg">
      <div class="container mt-5 pt-3 ">
        <div class="card card-bg">
          <h4 class="card-header txt-deco text-dark">All Users</h4>
          <div style={{ textAlign: "center" }} class="card-body bt">
            <BootstrapTable
              bootstrap4
              keyField="email"
              columns={columns}
              data={users}
              filter={filterFactory()}
              pagination={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminusers;
