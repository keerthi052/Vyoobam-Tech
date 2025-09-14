//import Demo from "./Components/Demo"
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Careers from "./Components/Careers";
import Internship from "./Components/Internship";
import "./Styles/App.css";
import "./Styles/Global.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of each animation
      once: true, // Only animate once
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of each animation
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <div className="animated-bg">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/intership" element={<Internship />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
