import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/adventure/manas.png";
import hidden from "../../../assets/adventure/manas1.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const ManasNationalPark = () => {

  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `The flight into Paro offers a breathtaking introduction to Bhutan’s natural beauty. On clear days, you’ll witness awe-inspiring views of the world’s highest peaks, including the majestic Gangkar Puensum, before descending into the lush green Paro Valley. 
      Upon arrival, your Bhutanese guide and driver from Authentic Bhutan Tours will warmly welcome you and accompany you throughout your journey across the country. From Paro, you will drive to Thimphu, where lunch will be served upon arrival. In the afternoon, visit the Memorial Chhorten, built in 1974 in memory of the Third King, Jigme Dorji Wangchuk. The temple’s intricate artwork offers deep insights into tantric Buddhism and its philosophy. Next, visit the impressive Big Buddha Statue (Buddha Dordenma), a 51.5-meter-tall statue of Shakyamuni, making it one of the largest Buddha statues in the world. In the evening, enjoy a leisurely stroll around Thimphu town before dinner and an overnight stay at your hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `After enjoying breakfast at your hotel, begin a full day of sightseeing in Thimphu City. Your first stop is the Post Office, where you can create personalized stamps and send them to your loved ones — a unique Bhutanese souvenir. Next, visit the Traditional Bhutanese Paper Factory to witness the age-old process of making Deh-sho, Bhutan’s authentic handmade paper. Continue to the Weaving Center, where you’ll observe young Bhutanese women skillfully crafting intricate textiles using traditional methods. Lunch will be served at a local restaurant in Thimphu.
