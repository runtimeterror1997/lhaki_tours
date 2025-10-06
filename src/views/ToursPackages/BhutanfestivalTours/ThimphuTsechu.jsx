import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/thimphu1.png";
import hidden from "../../../assets/festival/thiphu2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const ThimphuTsechu = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `After completing customs formalities, our representative will greet you at the Paro airport exit. Following lunch, enjoy an afternoon of sightseeing around Paro, including a visit to the Ta Dzong Museum and Rimpung Dzong, where you can view the painting of the great saint Milarepa. Afterwards, drive along the Pachu River to the capital, Thimphu (approximately 1.5 hours). Before dinner at your hotel, your guide will provide an orientation on Bhutanese etiquette. Overnight stay will be at your hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `After breakfast, drive to Tashichhodzong to attend the Thimphu Festival, where locals dressed in their finest attire travel from miles around to participate in the vibrant celebrations.`,
    },
    {
      day: "Day 03: Thimphu",
      details: `Enjoy a morning of sightseeing with visits to the 12th-century Changangkha Temple and the National Memorial Chorten, which showcases Buddhist faith through intricate paintings and statues. In the afternoon, return to Tashichhodzong to continue experiencing the vibrant celebrations of the Thimphu festival.`,
    },
    {
      day: "Day 04: Thimphu - Punakha",
      details: `Drive over the scenic Dochu-La Pass (3,100 meters), which on a clear day offers stunning views of the Himalayan peaks, before descending into the warm Punakha Valley (approximately 3 hours of driving). Upon arrival, visit Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, Bhutan’s unifier. After lunch, take a walk to Chimi Lhakhang, the temple of Drukpa Kuenly, also known as the Divine Madman.`,
    },
    {
      day: "Day 05: Punakha - Thimphu - Paro",
      details: `In the morning, drive to Yabesa village and hike through the rice fields up to Khamsum Yueley Namgyal Chorten, built by Her Majesty Queen Ashi Tshering Yangdon Wangchuk.
After the hike, drive back to Thimphu to visit The National Library, which houses a collection of Bhutanese scriptures dating back to the 8th century, and explore a fascinating replica of a medieval farmhouse at the Folk Heritage Museum.
Later, proceed to Paro, and upon arrival, check into your hotel.`,
    },
    {
      day: "Day 06: Paro",
      details: `After breakfast, hike to Taktsang Monastery. The broad trail takes approximately 2 hours uphill, ascending nearly a kilometer above the Paro valley floor. For those unable to hike, a horse transfer to the viewing point can be arranged.
In the afternoon, drive to the almost fully reconstructed Drukgyel Dzong, and on the return journey to Paro, visit other sights in the Paro valley. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 07: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Experience the vibrant and colorful atmosphere of the Thimphu Tshechu festival.",
    },
    {
      key: "Witness and photograph traditional masked dances performed by monks and locals.",
    },
    {
      key: "Explore historic Buddhist monasteries and centuries-old dzongs (fortresses).",
    },
    {
      key: "Savor authentic Bhutanese farmhouse meals and connect with welcoming local families.",
    },
    {
      key: "Discover genuine Bhutanese villages and immerse yourself in their traditional rural lifestyle.",
    },
    {
      key: "Refresh and relax with a traditional Bhutanese herbal hot stone bath.",
    },
    {
      key: "Hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), perched dramatically on a cliffside.",
    },
  ];

  const tourDetails = {
    duration: "6 Nights / 7 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "Sep-Oct",
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
            color="#fff"
            sx={{
              py: "7%",
              mt: { xs: "40%", sm: "20%", md: "20%", lg: "10%" },
              fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            Thimphu Tsechu Festival
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
        Discover the Heart of Bhutanese Culture{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Discover Bhutan’s cultural essence on this journey, highlighted by the
        vibrant Thimphu Tshechu Festival. Held annually at Tashichhodzong in the
        capital, this three-day celebration features energetic masked dances,
        traditional music, and a dazzling array of Bhutanese attire. Experience
        centuries-old customs come alive as both locals and visitors join in the
        festivities. Taking place during the pleasant months of September to
        October, the Thimphu Tshechu offers an unmissable opportunity for
        travelers to immerse themselves in authentic Bhutanese culture.
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

export default ThimphuTsechu;
