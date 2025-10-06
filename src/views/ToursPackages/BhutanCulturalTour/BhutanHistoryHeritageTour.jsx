import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/heritage.png";
import hidden from "../../../assets/home/tour.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanHistoryHeritageTour = () => {

  const itinerary = [
    {
      day: "Day 01: Arrival in Paro to Thimphu",
      details: `The flight into Paro offers one of the most breathtaking mountain views in the world, showcasing a stunning and ever-changing landscape of towering peaks. Upon arrival and completion of customs, our representative will greet you at the airport exit.
After lunch, you’ll explore Paro with visits to notable landmarks such as the Ta Dzong Museum and Rimpung Dzong. Later, enjoy a scenic 1.5-hour drive along the Pachu River to Bhutan’s capital, Thimphu. Before dinner at your hotel, your guide will provide an introduction to Bhutanese customs and etiquette. Spend the night at your hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `Spend the day exploring Thimphu’s highlights, starting with a visit to the National Memorial Chorten — built by the Royal Queen Mother in honor of the Third King, who passed away in 1972. Continue your cultural journey with stops at the historic 12th-century Changangkha Temple and the peaceful Zilukha Nunnery.
If your stay falls on a weekend, take the opportunity to stroll through the lively Thimphu Market, open from Friday to mid-Sunday. Overnight stay at your hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu",
      details: `Continue exploring the cultural treasures of Thimphu with visits to the School of Arts and Crafts and the National Library, which preserves Bhutanese scriptures dating back to the 8th century. Discover traditional craftsmanship at the Paper Factory and step back in time with a visit to the Folk Heritage Museum, showcasing a replica of a medieval Bhutanese farmhouse.
If time permits, you can also stop by the Takin Reserve — home to Bhutan’s national animal — and explore the impressive Tashichhodzong. Spend the night at your hotel in Thimphu.`,
    },
    {
      day: "Day 04: Thimphu – Punakha",
      details: `Travel across the scenic Dochu-La Pass (3,100 m), where, on a clear day, you’ll be rewarded with breathtaking views of the Himalayan peaks, before descending into the warm and lush Punakha Valley (approximately 3 hours’ drive).
Once the ancient capital of Bhutan, Punakha is home to the magnificent Punakha Dzong — the “Palace of Great Happiness” — built in 1637 by Zhabdrung. After lunch, take a leisurely walk to Chimi Lhakhang, the revered temple of Drukpa Kuenley. Spend the night at your hotel in Punakha or Wangduephodrang.`,
    },
    {
      day: "Day 05: Punakha – Trongsa – Bumthang",
      details: `Embark on a scenic drive from Punakha to Bumthang via Trongsa, a journey of around 8 hours that takes you over the Pele La Pass (3,420 m) on the Black Mountain range. Along the way, stop to visit the beautiful Chendebji Chorten, an 18th-century stupa.
After lunch, explore Trongsa Dzong, the largest fortress in Bhutan, offering breathtaking panoramic views of the surrounding valleys. You’ll also visit the Ta Dzong Museum, which houses an impressive collection of historical artifacts from the Royal Family. The journey then continues to Bumthang, home to some of Bhutan’s most ancient palaces and temples. Overnight stay at your lodge in Jakar, Bumthang.`,
    },
    {
      day: "Day 06: Bumthang",
      details: `Begin your day with a visit to Kurjey Lhakhang, one of the most sacred monasteries in Bhutan where Guru Rimpoche, the patron saint of the country, once meditated. Continue to Jambay Lhakhang, a 7th-century temple of great historical and spiritual significance.
After lunch, explore Jakar Dzong and Tamshing Lhakhang, founded in 1501 by the revered saint Pemalingpa, known for its remarkable ancient Buddhist wall paintings. Later, enjoy a leisurely stroll through the charming village of Jakar, the main township of Bumthang. Overnight stay at your lodge in Jakar, Bumthang.`,
    },
    {
      day: "Day 07: Bumthang",
      details: `Spend the day exploring the cultural and historical treasures of Bumthang. Begin with a visit to the 16th-century Tang Ugyen Chholing Palace, which houses a fascinating museum offering deep insights into traditional rural life in Bhutan.
Continue your journey to the sacred Mebartso, or “The Burning Lake”, a revered site steeped in legend and spiritual significance.`,
    },
    {
      day: "Day 08: Bumthang - Gantey",
      details: `Begin your journey early with a scenic drive to Gangtey (approximately 6 hours from Bumthang). Along the way, admire the charming rural landscapes dotted with traditional farmhouses and temples, and catch glimpses of local farmers wearing the distinctive woven bamboo hats typical of central Bhutan.
Upon arrival, visit the Gangtey Goempa (Monastery) — the only Nyingmapa monastery in western Bhutan — and spend time exploring the breathtaking Phobjikha Valley, renowned for its population of Black-Necked Cranes. Overnight at your hotel in Phobjikha.`,
    },
    {
      day: "Day 09: Gantey - Paro",
      details: `In the morning, enjoy a visit to observe the Black-Necked Cranes (available only in winter) before beginning your journey back to Paro (approximately 7 hours). The drive descends gently into the warm Punakha Valley and then ascends once again over the scenic Dochu La Pass. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 10: Paro",
      details: `After breakfast, hike to Taktsang Monastery. In the afternoon, drive to the nearly fully reconstructed Drukgyel Dzong. The original fortress, built by Shabdrung in 1644 to commemorate his victory over invading Tibetans, was destroyed by fire in 1951. On the return drive to Paro, visit other notable sights in the Paro Valley. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 11: Depart Paro",
      details:
        "After breakfast, transfer to Paro Airport for your onward flight. Depending on your flight schedule, you may have time for some last-minute sightseeing or shopping in Paro town.",
    },
  ];

  const tripHighlights = [
    {
      key: "Explore key Buddhist heritage sites across central and westernBhutan.",
    },
    {
      key: "Experience the scenic beauty of Bumthang Valley, a cultural treasure in central Bhutan.",
    },
    {
      key: "Enjoy authentic Bhutanese farmhouse meals with local families.",
    },
    {
      key: "Visit traditional villages and immerse yourself in Bhutan’s way of life and culture.",
    },
    {
      key: "Hike to the legendary Tiger’s Nest Monastery (Paro Taktsang), perched dramatically on a cliff.",
    },
  ];

  const tourDetails = {
    duration: "10 Nights / 11 Days",
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
            Bhutan History and Heritage Tour
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
        A Cultural and Historical Exploration of Central Bhutan
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Set out on a captivating journey through the heart of Bhutan,
        discovering the traditions and heritage of its western and central
        regions. This immersive cultural tour lets you experience the spirit of
        the kingdom at a relaxed pace. Begin in Paro Valley, where striking
        landmarks such as Ta Dzong Museum, Rimpung Dzong, and the iconic Tiger’s
        Nest Monastery showcase Bhutan’s architectural brilliance. Continue on
        to Thimphu, the vibrant capital, to explore its storied past — from
        honoring the sacred National Memorial Chorten to visiting the ancient
        12th-century Changangkha Temple. At the National Library, delve deeper
        into Bhutanese culture through centuries-old scriptures and artifacts.
        This enriching journey offers a deeper understanding of Bhutan’s
        timeless history and its evolving present.
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

export default BhutanHistoryHeritageTour;
