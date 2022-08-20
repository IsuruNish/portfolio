import React from "react";
import "./Page2.css";
import photoOfMe from "../images/me4.png";
import { useTypewriter } from "react-simple-typewriter";

export default function Page2() {
  const { text } = useTypewriter({
    words: [" Computer Science UG", " Tech Enthusiast", " Web Developer"],
    loop: 0,
  });

  return (
    <div className="pageTwo container" id="about">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 id="aboutMe">About Me</h1>
        <h2 id="Title2" style={{ color: "#FF2E63", fontWeight: 1000 }}>
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_back_ios
          </span>
          Who am I {"/"}
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </h2>
      </div>

      <div className="row" data-aos="fade-up" data-aos-duration="2000">
        <div className="col-lg-6">
          <img className="img-fluid imagePage2" src={photoOfMe}></img>
        </div>

        <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <div id="aboutMeBox">
            <h3 id="AboutMeH3Tag">
              I'm Isuru and I'm a <span style={{ color: "#252A34", fontWeight: 750 }}>{text}</span>
            </h3>
            <h4 id="aboutMeText">When it comes to people around me, I am friendly, helpful, polite, and have a good sense of humor. I am enthusiastic, self-motivated, reliable, flexible, and hard-working when learning new things. I have experience and confidence in working individually and with different type of teams. I am someone with excellent time and people management skills. Also, I am a good communicator with proven interpersonal skills. I am always enthusiastic about learning new technologies, developing my skills, and undertaking new challenges.</h4>
          </div>

          {/* <button className='mt-5' id='btn2' style={{}}>Download CV</button> */}
        </div>
      </div>
    </div>
  );
}
