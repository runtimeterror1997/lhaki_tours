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

  const via_pling = [
    {
      day: "Day 1: Arrival at Phuentsholing via Bagdora Airport",
      details: `Our representative will pick you up from the aforementioned location and transport you to Phuentsholing. Upon arriving in Jaigaon, your private guide and driver will greet you in the border town and transfer you to Phuentsholing after completing immigration and customs procedures at the Phuentsholing Border checkpoint. Phuentsholing, located in the southwest, serves as the gateway to western Bhutan, while Jaigaon in West Bengal, India, is its Indian counterpart. These border towns form the main trade connection between India and Bhutan. Afterward, visit the Zangthopelri Lhakhang temple situated in the town center. You will have the evening to unwind—consider taking a stroll through the lively Phuentsholing town, Bhutan’s busiest commercial area. In the evening, enjoy a welcome drink and dinner with BGT. 
      Overnight stay at a hotel in Phuntsholing.`,
    },
    {
      day: "Day 02: Phuntsholing - Thimphu",
      details: `After breakfast, depart from Phuentsholing and travel approximately 171 km, taking 4-5 hours, to Thimphu, the capital of Bhutan with around 138,736 residents. Along the way, enjoy photo stops on Bhutan’s first highway, built in 1962 by the Indian border roads organization DANTAK. Stop at Kharbandi Gonpa temple, constructed in 1967 by the late Queen Ashi Phuntsho Choden, before reaching the Rinchending checkpoint (10 km). Continue through Gedu (43 km), known for the Gedu College of Business Studies founded in 2008. Follow the recently opened Damchu-Chhukha double-lane bypass (29 km) to Chhukha, home to Bhutan’s first hydroelectric plant with a 336-MW capacity and a 6.5-km tunnel. Next, reach Chhuzom (59 km), a key junction where the Pachhu and Wangchhu Rivers meet, connecting routes to Thimphu, Haa, and Paro. Take the right turn towards Thimphu (30 km), a city located 2,300 meters above sea level, set in a picturesque rural valley with traditional Bhutanese architecture. Notably, Bhutan has no traffic lights; instead, police manage traffic with intricate hand signals at intersections. Use your free time in the evening to relax or explore Thimphu’s streets. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu Sightseeing",
      details: `Start the day with a drive to the Big Buddha Statue viewpoint, where the surrounding park offers walking trails from easy to moderate. Other highlights include the National Memorial Chorten, 12th-century Changangkha Temple, Folk Heritage Museum, and the School of Arts & Crafts.
In the afternoon, visit the weekend market (open Friday to Sunday), the Takin Reserve, and Trashichhodzong. Enjoy free time in the evening to explore Thimphu town at your own pace.
If time allows, take a drive to Dochu La Pass (3,100 m) to walk around the 108 stupas and, weather permitting, admire spectacular Himalayan views. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 04: Thimphu - Haa",
      details: `Travel to Haa, Bhutan’s westernmost valley, on a scenic 3.5-hour drive with minimal traffic. Along the way, stop at Chuzom, the river confluence, to see three shrines built in Nepali, Tibetan, and Bhutanese styles to ward off evil spirits. Continue past Dobje Dzong, an old prison now converted into a monastery.`,
    },
    {
      day: "Day 05: Haa Sightseeing",
      details: `Haa is one of Bhutan’s least visited valleys, preserving the charm of an untouched, primeval landscape. Open to foreigners only since 2002 due to its proximity to Sikkim and Tibet, the valley reflects a simpler, traditional way of life. Its forested hills provide an ideal setting for hiking and mountain biking.
Enjoy several scenic walking trails or explore the valley on bike, visiting local villages and points of interest along virtually traffic-free roads. Overnight stay at Lechuna Heritage Lodge (subject to availability) or at a hotel in Haa.`,
    },
    {
      day: "Day 06: Haa – Paro",
      details: `Start early with a drive to Chele La Pass (3,988 m), where, on clear days, you can enjoy sweeping views of Bhutan’s second-highest peak, Mt. Jhomolhari (7,314 m).
Hike to Kila Nunnery, a peaceful sanctuary for 32 Anims (Buddhist nuns) dedicated to prayer, meditation, and study. After descending about an hour to the road, you can optionally ride a mountain bike down to Paro Valley.
Level of difficulty: Moderate. Picnic lunch included. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 07: Paro Sightseeing",
      details: `After breakfast, hike to Taktsang Monastery along a broad trail, taking about 2 hours uphill.
In the afternoon, drive to the nearly rebuilt Drukgyel Dzong, originally constructed by Shabdrung in 1644 to celebrate his victory over invading Tibetans, and destroyed by fire in 1951. On clear days, the majestic Mount Jomolhari (7,314 m) forms a breathtaking backdrop. On the return to Paro, visit other remote monasteries in the valley.
Difficulty: Moderate to Hard. Overnight stay at a hotel in Paro.`,
    },

    {
      day: "Day 08: Paro - Phuentsholing/Drop",
      details:
        "In the morning, visit to National Museum and Rinpung Dzong and then Drive to Phuntsholing.",
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
      <Itinerary itinerary={itinerary} via_pling={via_pling} show={true} />
      <TourServices />
    </Box>
  );
};

export default BhutanHidenTours;
