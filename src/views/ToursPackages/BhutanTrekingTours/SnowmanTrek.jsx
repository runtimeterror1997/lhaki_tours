import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/trekking/snowman.png";
import hidden from "../../../assets/trekking/snowman1.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const SnowmanTrek = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `The flight to Paro is considered one of the most spectacular mountain flights in the world, offering breathtaking views of some of the highest peaks on Earth. Upon arrival and after clearing customs, you will enjoy lunch before beginning your afternoon sightseeing in Paro. Start with a visit to the Ta Dzong Museum, which houses an impressive collection of religious relics, artworks, and traditional handicrafts. Continue to Rimpong Dzong, a historic monastery and district administrative center that once served as a strategic fortress. Overnight stay at your hotel in Paro.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `Enjoy a full day of sightseeing in Thimphu, beginning with a visit to the National Memorial Chorten, followed by the 12th-century Changangkha Temple, the serene Zilukha Nunnery, and the impressive Tashichhodzong, a fortress-monastery that serves as the seat of Bhutan’s government. If your visit falls on a weekend, you’ll also have the chance to explore the vibrant Thimphu Market, where locals gather to sell fresh produce, crafts, and traditional goods. Overnight stay at your hotel in Thimphu.`,
    },
    {
      day: "Day 03:  Thimphu - Punakha",
      details: `Punakha, the former capital of Bhutan, is home to the magnificent Punakha Dzong, an architectural masterpiece built in 1637 by Shabdrung Ngawang Namgyal, the ‘Unifier of Bhutan’. After exploring this historic fortress, enjoy a pleasant walk through scenic fields to Chimi Lhakhang, a revered temple dedicated to Drukpa Kuenley, affectionately known as the “Divine Madman.” Overnight stay at your hotel in Punakha.`,
    },
    {
      day: "Day 04: Punakha/Tashithang – Damji(8km, 5-6 hours)",
      details: `The trek begins alongside the river, following a well-defined trail that winds through lush subtropical forests. As you walk, you’ll encounter a variety of wild orchids thriving in the moist environment — though it’s wise to watch out for leeches in this area. The day’s hike involves a gentle ascent, leading you to Damji Village at an altitude of 2,400 meters, where you will set up camp for the night.`,
    },
    {
      day: "Day 05: Damji - Gasa(15km, 6-7 hours)",
      details: `The trail continues through beautiful subtropical forests and traditional villages, gradually leading you to Gasa Tshachu, a renowned hot spring celebrated for its therapeutic properties. Locals from across Bhutan travel here to soak in its healing waters. After enjoying lunch near the spring, the journey continues with a steady climb up to Gasa Dzong, perched at an altitude of 2,900 meters, where you will set up camp for the night.`,
    },
    {
      day: "Day 06: Gasa - Chamisa(13km, 8-9 hours)",
      details: `After breakfast, visit the historic Gasa Dzong before beginning today’s trek. The trail starts with a challenging ascent through dense mixed forests, leading up to the scenic Bele-La Pass at 3,700 meters. From there, the path descends gradually, taking you down to your forest campsite at Chasma, situated at an altitude of 3,650 meters.`,
    },
    {
      day: "Day 07: Chamisa - Laya(22km, 8-9 hours)",
      details: `The trail gradually descends to the banks of the Mo Chu River. After crossing the river, enjoy a pleasant lunch by the bridge. From there, the path ascends steadily towards Laya, situated at 3,800 meters, passing an army camp along the way. Overnight camping will be set up in Laya.`,
    },
    {
      day: "Day 08: Laya(Rest Day",
      details:
        "Explore the charming village of Laya, where you can visit a local home. Experience traditional Bhutanese hospitality, as even strangers are warmly welcomed with a cup of tea and chang, the locally brewed barley alcohol.",
    },
    {
      day: "Day 9: Laya - Rhodophu(19km, 8-9 hours)",
      details:
        "From Laya, descend to the army camp and follow the trail along the river until the turn-off for Rhodophu. After lunch, continue the climb through rhododendron forests until you reach a hanging valley at 4,350 m, where yaks graze peacefully. Camp overnight by the river in this scenic spot.",
    },
    {
      day: "Day 10: Rhodophu - Tarina(25km, 10-11 hours)",
      details:
        "Today’s trek is the longest of the trip, so it’s important to start early, around 5 a.m. The day begins with a climb up to Tsimo-La Pass (4,700 m), offering superb views of Lunana and the majestic peaks of Chomolhari and Jichu Drake. After approximately four hours of level walking, the trail ascends to Ganglakarchung-La Pass (5,080 m), where the panoramic views of the surrounding mountain range are breathtaking. Following the pass, the trek descends for a long stretch into the Tarina Valley, where you will camp at 3,980 m.",
    },
    {
      day: "Day 11: Tarina - Wochey(17km, 6-7 hours)",
      details:
        "The trail descends through a coniferous forest, following the upper reaches of the Pho Chu River. It then climbs over a ridge before dropping down to Wochey, situated at 3,800 m, the first village encountered since Gasa. Overnight camp at an altitude of 3,800 m.",
    },
    {
      day: "Day 12: Wochey - Lhedi(17km, 6-7 hours)",
      details:
        "Today’s trek starts with a walk through mixed forests, continuing through rhododendron bushes as we ascend to Keche-La Pass (4,480 m). After reaching the pass, we descend while enjoying stunning mountainous views along the way, walking upstream to Lhedi Village (3,650 m), where we camp overnight.",
    },
    {
      day: "Day 13: Thangza(Rest Day)",
      details:
        "A relaxing day to unwind and enjoy your surroundings, or, if you’re feeling adventurous, take a short climb up to the ridge for another breathtaking view of the mountains.",
    },
    {
      day: "Day 14: Thangza - Tshorim(19km, 8-9 hours)",
      details:
        "Today’s trek begins with a climb up to the ridge, offering stunning views of Table Mountain and the Thanza Valley below. The trail then follows a stream through a picturesque valley, framed by snow-capped peaks, before ascending out of the valley to reach our campsite at Tshorim (5,125 m).",
    },
    {
      day: "Day 15: Tshorim - Gangkar Puensum Base Camp(16km, 6-7 hours)",
      details:
        "Today’s trek is one of the highlights of the trip. It begins with a short climb to Tshorim Lake, where you can walk along its edge and enjoy panoramic views of the Gophula Ranges. From here, you may choose to climb a pyramid-shaped peak for an even better view or head directly to the base camp (4,970 m) near the Sha Chu.",
    },
    {
      day: "Day 16: Gankar Puensum Base",
      details: "Rest day at the base camp, enjoying the great views.",
    },
    {
      day: "Day 17: Gankar Puensum Base Camp - Geshe Woma(14km, 6-7 hours)",
      details:
        "Today’s trail follows the Sha Chu River and gradually descends to Geshe Woma (4,200 m), where we will set up camp for the night.",
    },
    {
      day: "Day 18: Geshe Woma - Warathang(18km, 8-9 hours)",
      details:
        "The trail continues along the Sha Chu River before ascending to Saka-La Pass (4,800 m). Due to limited visibility along this section, it is important to keep an eye on the ridge to stay on course. Along the way, enjoy breathtaking views of small lakes nestled beneath towering peaks. We will camp at 4,000 m for the night.",
    },
    {
      day: "Day 19: Warathang - Dhur Tsachu(14km, 5-6 hours)",
      details:
        "A brief half-hour climb brings us up to Juli-La (4,400 m), followed by a descent to the riverside through dense rhododendron, juniper, and conifer forests. After crossing a bridge and a short climb, we reach Dhur Tshachu hot spring, a sacred site where legend has it that Guru Padmasambhava bathed in the 8th century.",
    },
    {
      day: "Day 20: Dhur Tsachu - Tshochemchem(16km, 8-9 hours)",
      details:
        "From the spring, the trail ascends steadily, offering spectacular views of the Lunana mountains. Eventually, the terrain levels out, revealing several stunning deep-blue lakes, yaks grazing on the surrounding pastures, and a yak herders’ camp at 3,850 m. We will camp here for the night.",
    },
    {
      day: "Day 21:Tshochemchem Dhur(Motor Road) - Bumthang(Jakar)(21, 13-14 hours)",
      details:
        "On the final day of the trek, we start very early to ensure arrival in Bumthang before dark. The trail follows the Chamkhar Chu, descending gradually with a few small climbs. The trek concludes at Dhur village, where transport awaits to drive you to your lodge in Bumthang (Jakar). Note: For those not very fit, it is recommended to spread this final stage over two days.",
    },
    {
      day: "Day 22:Bumthang",
      details:
        "Bumthang, the spiritual and cultural heartland of Bhutan, offers a rich tapestry of sacred sites. Spend the day exploring Kurje Lhakhang, which preserves a rock bearing the imprint of Guru Rimpoche’s body, the 7th-century Jambay Lhakhang, and the impressive Jakar Dzong. You will also visit Tamshing Monastery, home to some of Bhutan’s oldest and most exquisite wall paintings. Overnight stay will be at your guesthouse in Bumthang.",
    },
    {
      day: "Day 23:Bumthang - Trongsa",
      details: `The journey to Trongsa takes approximately three hours. Trongsa, the ancestral home of Bhutan’s ruling dynasty, welcomes you with its rich history and stunning architecture. 
        After lunch, visit Trongsa Dzong, the largest dzong in Bhutan and a masterpiece of Bhutanese design, marking the birthplace of the monarchy.Also explore the Ta Dzong, perched on a hill overlooking the dzong, offering panoramic views of the valley.Overnight stay is at your hotel in Trongsa.`,
    },
    {
      day: "Day 24:Trongsa - Paro",
      details: `After breakfast, depart for Paro. Upon arrival, take some time to enjoy a leisurely stroll through Paro township, soaking in the local sights and atmosphere. Overnight stay at your hotel in Paro.`,
    },
    {
      day: "Day 25:Paro",
      details: `After breakfast, embark on a hike to Taktsang Monastery, which takes approximately 1.5 to 2 hours uphill. Marvel at the spectacular view of the monastery perched on a sheer cliff 900 meters above the valley floor. In the afternoon, explore other sights in the Paro valley. Overnight stay at your hotel in Paro.`,
    },
    {
      day: "Day 26: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Embark on Bhutan’s most demanding and iconic high-altitude trek.",
    },
    {
      key: "Traverse ancient trade routes, traditional yak trails, and remote wilderness.",
    },
    {
      key: "Marvel at breathtaking views of sacred peaks like Mount Jomolhari, Jichu Drakey, and Gangkar Puensum.",
    },
    {
      key: "Spot diverse Himalayan wildlife such as blue sheep, Himalayan marmots, yaks, takins (Bhutan’s national animal), and possibly even the rare snow leopard.",
    },
    {
      key: "Visit high-altitude Buddhist monasteries, enriching your spiritual journey.",
    },
    {
      key: "Experience local traditions with a visit to authentic Bhutanese farmhouses.",
    },
    {
      key: "Conclude your adventure with a trek to the iconic Tiger’s Nest Monastery (Paro Taktsang), Bhutan’s most celebrated landmark.",
    },
  ];

  const tourDetails = {
    duration: " 25 Nights/26 Days",
    groupSize: "5 & above",
    difficulty: "Hard",
    accommodation: "Hotels/Camp",
    walkingHours: "7 - 8 Hours",
    bestSeason: "April to May/Sep to Nov",
    distance: "19-20km",
    altitude: "5200m",
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
            Snowman Trek
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
        The Ultimate Himalayan Challenge{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Are you ready for Bhutan’s most demanding and rewarding trekking
        adventure? The Snowman Trek is designed for experienced trekkers seeking
        the ultimate test on Bhutan’s dramatic Himalayan trails. Renowned as one
        of the world’s toughest treks, it leads you deep into the remote and
        untouched Lunana region, across numerous high-altitude mountain passes —
        many soaring above 16,000 ft — while navigating unpredictable weather
        and long, challenging distances. Despite its intensity, this
        extraordinary high-altitude expedition offers an unforgettable
        experience, guiding you through pristine, rarely visited landscapes and
        breathtaking scenery. The Snowman Trek is more than a journey — it’s the
        ultimate adventure for seasoned hikers ready to push their limits.
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

export default SnowmanTrek;
