import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/trekking/drukpath1.png";
import hidden from "../../../assets/trekking/drukpath.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const DrukpathTrek = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `Upon arrival in Paro, you will be greeted by our representative. In the afternoon, visit the Paro Dzong, built in 1646, which currently houses government offices and religious institutions, as do all the Dzongs in Bhutan.
Next, explore the National Museum, formerly the watchtower for the Dzong, now home to a rich collection of fine arts, paintings, thangkas, statues, and antiques. Afterward, visit Kichu Lhakhang, the oldest temple in Bhutan. In the evening, take a leisurely stroll through Paro town. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 02: Paro – Hike to Taktsang Monastery ‘Tiger’s Nest’ (3120m)",
      details: `After breakfast, drive to the base camp of Taktsang Monastery (Tiger’s Nest) for the hike up. The trail is broad and takes approximately 2 hours uphill. From the vantage point, enjoy the spectacular view of the monastery perched on a sheer cliff face 900 meters above the Paro valley floor. Taktsang Monastery is an important pilgrimage site for Buddhists, as Guru Rimpoche is said to have flown here on the back of a tigress in the 8th century, meditating in a cave for three months where the monastery was later built. This cave is considered the origin of Buddhism in Bhutan.
In the afternoon, drive to the almost fully reconstructed Drukgyel Dzong. On clear days, the towering peak of sacred Mount Jomolhari (7,314m) provides a stunning backdrop. On the return drive to Paro, enjoy further sightseeing around the valley, including visits to Ta Dzong Museum and Rimpung Dzong, along with other notable sights in Paro. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 03:  Paro – Jela Dzong (Trek Starts)",
      details: `Trek Overview – Day: Short Trek to Jele Dzong
Walking Distance: 7 km (approx. 4–5 hours)
Camp Altitude: 3,480 m
Today is a relatively short trekking day. The journey begins with a gradual climb up to Jele Dzong. The trail ascends steadily to the campsite, offering stunning panoramic views of Paro Valley surrounded by snow-capped Himalayan peaks, weather permitting. Above the camp lies Jele La (3,400 m) and Jele Dzong, a historic fortress perched dramatically on the mountainside. Overnight at the campsite at 3,480 m.`,
    },
    {
      day: "Day 04: Jela Dzong – Jangchulakha",
      details: `Trek Overview – Day: Trek to Next Campsite
Walking Distance: 10 km (approx. 4–5 hours)
Camp Altitude: 3,770 m
The day begins with a steep 1.5-hour climb, followed by a more gradual ascent. The trail winds through dense alpine forests filled with rhododendrons and other native flora. If the weather is clear, you’ll enjoy breathtaking views of Mt. Chomolhari and other snow-capped peaks. Along the way, you might hear the calls of pheasants and spot yak herders near the campsite. Overnight stay at the campsite at 3,770 m.`,
    },
    {
      day: "Day 05: Jangchulakha - Jimilangtsho",
      details: `Trek Overview – Day: Ridge Trail to Jimilangtsho
Walking Distance: 10 km (approx. 6–7 hours)
Camp Altitude: 3,870 m
Today’s trail follows the ridge, offering sensational views of the surrounding mountains and valleys when the weather is clear. Enjoy a magnificent view of Jichu Drake (6,989 m), revered as the protective deity of Paro. The campsite is located near the Jimilangtsho lakes, famous for their giant trout. Overnight stay at the campsite.`,
    },
    {
      day: "Day 06: Jimilangtsho - Simkotra",
      details: `Trek Overview – Day: Ridge Trail to Simkota Lake
Walking Distance: 10 km (approx. 6–7 hours)
Camp Altitude: 3,870 m
The trail today winds through dwarf rhododendron trees and passes by the serene Janeetsho Lake. Along the way, you may encounter yak herder camps, offering a glimpse into their traditional lifestyle. The campsite is set near Simkota Lake, where, if fortunate, you might catch a lake trout for dinner. Overnight stay at the campsite.`,
    },
    {
      day: "Day 07: Simkotra -Phajoding - Thimphu (Trek Ends)",
      details: `Trek Overview – Day: Descent to Thimphu
Walking Distance: 14 km (approx. 6–7 hours)
Ascent: 100 m | Descent: 1,800 m
The day begins with a gradual climb to Phume La (4,080 m). If weather permits, enjoy breathtaking views of Mt. Gangkar Puensum, Bhutan’s highest peak, along with surrounding Himalayan summits. From the pass, the trail descends steadily towards Phajodhing, continuing downhill through forested areas of mostly blue pine, eventually reaching the area above the Takin Sanctuary. Here, your driver will meet you for transfer to the hotel. In the evening, enjoy a leisurely stroll in Thimphu town. Overnight at your hotel in Thimphu.`,
    },
    {
      day: "Day 08: Thimphu - Paro",
      details:
        "After breakfast, enjoy sightseeing in Thimphu starting with a visit to the National Memorial Chorten, which depicts the Buddhist faith through intricate paintings and statues. Continue to the 12th-century Changangkha Temple and Drubthob Monastery, which houses the Zilukha Nunnery. Explore the School of Arts and Crafts, where students master the 13 traditional Bhutanese art forms, and the National Library, home to a collection of Bhutanese scriptures dating back to the 8th century. Conclude your cultural tour with a visit to the Folk Heritage Museum, a fascinating replica of a medieval Bhutanese farmhouse. Overnight at your hotel in Paro.",
    },
    {
      day: "Day 09: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Hike through the spectacular trails of the Drukpath Trek, adorned with endless wildflowers and breathtaking natural scenery.",
    },
    {
      key: "Take a spiritual visit with a monk at the sacred Thuji Dra Monastery.",
    },
    {
      key: "Witness Bhutan's legendary Tiger’s Nest Monastery (Paro Taktsang), a spiritual highlight of your adventure.",
    },
    {
      key: "Explore sacred Bhutanese monasteries along your trekking route.",
    },
    {
      key: "Discover charming, peaceful villages and savor traditional Bhutanese farmhouse dinners.",
    },
    {
      key: "Engage with friendly Bhutanese locals, experiencing their unique and welcoming way of life.",
    },
  ];

  const tourDetails = {
    duration: " 8 Nights/9 Days",
    groupSize: "2 & above",
    difficulty: "Easy/Moderate",
    accommodation: "Hotels/Camp",
    walkingHours: "5 - 6 Hours",
    bestSeason: "March to June/Sep to Nov",
    distance: "9-12km",
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
            Drukpath Trek
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
        Bhutan’s Popular Short Himalayan Adventure
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        The Drukpath Trek is one of Bhutan’s most iconic hiking experiences,
        offering a perfect blend of breathtaking landscapes, cultural discovery,
        and spiritual connection. This moderate yet deeply rewarding trek winds
        through enchanting alpine forests, vibrant rhododendron valleys, and
        serene mountain trails, making it an ideal choice for travelers seeking
        an authentic immersion into Bhutan’s natural beauty and cultural
        heritage. Along the way, you’ll encounter crystal-clear alpine lakes and
        enjoy spectacular views of snow-capped Himalayan giants such as Gangkar
        Puensum, Jhomolhari, and others. Imagine witnessing breathtaking
        sunrises and sunsets from high mountain passes, where the sky is painted
        in hues of gold and crimson — moments that will stay with you forever.
        Whether you are drawn by the thrill of adventure, the tranquility of
        nature, or the spiritual depth of Bhutan’s sacred landscapes, the
        Drukpath Trek is the perfect gateway to experience the raw beauty and
        mystical essence of the ‘Land of the Thunder Dragon.’
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

export default DrukpathTrek;
