import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Courses from "./Components/Navbar/Courses";
import Pages from "./Components/Navbar/Pages";
import News from "./Components/Navbar/News";
import ContactUs from "./Components/Navbar/ContactUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/News" element={<News />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
