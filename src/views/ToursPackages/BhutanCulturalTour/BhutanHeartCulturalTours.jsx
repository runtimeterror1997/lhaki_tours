import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/prayers.png";
import hidden from "../../../assets/home/dochula.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanHeartCulturalTours = () => {


  const itinerary = [
    {
      day: "Day 01: Arrival in Paro to Thimphu",
      details: `Arrive in Paro via Druk Air (Royal Bhutan Airlines) or Bhutan Airlines. After completing immigration and customs, meet your representative and drive to Thimphu.
Check in at your hotel upon arrival. Overnight stay at a hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `After breakfast, check into your hotel in Thimphu. In the afternoon, visit Takin Zoo, home to Bhutan’s national animal, and view the BBS Tower. Stop by Memorial Chorten, built in honor of Bhutan’s third king (1952–1972), and visit Buddha Point and Simply Bhutan, the traditional museum. Continue to Tashichhodzong, the Craft Bazaar, a nunnery temple, and the School of Arts and Crafts (painting school). End the day exploring Thimphu town. Overnight stay at a hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Drive over Dochu La Pass (3,100 m), which offers stunning Himalayan views on clear days, before descending into the warm Punakha Valley (approximately 3 hours total).
Punakha, Bhutan’s former capital, is home to Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by Shabdrung, the Unifier of Bhutan, as foretold by Guru Rimpoche (Padmasambhava). After lunch, drive about 12 km and walk across rice fields and a river to reach Khamsum Yulley Namgyal Chorten on Ngezergang hill, showcasing paintings and statues of the Nyingmapa tradition. Visit Metshina Village and take a 20-minute walk through rice fields to Chimi Lhakhang, the fertility temple, where a special blessing can be received if desired. Overnight stay at a hotel in Punakha.`,
    },
    {
      day: "Day 04: Punakha - Gangtey",
      details: `Start the day with a drive to Gangtey, passing through lush oak and rhododendron forests. Upon arrival at Gangtey village, visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan. Enjoy views of the scenic Black Mountain range and Phobjikha Valley, the winter home of black-necked cranes. Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 05: Gantey – Paro",
      details: `After breakfast, drive to Paro. After lunch, visit the nearly rebuilt Drukgyel Dzong, with the majestic Mount Jomolhari (7,314 m) as a backdrop on clear days. On the return to Paro, enjoy sightseeing in the valley, including visits to Ta Dzong Museum and Rimpung Dzong, along with other local attractions. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 06: Hike Paro Tiger’s Nest Monastery",
      details: `After breakfast, hike to Taktsang Monastery, also called the ‘Tiger’s Nest’. The climb to the viewpoint takes about 3 hours, offering spectacular views of the monastery perched on the cliffside. Pause for refreshments at the View Point Cafeteria, then continue up to the monastery, which takes an additional 1½ hours. Legend says that in the 8th century, Guru Rinpoche flew here on a tigress and meditated in a cave for three months. The main monastery dates back to 1692 and, although damaged by fire in 1998, has been fully restored.
After visiting the monastery, descend to the road, stopping for lunch at the viewpoint cafeteria. Return to your hotel and relax with a complimentary traditional hot stone bath. In the evening, explore Paro Town. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 07:  Paro – Chelela  - Paro",
      details: `After breakfast, drive to Chelela Pass, Bhutan’s highest motorable point at 3,988 m (13,084 ft), offering spectacular Himalayan views. The pass lies between Paro and Haa valleys. Beginning from Paro, the route winds through enchanting pine, oak, and rhododendron forests, which bloom in vivid red and pink during April and May, with the fragrant scent of daphne in the air.
About 10 km from the top, spot Kila Nunnery perched on a hillside, with prayer flags lining the walking path. Above the tree line, you may encounter yaks grazing in alpine meadows. The pass is adorned with numerous prayer flags against the deep blue sky, and on clear days, Mt. Jomolhari and other Himalayan peaks provide a breathtaking backdrop.
Return to your hotel and, in the evening, explore Paro Town. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 08: Depart from Paro",
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
      day: "Day 03: Thimphu - Punakha",
      details: `Drive over Dochu La Pass (3,100 m), which offers stunning Himalayan views on clear days, before descending into the warm Punakha Valley (approximately 3 hours total).
Punakha, Bhutan’s former capital, is home to Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by Shabdrung, the Unifier of Bhutan, as foretold by Guru Rimpoche (Padmasambhava). After lunch, drive about 12 km and walk across rice fields and a river to reach Khamsum Yulley Namgyal Chorten on Ngezergang hill, showcasing paintings and statues of the Nyingmapa tradition. Visit Metshina Village and take a 20-minute walk through rice fields to Chimi Lhakhang, the fertility temple, where a special blessing can be received if desired. Overnight stay at a hotel in Punakha.`,
    },
    {
      day: "Day 04: Punakha - Gangtey",
      details: `Start the day with a drive to Gangtey, passing through lush oak and rhododendron forests. Upon arrival at Gangtey village, visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan. Enjoy views of the scenic Black Mountain range and Phobjikha Valley, the winter home of black-necked cranes. Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 05: Gantey – Paro",
      details: `After breakfast, drive to Paro. After lunch, visit the nearly rebuilt Drukgyel Dzong, with the majestic Mount Jomolhari (7,314 m) as a backdrop on clear days. On the return to Paro, enjoy sightseeing in the valley, including visits to Ta Dzong Museum and Rimpung Dzong, along with other local attractions. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 06: Hike Paro Tiger’s Nest Monastery",
      details: `After breakfast, hike to Taktsang Monastery, also called the ‘Tiger’s Nest’. The climb to the viewpoint takes about 3 hours, offering spectacular views of the monastery perched on the cliffside. Pause for refreshments at the View Point Cafeteria, then continue up to the monastery, which takes an additional 1½ hours. Legend says that in the 8th century, Guru Rinpoche flew here on a tigress and meditated in a cave for three months. The main monastery dates back to 1692 and, although damaged by fire in 1998, has been fully restored.
After visiting the monastery, descend to the road, stopping for lunch at the viewpoint cafeteria. Return to your hotel and relax with a complimentary traditional hot stone bath. In the evening, explore Paro Town. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 07:  Paro – Chelela  - Paro",
      details: `After breakfast, drive to Chelela Pass, Bhutan’s highest motorable point at 3,988 m (13,084 ft), offering spectacular Himalayan views. The pass lies between Paro and Haa valleys. Beginning from Paro, the route winds through enchanting pine, oak, and rhododendron forests, which bloom in vivid red and pink during April and May, with the fragrant scent of daphne in the air.
About 10 km from the top, spot Kila Nunnery perched on a hillside, with prayer flags lining the walking path. Above the tree line, you may encounter yaks grazing in alpine meadows. The pass is adorned with numerous prayer flags against the deep blue sky, and on clear days, Mt. Jomolhari and other Himalayan peaks provide a breathtaking backdrop.
Return to your hotel and, in the evening, explore Paro Town. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 08: Paro - Phuentsholing/Drop",
      details:
        "In the morning, visit to National Museum and Rinpung Dzong and then Drive to Phuntsholing.",
    },
  ];

  const tripHighlights = [
    {
      key: "Discover historic Buddhist monasteries and sacred sites.",
    },
    {
      key: "Visit the revered Chimi Lhakhang, a temple associated with fertility.",
    },
    {
      key: "Take in breathtaking Himalayan views from Dochula and Chelela Passes.",
    },
    {
      key: "Enjoy genuine Bhutanese hospitality with farmhouse dinners and local interactions.",
    },
    {
      key: "Explore traditional villages and experience authentic rural life.",
    },
    {
      key: "Hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), a remarkable cliffside cultural landmark.",
    },
  ];

  const tourDetails = {
    duration: "7 Nights / 8 Days",
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
            Heart of Bhutan Cultural Tour
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
        Discover Western Bhutan & Its Spiritual Heritage
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Immerse yourself in the heart of Bhutan on this enriching tour, focusing
        on Western Bhutan’s historically and culturally significant regions.
        This journey includes Paro, Haa, Thimphu, Punakha, and Wangdue Phodrang,
        offering a deep dive into Bhutanese traditions and way of life. Explore
        stunning landscapes, from snow-capped mountains to tranquil valleys, and
        visit grand monasteries, ancient temples, and sacred stupas. With warm
        Bhutanese hospitality throughout, experience the kingdom’s rich Buddhist
        heritage in a truly authentic way.
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

export default BhutanHeartCulturalTours;
