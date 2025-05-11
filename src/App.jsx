import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Pages from "./Components/Pages";
import News from "./Components/News";
import ContactUs from "./Components/ContactUs";
import Coursescatalog from "./Components/Coursescatalog";
import CourseDetails from "./Components/CourseDetails";
import Footer from "./Components/Footer";

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
      <Footer />
    </Router>
  );
};

export default App;
