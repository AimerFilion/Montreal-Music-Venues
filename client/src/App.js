// External Imports
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

// Internal Imports
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import About from "./pages/About/About";
import NavBar from "./pages/NavBar/NavBar";
import ProfileSection from "./pages/Home/ProfileSection/ProfileSection";
import GlobalStyles from "./GlobalStyles";
import VenuesInfo from "./pages/VenuesInfo";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<ProfileSection />} />
          <Route path="/venue/:venue_id" element={<VenuesInfo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
