import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/gomphu.png";
import hidden from "../../../assets/festival/tsechu.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const GomphuKoraTsechu = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu ",
      details: `The flight to Paro offers a breathtaking journey across the Himalayan Mountains, providing spectacular views of some of Bhutan’s highest peaks, including the sacred Jumolhari and Jichu Drake. If arriving via Kathmandu, travelers may also catch glimpses of Mount Everest and Mount Kanchenjunga. Upon arrival in Paro, you will be welcomed by our representative and transferred to your hotel. In the afternoon, enjoy sightseeing in Paro with a visit to Paro Dzong, built in 1646, which currently houses government offices and religious institutions. Cross a traditional wooden bridge to reach the Dzong, then explore the National Museum, formerly a watchtower, now home to fine arts, paintings, thangkas, statues, and antiques. Following this, visit Kichu Lhakhang, the oldest temple in Bhutan. Later, drive to Thimphu for an overnight stay.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `After breakfast, you will visit the King’s Memorial Chorten, built in memory of the third King of Bhutan who reigned from 1952 to 1972, followed by Buddha Point, Changgangkha Monastery, and the radio tower, which offers panoramic views of Thimphu Valley and the Thimphu Dzong. You will also visit the zoo, home to Bhutan’s national animal, the takin. From there, explore the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts, also known as the painting school. After a relaxing lunch, continue to the National Institute of Traditional Medicine, a traditional paper factory, and the majestic Tashichodzong. Overnight stay will be in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day provides stunning views of the Himalayan peaks, before descending into the pleasant Punakha Valley (approximately 3 hours of driving). Punakha, the ancient capital of Bhutan, offers a rich glimpse into the nation’s history. After lunch, visit Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by the great Guru Rimpoche (Padmasambhava). Next, drive about 12 km and take a short walk across rice fields and a river to reach the Khamsum Yulley Namgyal Chorten, perched on the scenic hillock of Ngezergang, which houses paintings and statues belonging to the Nyingmapa tradition. Continue to Metshina Village and enjoy a 20-minute walk through the rice fields to Chimi Lhakhang, a fertility temple where you may receive a special blessing. Overnight stay will be in Punakha.`,
    },
    {
      day: "Day 04: Punakha - Gangtey",
      details: `After breakfast, drive to Gangtey (Phobjikha) with sightseeing en route at Wangdue. Visit Wangdue Dzong, where legend says that as people searched for the Dzong’s site, four ravens were seen flying in four directions—an auspicious sign symbolizing the spread of religion to the four corners of the world. The Dzong is beautifully situated at the confluence of the Mo Chu and Tang Chu rivers. Continue driving through dense forests of oak and rhododendron to Gangtey village and visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan.
