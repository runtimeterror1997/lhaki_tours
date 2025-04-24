import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./views/Footer";
import Header from "./views/Headers";
import "./views/home.css";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Home = lazy(() => delay(100).then(() => import("./views/Home")));
const AboutUs = lazy(() => import("./views/AboutUs"));
const AboutBhutan = lazy(() => import("./views/AboutBhutan"));
const TourPackages = lazy(() => import("./views/TourPackages"));
const TravelInfo = lazy(() => import("./views/TravelInfo"));
const ContactUs = lazy(() => import("./views/ContactUs"));

const LoadingSpinner = () => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-bhutan" element={<AboutBhutan />} />
          <Route path="/tours" element={<TourPackages />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
