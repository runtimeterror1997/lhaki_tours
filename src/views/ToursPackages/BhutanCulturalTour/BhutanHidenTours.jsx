import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/prayers.png";
import hidden from "../../../assets/home/hiden.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanHidenTours = () => {
 

  const itinerary = [
    {
      day: "Day 01: Arrival in Paro to Thimphu",
      details: `Upon clearing customs, our representative will welcome you at the Paro airport. Begin your journey with a visit to Ta Dzong National Museum, followed by a stroll to Paro Rimpong Dzong. Later, drive to Thimphu, the capital (approximately 1.5 hours). Overnight stay in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu Sightseeing",
      details: `Start the day with a drive to the Big Buddha Statue viewpoint, where the surrounding park offers walking trails from easy to moderate. Other highlights include the National Memorial Chorten, 12th-century Changangkha Temple, Folk Heritage Museum, and the School of Arts & Crafts.
In the afternoon, visit the weekend market (open Friday to Sunday), the Takin Reserve, and Trashichhodzong. Enjoy free time in the evening to explore Thimphu town at your own pace.
If time allows, take a drive to Dochu La Pass (3,100 m) to walk around the 108 stupas and, weather permitting, admire spectacular Himalayan views. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Haa",
      details: `Travel to Haa, Bhutan’s westernmost valley, on a scenic 3.5-hour drive with minimal traffic. Along the way, stop at Chuzom, the river confluence, to see three shrines built in Nepali, Tibetan, and Bhutanese styles to ward off evil spirits. Continue past Dobje Dzong, an old prison now converted into a monastery.`,
    },
    {
      day: "Day 04: Haa Sightseeing",
      details: `Haa is one of Bhutan’s least visited valleys, preserving the charm of an untouched, primeval landscape. Open to foreigners only since 2002 due to its proximity to Sikkim and Tibet, the valley reflects a simpler, traditional way of life. Its forested hills provide an ideal setting for hiking and mountain biking.
Enjoy several scenic walking trails or explore the valley on bike, visiting local villages and points of interest along virtually traffic-free roads. Overnight stay at Lechuna Heritage Lodge (subject to availability) or at a hotel in Haa.`,
    },
    {
      day: "Day 05: Haa – Paro",
      details: `Start early with a drive to Chele La Pass (3,988 m), where, on clear days, you can enjoy sweeping views of Bhutan’s second-highest peak, Mt. Jhomolhari (7,314 m).
Hike to Kila Nunnery, a peaceful sanctuary for 32 Anims (Buddhist nuns) dedicated to prayer, meditation, and study. After descending about an hour to the road, you can optionally ride a mountain bike down to Paro Valley.
Level of difficulty: Moderate. Picnic lunch included. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 06: Paro Sightseeing",
      details: `After breakfast, hike to Taktsang Monastery along a broad trail, taking about 2 hours uphill.
In the afternoon, drive to the nearly rebuilt Drukgyel Dzong, originally constructed by Shabdrung in 1644 to celebrate his victory over invading Tibetans, and destroyed by fire in 1951. On clear days, the majestic Mount Jomolhari (7,314 m) forms a breathtaking backdrop. On the return to Paro, visit other remote monasteries in the valley.
Difficulty: Moderate to Hard. Overnight stay at a hotel in Paro.`,
    },

    {
      day: "Day 07: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Explore ancient Buddhist monasteries and revered spiritual sites.",
    },
    {
      key: "Savor a genuine Bhutanese farmhouse dinner and connect with local residents.",
    },
    {
      key: "Discover traditional Bhutanese villages and experience rural life firsthand.",
    },
    {
      key: "Trek to the iconic Tiger’s Nest Monastery (Paro Taktsang), a celebrated cultural landmark of Bhutan.",
    },
  ];

  const tourDetails = {
    duration: "6 Nights / 7 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
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
            Bhutan Hiden Tour
          </Typography>
        </Box>
      </div>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        color="black"
        textAlign="center"
        sx={{ p: 2, fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.6rem" } }}
      >
        A Tranquil Exploration of Haa Valley and Bhutanese Heritage
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Experience the hidden calm of Bhutan with this special journey,
        highlighting the serene Haa Valley and the iconic Paro Valley.
        Knowledgeable guides create the perfect balance of cultural experiences
        and gentle outdoor adventures for a memorable Bhutan trip. In Haa, enjoy
        a peaceful retreat at Lechuna Heritage Lodge, where warm Bhutanese
        hospitality greets you. Explore at a relaxed pace through easy hikes,
        leisurely bike rides, or quiet riverside strolls. In Paro, visit the
        cliffside Tiger’s Nest Taktsang Monastery. For a more
        off-the-beaten-path adventure, trek to the secluded Kila Nunnery,
        offering breathtaking views of the surrounding valley.
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

export default BhutanHidenTours;
