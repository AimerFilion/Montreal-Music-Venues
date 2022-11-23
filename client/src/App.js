// External Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Internal Imports
import Home from "./Home";
import Explore from "./Explore";
import About from "./About";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-account" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
