import React from "react";
import "./Page5.css";

export default function Page5() {
  return (
    <div className="container PageFive" id="skills">
      <div className="mb-4" data-aos="fade-up" data-aos-duration="800">
        <h1 id="aboutMe" style={{ color: "#EAEAEA" }}>
          Skills
        </h1>
        <h2 id="Title2" style={{ color: "#FF2E63", fontWeight: 1000 }}>
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_back_ios
          </span>
          What do I know {"/"}
          <span style={{ color: "#FF2E63", fontWeight: 1000, fontSize: 20 }} className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </h2>
      </div>

      <div className="headingSkills" data-aos="flip-right" data-aos-duration="5000">
        <h4>Programming Languages</h4>
      </div>

      <div className="container centerDiv" data-aos="fade-up" data-aos-duration="2000">
        <div className="row modfiedrow mt-4">
          <div className="col-3">
            <h4>
              <span className="badge bg-secondary">C/C++</span>
            </h4>
          </div>

          <div className="col-3">
            <h4>
              <span className="badge bg-secondary">Python</span>
            </h4>
          </div>

          <div className="col-3">
            <h4>
              <span className="badge bg-secondary">Java SE</span>
            </h4>
          </div>

          <div className="col-3">
            <h4>
              <span className="badge bg-secondary">Scala</span>
            </h4>
          </div>
        </div>

        <div className="row modfiedrow">
          <div className="col-3">
            <h4>
              <span className="badge bg-secondary">R/Octave</span>
            </h4>
          </div>

          <div className="col-3">
            <h4>
              <span className="badge bg-secondary">PHP</span>
            </h4>
          </div>

          <div className="col-3">
            <h4>
              <span className="badge bg-secondary">JavaScript</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="headingSkills mt-5" data-aos="flip-right" data-aos-duration="5000">
        <h4>Frameworks & Libraries </h4>
      </div>

      <div className="container centerDiv">
        <div className="row modfiedrow mt-4">
          <div className="col-4" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">React</span>
            </h4>
          </div>

          <div className="col-4" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Bootstrap</span>
            </h4>
          </div>

          <div className="col-4" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Bulma CSS</span>
            </h4>
          </div>
        </div>

        <div className="row modfiedrow">
          <div className="col-4" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Meterial UI</span>
            </h4>
          </div>
          <div className="col-4" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Tailwind</span>
            </h4>
          </div>

          <div className="col-4" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Nest JS</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="headingSkills mt-5" data-aos="flip-right" data-aos-duration="5000">
        <h4>Server Side Exposure</h4>
      </div>

      <div className="container centerDiv">
        <div className="row modfiedrow mt-4">
          <div className="col-3" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Node</span>
            </h4>
          </div>

          <div className="col-3" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Java EE</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="headingSkills mt-5" data-aos="flip-right" data-aos-duration="5000">
        <h4>Database Management</h4>
      </div>

      <div className="container centerDiv">
        <div className="row modfiedrow mt-4">
          <div className="col-3" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">MySQL</span>
            </h4>
          </div>

          <div className="col-3" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">MongoDB</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="headingSkills mt-5" data-aos="flip-right" data-aos-duration="5000">
        <h4>Other</h4>
      </div>

      <div className="container centerDiv">
        <div className="row modfiedrow mt-4">
          <div className="col-3" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Git</span>
            </h4>
          </div>

          <div className="col-3" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Figma</span>
            </h4>
          </div>

          <div className="col-3" data-aos="fade-up" data-aos-duration="2000">
            <h4>
              <span className="badge bg-secondary">Docker</span>
            </h4>
          </div>
        </div>
      </div>

      {/* <div className="w-100">
        <div className="progressSkill" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>C/C++</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Python</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>JavaScript</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: 730 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>PHP</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: 600 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Java SE</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: 700 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>R/Octave</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

      <div className="headingSkills mt-5" data-aos="flip-right" data-aos-duration="5000">
        <h4>Frameworks & Libraries </h4>
      </div>

      <div className="w-100">
        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>JQuery</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated w-75 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>React</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div style={{ width: 550 }} className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Bootstrap</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div style={{ width: 700 }} className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Bulma CSS</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div style={{ width: 500 }} className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Meterial UI</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div style={{ width: 450 }} className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Tailwind</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ width: 500 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

      <div className="headingSkills mt-5" data-aos="flip-right" data-aos-duration="5000">
        <h4>Server Side Exposure & Database</h4>
      </div>

      <div className="w-100" id="lastSkill">
        <div className="progressSkill" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Java EE</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated w-75 bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Node</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: 100 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>Nest JS</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div style={{ width: 100 }} className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>MySQL</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: 650 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progressSkill mt-4" data-aos="fade-up" data-aos-duration="2000">
          <h5 style={{ color: "white" }}>MongoDB</h5>
          <div className="progress progressBarSkill" style={{ height: "10px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: 50 }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div> */}

      {/* <div className='headingSkills mt-5' data-aos="flip-right" data-aos-duration="5000">
            <h4>Frameworks/Libraries</h4>
        </div>

        <div className='w-100' style={{paddingBottom:120}}>
            


            
        </div> */}
    </div>
  );
}
