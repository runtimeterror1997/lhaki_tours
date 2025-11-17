import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/phalus.png";
import hidden from "../../../assets/home/rural.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanTraditionsImersion = () => {


  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `Arrive in Paro via Druk Air (Royal Bhutan Airlines) or Bhutan Airlines. After completing immigration and customs, meet your representative and drive to Thimphu.
Upon arrival, check into your hotel. In the afternoon, visit Changlimithang Archery Ground to watch archery matches. In the evening, explore Thimphu town. Overnight stay at a hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu Sight Seeing",
      details: `After breakfast, visit the exterior of Memorial Chorten, built in memory of Bhutan’s third king (1952–1972), followed by Buddha Point and Simply Bhutan, the traditional museum. After a relaxing lunch, explore Takin Zoo, home to Bhutan’s national animal, the takin, and visit BBS Tower. Continue to Tashichhodzong, and in the evening, explore Thimphu town. Overnight stay at a hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu – Punakha",
      details: `Drive over Dochu La Pass (3,100 m), which on clear days offers breathtaking views of the Himalayas, before descending into the warm Punakha Valley (about 3 hours total driving).
Punakha, Bhutan’s former capital, is home to Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the Unifier of Bhutan, as foretold by Guru Rinpoche (Padmasambhava). Drive about 12 km and take a walk across rice fields and a river to reach Khamsum Yulley Namgyal Chorten, perched on the hillock of Ngezergang, featuring paintings and statues of the Nyingmapa tradition. Visit Metshina Village and enjoy a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple where you may receive a blessing. Overnight stay in Punakha.`,
    },
    {
      day: "Day 04: Punakha - Trongsa - Bumthang",
      details: `Drive from Punakha to Bumthang via Trongsa, crossing Pele La Pass (3,420 m) in the Black Mountain range. En route, visit the beautiful 18th-century Chendebji Chorten.
After lunch, explore Trongsa Dzong, Bhutan’s largest dzong, with spectacular views across the surrounding landscape. Also visit Ta Dzong Museum, which houses an impressive collection of historical artifacts of the Royal Family.
Continue to Bumthang, home to some of Bhutan’s oldest palaces and temples. Overnight stay at your hotel in Jakar, Bumthang.`,
    },
    {
      day: "Day 05: Bumthang",
      details: `In the morning, visit Kurjey Lhakhang, one of Bhutan’s most sacred sites where Guru Rinpoche meditated, and Jambay Lhakhang, dating back to the 7th century.
After lunch, explore Jakar Dzong and Tamshing Lhakhang, founded in 1501 by Pema Lingpa and featuring ancient Buddhist wall paintings. Later, enjoy wandering through Jakar village, the main township of Bumthang. Overnight stay at your hotel in Jakar, Bumthang.`,
    },

    {
      day: "Day 06: Bumthang - Gangtey",
      details: `Start early for Gangtey, approximately 6 hours from Bumthang. The route is dotted with farmhouses and temples, and you may see local farmers wearing traditional woven bamboo hats of central Bhutan. Visit Gangtey Goempa, the only Nyingmapa monastery in western Bhutan, and explore Phobjikha Valley, allowing time to observe the Black-Necked Cranes. Overnight stay at your hotel in Phobjikha.`,
    },
    {
      day: "Day 07: Gantey – Paro",
      details: `Begin the day with a visit to observe the Black-Necked Cranes (available only in winter) before setting off for Paro. The journey from Gangtey takes you down into the pleasant Punakha Valley and then ascends over the scenic Dochu La Pass. On arrival in Paro, enjoy sightseeing that includes Ta Dzong Museum, Rimpung Dzong, and other notable landmarks in the valley. Later, explore Paro town at your leisure. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 08:  Hike Paro Tiger’s Nest Monastery ",
      details: `After breakfast, embark on a hike to the iconic Taktsang Monastery, famously known as the "Tiger’s Nest." The ascent to the main viewpoint takes about three hours, offering breathtaking views of the monastery perched dramatically on a cliffside. Enjoy refreshments at the Viewpoint Cafeteria before continuing your hike for another 1.5 hours to reach the monastery itself. According to legend, Guru Rinpoche flew here from eastern Bhutan on the back of a tigress in the 8th century and meditated in a cave for three months. The main temple of the complex was built in 1692.
After exploring the monastery, descend the trail, stopping for lunch at the cafeteria before returning to the road. Head back to your hotel, where you can unwind with a traditional hot stone bath. In the evening, stroll through Paro town. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 09: Depart from Paro",
      details: `In the morning, you will be transferred to the airport for your departure flight, where our representative will see you off and wish you a pleasant journey ahead.`,
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
      day: "Day 03: Thimphu Sight Seeing",
      details: `After breakfast, visit the exterior of Memorial Chorten, built in memory of Bhutan’s third king (1952–1972), followed by Buddha Point and Simply Bhutan, the traditional museum. After a relaxing lunch, explore Takin Zoo, home to Bhutan’s national animal, the takin, and visit BBS Tower. Continue to Tashichhodzong, and in the evening, explore Thimphu town. Overnight stay at a hotel in Thimphu.`,
    },
    {
      day: "Day 04: Thimphu – Punakha",
      details: `Drive over Dochu La Pass (3,100 m), which on clear days offers breathtaking views of the Himalayas, before descending into the warm Punakha Valley (about 3 hours total driving).
Punakha, Bhutan’s former capital, is home to Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the Unifier of Bhutan, as foretold by Guru Rinpoche (Padmasambhava). Drive about 12 km and take a walk across rice fields and a river to reach Khamsum Yulley Namgyal Chorten, perched on the hillock of Ngezergang, featuring paintings and statues of the Nyingmapa tradition. Visit Metshina Village and enjoy a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple where you may receive a blessing. Overnight stay in Punakha.`,
    },
    {
      day: "Day 05: Punakha - Trongsa - Bumthang",
      details: `Drive from Punakha to Bumthang via Trongsa, crossing Pele La Pass (3,420 m) in the Black Mountain range. En route, visit the beautiful 18th-century Chendebji Chorten.
After lunch, explore Trongsa Dzong, Bhutan’s largest dzong, with spectacular views across the surrounding landscape. Also visit Ta Dzong Museum, which houses an impressive collection of historical artifacts of the Royal Family.
Continue to Bumthang, home to some of Bhutan’s oldest palaces and temples. Overnight stay at your hotel in Jakar, Bumthang.`,
    },
    {
      day: "Day 06: Bumthang",
      details: `In the morning, visit Kurjey Lhakhang, one of Bhutan’s most sacred sites where Guru Rinpoche meditated, and Jambay Lhakhang, dating back to the 7th century.
After lunch, explore Jakar Dzong and Tamshing Lhakhang, founded in 1501 by Pema Lingpa and featuring ancient Buddhist wall paintings. Later, enjoy wandering through Jakar village, the main township of Bumthang. Overnight stay at your hotel in Jakar, Bumthang.`,
    },

    {
      day: "Day 07: Bumthang - Gangtey",
      details: `Start early for Gangtey, approximately 6 hours from Bumthang. The route is dotted with farmhouses and temples, and you may see local farmers wearing traditional woven bamboo hats of central Bhutan. Visit Gangtey Goempa, the only Nyingmapa monastery in western Bhutan, and explore Phobjikha Valley, allowing time to observe the Black-Necked Cranes. Overnight stay at your hotel in Phobjikha.`,
    },
    {
      day: "Day 08: Gantey – Paro",
      details: `Begin the day with a visit to observe the Black-Necked Cranes (available only in winter) before setting off for Paro. The journey from Gangtey takes you down into the pleasant Punakha Valley and then ascends over the scenic Dochu La Pass. On arrival in Paro, enjoy sightseeing that includes Ta Dzong Museum, Rimpung Dzong, and other notable landmarks in the valley. Later, explore Paro town at your leisure. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 09:  Hike Paro Tiger’s Nest Monastery ",
      details: `After breakfast, embark on a hike to the iconic Taktsang Monastery, famously known as the "Tiger’s Nest." The ascent to the main viewpoint takes about three hours, offering breathtaking views of the monastery perched dramatically on a cliffside. Enjoy refreshments at the Viewpoint Cafeteria before continuing your hike for another 1.5 hours to reach the monastery itself. According to legend, Guru Rinpoche flew here from eastern Bhutan on the back of a tigress in the 8th century and meditated in a cave for three months. The main temple of the complex was built in 1692.
After exploring the monastery, descend the trail, stopping for lunch at the cafeteria before returning to the road. Head back to your hotel, where you can unwind with a traditional hot stone bath. In the evening, stroll through Paro town. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 10: Paro - Phuentsholing/Drop",
      details:
        "In the morning, visit to National Museum and Rinpung Dzong and then Drive to Phuntsholing.",
    },
  ];

  const tripHighlights = [
    {
      key: "Take in stunning Himalayan views from Dochula Pass.",
    },
    {
      key: "Enjoy Bhutanese farmhouse dinners with locals and learn about their lifestyle.",
    },
    {
      key: "Hike to Chimi Lhakhang, the fertility temple in Punakha Valley.",
    },
    {
      key: "Taste authentic Bhutanese dishes like Ema Datshi with local rice.",
    },
    {
      key: "Explore the scenic Gangtey nature trail, with gentle slopes and lush greenery.",
    },
    {
      key: "Hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), a cliffside cultural landmark.",
    },
  ];

  const tourDetails = {
    duration: "8 Nights / 9 Days",
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
            height: "50vh",
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
              mt: { xs: "40%", sm: "20%", md: "15%", lg: "7%" },
              fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            Bhutan Traditions Immersion Tour
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
        Explore Bhutan’s Tribes, Traditions & Village Life
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Immerse yourself in Bhutan’s rich cultural heritage on this captivating
        journey. Visit traditional farmhouses, meet northern nomadic tribes, and
        take part in Buddhist ceremonies. Experience the daily life of Bhutanese
        communities, hear stories by the fireside, and witness ancient crafts
        handed down through generations. This unique journey offers a memorable
        and authentic insight into Bhutan’s vibrant traditions and timeless
        heritage.
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

export default BhutanTraditionsImersion;
