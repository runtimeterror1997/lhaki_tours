import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/trekking/gantey1.png";
import hidden from "../../../assets/trekking/gantey2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const GanteyTrek = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `Upon arrival in Paro, enjoy one of the world’s most spectacular mountain flights over the Himalayas, with breathtaking views of sacred peaks such as Jomolhari and Jichu Drake. If arriving via Kathmandu, you may also glimpse Mount Everest and Mount Kanchenjunga. You will be met by our representative and transferred to your hotel. In the afternoon, visit Paro Dzong, built in 1646, which houses government offices and religious institutions. Cross a traditional wooden bridge to reach the Dzong, then explore the National Museum, formerly a watchtower, featuring fine arts, paintings, thangkas, statues, and antiques. Next, visit Kichu Lhakhang, the oldest temple in Bhutan. Later, drive to Thimphu for an overnight stay.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `After breakfast, visit the King’s Memorial Chorten, built in memory of Bhutan’s third King (1952–1972), followed by Buddha Point, Changangkha Monastery, and the radio tower, which offers panoramic views of Thimphu Valley and Thimphu Dzong. Continue to the zoo to see Bhutan’s national animal, the takin. Next, explore the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts (the painting school). After a relaxing lunch, visit the National Institute of Traditional Medicine, a traditional paper factory, and the majestic Tashichodzong. Overnight in Thimphu.`,
    },
    {
      day: "Day 03:  Thimphu – Punakha ",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day offers stunning views of the Himalayan peaks, before descending into the warm Punakha Valley (about 3 hours’ drive).
       Punakha, the ancient capital of Bhutan, is home to the magnificent Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by Guru Rimpoche (Padmasambhava). After visiting the Dzong and enjoying lunch, drive about 12 km and take a walk across rice fields and a river to reach the Khamsum Yulley Namgyal Chorten, perched on the scenic hillock of Ngezergang, featuring paintings and statues of the Nyingmapa tradition. Continue to Metshina Village and take a 20-minute walk through rice fields to Chime Lhakhang, a fertility temple where you may receive a special blessing. Overnight in Punakha.`,
    },
    {
      day: "Day 04:  Punakha - Gangtey",
      details: `After breakfast, drive to Gangtey (Phobjikha), one of Bhutan’s few glacial valleys, located east of Wangduephodrang. After crossing the pass, you will reach the impressive Gangtey Monastery, established in the 17th century. A few kilometers below the monastery lies the village of Phobjikha, nestled on the valley floor. This quiet and remote valley serves as the winter home for the rare black-necked cranes, which migrate here annually from the Tibetan plateau. If you wish, you can enjoy a short 1-hour hike in the area. Often referred to as “heaven on Earth,” Gangtey offers serene and breathtaking views. After exploring the valley, drive back to Punakha. Overnight at your hotel in Gangtey.`,
    },
    {
      day: "Day 05: Gangtey Gompa – Gogona",
      details: `The trek departs the valley at 2,830 m and heads south, then west through meadows and fields. The trail ascends through a mixed forest of juniper, bamboo, rhododendrons, and magnolia. The path is rough and rocky, with deep muddy furrows created by pack animals. After crossing Tsele La (3,440 m), the trail passes several meadows before descending through forests to Gangak (3,020 m). A short climb from here leads to the campsite at Gogona (3,100 m), a beautiful hilltop location overlooking a long valley. Nearby is Gogona Lhakhang, surrounded by dozens of poles with white prayer flags fluttering in the wind. About a 30-minute walk beyond Gogona lies a small hamlet where homemade ara (a local alcoholic drink) is available for purchase. The women of the village also weave blankets, and the locals speak a unique dialect called Bjop-kha, the language of the nomads. Overnight at camp.`,
    },
    {
      day: "Day 06: Gogona – Khotokha",
      details: `The trail ascends gently above Gogona village, passing flocks of sheep and ploughed fields, before climbing into a mixed forest of fir, oak, spruce, dwarf rhododendron, miniature azaleas, cypress, and juniper. Much of the undergrowth is daphne, a plant used for handmade paper and identifiable by its yellow flowers. 
      A long but gradual climb brings you to Shobju La Pass (3,410 m). The descent from the pass is rocky and muddy, weaving through the forest and crossing a small stream. Around 3,000 m, the trail meets a rough path used by tractors to collect wood, which leads, with a few short cuts through the woods, to a sawmill and woodcutters’ camp at Dolonaga (2,830 m). Continuing downward, the trail overlooks the broad Khothangkha Valley and eventually reaches Chorten Karpo, where four chortens are dedicated to the four Je Khenpos from the area—three in Bhutanese style and one in Nepali style. The ideal campsite is in a clearing at 2,790 m, beside a forest of large blue pines, overlooking the valley and the village of Khothangkha, which consists of around 60 rustic houses. Overnight at camp.`,
    },
    {
      day: "Day 07: Khotokha – Tikke Zampa & transfer Wangduephodrang and Punakha (Treks Ends)",
      details: `A short, steep climb along a well-known path leads to Tashi La (2,800 m), the upper terminus of a cable car that transports wood down to Chhuzomsa, 1,300 m below. The descent passes through a beautiful forest, where the undergrowth transitions from rhododendrons and magnolia to ferns and dwarf bamboo. 
      This section of the trail is one of Bhutan’s prime bird-watching areas, home to species such as laughing thrush, shrike, magpie, and woodpecker. The trail continues past steep terraced wheat fields to a small cluster of houses at Whachay before eventually meeting the road near Tikke Zampa at 1,500 m. The rest of the day is at leisure to explore Wangduephodrang town. Adjoining Punakha, Wangduephodrang—known locally as Sha, or “east”—has historically served as an important gateway connecting Bhutan’s western, central, and southern regions. Overnight at the hotel in Punakha.`,
    },
    {
      day: "Day 08: Punakha – Thimphu",
      details: `After breakfast, visit Punakha Dzong, also known as Pungthang Dechen Phodrang, the “Palace of Great Happiness,” built in 1637 by the unifier Zhabdrung Ngawang Namgyal.
       The Dzong is beautifully situated between the Pho (male) and Mo (female) rivers, and Punakha served as Bhutan’s ancient capital. After lunch, drive about 12 km and take a short walk across rice fields and a river to reach Khamsum Yulley Namgyal Chorten, perched on a scenic hillock called Ngezergang, housing paintings and statues of the Nyingmapa tradition. Continue to Metshina Village and enjoy a 20-minute walk through the rice fields to Chime Lhakhang, a fertility temple where visitors may receive a special blessing. After the visit, drive to Paro. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 09: Hike Paro Taksang",
      details: `After breakfast, hike to Taktsang Monastery along a broad trail. The walk takes approximately 1.5 to 2 hours uphill, reaching almost a kilometre above the Paro valley floor. For those unable to hike, a horse transfer to the cafeteria can be arranged. In the afternoon, drive to the nearly fully reconstructed Drukgyel Dzong, originally built by Shabdrung in 1644 to commemorate his victory over invading Tibetans, and destroyed by fire in 1951. In the evening, enjoy a leisurely stroll through Paro town and market. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 10: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Experience the daily life and activities of a Bhutanese village.",
    },
    {
      key: "Savor Bhutanese meals and interact with the locals in Gangtey.",
    },
    {
      key: "Visit the Black-necked Crane Center and explore the calming Gangtey Valley.",
    },
    {
      key: "Witness the Black-necked Cranes (a significant bird in Bhutanese culture) in their natural habitat during winter.",
    },
    {
      key: "Discover historic and sacred Buddhist monasteries in serene Himalayan valleys and marshes.",
    },
    {
      key: "Hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), a major spiritual landmark perched precariously on a cliffside.",
    },
  ];

  const tourDetails = {
    duration: " 9 Nights/ 10 Days",
    groupSize: "2 & above",
    difficulty: "Easy/Moderate",
    accommodation: "Hotels/Camp",
    walkingHours: "4–5 Hours",
    bestSeason: "March to June/Sep to Nov",
    distance: "Average 6-8 km per day",
    altitude: "Up to 4200m",
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
            Gantey Trek
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
        Culture, Nature, and Gentle Bhutanese Trails{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        The Gangtey Trek is a beginner-friendly Bhutanese trekking journey that
        meanders through serene mountain valleys. Even accessible in winter,
        this gentle trek offers a rewarding experience for newcomers to mountain
        hiking. Its soft slopes, crisp mountain air, and calm surroundings make
        for a comfortable and enjoyable adventure. Along the trail, you’ll
        encounter quiet villages, historic monasteries, and lush forests filled
        with juniper, bamboo, magnolia, and rhododendrons, all framed by the
        stunning Himalayan valleys. While the trek is possible year-round, the
        best seasons are March to May and September to November, making it an
        ideal introduction to Bhutan’s cultural and natural treasures.
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

export default GanteyTrek;
