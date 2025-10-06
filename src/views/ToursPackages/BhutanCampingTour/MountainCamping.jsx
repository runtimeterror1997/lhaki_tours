import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/camping/mountain.png";
import hidden from "../../../assets/camping/mountain1.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const MountainCamping = () => {

  const itinerary = [
    {
      day: "Day 01: Arrival in Paro to Thimphu",
      details: `Upon arrival at Paro, our representative will meet you at the airport after completing customs formalities. After lunch, enjoy afternoon sightseeing around Paro, including a visit to the Ta Dzong Museum and Rimpung Dzong, where you can view the painting of the great saint Milarepa. You will also tour the National Museum, formerly the Dzong’s watchtower, which houses a rich collection of fine arts, thangkas, statues, and antiques. Afterwards, visit Kichu Lhakhang, the oldest temple in Bhutan.
In the late afternoon, drive to Thimphu (approximately 1.5 hours) along the scenic Pachu River. Before dinner at the hotel, your guide will provide an orientation on Bhutanese etiquette. Overnight at your hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `Spend a full day exploring Thimphu’s cultural and historical highlights. Begin with a visit to the National Memorial Chorten, built by the Royal Queen Mother as a memorial stupa for the Third King who passed away in 1972. Continue to the 12th-century Changangkha Temple and the Zilukha Nunnery. In the afternoon, visit the School for Arts and Crafts, the National Library housing Bhutanese scriptures dating back to the 8th century, the Traditional Paper Factory, and a fascinating replica of a medieval farmhouse at the Folk Heritage Museum.
Time permitting, visit the Takin nursery, home to Bhutan’s national animal, and Tashichhodzong, a majestic fortress and monastery. If your visit coincides with the weekend (Friday to mid-Sunday), enjoy a stroll through the Thimphu Market. Overnight at your hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha - Chimilhakhang(Short hike)",
      details: `After breakfast, drive for about 1.5 hours to Punakha. En route, ascend the mountain road to Dochula La at 3,140m. On clear days, the pass offers a stunning panoramic view of the Eastern Himalayas. Descend through diverse forests into the fertile Punakha Valley. Take a short hike through picturesque rice fields to Chimi Lhakhang, a temple dedicated to Drukpa Kunley, affectionately known as “the Divine Madman,” and a popular pilgrimage site for childless couples. In the afternoon, visit Punakha Dzong, majestically located at the confluence of the Pho Chhu (male river) and Mo Chhu (female river), and considered one of Bhutan’s most impressive Dzongs. Overnight at your hotel in Punakha. (Breakfast/Lunch/Dinner included)`,
    },
    {
      day: "Day 04: Punakha - Paro (125 km, 4 hr 20 mins)",
      details: `After visiting Punakha, drive back to Paro, a journey of approximately 4 hours. Upon arrival, visit the magnificent Paro Rinpung Dzong, one of Bhutan’s finest examples of traditional architecture. Later, stop by a local farmhouse for tea or dinner, immersing yourself in authentic Bhutanese village life. You can also enjoy the restorative experience of a traditional hot stone bath. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 05:  Paro - Haa - Hike Sangala",
      details: `Today we drive to Haa Valley (2,670 m), a journey of about 3 hours that crosses the scenic Chele La Pass. Upon arrival, enjoy the stunning views of Haa Valley and spend some time exploring the area. The trek begins in Haa Valley along an unpaved motor road for less than an hour, keeping to the left side of the villages. From there, follow the trail on the right side of the village, gradually climbing past yak herders’ camps until you reach a fork in the trail. Take the right-hand path (avoiding the left trail that leads to the summer yak herding camp and the China border) to make the final climb to your campsite at Sagala (3,150 m).`,
    },
    {
      day: "Day 06: Hike- Sagala – Ningula",
      details: `Distance & Duration: 12 km / 5 hours | Elevation Gain/Loss: 950 m ascent / 250 m descent
In the morning, begin the trek upward toward Sagala Pass (3,550 m), which takes about half an hour. On a clear day, enjoy breathtaking views of Mt. Jomolhari (7,315 m) and Jitchu Drake (6,989 m). After crossing the pass, follow the ridge on the right side through rhododendron forests and alpine meadows, eventually reaching a high ridge at 4,100 m, offering panoramic views of the entire Haa Valley. The remainder of the trek features gentle ascents and descents through hemlock and juniper forests until arriving at Nyingula, your campsite for the night at 3,850 m.`,
    },
    {
      day: "Day 07: Hike- Nyingula – Chele La – Paro",
      details: `Distance & Duration: 13 km / 7 hours | Elevation Gain/Loss: 500 m ascent / 360 m descent
After breakfast, begin the trek with a brief descent before following a ridge that winds through meadows and yak herders’ camps. The trail then ascends toward Kung Karpo through tall rhododendron trees and meadows marked by stone cairns, taking about 2 hours. Enjoy spectacular views of Haa Valley as you climb to the pass before reaching Kung Karpo, where the Sky Burial site sits at 4,350 m. From Kung Karpo, the trail alternates between ascents and descents, offering panoramic views of Paro Valley on the left and Haa Valley on the right, including sights of Kila Goenpa Nunnery. The trek continues downhill along the final ridge for about 90 minutes until reaching Chelela Pass (3,980 m), where your vehicle will be waiting to drive you back to Paro. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 08: Hike to Taktsang Monastery ‘Tiger’s Nest’ (3120m)",
      details: `After breakfast, drive to the base camp of Taktsang Monastery (Tiger’s Nest) for the hike up the broad trail, which takes approximately 2 hours uphill. From the viewpoint, enjoy the spectacular sight of Taktsang Monastery perched on a sheer cliff face 900 meters above the Paro Valley floor. This monastery is an important pilgrimage site for Buddhists, where Guru Rinpoche is said to have flown on the back of a tigress in the 8th century and meditated in a cave for three months—the origin of Buddhism in Bhutan. In the afternoon, drive to the almost fully reconstructed Drukgyel Dzong, with the towering sacred Mount Jomolhari (7,314 m) providing a stunning backdrop on clear days. On the return drive to Paro, visit other sights in the valley before overnight stay at your hotel in Paro.`,
    },

    {
      day: "Day 09: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Hike through lush green landscapes and misty mountain slopes in Bhutan’s untouched wilderness.",
    },
    {
      key: "Trek through Himalayan peaks, valleys, and rhododendron forests on renowned Bhutan trekking routes.",
    },
    {
      key: "Camp close to the stars, surrounded by alpine quiet.",
    },
    {
      key: "Explore remote Bhutanese villages and witness a life rooted in harmony with nature.",
    },
    {
      key: "Visit sacred Buddhist monasteries that embody Bhutan’s spiritual and cultural heritage.",
    },
    {
      key: "Hike up to the famous Tiger’s Nest Monastery (Paro Taktsang), a remarkable cultural landmark perched on the edge of a cliff.",
    },
  ];

  const tourDetails = {
    duration: "6 Nights / 7 Days",
    groupSize: "2 & above",
    difficulty: "Easy/Moderate",
    accommodation: "Hotels/Camping",
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
            Bhutan Camping and Mountain Hiking
          </Typography>
        </Box>
      </div>

      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingY={3}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Our Camping and Mountain Hiking Bhutan Tour is designed for travelers
        seeking the crisp mountain air and spiritual serenity of the Himalayas.
        This adventure combines high-altitude trekking with peaceful overnight
        camping, taking you through scenic forests, alpine lakes, and valleys
        adorned with rhododendron wildflowers. Hike along Bhutan’s iconic
        Himalayan trails, where towering peaks meet quiet meadows, encounter
        yaks and sacred mountain lakes, and immerse yourself in authentic rural
        life. Ideal for those desiring both a multi-day trekking experience and
        the tranquility of wilderness camping in Bhutan.
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

export default MountainCamping;
