import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/wangdi.png";
import hidden from "../../../assets/festival/wangdi3.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const WangdueTsechu = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro ",
      details: `The flight to Paro offers a breathtaking journey across the Himalayan Mountains, providing spectacular views of some of Bhutan’s most sacred peaks, including Jumolhari and Jichu Drake. For those arriving via Kathmandu, it is even possible to glimpse Mount Everest and Mount Kanchenjunga. Upon arrival in Paro, you will be warmly greeted by our representative and transferred to your hotel. In the afternoon, enjoy sightseeing around Paro, beginning with a visit to the Paro Dzong, built in 1646, which currently houses government offices and religious institutions. You will cross a traditional wooden bridge to reach the Dzong, followed by a tour of the National Museum, formerly the Dzong’s watchtower, which displays an impressive collection of fine arts, paintings, thangkas, statues, and antiques. The day continues with a visit to Kichu Lhakhang, Bhutan’s oldest temple, before an evening stroll through the Paro market and town. Overnight stay is at your hotel in Paro.`,
    },
    {
      day: "Day 02: Paro - Thimphu",
      details: `After breakfast, embark on an excursion to Taktsang, also known as the “Tiger’s Nest,” perched dramatically 900 meters above the Paro valley floor. Take time to meditate at this sacred site, where Guru Rimpoche is said to have flown on the back of a tigress and meditated for three months. Lunch will be served at the cafeteria. Afterwards, return to Paro and drive to Thimphu, the capital of Bhutan, along the scenic route through Paro Valley to the confluence of the Paro and Thimphu rivers at Chuzomsa, adorned with three distinct styles of chortens. Visit Tachogang Lhakhang, built in the 15th century by Thangthong Gyelpo, the pioneer of iron bridges in Bhutan, and Simtokha Dzong, the oldest Dzong in Bhutan, constructed by Shabdrung in the 17th century. Upon arrival in Thimphu, check into your hotel and enjoy an evening exploring the city, including visits to local handicraft shops. Overnight stay is at your hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu",
      details: `After breakfast, visit the King’s Memorial Chorten, built in memory of Bhutan’s third King (1952–1972), followed by Buddha Point, Changgangkha Monastery, and the radio tower offering panoramic views of Thimphu Valley and Thimphu Dzong. Stop by the zoo to see the national animal, the takin. Continue to the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts (painting school). After a relaxing lunch, explore the National Institute of Traditional Medicine, a traditional paper factory, and the majestic Tashichhodzong. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 04: Thimphu - Punakha",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day offers stunning views of the Himalayan peaks, before descending into the warm and scenic Punakha Valley (approximately 3 hours of driving). Punakha, the ancient capital of Bhutan, welcomes you with its iconic Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by Guru Rinpoche. After lunch, drive about 12 km and take a walk across rice fields and a river to reach the Khamsum Yulley Namgyal Chorten, perched on the hillock of Ngezergang, featuring exquisite Nyingmapa-style paintings and statues. Continue to Metshina Village and enjoy a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple where you may receive a special blessing. Overnight stay in Punakha.`,
    },
    {
      day: "Day 05: Punakha - Wangduephodrang",
      details: `After breakfast, depart for Wangduephodrang Dzong to attend the vibrant local festival, experiencing the colorful masked dances and cultural celebrations.`,
    },
    {
      day: "Day 06: Wangduephodrang - Gantey",
      details: `After breakfast, begin the day with a drive to Gangtey, passing through dense oak and rhododendron forests before arriving at Gangtey village. Explore the scenic Phobjikha Valley, Bhutan’s most beautiful valley, and visit the Education Center maintained by the Royal Society for the Protection of Nature (RSPN). Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 07: Gantey",
      details: `After breakfast, visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan and a highly spiritual site. From there, enjoy views of the scenic Black Mountain range and the Phobjikha Valley, home to black-necked cranes during the winter. Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 07: Gantey - Paro",
      details: `After breakfast, begin the drive to Paro, stopping for lunch in Wangdue Phodrang along the way. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 08: Depart from Paro",
      details: "Drive to the Airport for the departure.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy majestic views of the Himalayan mountains from Dochula Pass.",
    },
    {
      key: "Embark on a hike to the famous Tiger’s Nest Monastery (Paro Taktsang), a cultural landmark sitting dramatically on a cliffside.",
    },
    {
      key: "Explore genuine Bhutanese villages and understand authentic rural life in Bhutan.",
    },
    {
      key: "Witness the Wangdue Phodrang Festival's grand Raksha Mangcham, or ‘Dance of the Dead.’",
    },
    {
      key: "Journey through the gorgeous and serene valleys of Thimphu, Paro, Punakha, and Gangtey.",
    },
  ];

  const tourDetails = {
    duration: "8 Nights / 9 Days",
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
            Wangdue Phodrang Festival
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
        An Autumn Celebration of Bhutanese Heritage
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        The Wangduephodrang Tshechu is a vibrant autumn festival celebrating
        Bhutanese heritage at the historic Wangduephodrang Dzong. Held over
        three days, the event features sacred masked dances, including the
        renowned Raksha Mangcham (Dance of the Ox), traditional music, and
        colorful Bhutanese attire. The festival’s spiritual highlight is the
        grand unveiling of the Guru Tshengye Thongdrol tapestry. Attending this
        event offers a profound cultural experience, connecting visitors with
        Bhutanese traditions, rural life, and the stunning local landscapes.
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

export default WangdueTsechu;
