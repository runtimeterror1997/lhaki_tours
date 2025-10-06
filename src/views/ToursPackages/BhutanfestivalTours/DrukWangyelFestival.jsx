import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/druk.png";
import hidden from "../../../assets/festival/druk2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const DrukWangyelFestival = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `Upon arrival at Paro airport, our representative will welcome you after completing customs formalities. After lunch, enjoy an afternoon of sightseeing in Paro, including visits to the Ta Dzong Museum and Rimpung Dzong, where you can admire the painting of the great saint Milarepa, revered as a master of meditation and believed to have achieved enlightenment in his lifetime. Later, drive to the capital city, Thimphu, along the scenic Pachu River. Before dinner at your hotel, your guide will provide an orientation on Bhutanese etiquette. Overnight stay at your hotel in Thimphu.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `Spend a full day exploring Thimphu’s highlights, beginning with the magnificent Buddha Dordenma Statue, followed by the National Memorial Chorten. Continue to the 12th-century Changangkha Temple and The National Library, which preserves Bhutanese scriptures dating back to the 8th century. Conclude your sightseeing at Tashichhodzong, a majestic fortress that houses several government ministries, His Majesty’s secretariat, and the central monk body.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Depart Thimphu early after breakfast and drive up to Dochu-La Pass (3,100 meters) to witness the spectacular Druk Wangyal Festival, a highlight of Bhutanese cultural celebrations. Afterwards, continue to the Royal Botanical Park at Lamperi, which spans an altitude range of 2,100m to 3,800m and covers 47 square kilometers, serving as a biological corridor connecting Jigme Dorji and Jigme Singye Wangchuck National Parks. Proceed to Punakha, where you can spend the rest of the day at leisure, enjoying a stroll through the town in the evening. Overnight stay at a hotel in Punakha.`,
    },
    {
      day: "Day 04: Punakha",
      details: `Punakha, the ancient capital of Bhutan, is home to the impressive Punakha Dzong, also known as the “Palace of Great Happiness,” built in 1637 by the Shabdrung. After lunch, enjoy a leisurely walk to Chimi Lhakhang, the temple of the revered Drukpa Kuenly, popularly known as the Divine Madman.`,
    },
    {
      day: "Day 05: Punakha - Paro",
      details: `In the morning, drive to Yabesa village and hike through rice fields up to Khamsum Yueley Namgyal Chorten, built by Her Majesty Queen Ashi Tshering Yangdon Wangchuk. On the way to Paro, stop at Semtokha Dzong, built in 1627 and the oldest Dzong in Bhutan, now home to the Institute for Language and Culture Studies. Upon arrival in Paro, check into your hotel for an overnight stay.`,
    },
    {
      day: "Day 06: Paro",
      details: `After breakfast, embark on a hike to Taktsang Monastery. The broad trail takes approximately 2 hours uphill, reaching nearly a kilometer above the Paro valley floor; for those unable to hike, a horse can be arranged to the viewing point. In the afternoon, drive to the nearly fully reconstructed Drukgyel Dzong.`,
    },
    {
      day: "Day 07: Paro - Thimphu - Paro",
      details: `After an early breakfast, drive back to Thimphu to witness the National Day celebrations at Changlimithang Ground alongside the locals. Bhutan observes 17th December as National Day, commemorating the enthronement of Gongsar Ugyen Wangchuck as the first hereditary monarch in 1907. The day features a variety of cultural and sporting activities and concludes with a Tashi Lebay, a prayer for many more prosperous and joyous days for Bhutan and its people. After the celebrations, drive back to Paro and overnight at your hotel.`,
    },
    {
      day: "Day 08: Depart from Paro",
      details: "Drive to the Airport for the departure.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy majestic views of the Himalayan mountains from Dochula Pass.",
    },
    {
      key: "Witness the Druk Wangyal Festival's traditional ceremonies and masked dances.",
    },
    {
      key: "Visit famous Bhutanese landmarks, including Punakha Dzong and Chimi Lhakhang (a fertility temple).",
    },
    {
      key: "Discover ancient Buddhist monasteries and sacred sites across Bhutan.",
    },
    {
      key: "Explore genuine Bhutanese villages and experience authentic rural life in Bhutan.",
    },
    {
      key: "Embark on a hike to the famous Tiger’s Nest Monastery (Paro Taktsang), perched precariously on a cliffside.",
    },
  ];

  const tourDetails = {
    duration: "7 Nights / 8 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "December",
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
            Druk Wangyal Festival
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
        A Celebration of Bhutan’s Valor
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Bhutan honors its rich history and national resilience with the Druk
        Wangyal Tshechu, a distinguished festival established in 2011. This
        special event commemorates the victory of His Majesty the Fourth King
        and the Royal Bhutan Army over Indian insurgent forces. Held annually on
        13th December at Druk Wangyal Lhakhang, located on Dochula Pass about 22
        km from Thimphu, the festival showcases Bhutan’s vibrant Tshechu
        traditions. Visitors can witness colorful masked dances, traditional
        music, and festive activities that blend cultural celebration with
        historical remembrance, offering a profound insight into Bhutan’s
        national spirit and reverence for its past.
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

export default DrukWangyelFestival;
