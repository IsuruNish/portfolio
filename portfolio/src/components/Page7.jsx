import React, { useRef } from "react";
import "./Page7.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import github from "../images/github.png";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import li from "../images/li.png";
import logo from "../images/logo.png";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import location from "../images/location.png";

import emailjs from "@emailjs/browser";

export default function Page7() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_3tq30wq", "template_w53ps5c", e.target, "xNsEJCIaMTsGlmGPi").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className="container PageSeven" id="contact">
      <div className="mb-3" data-aos="fade-up" data-aos-duration="800">
        <h1 id="aboutMe2" style={{ color: "#EAEAEA" }}>
          Contact
        </h1>
        <h2 id="Title2" style={{ color: "#FF2E63", fontWeight: 1000 }}>
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_back_ios
          </span>
          Get in touch with me {"/"}
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </h2>
      </div>

      {/* 
            <div className='col'>
                <img src={logo} alt="" />
            </div>

            <div className='col mb-5 contactNumbers'>
                <h4><img alt="Remy Sharp" src={mail} className="mx-2" style={{width:25}}/> isurunwg@gmail.com</h4>
                <h4><img alt="Remy Sharp" src={phone} className="mx-2" style={{width:25}}/> +94 766 699 117</h4>
                <h4><img alt="Remy Sharp" src={location} className="mx-2" style={{width:25}}/> Colombo, Sri Lanka</h4>
            </div>
        </div> */}

      <div className="row contactNumbers2">
        <div className="col-sm-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-outline formEmail">
              <input type="text" id="typeText" className="form-control mb-3" name="name" placeholder="Name" data-aos="fade-up" data-aos-duration="2000" required />
              <input type="email" id="typeText" className="form-control mb-3" name="email" placeholder="Email" data-aos="fade-up" data-aos-duration="2000" required />
              <textarea className="form-control mb-3" id="textAreaExample" rows="4" name="message" placeholder="Message" data-aos="fade-up" data-aos-duration="2000" required></textarea>
              <button type="submit" className="buttonSend">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-sm-6">
          <div className="col mb-5 contactNumbers">
            {/* <h4 className='mb-4' data-aos="fade-up" data-aos-duration="2000"> Use the information below to reach me</h4> */}
            <h5 data-aos="fade-up" data-aos-duration="2000">
              <img alt="Remy Sharp" src={mail} className="mx-2" style={{ width: 25 }} /> isurunwg@gmail.com
            </h5>
            <h5 data-aos="fade-up" data-aos-duration="2000">
              <img alt="Remy Sharp" src={phone} className="mx-2" style={{ width: 25 }} /> +94 766 699 117
            </h5>
            <h5 data-aos="fade-up" data-aos-duration="2000">
              <img alt="Remy Sharp" src={location} className="mx-2" style={{ width: 25 }} /> Colombo, Sri Lanka
            </h5>
          </div>

          <div className="col contactNumbers">
            <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "start" }}>
              <a href="https://www.linkedin.com/in/isurunishadha/">
                <Avatar alt="Remy Sharp" src={li} className="mx-2" data-aos="fade-up" data-aos-duration="2000" />
              </a>
              <a href="https://www.facebook.com/IsuruNishadha">
                <Avatar alt="Remy Sharp" src={fb} className="mx-2" data-aos="fade-up" data-aos-duration="2000" />
              </a>
              <a href="https://www.instagram.com/_cheexe_/">
                <Avatar alt="Remy Sharp" src={insta} className="mx-2" data-aos="fade-up" data-aos-duration="2000" />
              </a>
              <a href="https://github.com/IsuruNish">
                <Avatar alt="Remy Sharp" src={github} className="mx-2" data-aos="fade-up" data-aos-duration="2000" />
              </a>
            </Stack>
          </div>
        </div>
      </div>

      <img src={logo} alt="" className="imageConatc" data-aos="fade-up" data-aos-duration="2000" />

      {/* <footer>
                <Stack direction="row" spacing={2} sx={{display:"flex", justifyContent:"center"}}>
                    <a href='https://www.linkedin.com/in/isurunishadha/'><Avatar alt="Remy Sharp" src={li} className="mx-2"/></a>
                    <a href='https://www.facebook.com/IsuruNishadha'><Avatar alt="Remy Sharp" src={fb} className="mx-2"/></a>
                    <a href='https://www.instagram.com/_cheexe_/'><Avatar alt="Remy Sharp" src={insta} className="mx-2"/></a>
                    <a href='https://github.com/IsuruNish'><Avatar alt="Remy Sharp" src={github} className="mx-2"/></a>
                </Stack>
        </footer> */}
    </div>
  );
}
