import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";
import { SectionFAQ } from "./Sections/SectionFAQ";
import { SectionBUYNOW } from "./Sections/SectionBUYNOW";
import { Section3 } from "./Sections/Section3";
import { Section4 } from "./Sections/Section4";
import { Section5 } from "./Sections/Section5";
import { Section6 } from "./Sections/Section6";
import { SectionFooter } from "./Sections/SectionFooter";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title animated-text">YTFIN</h1>
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 0.5,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <Router>
      <>
        <LoadingScreen />

        <div className="nav">
          <div className="left-content">
            <img className="left-content-image" src="/ytfin.png" />
          </div>
          <div className="right-content">
            <h1 className="small-text navigation-text white">
              <Link className="small-text white" to="/">Home</Link>
            </h1>
            <h1 className="small-text navigation-text white">
              <Link to="/buy">Buy</Link>
            </h1>
            <h1 className="small-text navigation-text white">
              <Link to="/faq">FAQ</Link>
            </h1>
          </div>
        </div>

        <Routes>
          <Route path="/" element={[<Section1  />, <Section2 />, <Section3 />, <Section4 />, <Section5 />, <Section6 />, <SectionFooter />]} />
          <Route path="/buy" element={<SectionBUYNOW />} />
          <Route path="/faq" element={<SectionFAQ />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;