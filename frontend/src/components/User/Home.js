import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/home.css";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import mumimg from "../../images/Mumbai.jpg";
import puneimg from "../../images/pune.png";
import hydimg from "../../images/hyderbad.jpg";
import bangimg from "../../images/banglore.jpg";
import firstimg from "../../images/firstimg.png";
import secondimg from "../../images/secondimg.png";
import payment from "../../images/PAYMENT.png";
import schedule from "../../images/SCHEDULE.png";
import pickup from "../../images/PICKUP.png";
import thirdimg from "../../images/thirdimg.jpg";
import intro from "../../video/Intro.mp4";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  useEffect(() => {
    document.title = "Home";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    }
  }, []);

  const divStyle = {
    backgroundColor: "#282c34", // Set to a dark color value
    color: "white", // Set the font color to a contrasting color
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={divStyle}>
      <div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={thirdimg} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={secondimg} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={firstimg} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="container text-center text-white mt-3 mb-3 pt-5">
        <video controls autoplay width="850" height="600">
          <source type="video/mp4" src={intro} />
        </video>
      </div>

      <div style={{ "text-align": "center" }}>
        <Link to="/aboutus" class="btn btn-info btn-lg mt-5">
          ABOUT US
        </Link>
      </div>
      <section class="container ourservices text-center">
        <h2>OUR SERVICES</h2>
        <div class="row rowsetting">
          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-truck fa-3x text-white"></i>
            </div>
            <h2>E-Waste Management</h2>
          </div>

          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-recycle fa-3x text-white"></i>
            </div>
            <h2>E-Waste Recycling</h2>
          </div>

          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-send fa-3x text-white"></i>
            </div>
            <h2>Public Awareness</h2>
          </div>
        </div>
      </section>
      <section>
        <div class="text-center p-1">
          <br />
          <h3 color="blue">We Are Currently Working In These Cities</h3>
          <br />
          <hr></hr>
          <div class="img1">
            <img src={mumimg} alt="Mumbai_image" height="250" width="310" />
            <img src={puneimg} alt="pune" height="250" width="310" />
            <img src={hydimg} alt="hyd" height="250" width="310" />
            <img src={bangimg} alt="banglore" height="250" width="310" />
          </div>
          <div class="fourcities">
            <h3 class="fmumbai">
              Mumbai <br />
              900k+ Tonnes
            </h3>
            <h3 class="fpune">
              Pune
              <br />
              750k+ Tonnes
            </h3>
            <h3 class="fbanglore">
              Hyderabad
              <br />
              456k+ Tonnes
            </h3>
            <h3 class="fbanglore">
              Banglore
              <br />
              300k+ Tonnes
            </h3>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="loginflex">
        <div className="container text-center">
          <h2 className="how_works_title">How it works</h2>
          <br></br>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="how_works_col">
                <h4>Schedule a pickup</h4>
                <br></br>
                <img src={schedule} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="how_works_col">
                <h4>Pickup at your address</h4>
                <br></br>
                <img src={pickup} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="how_works_col">
                <h4>Receive payment</h4>
                <br></br>
                <img src={payment} alt="" />
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
