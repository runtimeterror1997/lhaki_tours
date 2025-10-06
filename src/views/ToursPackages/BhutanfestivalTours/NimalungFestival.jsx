import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/nimalung1.png";
import hidden from "../../../assets/festival/nimalung2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const NimalungFestival = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `The flight to Paro offers breathtaking views of the Himalayan Mountains, including the sacred Jumolhari and Jichu Drake peaks in Bhutan. If arriving via Kathmandu, travelers may also catch glimpses of Mount Everest and Mount Kanchenjunga. Upon arrival in Paro, you will be greeted by a representative and transferred to your hotel. In the afternoon, visit Paro Dzong, built in 1646, which now houses government offices and religious institutions. Cross a traditional wooden bridge to reach the Dzong, then tour the National Museum, formerly a watchtower, which displays fine arts, paintings, thangkas, statues, and antiques. Next, visit Kichu Lhakhang, the oldest temple in Bhutan, before driving to Thimphu for an overnight stay.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `After breakfast, you will visit the King’s Memorial Chorten, built in memory of Bhutan’s third King (1952–1972), followed by Buddha Point, Changgangkha Monastery, and the radio tower offering panoramic views of Thimphu Valley and Thimphu Dzong. Next, explore the zoo, home to Bhutan’s national animal, the takin. Continue to the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts, also known as the painting school. After a relaxing lunch, visit the National Institute of Traditional Medicine, a traditional paper factory, and the majestic Tashichhodzong. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day offers stunning views of the Himalayan peaks, before descending into the balmy Punakha Valley (about 3 hours of driving). Punakha, the ancient capital of Bhutan, is home to the impressive Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by Guru Rinpoche (Padmasambhava). After lunch, take a 12 km drive along the road, followed by a walk across rice fields and a river to reach the Khamsum Yulley Namgyal Chorten, perched on the scenic hillock of Ngezergang and housing paintings and statues of the Nyingmapa tradition. Continue to Metshina Village, and enjoy a 20-minute walk through the rice fields to Chime Lhakhang, a fertility temple where visitors may receive a special blessing. Overnight stay in Punakha.`,
    },
    {
      day: "Day 04: Punakha - Trongsa - Bumthang",
      details: `Today’s drive is truly spectacular, winding through multiple valleys and offering breathtaking vistas. We stop at the Chendebji Chorten, perched atop the highest pass of the Black Mountains, before continuing into Central Bhutan. The golden-roofed Trongsa Dzong, an architectural marvel, spans the valley that divides eastern and western Bhutan and can be glimpsed for nearly 20 tantalizing miles before reaching it. In the afternoon, we explore the impressive Trongsa Dzong and then drive to Bumthang via Yotongla Pass (3,400 meters). En route, we visit the joint Australian-Bhutanese wool project in Chumey Valley, where you can watch the single-loom weaving process and purchase yak wool rugs or scarves. A rich variety of textiles from across Bhutan is also available at this roadside stop. Along the way, you may spot yaks grazing on the high passes before the road winds down into the beautiful Bumthang Valley, the cultural heart of Bhutan, where rice paddies gradually give way to fields of barley and potatoes due to the colder climate. Dinner and overnight stay at Hotel Rinchenling Lodge.
Trongsa Dzong, originally laid in the 16th century by Pema Lingpa and flourishing during the 17th century under Zhabdrung Ngawang Namgyal, is a massive fortress commanding the east-west road above the winding Mangde Chu Valley. Its towering walls and strategic location reflect Bhutanese architectural brilliance, making it one of the most impressive dzongs in the kingdom. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 05: Bumthang",
      details: `This is one of the most spectacular valleys in Bhutan and also the heartland of Buddhism. The Guru and his lineage of Tertons (treasure finders) have inspired the construction of numerous temples throughout the valley. In the morning, we hike to visit Tamshing Monastery, one of the oldest monastic schools built by Terton Pema Lingpa, and Kurjey Lhakhang, where Guru Rinpoche subdued a local demon and left his body imprint on a rock. We also explore Jambay Lhakhang, one of the oldest temples in Bhutan built in the 7th century, and Jakar Dzong, the seat of the district administration. In the afternoon, we hike to Thangbi Valley across the suspension bridge and visit Thangbi Lhakhang, built in the 14th century. Dinner and overnight stay will be at a hotel, or optionally, a drive to Ura.`,
    },
    {
      day: "Day 06: Bumthang (Witness Tshechu)",
      details: `Today, witness the tsechu, a vibrant expression of Bhutanese oral history in which values, mythology, and spiritual beliefs are conveyed through elaborate dance dramas. The Nimalung Tshechu will culminate this morning with a rare display of a giant silk applique thangkha depicting Guru Padmasambhava or another significant Buddhist deity.`,
    },
    {
      day: "Day 07: Bumthang - Gantey",
      details: `The valley of Phobjikha is renowned as the winter home of the Black-necked Crane (Grus nigricollis). Bhutan hosts around six hundred of these elegant and shy birds, with Phobjikha being a favored destination for their winter migration from the Tibetan plateau. The cranes can typically be observed from early November to the end of March.
You will begin the day by driving to Gangtey, passing through dense forests of oak trees and rhododendrons before arriving at Gangtey village. Here, you will visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan. From the monastery, enjoy panoramic views of the Black Mountain range and the serene Phobjikha Valley, home to the black-necked cranes. Overnight at a guesthouse in Gangtey.`,
    },
    {
      day: "Day 08: Gantey - Paro",
      details: `After breakfast, explore the Phobjikha Valley, considered one of Bhutan’s most beautiful valleys, and visit the Education Center, managed by the Royal Society for the Protection of Nature (RSPN). Later, begin the drive to Paro, stopping en route at Wangdi Town and nearby villages, which are famous for stone and slate carvings. A few kilometers from the town, you can also see Rinchengang, one of Bhutan’s most unique villages. On arrival in Paro, check into your hotel.`,
    },
    {
      day: "Day 07: Hike Paro Taksang",
      details: `After breakfast, hike to Taktsang Monastery, perched dramatically on a cliffside. The trail is broad, and the uphill walk of approximately 1.5 to 2 hours takes you nearly a kilometer above the Paro valley floor. For those unable to hike, a horse transfer to the cafeteria is available.
In the afternoon, drive to the almost fully reconstructed Drukgyel Dzong. The original monument, destroyed by fire in 1951, was built by Shabdrung to commemorate his victory against invading Tibetans in 1644. In the evening, enjoy a stroll through the Paro market and town. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 09: Depart from Paro",
      details: "Drive to the Airport for the departure.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy majestic views of the Himalayan mountains from Dochula Pass.",
    },
    {
      key: "Explore genuine Bhutanese villages and experience authentic rural life in Bhutan.",
    },
    {
      key: "Experience the unique charms and Bhutanese folk dances of the Nimalung Festival.",
    },
    {
      key: "Embark on a hike to the famous Tiger’s Nest Monastery (Paro Taktsang), perched precariously on a cliffside.’",
    },
    {
      key: "Journey through the gorgeous and serene valleys of Thimphu, Paro, Punakha, and Gangtey.",
    },
  ];

  const tourDetails = {
    duration: "9 Nights / 10 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "June-July",
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
            Nimalung Festival
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
        Blessings in Bhutan’s Bumthang Valley
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        The Nimalung Tshechu Festival is a glorious three-day event held
        annually in Bumthang Valley, the spiritual heart of Bhutan. This Bhutan
        cultural tour begins with vibrant masked dances and traditional rituals,
        gradually building to a crescendo of festivity. You’ll witness Bhutan’s
        authentic culture unfold through folk dances and other performances by
        dedicated locals. A highlight of the festival occurs on the final day,
        when attendees receive blessings from the grand display of the Guru
        Tshengye Thongdrol. This sacred tapestry depicts the “Eight
        Manifestations of Guru Rinpoche” and is believed to confer blessings and
        ward off misfortunes. Immerse yourself in the joyous atmosphere of this
        lively Bumthang festival, experiencing its colorful costumes, local
        charm, and profound spiritual significance. This journey offers a unique
        opportunity to discover the hidden wonders of Bhutan’s authentic
        festivals.
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

export default NimalungFestival;
