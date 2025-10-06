import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/black1.png";
import hidden from "../../../assets/festival/phob.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BlackNeckedCraneFestival = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `The flight to Paro offers breathtaking views of the Himalayan mountains, including Bhutan’s sacred peaks, Jumolhari and Jichu Drake. If arriving via Kathmandu, you may even glimpse Mount Everest and Mount Kanchenjunga. Upon arrival in Paro, our representative will greet you and transfer you to your hotel. In the afternoon, visit Paro Dzong, built in 1646, which houses both government offices and religious institutions. Cross a traditional wooden bridge to reach the Dzong, then explore the National Museum, formerly the watchtower for the Dzong, featuring a collection of fine arts, paintings, thangkas, statues, and antiques. Conclude the sightseeing with a visit to Kichu Lhakhang, Bhutan’s oldest temple, before driving to Thimphu for an overnight stay.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `After breakfast, you will explore Thimphu’s key attractions, beginning with the King’s Memorial Chorten, built in memory of the third King of Bhutan (1952–1972), followed by Buddha Point and Changangkha Monastery. Continue to the radio tower for panoramic views of Thimphu Valley and the Thimphu Dzong, and then visit the zoo, home to Bhutan’s national animal, the takin. Next, explore the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts. After a relaxing lunch, visit the National Institute of Traditional Medicine, a traditional paper factory, and the majestic Tashichhodzong. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day provides breathtaking views of the Himalayan peaks, before descending into the warm and scenic Punakha Valley (approximately 3 hours of driving). Punakha, the ancient capital of Bhutan, is home to the Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by Guru Rinpoche (Padmasambhava). After lunch, drive about 12 km from the main road and take a walk across rice fields and a river to reach the Khamsum Yulley Namgyal Chorten, perched on a beautiful hillock called Ngezergang, housing paintings and statues of the Nyingmapa tradition. Continue to Metshina Village for a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple where visitors may receive a special blessing. Overnight stay in Punakha.`,
    },
    {
      day: "Day 04: Punakha - Gantey",
      details: `Begin the day with a drive to Gangtey, passing through lush forests of oak and rhododendron. Upon arrival at Gangtey village, visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan. From here, enjoy scenic views of the Black Mountain range and the Phobjikha Valley, which serves as the winter home of the black-necked cranes. Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 05: Attend Black Neck Crane festival",
      details: `Today, participate in the Black-Necked Crane Festival, held annually in the courtyard of Gangtey Goenpa in Phobjikha Valley. The festival features cultural performances including folk songs and dances—some inspired by the black-necked cranes—mask dances by locals, crane-themed dances, and environmental conservation dramas and songs by schoolchildren. You will also have time to observe the Black-Necked Cranes, visit the Information Centre, and explore the valley’s scenic nature trails. Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 06: Gangtey - Paro",
      details: `Explore the scenic Phobjikha Valley, renowned as one of Bhutan’s most beautiful valleys, and visit the Education Center managed by the Royal Society for the Protection of Nature (RSPN). Afterwards, drive to Paro, stopping en route at Wangdi Town and nearby villages known for their stone and slate carvings. A short distance from the town, you can also see Rinchengang, one of Bhutan’s most unique villages. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 07: Hike to Paro Tiger’s Nest Monastery",
      details: `After breakfast, embark on a hike to Taktsang Monastery. The trail is wide, and the uphill walk of approximately 1.5 to 2 hours ascends nearly a kilometer above the Paro valley floor. For those unable to hike, a horse can be arranged to reach the cafeteria. In the afternoon, drive to the nearly fully reconstructed Drukgyel Dzong, originally built by Shabdrung in 1644 to commemorate his victory against invading Tibetans, though it was destroyed by fire in 1951. Later, enjoy a leisurely stroll through Paro market and town. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 08: Depart from Paro",
      details: "Drive to the Airport for the departure.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy majestic views of the Himalayan mountain ranges from Dochula Pass.",
    },
    {
      key: "Experience the heartwarming Black-Necked Crane Festival in the serene Gangtey Valley.",
    },
    {
      key: "Learn how Bhutan’s deep respect for nature is intertwined with its culture.",
    },
    {
      key: "Explore authentic Bhutanese villages and experience their unique rural life.",
    },
    {
      key: "Embark on a hike to the famous Tiger’s Nest Monastery (Paro Taktsang), perched precariously on a cliffside.",
    },
    {
      key: "Immerse yourself in local Bhutanese culture by wearing colorful traditional attire.",
    },
  ];

  const tourDetails = {
    duration: "7 Nights / 8 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "October-November",
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
            Black Necked Crane Festival
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
        Celebrate the Grand Arrival in Phobjikha{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        On this Bhutan tour, witness the annual Black-Necked Crane Festival,
        held every 11th November at Gangtey Gompa in the picturesque Phobjikha
        Valley. This one-day event honors the arrival of the majestic
        Black-Necked Cranes, symbolizing harmony between nature and the local
        community during the Bhutanese winter. During the festival, enjoy
        vibrant cultural performances, traditional music, and a heartfelt
        celebration of national conservation efforts aimed at protecting these
        endangered birds. Experience the joyous atmosphere and Bhutan’s deep
        reverence for its natural heritage and wildlife.
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

export default BlackNeckedCraneFestival;
