import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/sakteng.png";
import hidden from "../../../assets/home/rural.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const EastWestHeritageTours = () => {


  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `The flight to Paro crosses the Himalayas, offering breathtaking views of majestic peaks, including Bhutan’s sacred Jomolhari and Jichu Drake. If arriving via Kathmandu, Mount Everest and Mount Kanchenjunga may also be visible. Upon arrival, meet our representative and transfer to your hotel.
In the afternoon, visit Paro Dzong, built in 1646, which houses government offices and religious institutions. Cross a traditional wooden bridge on the way. Continue to Kyichu Lhakhang, Bhutan’s oldest temple, followed by Drukgyel Dzong (Bhutan Victory Fort), also built in 1646 to commemorate Bhutan’s victory over Tibetan invaders. On clear days, Mount Jomolhari (7,329 m) can be seen from the village below the dzong. In the evening, explore Paro town and market. Overnight stay in Paro.`,
    },
    {
      day: "Day 02: Paro - Thimphu",
      details: `After breakfast, hike to Taktsang (Tiger’s Nest) Monastery, Bhutan’s most iconic monastery. According to legend, Guru Rinpoche flew here on a tigress from Singye Dzong in Lhuntse and meditated in a cave where the monastery now stands. Perched on a cliff edge about 900 m above Paro Valley, the hike to the viewpoint makes for a rewarding half-day excursion.
In the afternoon, drive to Thimphu. In the evening, explore Bhutan’s capital, experience local life, and visit handicraft shops. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu",
      details: `After breakfast, visit the King’s Memorial Chorten, built in honor of Bhutan’s third king (1952–1972), followed by Changangkha Monastery, the radio tower with panoramic views of Thimphu Valley and Thimphu Dzong, and the zoo, home to Bhutan’s national animal, the takin. Continue to the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts (painting school).
After a relaxing lunch, explore the National Institute of Traditional Medicine, a traditional paper factory, the impressive Tashichhodzong, and Simtokha Dzong, Bhutan’s oldest fortress. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 04: Travel from Thimphu to Wangdue Phodrang, with an afternoon visit to Punakha.",
      details: `After breakfast, drive to Wangdue Phodrang, stopping en route for tea at Dochu La Pass (3,100 m), where clear weather offers spectacular Himalayan views. After lunch, continue to Punakha, the former capital of Bhutan, and visit Punakha Dzong, one of the country’s most beautiful dzongs, built by the first Shabdrung in 1637. On the return journey, stop at Metshina Village and take a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple, where you may receive a special blessing. Overnight stay in Wangdue Phodrang.`,
    },
    {
      day: "Day 05: Wangduephodrang – Trongsa, with stops in Gantey",
      details: `Start the day with a drive to Gangtey, passing through dense oak and rhododendron forests. Arrive at Gangtey village and visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan. Enjoy views of the scenic Black Mountain range and Phobjikha Valley, the winter home of black-necked cranes.
Continue to Trongsa, the ancestral home of the royal family, along a winding route crossing Pele La Pass (3,300 m), where yaks may be spotted seasonally. In the afternoon, explore Trongsa town and its shops. Overnight stay in Trongsa.`,
    },
    {
      day: "Day 06: Trongsa – Bumthang",
      details: `In the morning, visit Trongsa Dzong, a masterpiece of Bhutanese architecture, and Ta Dzong, the watchtower built to protect it. After lunch, continue to Bumthang, Bhutan’s spiritual heartland, with its lush valleys and forested hills. En route, stop at a yathra (textile weaving) factory to see patterns unique to Bumthang and watch artisans at work.
Spend the afternoon sightseeing in Bumthang, including Jakar Dzong, the valley’s administrative center; the Udey woodcarving factory; Jambey Lhakhang, one of Bhutan’s oldest monasteries; and Kurjey Lhakhang, a sacred site where Guru Rinpoche left his body imprint in a cave during meditation. In the evening, stroll through Bumthang town. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 07: Bumthang",
      details: `Take a day excursion to Ura Valley, a route slightly off the main road, offering lovely views of Jakar Dzong. Stop in Ura village for lunch and explore its main temple and charming streets. Ura retains a medieval feel with cobblestone lanes, and local women often wear traditional sheepskin shawls.
On the return journey, visit Mebar Tsho (Burning Lake), where Guru Rinpoche’s treasures were discovered in the 15th century by Pema Lingpa—a serene spot for meditation. Also tour Tamshing Lhakhang, known for its remarkable Buddhist paintings, and stop at the Swiss cheese factory. In the evening, browse local shops. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 08: Bumthang",
      details: `Bumthang comprises four valleys—Chumey, Choekhar, Tang, and Ura—ranging in altitude from 2,600 to 4,000 m, and is home to numerous important Buddhist temples and monasteries. Today, hike to Tharpaling Monastery, starting in the morning for the roughly three-hour trek through scenic forest trails.
The monastery is spacious, with several temples, and about 100 monks reside in nearby huts. Enjoy panoramic views of Chumey Valley and a relaxing lunch amid the scenery. In the evening, unwind in Bumthang town. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 09: Bumthang - Mongar",
      details: `Begin your journey to eastern Bhutan, a region distinct from western and central Bhutan in culture and lifestyle. The area’s steep terrain offers dramatic scenery, including rushing waterfalls and sheer cliffs. Today’s drive is an exciting 8-hour journey, highlighted by Thrumshing La Pass at 3,750 m. In the evening, explore Mongar town and enjoy a relaxing dinner. Overnight stay in Mongar.`,
    },
    {
      day: "Day 10: Mongar - Tashigang",
      details: `In the morning, visit Mongar Dzong, a relatively modern dzong built in 1953 at the request of Bhutan’s third king, though it retains traditional architecture. Continue the drive to Trashigang, passing through several villages along the way. In the afternoon, visit Trashigang Dzong and explore the town, experiencing the local culture of eastern Bhutan. Overnight stay in Trashigang.`,
    },
    {
      day: "Day 11: Trashigang, with an excursion to Tashiyangtse",
      details:
        "Today, visit Tashiyangtse, a small, serene town known for its expertly crafted wooden bowls and containers. Just below the town lies Chorten Kora. On the way, stop at Gom Kora temple, behind which is a large black rock where Guru Rinpoche is said to have meditated; the rock bears impressions of his thumb, hat, and body. Also visit the abandoned iron chain-link bridge near Duksum, believed to be the last of the 15th-century bridges built by Tibetan engineer Thangtong Gyalpo. Later, relax in Trashigang and enjoy a pleasant dinner. Overnight stay in Trashigang.",
    },
    {
      day: "Day 12: Trashigang – Mongar",
      details:
        "In the morning, visit the weaving center in Khaling, run by the National Women’s Association of Bhutan, followed by Sherubtse College in Kanglung, Bhutan’s first college, and Zangdopelri Monastery. Afterwards, return to Mongar. Overnight stay in Mongar.",
    },
    {
      day: "Day 13: Mongar – Bumthang",
      details:
        "Drive back to Bumthang along a scenic 8-hour route, stopping for lunch and tea in local villages. Overnight stay in Bumthang.",
    },
    {
      day: "Day 14: Bumthang – Wangduephodrang",
      details:
        "Start the day at Bumthang Market, then drive to Wangdue Phodrang. Explore the town, visit local shops, and discover nearby villages known for slate and stone carvings as well as bamboo crafts. Overnight stay in Wangdue Phodrang.",
    },
    {
      day: "Day 15: Wangduephodrang – Thimphu",
      details:
        "In the morning, drive back to Thimphu. After lunch, visit the Textile Museum and the Folk Heritage Museum, and explore the local handicraft shops. Overnight stay in Thimphu.",
    },
    {
      day: "Day 16: Thimphu",
      details: `In the morning you can hike to Tango Monastery, which was built by the “Divine Madman” in the 15th century. It’s a center of study for monks, and it affords a great view of the Thimphu Valley. On the grounds of the monastery is a “sin-testing” tunnel–it is said that if you have sinned, you will get stuck in
the tunnel, and if you are without sin, you will go through with ease! After lunch, you can hike to Cheri Monastery, which was built in 1620 and housed the first monk body. The Shabdrung’s father’s ashes are contained inside the monastery. Overnight in Thimphu.`,
    },
    {
      day: "Day 17: Thimphu – Paro",
      details:
        "Spend the morning shopping in Thimphu. If it’s a weekend, explore the market to see local foods like baskets of fiery chilies, fresh cheese, and mangoes, along with Bhutanese handicrafts and household items. In the afternoon, drive to Paro and visit the National Museum, formerly the Paro Dzong watchtower, now showcasing fine arts, paintings, thankas, statues, and antiques. In the evening, visit a traditional farmhouse and enjoy a hot-stone bath and a typical Bhutanese dinner if you wish. Overnight stay in Paro.",
    },
    {
      day: "Day 18: Depart from paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy panoramic Himalayan views from Dochula Pass.",
    },
    {
      key: "Experience rural Bhutan by visiting traditional villages.",
    },
    {
      key: "Explore renowned textile weaving centers in the area.",
    },
    {
      key: "Relish authentic Bhutanese farmhouse meals with local families.",
    },
    {
      key: "Visit historic Buddhist monasteries that have shaped Bhutan’s heritage.",
    },
    {
      key: "Hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), a cliffside spiritual landmark.",
    },
  ];

  const tourDetails = {
    duration: "17 Nights / 18 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–6 Hours",
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
            A Scenic and Cultural Journey Through Bhutan
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
        A Cultural and Historical Exploration of Central Bhutan
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Discover the richness of Bhutan on this immersive east-to-west tour.
        Experience the country’s stunning biodiversity, from untouched forests
        to unique native wildlife. Eastern Bhutan captivates with dramatic
        landscapes, cascading waterfalls, and extraordinary photo opportunities.
        This unforgettable journey offers a perfect blend of cultural immersion
        and natural beauty.
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

export default EastWestHeritageTours;