In the afternoon, visit Drupthop Dewachen Nunnery, founded in 1976 by Rikey Jadrel, believed to be an emanation of the revered saint Thangtong Gyalpo. Continue to the Takin Preserve to see Bhutan’s rare and unusual national animal, the takin. Later, explore Tashichho Dzong — an architectural masterpiece that houses the throne room and the offices of His Majesty the King, as well as key government ministries. Conclude the day with a leisurely stroll through Thimphu town, where you can browse local shops and purchase Bhutanese handicrafts. Dinner and overnight stay will be at your hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Today, embark on a scenic drive over the spectacular Dochu-La Pass (3,100 meters), where, on a clear day, you’ll be treated to breathtaking panoramic views of the Himalayan peaks. The road then gently descends into the warm and lush Punakha Valley, a journey of approximately three hours. Once the ancient capital of Bhutan, Punakha is rich in history and natural beauty. After lunch, visit the magnificent Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by Shabdrung Ngawang Namgyal — the unifier of Bhutan — as prophesied by Guru Rinpoche (Padmasambhava).
Next, enjoy a short scenic drive followed by a pleasant walk through rice fields and across a river to reach Khamsum Yulley Namgyal Chorten. Perched atop a picturesque hillock known as Ngezergang, this stunning chorten houses intricate paintings and sacred statues of the Nyingmapa Buddhist tradition. Conclude your day with a visit to Metshina Village, where a gentle 20-minute walk through lush rice paddies leads you to Chimi Lhakhang — the renowned fertility temple dedicated to Lama Drukpa Kunley, known as the “Divine Madman.” Here, visitors may receive a special fertility blessing, a unique cultural experience deeply rooted in Bhutanese tradition.`,
    },
    {
      day: "Day 04: Punakha - Gelephu",
      details: `After breakfast, embark on a scenic drive to Gelephu, the southernmost district of Bhutan, located along the border with India. The journey takes approximately seven hours and offers a fascinating transition through Bhutan’s diverse landscapes — from lush subtropical forests to charming villages and small townships in Tsirang and Sarpang. En route, you will stop for lunch before continuing your drive. Upon arrival in Gelephu, take a leisurely walk around the town to experience its laid-back charm and local culture. Dinner and overnight stay will be at a hotel in Gelephu.`,
    },
    {
      day: "Day 05: Gelephu – Gongphu",
      details: `After breakfast at the hotel, embark on a scenic 150 km drive from Gelephu to Gongphu, ascending from 280m to 1,450m as you journey deeper into Bhutan’s subtropical wilderness. Along the way, you will pass through Surey village, known for its vibrant mandarin and cardamom cultivation. On clear days, you can enjoy breathtaking views of Jo Dungshing Peak, the highest summit in the Black Mountain range. Gongphu marks the northernmost tip of the Royal Manas National Park and receives the highest rainfall in the country, creating a thriving subtropical ecosystem. This rich biodiversity hotspot is home to langurs, tigers, leopards, clouded leopards, sambars, and a remarkable variety of bird species. Overnight stay will be at an eco-camp in Gongphu, surrounded by the pristine sounds and sights of Bhutan’s untouched nature.`,
    },
    {
      day: "Day 06: Gongphu - Panbang",
      details: `After breakfast, we will continue our journey with a scenic drive to Panbang, passing through lush forests of mixed broad-leaved trees and dense undergrowth teeming with birdlife. Along the way, keep an eye out for a variety of bird species such as barbets, hornbills, bulbuls, doves, woodpeckers, and cuckoos that inhabit this rich ecosystem. The eco-camp in Panbang is situated en route to a nearby village and offers stunning panoramic views of the surrounding landscape from its elevated location. Overnight stay will be at the eco-camp in Panbang, where you can relax and immerse yourself in the serene natural beauty of southern Bhutan.`,
    },
    {
      day: "Day 07: Panbang, Royal National Manas Park",
      details: `After breakfast, we will drive to Royal Manas National Park for an unforgettable wildlife experience. Begin by crossing the river by boat, followed by an exciting Elephant Safari that offers a unique perspective of the park’s rich biodiversity and stunning landscapes. This safari is the perfect opportunity to appreciate the natural beauty and abundant wildlife of one of Bhutan’s most important protected areas. In the evening, we will drive back to Panbang, where dinner will be served. Overnight stay will be at the Panbang Eco-Camp, surrounded by the tranquil sounds of nature.`,
    },
    {
      day: "Day 08: Royal Manas Park, Rafting",
      details: `In the morning, we will explore the nearby villages around the Eco-Camp, offering a glimpse into the daily lives, traditions, and culture of the local communities. After lunch, get ready for an exciting river rafting adventure, navigating through the pristine waters surrounded by lush forests and scenic landscapes — a perfect blend of thrill and natural beauty. Dinner and overnight stay will be at the Panbang Eco-Camp.`,
    },
    {
      day: "Day 09: Royal Manas National Park",
      details: `Stay one more day here and explore other activities here at Royal Manas National Park.
      You can go for nature walks, bird watching, or even another elephant safari to explore different parts of the park. Enjoy the tranquility of the surroundings and immerse yourself in the rich biodiversity of this unique ecosystem. Overnight stay will be at the Panbang Eco-Camp, where you can relax and unwind after a day of adventure.`,
    },
    {
      day: "Day 10: Panbang – Trongsa",
      details: `After breakfast, we will begin our journey to Trongsa. As the drive progresses, you will witness a dramatic transformation in the landscape — from lush subtropical forests to dense broad-leaved evergreen woods. This route is renowned for its rich biodiversity, featuring a wide range of trees, orchids, and unique botanical plants along the way. Upon arrival in Trongsa, check into your hotel and enjoy a relaxing evening surrounded by the region’s natural beauty.`,
    },
    {
      day: "Day 11: Trongsa – Gantey",
      details: `In the morning, you will visit Trongsa Dzong, a stunning example of Bhutanese architectural mastery. Afterward, begin your drive to Gangtey, stopping for lunch at Chendebji Chorten. Post-lunch, continue through dense forests of oak and rhododendron, taking a diversion from the highway and crossing Lawala Pass, which is blanketed with dwarf bamboo. Upon arriving in Gangtey, enjoy panoramic views of the Black Mountain range and the Phobjikha Valley, the winter habitat of the rare black-necked cranes. Visit Gangtey Goenpa, the only Nyingmapa monastery in western Bhutan, and spend time interacting with the monks studying there, who follow a rigorous nine-year course in Buddhist studies.`,
    },
    {
      day: "Day 12: Gantey - Punakha",
      details:
        "After breakfast, drive to the stunning Gangtey Valley (also called Phobjikha), one of Bhutan’s most beautiful destinations and the winter home of the endangered black-necked cranes that arrive annually from the Tibetan Plateau. Visit the 17th-century Gangtey Monastery, perched on a small hill above the valley and surrounded by a large village. Stop by the Black-Necked Crane Information Center, which features an observation room with high-powered telescopes for the best views of the cranes. After lunch, continue your drive to Punakha.",
    },
    {
      day: "Day 13: Punakha - Paro",
      details:
        "Set out for Paro with a stop in Thimphu for lunch and a visit to the Folk Heritage Museum. Continue the drive to Paro in the afternoon. In the evening, visit a traditional farmhouse where you can, if you wish, enjoy a hot-stone bath and a typical Bhutanese dinner. Overnight stay in Paro.",
    },
    {
      day: "Day 14: Hike Paro Taksang",
      details:
        "Drive up to Satsam Chorten, located 10 km from Paro town, and begin the hike to Taktsang Monastery, also known as the “Tiger’s Nest.” Perched on a rocky ledge nearly 3,000 feet above the Paro Valley, the monastery is one of the most revered pilgrimage sites in the Himalayan region. It is believed that in the late 8th century, Guru Padmasambhava, regarded as the second Buddha in Bhutan, meditated at this site after arriving on the back of a tigress. Enjoy a picnic lunch at the Taktsang cafeteria. The round-trip hike takes approximately 4 hours.",
    },
    {
      day: "Day 015: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Experience a guided wildlife safari in Royal Manas National Park, with opportunities to spot rare species like the Bengal tiger, golden langur, and white-bellied heron.",
    },
    {
      key: "Discover Bhutan’s commitment to ecotourism as you explore its vital biological corridor connecting protected sanctuaries.",
    },
    {
      key: "Engage with rural Bhutanese communities and learn how environmental conservation is deeply woven into their daily lives.",
    },
    {
      key: "Savor authentic Bhutanese farmhouse dinners, highlighting locally sourced ingredients and community-based tourism.",
    },
    {
      key: "Visit sacred Buddhist monasteries where spirituality and conservation harmoniously coexist.",
    },
    {
      key: "Rejuvenate with a traditional Bhutanese herbal hot-stone bath, an indigenous wellness practice deeply rooted in local tradition.",
    },
    {
      key: "Embark on a scenic hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), an unmissable experience for Himalayan trekking enthusiasts.",
    },
  ];

  const tourDetails = {
    duration: "14 Nights / 15 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
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
            Manas National Park Tour
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
        Embark on a once-in-a-lifetime wildlife safari in Bhutan at the Royal
        Manas National Park, the country’s most ecologically rich protected area
        and a UNESCO tentative site. Spanning over 1,057 sq. km, the park forms
        a vital part of Bhutan’s unbroken biological corridor, linking with
        other sanctuaries and India’s Manas Tiger Reserve. This safari blends
        adventure with ecotourism, offering encounters with endangered wildlife
        such as the white-bellied heron, Royal Bengal tiger, Asian elephant,
        greater one-horned rhinoceros, clouded leopard, and golden langur. Bird
        enthusiasts can spot over 365 confirmed species, while the park also
        shelters more than 900 native plant species. Choose this journey from
        our curated Adventure and Nature tour packages to witness Bhutan’s raw
        natural beauty and biodiversity up close.
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

export default ManasNationalPark;
