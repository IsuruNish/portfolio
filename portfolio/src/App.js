import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";

import BounceLoader from "react-spinners/HashLoader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AOS.init();
    AOS.refresh();
    setTimeout(() => {
      setLoading(false);
    }, 3700);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <BounceLoader color={"#08D9D6"} loading={loading} size={100} />
        </div>
      ) : (
        <Router>
          <div className="height100">
            <NavBar />
            <Page1 />
          </div>
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
        </Router>
      )}
    </>
  );
}

export default App;

{
  /* <span class="material-symbols-outlined">
vertical_align_bottom
</span> */
}
