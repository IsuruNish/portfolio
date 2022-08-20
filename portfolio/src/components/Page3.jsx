import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Page3.css";
import uni from "../images/uni2.png";
import dipIcon from "../images/dip.png";
import schoolIcon from "../images/school.svg";
import schoolAward from "../images/schooltime.jpeg";
import achi from "../images/achi.jpg";

import { Avatar } from "@mui/material";
import "reactjs-popup/dist/index.css";

let education = [
  {
    key: "1",
    title: "GCE (A/L) in Mathematics stream",
    location: "Ananda College, Colombo 10",
    date: "2005 – 2018",
    description: "I was able to obtain an A for Physics and 2 Bs for Combined Mathematics and Chemistry with a z-score of 1.7488 obtaining a district rank of 353 from Colombo.",
  },

  {
    key: "2",
    title: "Diploma in Information and Communication Technology",
    location: "ICBT, Colombo 4",
    date: "2018 – 2019",
    description: "I was able to obtain and pass with an overall Distinction pass",
  },

  {
    key: "3",
    title: "B.Sc. (Hons.) in Computer Science ",
    location: "University of Colombo School of Computing",
    date: "2020 – present",
    description: "I am currently studying as a 3rd year undergraduate with a GPA of 3.94/4.0 and with the overall batch rank of 4th",
  },
];

export default function Page3() {
  return (
    <div className="container PageThree" id="page3">
      <div className="mb-4" data-aos="fade-up" data-aos-duration="800">
        <h1 id="aboutMe" style={{ color: "#EAEAEA" }}>
          Education
        </h1>
        <h2 id="Title2" style={{ color: "#FF2E63", fontWeight: 1000 }}>
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_back_ios
          </span>
          Where have I learnt {"/"}
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </h2>
      </div>

      <VerticalTimeline lineColor={"#08D9D6"}>
        <VerticalTimelineElement key={education[0].id} className={"componentTimeline"} contentStyle={{ background: "#00ADB5" }} contentArrowStyle={{ borderRight: "7px solid  #00ADB5" }} date={education[0].date} iconStyle={{ background: "#00ADB5", color: "#fff" }} icon={<Avatar src={schoolIcon} sx={{ width: "70%", height: "70%", margin: "auto", marginTop: 0.9 }} />}>
          <h3 className="vertical-timeline-element-title" style={{ color: "#252A34", fontWeight: 600 }}>
            {education[0].title}
          </h3>
          <h5 style={{ color: "#252A34", fontStyle: "italic" }}>{education[0].location}</h5>
          <h6 style={{ color: "#252A34" }}>{education[0].description}</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement contentStyle={{ background: "#FF2E63", color: "#FF2E63" }} contentArrowStyle={{ borderRight: "7px solid  #FF2E63" }} date={"Achievements"} position="left" iconStyle={{ background: "#FF2E63", color: "#fff" }} icon={<Avatar src={achi} sx={{ padding: 1, width: "80%", height: "80%", margin: "auto", marginTop: 1 }} />}>
          <div className="row md-12">
            <div className="card cardPopUP">
              <img src={schoolAward} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title popupHeader">The Best Academic Prefect of the Year 2019</h5>
                <p className="card-text popupContent">Received the award for the Best Academic Prefect of the Year 2019 at the Annual Prize Giving Ceremony of Ananda College. This award is given to the senior prefect who has the highest Z-Score on the GCE Advanced Level examination.</p>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement key={education[1].id} contentStyle={{ background: "#00ADB5", color: "#00ADB5" }} contentArrowStyle={{ borderRight: "7px solid  #00ADB5" }} date={education[1].date} position="right" iconStyle={{ background: "#00ADB5", color: "#fff" }} icon={<Avatar src={dipIcon} sx={{ padding: 1, width: "80%", height: "80%", margin: "auto", marginTop: 1 }} />}>
          <h3 className="vertical-timeline-element-title" style={{ color: "#252A34", fontWeight: 600 }}>
            {education[1].title}
          </h3>
          <h5 style={{ color: "#252A34", fontStyle: "italic" }}>{education[1].location}</h5>
          <h6 style={{ color: "#252A34" }}>{education[1].description}</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement key={education[2].id} contentStyle={{ background: "#00ADB5", color: "#fff" }} contentArrowStyle={{ borderRight: "7px solid  #00ADB5" }} position="left" date={education[2].date} iconStyle={{ background: "#00ADB5", color: "#fff" }} icon={<Avatar src={uni} sx={{ padding: 1.5, width: "100%", height: "100%", margin: "auto", marginTop: 0.3 }} />}>
          <h3 style={{ color: "#252A34", fontWeight: 600 }} className="vertical-timeline-element-title">
            {education[2].title}
          </h3>
          <h5 style={{ color: "#252A34", fontStyle: "italic" }}>{education[2].location}</h5>
          <h6 style={{ color: "#252A34" }}>{education[2].description}</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement contentStyle={{ background: "#FF2E63", color: "#FF2E63" }} contentArrowStyle={{ borderRight: "7px solid  #FF2E63" }} date={"Achievements"} position="left" iconStyle={{ background: "#FF2E63", color: "#fff" }} icon={<Avatar src={achi} sx={{ padding: 1, width: "80%", height: "80%", margin: "auto", marginTop: 1 }} />}>
          <div className="row md-12">
            <div className="card cardPopUP">
              {/* <img src={schoolAward} className="card-img-top"/> */}
              <div className="card-body">
                <h5 className="card-title popupHeader">Finalist (5th) at ReidXtreme 1.0</h5>
                <p className="card-text popupContent">ReidXtreme 1.0 is an online virtual hackathon consisted of three 24-hour competition phases. It was organized by the IEEE student branch of University of Colombo School of Computing. Our team was able to reach the 5th place overall in the competition.</p>
                <h6 className="popupSubHeader">Oct 2020</h6>
              </div>
            </div>
          </div>

          <div className="row md-12">
            <div className="card cardPopUP mt-3">
              {/* <img src={ieee14} className="card-img-top"/> */}
              <div className="card-body">
                <h5 className="card-title popupHeader">IEEEXtreme 14.0</h5>
                <p className="card-text popupContent">This is an 24 hrs international programming competition where more than 3700 teams participated. Our team was ranked 65th Place in Sri Lanka and 729th Place in the world.</p>
                <h6 className="popupSubHeader">Oct 2020</h6>
              </div>
            </div>
          </div>

          <div className="row md-12">
            <div className="card cardPopUP mt-3">
              {/* <img src={schoolAward} className="card-img-top"/> */}
              <div className="card-body">
                <h5 className="card-title popupHeader">Finalist (4th) in iCS Hack The World</h5>
                <p className="card-text popupContent">iCS Hack the World is an Inter-University 24-hour Capture the Flag competition, organized by the UCSC ISACA Student Group. Our team was able to reach the 4th place in the Final Round.</p>
                <h6 className="popupSubHeader">Jan 2021</h6>
              </div>
            </div>
          </div>

          <div className="row md-12">
            <div className="card cardPopUP mt-3">
              {/* <img src={schoolAward} className="card-img-top"/> */}
              <div className="card-body">
                <h5 className="card-title popupHeader">IEEEXtreme 15.0</h5>
                <p className="card-text popupContent">This is an 24 hrs international programming competition where more than 3700 teams participated. Our team was ranked 61st Place in Sri Lanka.</p>
                <h6 className="popupSubHeader">Jan 2022</h6>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
