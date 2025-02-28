import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Pages from "./Components/Navbar/Pages";
import News from "./Components/Navbar/News";
import ContactUs from "./Components/Navbar/ContactUs";
import Coursescatalog from "./Components/Navbar/Coursescatalog";
import CourseDetails from "./Components/Navbar/CourseDetails";

const App = () => {
  return (
    <Router>
      <div className="sticky top-0 bg-white z-[1000] px-[2vw]">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/News" element={<News />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Coursescatalog" element={<Coursescatalog />} />
        <Route path="/Coursedetails" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
