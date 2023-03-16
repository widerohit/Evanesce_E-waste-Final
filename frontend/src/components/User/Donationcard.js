import React, { useState } from "react";
import axios from "axios";
import base_url from "../../api/bootapi.js";

const Donationcard = ({ request }) => {
  const [load, setload] = useState(false);
  const [imgurl, setImgUrl] = useState("");
  const fetchImages = () => {
    const requestimageid = request.reqid;
    const url = `${base_url}/files/${requestimageid}`;
    console.log(url);
    axios.get(url, { responseType: "blob" }).then((res) => {
      console.log(res);
      const imgsrc = URL.createObjectURL(res.data);
      setImgUrl(imgsrc);
      setload(true);
    });
  };

  return (
    <tr>
      <td className="fs-4">{request.reqid}</td>
      <td className="fs-4">{request.payment}</td>
      <td className="fs-4">{request.quantity}</td>
      <td className="fs-4">{request.ewasteQty}</td>
      <td className="fs-6">{request.address}</td>

      <td>
        {load ? (
          <img src={imgurl} id="preview" width="200" height="100" />
        ) : (
          <button class="btn btn-xs btn-info" onClick={fetchImages}>
            Show Image
          </button>
        )}
      </td>
    </tr>
  );
};

export default Donationcard;
