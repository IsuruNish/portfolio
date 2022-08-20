import React from "react";
import "./Page6.css";

export default function Page6() {
  return (
    <div className="container PageSix" id="projects">
      <div className="mb-4" data-aos="fade-up" data-aos-duration="800">
        <h1 id="aboutMe" style={{ color: "#252A34" }}>
          Projects
        </h1>
        <h2 id="Title2" style={{ color: "#FF2E63", fontWeight: 1000 }}>
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_back_ios
          </span>
          What projects have I done {"/"}
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </h2>
      </div>

      <div className="row-sm-6 centerME">
        <div className="col-sm-6 mb-4 mt-4" data-aos="fade-up" data-aos-duration="2000">
          <div className="card cardBoxHeight">
            <div className="card-body cardBoxes">
              <h5 className="card-title popupHeader" style={{ color: "#000" }}>
                Royalty Collecting System
              </h5>
              <p className="card-text popupContent">A web-based and mobile-based system built from scratch with no frameworks to manage the royalties for songs from live concerts in Sri Lanka. </p>
              <ul>
                <li style={{ color: "black" }}>
                  <b style={{ color: "black" }}> Tech stack:</b> HTML, CSS, Javascript, jQuery, Java EE, Android
                </li>
                <li style={{ color: "black" }}>
                  {" "}
                  <b style={{ color: "black" }}>Architecture: </b>Client-Server{" "}
                </li>
              </ul>
              <p className="card-title popupSubheader" style={{ color: "#000" }}>
                2nd year group project (2021 – 2022)
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 mb-5 mt-1" data-aos="fade-up" data-aos-duration="2000" style={{ backgroundColor: "white" }}>
          <div className="card-body cardBoxes">
            <h5 className="card-title popupHeader" style={{ color: "#000" }}>
              Supply Chain Management System
            </h5>

            <p className="card-text popupContent">A Software As a Service that allows users to define their supply chain structure and manage their inventory throughout the supply chain. The supply chain is fully customizable as per user requirements, and inventory rules can be set dynamically.</p>
            <ul>
              <li style={{ color: "black" }}>
                <b style={{ color: "black" }}> Tech stack:</b> React, Node, Nest JS, MongoDB, Material UI
              </li>
              <li style={{ color: "black" }}>
                {" "}
                <b style={{ color: "black" }}>Architecture: </b>Microservices{" "}
              </li>
            </ul>

            <p className="card-title popupSubheader" style={{ color: "#000" }}>
              3rd year group project (2022 – present)
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
