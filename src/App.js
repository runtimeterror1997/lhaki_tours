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
import BhutanHistoryHeritageTour from "./views/ToursPackages/BhutanCulturalTour/BhutanHistoryHeritageTour";
import BhutanHidenTours from "./views/ToursPackages/BhutanCulturalTour/BhutanHidenTours";
import EastWestHeritageTours from "./views/ToursPackages/BhutanCulturalTour/EeastWestHeritageTours";
import BhutanHeartCulturalTours from "./views/ToursPackages/BhutanCulturalTour/BhutanHeartCulturalTours";
import BhutanTraditionsImersion from "./views/ToursPackages/BhutanCulturalTour/BhutanTraditionsImersionTours";
import BhutanNatureTours from "./views/ToursPackages/BhutanCulturalTour/BhutanNatureTours";
import BhutanFestivalTours from "./views/ToursPackages/BhutanfestivalTours/BhutanFestivalTours";
import PunakhaTsechu from "./views/ToursPackages/BhutanfestivalTours/PunakhaTsechu";
import ParoTsechu from "./views/ToursPackages/BhutanfestivalTours/ParoTsechu";
import ThimphuTsechu from "./views/ToursPackages/BhutanfestivalTours/ThimphuTsechu";
import BlackNeckedCraneFestival from "./views/ToursPackages/BhutanfestivalTours/BlackNeckedCraneFestival";
import DrukWangyelFestival from "./views/ToursPackages/BhutanfestivalTours/DrukWangyelFestival";
import WangdueTsechu from "./views/ToursPackages/BhutanfestivalTours/WangdiTsechu";
import GomphuKoraTsechu from "./views/ToursPackages/BhutanfestivalTours/GomphuKoraTsechu";
import NimalungFestival from "./views/ToursPackages/BhutanfestivalTours/NimalungFestival";
import BhutanTrekingTour from "./views/ToursPackages/BhutanTrekingTours/BhutanTrekingTour";
import BumdraTrek from "./views/ToursPackages/BhutanTrekingTours/BumdraTrek";
import DrukpathTrek from "./views/ToursPackages/BhutanTrekingTours/DrukpathTrek";
import SnowmanTrek from "./views/ToursPackages/BhutanTrekingTours/SnowmanTrek";
import DagalaTrek from "./views/ToursPackages/BhutanTrekingTours/DagalaTrek";
import MerakSaktengTrek from "./views/ToursPackages/BhutanTrekingTours/MerakSaktengTrek";
import GanteyTrek from "./views/ToursPackages/BhutanTrekingTours/GanteyTrek";
import BhutanCampingTour from "./views/ToursPackages/BhutanCampingTour/BhutanCampingTour";
import BhutanRuralCamping from "./views/ToursPackages/BhutanCampingTour/BhutanRuralCamping";
import MountainCamping from "./views/ToursPackages/BhutanCampingTour/MountainCamping";
import BhutanGlamping from "./views/ToursPackages/BhutanCampingTour/BhutanGlamping";
import BhutanLuxuryTour from "./views/ToursPackages/BhutanLuxuryTour/BhutanLuxuryTour";
import Amankora from "./views/ToursPackages/BhutanLuxuryTour/Amankora";
import SixSenses from "./views/ToursPackages/BhutanLuxuryTour/SixSenses";
import Zhiwaling from "./views/ToursPackages/BhutanLuxuryTour/Zhiwaling";
import Pemako from "./views/ToursPackages/BhutanLuxuryTour/Pemako";
import LeeMeridien from "./views/ToursPackages/BhutanLuxuryTour/Leemeridien";
import PostcardDewa from "./views/ToursPackages/BhutanLuxuryTour/PostCardDewa";
import GanteyLodge from "./views/ToursPackages/BhutanLuxuryTour/GanteyLodge";
import BhutanAdventureTour from "./views/ToursPackages/BhutanAdventureNatureTour/BhutanAdventure";
import ManasNationalPark from "./views/ToursPackages/BhutanAdventureNatureTour/ManasNationalPark";
import BhutanBirdWatching from "./views/ToursPackages/BhutanAdventureNatureTour/BirdWatching";
import BhutanRiverRafting from "./views/ToursPackages/BhutanAdventureNatureTour/BhutanRiverRafting";
import BhutanHelicopter from "./views/ToursPackages/BhutanHelicopterTour.jsx/BhutanHelicopter";

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
          <Route path="/festival-tours" element={<BhutanFestivalTours />} />
          <Route path="/trekking-tours" element={<BhutanTrekingTour />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/history-heritage-tours"
            element={<BhutanHistoryHeritageTour />}
          />
          <Route path="/bhutan-hiden-tours" element={<BhutanHidenTours />} />
          <Route
            path="/bhutan-heart-cultural-tours"
            element={<BhutanHeartCulturalTours />}
          />
          <Route
            path="/east-west-heritage-tours"
            element={<EastWestHeritageTours />}
          />
          <Route
            path="/bhutan-traditions-imemrsion-tours"
            element={<BhutanTraditionsImersion />}
          />
          <Route path="/camping-tours" element={<BhutanCampingTour />} />
          <Route
            path="/adventure-nature-tours"
            element={<BhutanAdventureTour />}
          />

          <Route path="/bhutan-luxury-tours" element={<BhutanLuxuryTour />} />
          <Route path="/bhutan-nature-tours" element={<BhutanNatureTours />} />
          <Route path="/punakha-tsechu" element={<PunakhaTsechu />} />
          <Route path="/paro-tsechu" element={<ParoTsechu />} />
          <Route path="/thimphu-tsechu" element={<ThimphuTsechu />} />
          <Route
            path="/black-necked-crane-tsechu"
            element={<BlackNeckedCraneFestival />}
          />
          <Route
            path="/druk-wangyel-tsechu"
            element={<DrukWangyelFestival />}
          />
          <Route path="/wangdue-tsechu" element={<WangdueTsechu />} />
          <Route path="/gomphukora-tsechu" element={<GomphuKoraTsechu />} />
          <Route path="/nimalung-tsechu" element={<NimalungFestival />} />
          <Route path="/bumdra-trek" element={<BumdraTrek />} />
          <Route path="/drukpath-trek" element={<DrukpathTrek />} />
          <Route path="/snowman-trek" element={<SnowmanTrek />} />
          <Route path="/dagala-trek" element={<DagalaTrek />} />
          <Route path="/merak-sakteng-trek" element={<MerakSaktengTrek />} />
          <Route path="/gantey-trek" element={<GanteyTrek />} />
          <Route path="/rural-camping" element={<BhutanRuralCamping />} />
          <Route path="/mountain-camping" element={<MountainCamping />} />
          <Route path="/bhutan-glamping" element={<BhutanGlamping />} />
          <Route path="/amankora" element={<Amankora />} />
          <Route path="/six-senses" element={<SixSenses />} />
          <Route path="/zhiwaling" element={<Zhiwaling />} />
          <Route path="/pemako" element={<Pemako />} />
          <Route path="/lee-meridien" element={<LeeMeridien />} />
          <Route path="/postcard-dewa" element={<PostcardDewa />} />
          <Route path="/gantey-lodge" element={<GanteyLodge />} />
          <Route path="/manas-tour" element={<ManasNationalPark />} />
          <Route path="/bird-watching-tour" element={<BhutanBirdWatching />} />
          <Route path="/river-rafting-tour" element={<BhutanRiverRafting />} />
          <Route path="/scenic-helicopter-tours" element={<BhutanHelicopter />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
