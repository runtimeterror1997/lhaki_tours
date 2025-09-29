import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./views/Footer";
import Header from "./views/Headers";
import "./views/home.css";
import BhutanCulturaltour from "./views/ToursPackages/BhutanCulturalTour/ButanCulturalTour";

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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // always scroll to top
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-bhutan" element={<AboutBhutan />} />
          <Route path="/tours" element={<TourPackages />} />
          <Route path="/cultural-tours" element={<BhutanCulturaltour />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
