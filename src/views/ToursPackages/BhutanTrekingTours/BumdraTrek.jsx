import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/trekking/bumdra.png";
import hidden from "../../../assets/trekking/bumdra2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BumdraTrek = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `The flight to Paro offers a breathtaking introduction to Bhutan, crossing the majestic Himalayan Mountains and revealing awe-inspiring views of towering peaks, including the sacred Jumolhari and Jichu Drake. If you’re arriving via Kathmandu, the spectacle is even more remarkable, with the possibility of glimpsing Mount Everest and Mount Kanchenjunga along the way.
Upon arrival in Paro, you’ll be warmly welcomed by our representative before beginning your cultural exploration. In the afternoon, visit Paro Dzong, an architectural masterpiece built in 1646 that now serves as a center for government offices and religious institutions. Continue to the National Museum, once a watchtower for the Dzong and now home to an impressive collection of fine arts, thangkas, statues, and antiques. You’ll also visit Kichu Lhakhang, Bhutan’s oldest temple, steeped in spiritual significance. Later in the evening, enjoy a scenic drive to Thimphu, the charming capital of Bhutan.`,
    },
    {
      day: "Day 02: Thimphu Sightseeing",
      details: `After breakfast, embark on a full-day sightseeing tour of Thimphu, Bhutan’s vibrant capital. Begin your day with a visit to the King’s Memorial Chorten, a stupa built in memory of the third King of Bhutan (1952–1972), followed by a stop at the impressive Buddha Point, where a massive statue of Buddha Dordenma overlooks the valley. Continue to the Changangkha Monastery, one of Thimphu’s oldest spiritual sites, and the radio tower viewpoint for sweeping views of the Thimphu Valley and the magnificent Tashichho Dzong. You’ll also visit the small zoo to see Bhutan’s national animal, the takin.
