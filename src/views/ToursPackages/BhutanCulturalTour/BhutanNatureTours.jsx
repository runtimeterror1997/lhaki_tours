import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/trecking.png";
import hidden from "../../../assets/home/naturetrek.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanNatureTours = () => {

  const itinerary = [
    {
      day: "Day 01: Arrival in Paro to Thimphu",
      details: `ChatGPT said:

The flight to Paro offers one of the most breathtaking mountain vistas globally, with ever-changing views of some of the planet’s tallest peaks. Upon arrival, our representative will welcome you at Paro airport. After lunch, enjoy afternoon sightseeing in Paro, visiting the National Museum at Ta Dzong and Rimpung Dzong. Later, drive to the capital, Thimphu, a city unlike any other in the world — it has no traffic lights, with a lone policeman directing vehicles at intersections using hand signals, a unique sight to witness.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `Spend a full day exploring Thimphu, starting with a visit to the National Memorial Chorten, which showcases Buddhist teachings through intricate paintings and statues. Built under the initiative of the Third King, the Chorten was intended to safeguard Bhutan from the adverse effects of modernization. Time permitting, you may also visit the Takin enclosure, home to Bhutan’s national animal, and explore the impressive Tashichhodzong. Overnight stay at a hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Start the day early with a drive toward Punakha, stopping at Dochula Pass (3,000m) to admire the Himalayan peaks and circumambulate the chortens. Enjoy a refreshing 40-minute downhill walk through rhododendron forests, offering a peaceful break from city life. Continue with a scenic two-hour stroll through villages and farmland. In spring, you’ll pass green rice terraces, small villages, and spot diverse trees, plants, and birds; in autumn, you may witness farmers harvesting their terraces and eagles soaring over forested valleys. Along the way, visit Chimi Lhakhang, also known as the “Temple of Fertility,” built in 1499 by Lama Drukpa Kuenley, popularly called “The Divine Madman.” Lama Drukpa Kuenley (1455–1529), a favorite Bhutanese saint, traveled across Bhutan and Tibet as a yogi, using humor, songs, and unconventional behavior to teach salvation. Overnight stay at a hotel in Punakha.`,
    },
    {
      day: "Day 04: Punakha",
      details: `In the morning, visit Punakha Dzong, constructed in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by Guru Rinpoche (Padmasambhava). Afterwards, drive to Yabesa village and enjoy a hike through rice fields up to Khamsum Yulley Namgyal Chorten, built by Her Majesty Queen Ashi Tshering Yangdon Wangchuk. Situated atop a hill along the riverbank, the Chorten features intricate paintings representing the Nyingmapa tradition.`,
    },
    {
      day: "Day 05: Punakha – Trongsa",
      details: `In the morning, drive toward Trongsa, stopping en route to visit the picturesque Chendebji Chorten, built in the 18th century. As you approach the town along a winding road, catch sight of the majestic Trongsa Dzong perched above a deep canyon. Trongsa is renowned as the ancestral home of Bhutan’s royal family. Overnight stay at a hotel in Trongsa.`,
    },
    {
      day: "Day 06: Trongsa – Phobjikha",
      details: `After breakfast, transfer to Phobjikha Valley, driving along winding mountain roads through oak and rhododendron forests into the expansive, scenic valley. Phobjikha is one of Bhutan’s rare glacial valleys and serves as the winter habitat for black-necked cranes (November–March) that migrate from the Tibetan Plateau.`,
    },
    {
      day: "Day 07: Phobjikha Valley - Wangdue (Shasila Hike)",
      details: `Drive to Longtey Village, situated beyond Pele La Pass (3,420m), for a hike across Kayche La (3,700m) and back to Gangtey. The trail gradually ascends through thickets of dwarf bamboo, birch, rhododendron, hemlock, and fir, teeming with diverse birdlife, reaching Kayche La, marked with prayer flags. From the pass, the path descends through expansive meadows and farmland, leading back to Gangtey.`,
    },
    {
      day: "Day 08: Wangdue - Paro",
      details: `Drive back to Paro via Dochu La Pass, stopping in Thimphu to explore handicraft and souvenir shops and enjoy lunch at a local restaurant. Continue the journey to Paro, visiting Semtokha Dzong, Bhutan’s oldest dzong, along the way. Time permitting, make a brief stop at Tamchhu Lhakhang, built by Thangtong Gyalpo, famously known as the Iron Bridge Builder. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 09: Paro",
      details: `After breakfast, drive to the base of Taktsang Monastery, also known as the ‘Tiger’s Nest’ (3,120m), for a hike up to this iconic site. The trail is wide, and the uphill walk takes around 2 hours, offering breathtaking views of the monastery perched on a sheer cliff 900 meters above the valley. Taktsang is a significant pilgrimage site where Guru Rinpoche is said to have flown on a tigress in the 8th century to bring Buddhist teachings to Bhutan and meditated in a cave for three months—the foundation of the monastery. In the afternoon, drive to the nearly restored Drukgyel Dzong, with the majestic Mount Jomolhari (7,314m) forming a stunning backdrop in clear weather. On the return to Paro, explore additional sights in the valley. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 10: Depart from Paro",
      details: `After breakfast at the hotel, transfer to the airport for your onward flight. Tashi Delek!`,
    },
  ];

  const tripHighlights = [
    {
      key: "Take in breathtaking panoramic views of the Himalayan ranges from Dochula Pass.",
    },
    {
      key: "Discover ancient Buddhist landmarks scattered across Bhutan’s scenic landscapes.",
    },
    {
      key: "Experience the charm of rural Bhutanese life by visiting traditional villages.",
    },
    {
      key: "Enjoy delicious, home-cooked Bhutanese meals while dining with local families.",
    },
    {
      key: "Embark on a rewarding hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), dramatically perched on a cliffside.",
    },
    
  ];

  const tourDetails = {
    duration: "9 Nights / 10 Days",
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
            Bhutan Nature and Culture Trek{" "}
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
        A Scenic Bhutan Trek with Cultural Discovery{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Embark on an unforgettable adventure that beautifully blends nature and
        tradition. This Bhutan trekking journey takes you across breathtaking
        landscapes — from verdant forests to majestic mountain peaks — while
        offering a rare glimpse into authentic village life through homestay
        experiences. Beyond the trails, immerse yourself in the cultural
        richness of Western Bhutan as you explore iconic sites in Paro, Punakha,
        Thimphu, and the tranquil Phobjikha Valley. This inspiring experience
        weaves together stunning natural beauty with meaningful cultural
        connections, creating memories that will stay with you long after the
        journey ends.
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

export default BhutanNatureTours;
