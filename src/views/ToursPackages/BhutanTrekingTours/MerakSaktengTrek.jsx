import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/trekking/merak1.png";
import hidden from "../../../assets/trekking/merak.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const MerakSaktengTrek = () => {
  const itinerary = [
    {
      day: "Day 01: Arrive Guwahati-S/Jongkhar",
      details: `Arrive at Guwahati Airport in Assam, India, where our representative will greet you. Drive to Samdrup Jongkhar, an important trade hub in eastern Bhutan. In the evening, enjoy a leisurely stroll around the town. Overnight stay at a hotel in Samdrup Jongkhar.`,
    },
    {
      day: "Day 02: Samdrup Jongkhar-Trashigang",
      details: `After an early breakfast, drive north to Trashigang, stopping en route at a local weaving center in Khaling. In the afternoon, visit Trashigang Dzong, the administrative and cultural center of the valley. Overnight stay at a hotel in Trashigang.`,
    },
    {
      day: "Day 03:  Trashigang",
      details: `Drive to Trashiyangtse, visiting Gomkora Temple and Doksum Village along the way. In Trashiyangtse, explore the Traditional Art School, Chorten Kora, and stroll through the village and town. Return to Trashigang for an overnight stay at the hotel.`,
    },
    {
      day: "Day 04:  Commence trek to Donmong Chu ( Approx. 19km, 5-6hours)",
      details: `From Trashigang, drive for about 2 hours to the road end at Chaling (2,135 m), where the trek begins. Gradually climb towards Shaktimi Meadow, passing grazing yaks and sheep with scattered yak herders’ huts. Continue ascending to Mendula Pass at 3,345 m, then descend through rhododendron forests to reach the campsite at the scenic Donmong Chu Meadow by the river (3,145 m). Overnight in camp.`,
    },
    {
      day: "Day 05: Donmong Chu-Merak (Approx. 10.5km, 3-4hours trek)",
      details: `Today’s trek follows the Donmong Chu River, winding through rhododendron forests and shrubs. The trail is gentle, avoiding steep climbs and gradually gaining elevation along the river bends. The first village encountered is Gangu (3,430 m), and after about 45 minutes more, we reach the large Merak village at 3,520 m. Overnight in camp.`,
    },
    {
      day: "Day 06: Merak-Mitsateng (Approx. 16km, 6 hours trek)",
      details: `We start early from the camp and head east, gradually climbing to the first pass at 3,900 m. Today is likely the toughest day of the trek as we cross the highest pass along with several smaller passes and ridges. We continue along the tree line until reaching Nachungla Pass at 4,150 m, where we can enjoy 360-degree views of Bhutan’s peaks, Arunachal, and Tibet. From the pass, we begin a long descent to Miksateng village, arriving at the campsite at 3,060 m. Overnight in camp.`,
    },
    {
      day: "Day 07: Mitsateng-Sakteng (Approx. 6.5km, 2-3hours trek)",
      details: `After breakfast, we descend down to the river and then climb gradually towards a small pass with a small Chorten (stupa) on the hill overlooking the Sakteng valley. From the ridge, we descend down to the valley, cross the river into Sakten village at an altitude of 2950m.
Overnight in camp`,
    },
    {
      day: "Day 08: Sakteng",
      details:
        "Today is a rest day at Sakteng, allowing you to fully explore its beauty. In the morning, visit the village, local homes, and temple, meeting residents and witnessing the distinctive lifestyle and culture of this ethnic community. In the afternoon, enjoy a cultural show performed by the locals, featuring the Brokpas’ unique yak and Ache Lhamo dances. You can also participate in a special ceremony to sample the local liquor. Overnight in Sakteng.",
    },
    {
      day: "Day 09: Sakten-Joenkhar Teng (Approx. 17km, 6-7 hours trek)",
      details:
        "Today’s trek covers approximately 6–7 hours with a gradual descent, so we start early from the camp. Leaving Sakteng, we proceed towards Joenkhar Teng, following scenic trails along the way. We set up camp right next to the river at an altitude of 1,750 meters. Overnight in camp.",
    },
    {
      day: "Day 10: Joenkhar Teng Tashigang–Mongar (Approx. 8km, 2-3 hours trek)",
      details:
        "On the final day of the trek, we start with a short climb through Joenkhar Teng, followed by a long descent crossing suspension bridges, and a brief climb to reach Phongmay at 1,770 meters. From there, we drive to Mongar town, a journey of approximately five hours via Trashigang. Overnight at a hotel in Mongar.",
    },
    {
      day: "Day 11: Mongar - Bumthang",
      details:
        "After breakfast, we embark on a long and scenic drive west to Bumthang, crossing Thrumshingla National Park and witnessing the dramatic changes in vegetation and landscapes, teeming with birds and wildlife. Along the way, we pass through numerous small hamlets and villages before arriving in Jakar in the evening. Overnight at a hotel in Jakar.",
    },
    {
      day: "Day 12: Bumthang",
      details:
        "In the morning, visit Kurje Lhakhang, one of Bhutan’s most sacred sites where the kingdom’s patron saint, Guru Rinpoche (Padmasambhava), meditated. From Kurje, drive south along the river’s right bank to Jambay Lhakhang, a 7th-century temple built by Tibetan King Songtsen Gampo, and one of Bhutan’s two oldest temples (the other being Kyichu Lhakhang in Paro). After lunch, hike to Tamshing Lhakhang, founded in 1501 by Pema Lingpa, featuring ancient Buddhist wall paintings. Later, visit Jakar Dzong, known as “the castle of the white bird,” and enjoy a stroll through Bumthang’s market before returning to the hotel. Overnight at the hotel.",
    },
    {
      day: "Day 13: Bumthang – Trongsa – Punakha",
      details:
        "After breakfast, embark on a long drive to Punakha. From Jakar, cross the scenic Chumey Valley and ascend Yontongla Pass to reach Trongsa, where you can visit the Tower of Trongsa Museum and admire the impressive Trongsa Dzong, one of Bhutan’s largest fortresses. Continue across Pele La Pass through Black Mountain National Park, then descend into the semi-tropical Punakha-Wangdue Valley, arriving in the evening. Overnight in Punakha.",
    },
    {
      day: "Day 14: Punakha -Thimphu",
      details:
        "After breakfast, visit Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Zhabdrung, the ‘Unifier of Bhutan,’ as predicted by the great Guru Rimpoche (Padmasambhava). Then drive about 12 km to a point where you take a scenic walk across rice fields and a river to reach Khamsum Yulley Namgyal Chorten, perched on the beautiful hillock of Ngezergang, housing paintings and statues of the Nyingmapa tradition. Continue to Metshina Village and enjoy a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple, where you may receive a special fertility blessing if you wish. Afterwards, drive back to Thimphu for overnight stay at your hotel.",
    },
    {
      day: "Day 15: Thimphu – Paro",
      details:
        "After breakfast, visit the King’s Memorial Chorten, built in memory of Bhutan’s third King (reigned 1952–1972), followed by Buddha Point, Changangkha Monastery, and the radio tower for panoramic views of Thimphu Valley and Thimphu Dzong. Next, explore the zoo, home to Bhutan’s national animal, the takin, and continue to the nunnery temple, the National Library with its collection of ancient manuscripts, and the School of Arts and Crafts (painting school). After a relaxing lunch, visit the National Institute of Traditional Medicine, a traditional paper factory, and the majestic Tashichodzong. In the evening, drive to Paro for an overnight stay at your hotel.",
    },
    {
      day: "Day 16: Paro",
      details:
        "After breakfast, visit Paro Dzong, built in 1646, which currently houses government offices and religious institutions like all Dzongs in Bhutan. On the way, cross a traditional wooden bridge leading to the Dzong. Next, tour the National Museum, formerly the Dzong’s watchtower, now home to a rich collection of fine arts, paintings, thangkas, statues, and antiques. After lunch, visit Kichu Lhakhang, the oldest temple in the country. Overnight stay at your hotel in Paro.",
    },
    {
      day: "Day 17: Hike to Taktsang Monastery (Tiger’s Nest)",
      details:
        "Early in the morning, embark on an excursion to Taktsang Monastery, arguably Bhutan’s most spectacularly sited monastery. Perched on a vertical cliff at 2,950 meters above sea level, it seems to defy engineering logic. For the energetic, enjoy a two-hour hike uphill for a closer and more dramatic view of the monastery; for those preferring less strenuous options, a pony ride can be arranged at an additional cost. Later, on the outskirts of Paro town, visit Kyichu Lhakhang, one of Bhutan’s oldest temples, and experience local culture with a visit to a nearby farmhouse. Overnight stay at your hotel in Paro.",
    },
    {
      day: "Day 18: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Witness the unique lifestyle and culture of the Merak and Sakteng communities.",
    },
    {
      key: "Explore vast alpine meadows, challenging mountain passes, and subtropical forests within Sakteng Wildlife Sanctuary.",
    },
    {
      key: "Visit Radhi village, famous for rice cultivation and indigenous textiles like Bura silk.",
    },
    {
      key: "Tour a Bhutanese farmhouse to experience rural Bhutanese life firsthand.",
    },
    {
      key: "Visit sacred Buddhist monasteries and Lhakhangs (temples).",
    },
    {
      key: "Undertake the memorable day hike to the iconic Tiger’s Nest Monastery (Paro Taktsang).",
    },
  ];

  const tourDetails = {
    duration: " 17 Nights/18 Days",
    groupSize: "2 & above",
    difficulty: "Easy/Moderate",
    accommodation: "Hotels/Camp",
    walkingHours: "4 - 5 Hours",
    bestSeason: "Sep to Dec",
    distance: "6-8km",
    altitude: "4200m",
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
            Merak Sakteng Trek
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
        A Glimpse into Semi-Nomadic Life{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Bhutan’s Merak Sakteng Trek offers a unique cultural adventure,
        providing an intimate glimpse into the semi-nomadic life of eastern
        Bhutan. Traversing serene valleys within the Sakteng Wildlife Sanctuary
        in Trashigang district, the trek ascends to altitudes of up to 4,100
        meters. Along the way, you’ll pass through traditional villages such as
        Joenkhar, Thakthi, Merak, and Sakteng, experiencing their distinct
        cultural lifestyle. Overnight stays are at locally inspired campsites
        equipped with essential facilities, including tenting sheds, toilets,
        dining areas, and water supply. This moderate trek is a culturally
        immersive journey into Bhutan’s fascinating nomadic communities.
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

export default MerakSaktengTrek;