The cultural exploration continues with visits to the Zilukha Nunnery Temple, the National Library (home to ancient Buddhist manuscripts), and the School of Arts and Crafts, where young Bhutanese artists master traditional painting techniques. After a leisurely lunch, discover Bhutan’s holistic healing traditions at the National Institute of Traditional Medicine, and explore a traditional paper-making factory to witness the ancient art of crafting handmade paper. End the day with a visit to the majestic Tashichho Dzong, an architectural masterpiece and seat of Bhutan’s government and monastic body. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03:  Thimphu – Punakha (1310m) – Chimi Lhakhang short hike",
      details: `After breakfast, embark on a scenic drive over the Dochu-La Pass (3,100 m), where, on a clear day, you’ll be rewarded with breathtaking panoramic views of the Himalayan peaks. The road then gently descends into the balmy Punakha Valley, a journey of about two hours. Upon arrival, take a peaceful hike through lush rice fields to Chimi Lhakhang, a revered temple dedicated to Drukpa Kuenley, affectionately known as “The Divine Madman.” Famous for his unorthodox teachings and humor, the saint is deeply beloved by the Bhutanese people, and the temple is a popular pilgrimage site for couples seeking blessings for children.
Continue your journey to Punakha, Bhutan’s ancient capital, where you’ll visit the magnificent Punakha Dzong — the “Palace of Great Happiness.” Built in 1637 by Zhabdrung Ngawang Namgyal, the unifier of Bhutan, this stunning architectural masterpiece sits majestically at the confluence of the Pho Chhu and Mo Chhu rivers. Its intricate woodwork, sacred relics, and rich history make it one of the most significant and beautiful dzongs in the country.`,
    },
    {
      day: "Day 04: Punakha – Khamsum Chorten hike – Paro (2250m)",
      details: `After breakfast, set out on a scenic hike to the Khamsum Yulley Namgyel Chorten, a stunning stupa built by the Royal Queen Mother in 2002 for the well-being of Bhutan and in dedication to the present king. Perched on a hilltop, this intricately designed chorten offers breathtaking panoramic views of the lower Punakha Valley, making the hike both spiritually enriching and visually rewarding.
Later, drive to Paro, stopping en route to visit Semtokha Dzong, the oldest dzong in Bhutan, built in 1627 by Zhabdrung Ngawang Namgyal. This historic fortress now serves as the Institute for Language and Culture Studies, preserving Bhutan’s linguistic and cultural heritage. Upon arrival in Paro, check into your hotel and enjoy a relaxing evening. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 05: Paro-Bumdrak (Trek Starts)",
      details: `After an early breakfast, embark on a scenic drive to Sang Choekor in Paro, where our trekking crew will be waiting to begin the journey. The trek starts from here and leads to Bumdra, a sacred site believed to be blessed by 100,000 dakinis. Just above the campsite, you’ll find a rock said to resemble Guru Rinpoche’s hat, and beneath it lies a small meditation chamber where visitors can sit in quiet reflection and seek blessings.
The initial 3–4 hours of the trek involve a steep climb through a dense forest. Lunch will be served at the small temple of Chechemhen (3,640 m), offering spectacular views of the Paro Valley. After lunch, the trail becomes gentler, ascending gradually. Before starting the trek, you may also visit Sang Choekhor Lhakhang, a renowned Buddhist college.
The first 1–2 hours of the hike take you along a shaded, forested ridge leading to a clearing adorned with prayer flags and panoramic views of both the Paro and Do Chhu Valleys. Higher up, the Chhoe Tse Lhakhang (temple) clings to the mountainside, another 1–2 hours of walking away. The trail gently undulates before the final steep section to this beautiful temple, which rewards you with sweeping vistas — to the south, the Paro Valley unfolds below, while to the north, the snowcapped Himalayan peaks rise majestically.
A final 20-minute climb through ancient ruins and fluttering prayer flags leads you into a serene old-growth forest. After a 40-minute traverse, the trail emerges into a vast high meadow dotted with sacred chortens and colorful prayer flags. This is where our campsite is located, just beneath Bumdra Monastery — also known as the Cave of a Hundred Thousand Prayers — offering breathtaking, unobstructed views of the Himalayan range.
After settling in and enjoying lunch, spend the afternoon visiting the monastery and immersing yourself in meditation amid the tranquil mountain setting. Dinner and overnight stay at Bumdra Camp (3,800 m).`,
    },
    {
      day: "Day 06: Bumdrak – Taktshang – Paro (Trek Ends)",
      details: `After breakfast, begin your descent from Bumdra towards Paro via the iconic Taktshang Monastery (Tiger’s Nest). The trek starts with a gentle 1–2 hour descent, during which glimpses of the golden rooftops of distant temples gradually appear through the forest canopy. The trail meanders along the mountainside, weaving between sacred monasteries before arriving at the serene gardens of Sangtopelri (Heaven on Earth). From here, you can look boldly over the edge and gaze straight down upon the magnificent Taktsang Monastery, dramatically perched on a sheer cliff far below.
About an hour later, the trail leads to the gates of Taktshang, offering a breathtaking view across the gorge. A steep descent to a waterfall followed by a short climb up a set of stone steps brings you to the entrance of the monastery itself. Take time to explore this legendary pilgrimage site, believed to be where Guru Rinpoche meditated in the 8th century.
A picnic-style hot lunch will be served near the monastery, allowing you to soak in the tranquil atmosphere and spiritual energy of this sacred place. Afterward, retrace your steps and begin the final 1-hour descent to the base, where your vehicle will be waiting to drive you back to Paro.
Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 07: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Discover Bumdrak, a unique Bhutanese monastery full of ancient legends and spiritual energy.",
    },
    {
      key: "Visit Bhutan's most famous monastery, Tiger’s Nest (Paro Taktsang).",
    },
    {
      key: "Soak in the quiet tranquility of Bhutan's pristine mountains.",
    },
    {
      key: "Explore significant historic sites and admire magnificent fortresses such as Tashichho Dzong and Punakha Dzong.",
    },
    {
      key: "Enjoy a traditional Bhutanese farmhouse dinner and connect with friendly locals.",
    },
  ];

  const tourDetails = {
    duration: " 7 Days",
    groupSize: "2 & above",
    difficulty: "Easy/Moderate",
    accommodation: "Hotels/Camp",
    walkingHours: "4–5 Hours",
    bestSeason: "March to May/Sep to Nov",
    distance: "Average 5-7 km per day",
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
            Bumdra Trek
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
        A Sacred Ascent to Bhutan’s Skies{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Embark on the spiritually enriching Bumdrak Trek, a short yet deeply
        meaningful Himalayan journey that blends Bhutan’s natural beauty with
        its sacred heritage. Your adventure begins at Sanga Choekor Lhakhang, a
        renowned Buddhist college, and ascends to Choe Tse Lhakhang, offering
        breathtaking views of the Himalayas. The trail leads to Bumdra
        Monastery, known as the “Rock of One Hundred Thousand Footprints,” a
        place steeped in ancient legends where angelic beings (Dakinis) are
        believed to have left their footprints over 800 years ago. The trek
        culminates at the iconic Tiger’s Nest Monastery, one of Bhutan’s most
        sacred sites. Along the way, you’ll immerse yourself in profound
        spirituality, ancient stories, and serene landscapes, making this
        journey a deeply transformative and unforgettable Bhutanese experience.
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

export default BumdraTrek;