From the monastery, enjoy panoramic views of the Black Mountain range and Phobjikha Valley, the winter habitat of the rare black-necked cranes. The village of Phobjikha lies a few kilometers down on the valley floor. This tranquil and remote valley, considered by many as “heaven on Earth,” hosts cranes that migrate here annually from the Tibetan plateau. Visitors may also choose to take a short one-hour hike in the area. Overnight stay will be in Gangtey.`,
    },
    {
      day: "Day 05: Gantey - Trongsa - Bumthang",
      details: `After an early breakfast, drive to Bumthang with a stop at the impressive Trongsa Dzong, the ancestral home of the present Royal Family. Trongsa Dzong holds historical significance as the place from which the first two hereditary kings of Bhutan ruled the country. Continue the journey to Bumthang via Yotongla Pass (3,400 meters), and en route, visit the joint Australian-Bhutanese wool project in Chumey Valley. Here, you can observe the single loom weaving process and purchase yak wool rugs, scarves, or a selection of textiles from across Bhutan. Along the way, you may also spot yaks grazing on the high passes. The road eventually descends into the picturesque Bumthang Valley, the cultural heart of Bhutan. Overnight stay will be in Bumthang.`,
    },
    {
      day: "Day 06: Bumthang Sightseeing",
      details: `After breakfast, visit Jakar Dzong, known as “The Castle of the White Bird,” originally built in 1667. Continue to Lamey Goemba, an 18th-century palace and monastery established by Dasho Phuntsho Wangdi. Next, visit Jambay Lhakhang, constructed in 659 by King Songtsen Gampo of Tibet on the same day as Kichu Lhakhang in Paro. Guru Rimpoche visited this temple during his journey to Bumthang, and it was later renovated by Sindhu Raja after Guru Rimpoche restored his life force. Beneath the temple lies a lake said to contain hidden Terma by Guru Rimpoche. In October, the spectacular “Jambay Lhakhang Drup” festival is staged here. After lunch, visit Chakhar (Iron Castle) Lhakhang, the former palace of the Indian King, Sindhu Raja, who invited Guru Rimpoche to Bumthang. Then proceed to Tamshing Lhakhang, the “Temple of the Good Message,” established in 1501 by Pema Lingpa and regarded as the most important Nyingmapa temple in the kingdom. In the evening, visit Membarstho, literally “The Burning Lake.” Overnight stay is at a hotel in Bumthang.`,
    },
    {
      day: "Day 07: Bumthang - Mongar",
      details: `After breakfast, drive to Mongar with a packed lunch served en route. Along the way, admire typical Bhutanese farmhouses. Upon arrival, visit Mongar Dzong, rebuilt in 1953 and relatively small in size. The Dzong houses around 50 to 60 monks, many of them young boys aged eight to ten years. Overnight stay is at a hotel in Mongar.`,
    },
    {
      day: "Day 08: Mongar – Trashiyangtse",
      details: `After breakfast, drive to Trashiyangtse and visit Chorten Kora, followed by Trashiyangtse Dzong. Overnight stay at a hotel in Trashiyangtse.`,
    },
    {
      day: "Day 09: Gomkora Festival",
      details: `Drive to Gomkora to enjoy the festival, then continue to Trashigang in the afternoon, visiting Trashigang Dzong and the local market. Overnight stay at a hotel in Trashigang.`,
    },
    {
      day: "Day 10: Tashigang – Bumthang",
      details: `After breakfast, Drive to Bumthang through the lush environment. Overnight hotel in Bumthang.`,
    },
    {
      day: "Day 11: Bumthang – Thimphu",
      details: `After an early breakfast, drive back to Thimphu. In the evening, visit the local handicraft shops. Overnight stay at a hotel in Thimphu.`,
    },
    {
      day: "Day 12: Thimphu-Paro Hike Paro Taksang",
      details: `After breakfast, drive to Paro and hike to Taktsang Monastery. The trail is broad and the walk of approximately 1.5 to 2 hours uphill takes you almost a kilometer above the Paro valley floor (for those who cannot hike, a horse can be arranged to reach the cafeteria). In the afternoon, drive to the almost fully reconstructed Drukgyel Dzong, the original monument of which was destroyed by fire in 1951 and was built by Shabdrung to commemorate his victory against invading Tibetans in 1644. In the evening, stroll through the Paro market and town, followed by a farewell dinner with traditional dance. Overnight stay at your hotel in Paro.`,
    },
    {
      day: "Day 13: Depart from Paro",
      details: "Drive to the Airport for the departure.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy majestic views of the Himalayan mountains from Dochula Pass.",
    },
    {
      key: "Visit famous Bhutanese landmarks including Tashichhodzong in Thimphu, Punakha Dzong, and Chimi Lhakhang (a fertility temple).",
    },
    {
      key: "Discover the best of Eastern Bhutan's cultural sites and natural beauty.",
    },
    {
      key: "Explore genuine Bhutanese villages and experience authentic rural life in Bhutan.",
    },
    {
      key: "Embark on a hike to the famous Tiger’s Nest Monastery (Paro Taktsang), a cultural landmark sitting precariously on a cliffside.",
    },
    {
      key: "Enjoy the festive and culturally significant Gomkora Festival",
    },
    {
      key: "Discover sacred Buddhist monasteries and spiritual sites across Bhutan.",
    },
  ];

  const tourDetails = {
    duration: "12 Nights / 13 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "March - April",
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
            Gomphu Kora Festival
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
        Eastern Bhutan’s Spiritual Gathering{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Eastern Bhutan comes alive with spiritual energy during the annual
        Gomkora Festival. Pilgrims from nearby Arunachal Pradesh join local
        communities in celebrating, creating a vibrant scene as everyone gathers
        in traditional attire. The festival honors the Buddhist saint Guru
        Rinpoche’s meditation and circumambulation (Kora) at this sacred site.
        “Ghomphu” translates to “Meditation Cave,” and a key highlight for
        visitors is the saint’s impression preserved on the rock, offering a
        profound glimpse into Bhutan’s spiritual heritage.
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

export default GomphuKoraTsechu;
