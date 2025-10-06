import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/adventure/bird.png";
import hidden from "../../../assets/adventure/bird2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanBirdWatching = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `On arrival at Paro Airport, you will be warmly received by our guide and driver, who will escort you to your hotel. In the afternoon, enjoy a birdwatching excursion along the Pachhu River, where you may spot a variety of waterbirds, including Ibisbill, Brown Dipper, White-capped Water Redstart, River Lapwing, and Plumbeous Water Redstart.`,
    },
    {
      day: "Day 02: Birding in Paro",
      details: `After breakfast, embark on a birdwatching tour in Paro. Popular spots for observing rare and exotic species include Taktsang Lhakhang, Rinpung Dzong, Kyichu Lhakhang, and Ta Dzong, where you can enjoy close encounters with Bhutan’s unique avifauna.`,
    },
    {
      day: "Day 03: Paro - Thimphu",
      details: `After breakfast, proceed to Thimphu, your second destination for birdwatching. Here, you can also purchase bird-themed stamps, considered good omens to keep with you. Rare species you may spot include the Laughing Thrush, Fire-capped Tit, Yellow-backed Flowerpecker, and Maroon-backed Accentor. Alongside birdwatching, take time to admire the architectural beauties of the area, giving your camera a well-deserved rest. Return to your hotel in the evening.`,
    },
    {
      day: "Day 04: Thimphu - Punakha - Wangduephodrang",
      details: `After breakfast, resume your journey toward Punakha, making a short halt at Dochu La Pass to admire the breathtaking eastern Himalayan peaks. At the pass, you may also spot birds such as the Rufous-breasted Bush Robin, Fire-tailed Myzornis, Black-eared Shrike Babblers, Grey-winged Blackbird, and Gold-billed Magpie. Upon reaching Punakha, enjoy a sightseeing tour of Punakha Dzong, where birds like the White-breasted Kingfisher, Black-chinned Yuhina, and Large Gray Babbler can be observed. Later, continue to Wangduephodrang and check in to your hotel for an overnight stay.`,
    },
    {
      day: "Day 05: Wangduephodrang - Gangtey",
      details: `After breakfast, continue your journey toward Gangtey, traveling through the scenic Black Mountain region where you may spot birds such as the Fire-breasted Flowerpecker, Amur Falcon, and Red-headed Bullfinch. Upon arrival in Gangtey, complete the check-in process at your accommodation and enjoy the rest of the day at leisure to explore the surroundings or relax.`,
    },
    {
      day: "Day 06: Gangtey - Trongsa",
      details: `After breakfast, continue your journey to Trongsa, driving through dense silver fir forests where you may spot the Gold-napped Finch and, if lucky, the elusive Fulvous Parrotbill. Upon arrival in Trongsa, complete the check-in process and prepare for a city tour. Along the route, keep an eye out for rare bird species such as Streak-breasted Scimitar Babblers, Rufous-bellied Eagle, Mountain Hawk Eagle, Common Kestrel, Rusty-cheeked Scimitar Babblers, White-browed Scimitar Babblers, Long-tailed Shrikes, and Common Green Magpie. Return to your hotel in the evening for an overnight stay.`,
    },
    {
      day: "Day 07: Trongsa – Zhemgang – Tingtibi",
      details: `Depart for Zhemgang and Tingtibi, following the scenic Mangde Chhu River. Along this route, birdwatchers can spot species such as Pin-tailed Green Pigeons, Red-headed Trogon, Blue-bearded Bee-eater, Chestnut-breasted Partridge, Hill Partridge, Coral-billed Scimitar Babbler, Rufous-necked Hornbill, Great Hornbill, White-browed Piculet, Speckled Piculet, and many more. Overnight stay will be in a tented camp.`,
    },
    {
      day: "Day 08: 08, 09, & 10 : Birding in Tingtibi and Manas",
      details: `Explore Tingtibi, a prime birdwatching destination, where you may spot Great Hornbill, Rufous-necked Hornbill, Wreathed Hornbill, Lesser Yellownape, Scarlet Minivet, Sultan Tit, Black-eared Shrike-babbler, White-winged Cuckooshrike, Large Cuckooshrike, Bar-winged Flycatcher-shrike, Large Woodshrike, Long-tailed Broadbill, Silver-eared Broadbill, Himalayan Goldenback, Greater Goldenback, and many more fascinating species. Overnight stay will be in a tented camp.`,
    },
    {
      day: "Day 11: Tingtibi – Bumthang",
      details: `In the morning, before departing for Bumthang, you can try spotting the Beautiful Nuthatch and Sapphire Flycatcher. The drive to Bumthang crosses the Yotong La Pass at 3,400 meters, offering opportunities to observe Chestnut-tailed Minla, Brown Parrotbill, Black-faced Laughingthrush, Chestnut-crowned Laughingthrush, and Gold-naped Finch. In the evening, take a walk along the Chamkhar Chu River in Bumthang Valley to spot Little Bunting, Red-billed Chough, Blyth’s Pipit, and Common Sandpiper. Overnight stay at a hotel in Bumthang.`,
    },
    {
      day: "Day 12: Bumthang",
      details: `Today offers another chance to spot pheasants that may have been missed earlier. Visit Tharparling Monastery to observe the magnificent Himalayan Monal and Satyr Tragopan. You may also encounter Spot-winged Grosbeak, Darjeeling Redstart, Olive-backed Pipit, Oriental Skylark, Black-billed Magpie, and other avian species. Overnight stay at a hotel in Bumthang.`,
    },
    {
      day: "Day 13: Bumthang - Thimphu",
      details: `After breakfast, continue your journey back to Thimphu. Upon arrival, complete the check-in process at your hotel and enjoy the rest of the day at your leisure. You can explore the local markets, shop for traditional Bhutanese clothing, or simply relax and soak in the city’s unique atmosphere.`,
    },
    {
      day: "Day 14: Thimphu-Paro Departure",
      details:
        "After enjoying a delicious breakfast, check out from your hotel and transfer to Paro Airport for your onward journey. With this, your Bhutan tour concludes, leaving you with a treasure trove of unforgettable memories!",
    },
  ];

  const tripHighlights = [
    {
      key: "Join guided birdwatching and wildlife safari Bhutan tours led by expert local guides.",
    },
    {
      key: "Traverse the diverse ecosystems that are part of the biodiversity hotspot in the Eastern Himalayas.",
    },
    {
      key: "Savor Bhutanese farmhouse dinners supported by local agriculture and community-based tourism.",
    },
    {
      key: "Engage with Bhutanese rural communities to learn how the environment is embedded in everyday life.",
    },
    {
      key: "Visit sacred Buddhist monasteries where spirituality and conservation harmoniously coexist.",
    },
    {
      key: "Relax with a traditional Bhutanese herbal hot stone bath, a rejuvenating activity rooted in indigenous wellness practices.",
    },
    {
      key: "Hike to the famous Tiger’s Nest Monastery (Paro Taktsang), a must-do for any Himalayan trekking enthusiast.",
    },
  ];

  const tourDetails = {
    duration: "13 Nights / 14 Days",
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
            Bhutan Bird Watching Tour{" "}
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
        Bhutan is a birdwatcher’s paradise, boasting over 600 bird species
        across its varied landscapes. Nature enthusiasts can embark on immersive
        tours to spot rare and indigenous birds, including the endangered
        black-necked crane gliding over serene Himalayan valleys. Other notable
        sightings may include the regal Imperial Heron, Blyth’s Kingfisher, and
        the striking Beautiful Nuthatch. From towering Himalayan peaks to lush
        subtropical valleys, Bhutan’s diverse ecosystems provide thriving
        habitats for a truly unforgettable wildlife and ecotourism experience.
        Grab your binoculars and immerse yourself in Bhutan’s symphony of
        birdsong.
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

export default BhutanBirdWatching;
