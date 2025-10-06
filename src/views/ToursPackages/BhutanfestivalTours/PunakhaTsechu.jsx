import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/punakha.png";
import hidden from "../../../assets/festival/punakha1.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const PunakhaTsechu = () => {


  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `The flight to Paro offers one of the most breathtaking mountain vistas in the world, with ever-changing views of some of the highest peaks on Earth. Upon arrival, our representative will meet you at Paro airport. After lunch, enjoy an afternoon of sightseeing in Paro, including a visit to the National Museum and Ta Dzong. Continue to Rimpung Dzong, where you can admire the painting of the great saint Milarepa, considered Bhutan’s master of meditation and believed to have attained enlightenment within a single lifetime.`,
    },
    {
      day: "Day 02: Paro",
      details: `After breakfast, embark on a hike to Taktsang Monastery. The trail is wide, and the uphill walk of about 1.5 to 2 hours leads you high above Paro Valley, offering a stunning view of Taktsang Monastery perched dramatically on a sheer cliff 900 meters above the valley floor. In the afternoon, continue with a drive to the nearly fully restored Drukgyel Dzong.`,
    },
    {
      day: "Day 03: Paro - Punakha",
      details: `Drive across Dochu-La Pass (3,100 meters), where clear skies reveal breathtaking views of the Himalayan peaks, before descending into the warm Punakha Valley (approximately 4 hours of driving). Upon arrival, head to Punakha Dzong, the “Palace of Great Happiness,” to participate in the festival.`,
    },
    {
      day: "Day 04: Punakha (Punakha Festival)",
      details: `Spend the morning at Punakha Dzong attending the Punakha Tsechu festival, where monks in vibrant brocade costumes perform masked dances accompanied by chants and readings of Buddhist scriptures. After lunch, take a short walk to visit Chimi Lhakhang, the temple dedicated to Drukpa Kunley, also known as the Divine Madman.`,
    },
    {
      day: "Day 05: Punakha - Gantey",
      details: `Transfer to Phobjikha Valley (about 3 hours) via Wangduephodrang, driving along a winding mountain road through oak and rhododendron forests and over a high pass into the scenic valley. Phobjikha, one of Bhutan’s few glacial valleys, serves as the winter home of black-necked cranes (November–March) migrating from Tibet. After lunch, visit the Phobjikha Sanctuary to observe the cranes (Nov–Mar only) and explore Gangtey Gompa, a 16th-century monastery.`,
    },
    {
      day: "Day 06: Phobjikha Valley - Thimphu",
      details: `In the morning, take a walk to meet local schoolchildren who travel long distances to attend classes. Phobjikha is a haven for nature enthusiasts and hikers, with many scenic trails around the valley. Visit the beautifully renovated Gangtey Monastery, known for its intricate architecture and paintings, then walk back down through the village. After lunch, drive back to Thimphu, crossing Dochula Pass once again.`,
    },
    {
      day: "Day 07: Thimphu",
      details: `Spend a full day exploring Thimphu, beginning with the National Memorial Chorten, which showcases Buddhist faith through its paintings and statues. Continue to the 12th-century Changangkha Temple and Drubthob Monastery, home to the Zilukha Nunnery. Time permitting, visit the Takin enclosure, the national animal of Bhutan, and Tashichhodzong, the “Fortress of the Glorious Religion,” which also houses government offices, His Majesty’s secretariat, and the central monastic body.`,
    },
    {
      day: "Day 08: Thimphu - Paro",
      details: `Continue your Thimphu sightseeing by visiting the School of Arts and Crafts, where students learn 13 traditional Bhutanese art forms. Explore the National Library, home to Bhutanese scriptures dating back to the 8th century, and the Traditional Paper Factory, which showcases the Bhutanese paper-making process. Also, visit the Folk Heritage Museum, featuring a detailed replica of a medieval farmhouse. In the late afternoon, transfer to Paro for an overnight stay at your hotel.`,
    },
    {
      day: "Day 09: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Attend the Punakha Tshechu festival, experiencing Bhutanese art and masked dances.",
    },
    {
      key: "Enjoy majestic Himalayan views from Dochula Pass.",
    },
    {
      key: "Immerse in local culture by wearing traditional Bhutanese attire.",
    },
    {
      key: "Travel through the scenic valleys of Thimphu, Paro, Punakha, and Gangtey.",
    },
    {
      key: "Hike to the famous Tiger’s Nest Monastery (Paro Taktsang), perched on a cliffside.",
    },
    {
      key: "Explore authentic Bhutanese villages and their unique rural lifestyle.",
    },
  ];

  const tourDetails = {
    duration: "8 Nights / 9 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "Feb-March",
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
            color="#000"
            sx={{
              py: "7%",
              mt: { xs: "40%", sm: "20%", md: "20%", lg: "10%" },
              fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            Punakha Tsechu Festival
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
        Experience Authentic Bhutanese Culture{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Enhance your journey to Bhutan by attending the spectacular Punakha
        Tshechu Festival, held at the iconic Punakha Dzong. This lively Buddhist
        festival, following the famous Punakha Drubchen, honors Guru Rinpoche,
        the revered founder of Bhutanese Buddhism. Witness mesmerizing masked
        dances, traditional music, and the vibrant display of Bhutanese attire.
        The festival’s centerpiece is the ceremonial unfurling of a giant
        Thongdrol (tapestry) depicting Guru Rinpoche, believed to cleanse sins
        and bestow blessings upon all who see it—creating a deeply spiritual and
        memorable experience.
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

export default PunakhaTsechu;
