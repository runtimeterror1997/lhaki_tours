import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/camping/rural.png";
import hidden from "../../../assets/camping/rural2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanRuralCamping = () => {

  const itinerary = [
    {
      day: "Day 01: Arrival in Paro to Thimphu",
      details: `The flight to Paro offers one of the most spectacular mountain vistas in the world, with constantly changing panoramas of some of the highest peaks on Earth. Upon arrival, our representative will meet you at the airport after customs formalities. Following lunch, enjoy afternoon sightseeing around Paro, including visits to the Ta Dzong Museum and Rimpung Dzong. Later, drive along the Paro Chhu River to the capital, Thimphu (approximately 1.5 hours). Overnight at your hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `Enjoy a full day of sightseeing in Thimphu, beginning with visits to the National Memorial Chorten, the 12th-century Changangkha Temple, the National Library—which houses a collection of Bhutanese scriptures dating back to the 8th century—and Tashichhodzong, home to several ministries, His Majesty’s Secretariat, and the central monk body. 
      If your visit coincides with the weekend, stroll through the Thimphu Market to experience Bhutanese culinary delights, including fiery chilies, fresh cheese, and a variety of greens, along with handicrafts and household items. (The market is open from Friday to mid-Sunday.) Overnight at your hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day offers stunning views of the Himalayan peaks, before descending into the warm and fertile Punakha Valley (about 3 hours of total driving time). Punakha, the ancient capital of Bhutan, is home to the magnificent Punakha Dzong, also known as the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as predicted by Guru Rimpoche (Padmasambhava). After lunch at Lobesa, visit Chhimi Lhakhang, a hilltop temple renowned as the ‘Temple of Fertility.’ Continue exploring Punakha Dzong, one of the most beautiful dzongs in Bhutan, and then drive to the viewpoint of Khamsum Yulley Namgyal Chhorten, enjoying the scenic rural landscapes along the way. Overnight stay at Punakha Camp.`,
    },
    {
      day: "Day 04: Punakha - Phobjikha",
      details: `Today we drive to the Phobjikha Valley, a glacial valley that serves as the winter home for the rare black-necked cranes. Upon arrival in Gangtey, visit Gangtey Goempa, the only Nyingmapa monastery in western Bhutan, and explore the valley while observing the Black-Necked Cranes. Afterward, embark on the Gangtey Natural Trail, one of the easiest hikes in Bhutan, which winds through pine forests and open meadows, offering panoramic views of the valley. Lunch will be served at the camp, followed by time to relax and enjoy the pristine environment and secluded villages. Overnight stay at the camp.`,
    },
    {
      day: "Day 05: Phobjikha – Paro",
      details: `After breakfast, drive back to Paro, descending through the Wangdue Valley and climbing steeply through forests of pine, hemlock, spruce, and rhododendrons. At Dochula Pass (3,150 m), enjoy a breathtaking panoramic view of the Eastern Himalayan ranges on clear days. The pass is adorned with 108 small stupas and colorful prayer flags. Lunch will be served at Dochula Café or en route. Continue to Paro, stopping to visit Tachho Gang Lhakhang via the iron chain bridge. Upon arrival, take a stroll around Paro town for shopping. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 06: Hike to Taktsang Monastery ‘Tiger’s Nest’ (3120m)",
      details: `After breakfast, drive to the base camp of Taktsang for the hike up to the Tiger’s Nest Monastery. The trail is broad, and the uphill walk takes approximately two hours, offering spectacular views of the monastery perched on a sheer cliff face 900 meters above the valley floor. Taktsang is an important pilgrimage site for Buddhists, as Guru Rimpoche is said to have flown here on the back of a tigress in the 8th century to bring Buddhist teachings to Bhutan and meditated in a cave where the monastery was later built, marking the origin of Buddhism in Bhutan. In the afternoon, drive to the almost fully reconstructed Drukgyel Dzong, where, in fine weather, the towering peak of sacred Mount Jomolhari (7,314 m) provides a stunning backdrop. On the return drive to Paro, visit other sights in the Paro valley. Overnight at your hotel in Paro.`,
    },

    {
      day: "Day 07: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Witness the majestic snow-capped Himalayan mountains from Dochula Pass.",
    },
    {
      key: "Camp under star-studded skies for a peaceful wilderness camping experience in Bhutan.",
    },
    {
      key: "Engage with locals and explore authentic village life deeply rooted in Bhutanese values.",
    },
    {
      key: "Trek across gorgeous trails amidst lush valleys, rice fields, and Himalayan hilltops.",
    },
    {
      key: "Visit ancient Buddhist monasteries that blend tradition with natural beauty.",
    },
    {
      key: "Hike up to the famous Tiger’s Nest Monastery (Paro Taktsang), a remarkable cultural landmark sitting on the edge of a cliff.",
    },
  ];

  const tourDetails = {
    duration: "6 Nights / 7 Days",
    groupSize: "2 & above",
    difficulty: "Easy/Moderate",
    accommodation: "Hotels/Camping",
    walkingHours: "4–5 Hours",
    bestSeason: "Mar–May / Sep–Nov",
  };

  return (
    <Box loading="lazy" sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <Box
          loading="lazy"
          sx={{
            width: "100%",
            height: "60vh",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="900"
            gutterBottom
            textAlign="center"
            color="white"
            sx={{
              py: "7%",
              mt: { xs: "40%", sm: "20%", md: "20%", lg: "10%" },
              fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            Bhutan Rural Camping Adventure
          </Typography>
        </Box>
      </div>
     
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingY={3}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Our Rural Camping Bhutan Tour offers a unique opportunity to connect
        with the country’s natural beauty and rich cultural heritage. Set
        against the breathtaking backdrop of the Himalayas, this journey
        combines immersive cultural experiences with serene wilderness
        exploration. Pitch your tent under a canopy of stars, savor home-cooked
        Bhutanese meals, and unwind beside crackling campfires in remote
        mountain villages. Experience the simplicity of rural Bhutanese life
        while surrounded by pristine forests, verdant valleys, and highland
        serenity. This is eco-camping in Bhutan at its finest—where every
        sunrise and trail unveils a new story.
      </Typography>
      {/* ===== Trip Highlights & Tour Info Section ===== */}
      <TourInfo
        tripHighlights={tripHighlights}
        tourDetails={tourDetails}
        image={hidden}
      />
      <Itinerary itinerary={itinerary} />
      <TourServices />
    </Box>
  );
};

export default BhutanRuralCamping;
