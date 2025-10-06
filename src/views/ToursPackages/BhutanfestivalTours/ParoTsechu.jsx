import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/parotsechu2.png";
import hidden from "../../../assets/festival/paro.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const ParoTsechu = () => {

  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `Take in the breathtaking mountain flight to Paro, offering ever-changing views of some of the world’s tallest peaks. After lunch, explore Paro with a visit to the Ta Dzong Museum, followed by a trip to the 7th-century Kyichu Lhakhang, one of the 108 temples built by Tibetan King Songtsen Gampo. Before dinner at the hotel, your guide will provide an orientation on Bhutanese etiquette. Overnight stay at your hotel in Paro.`,
    },
    {
      day: "Day 02: Paro",
      details: `After breakfast, embark on a hike to Taktsang Monastery, a 1.5 to 2-hour uphill trek that ascends nearly a kilometer above the Paro valley floor. For those unable to hike, horses can be arranged up to the cafeteria. In the afternoon, attend the Paro festival, where locals in their finest attire gather from miles around to witness masked dances, offer prayers, and enjoy festive feasts.`,
    },
    {
      day: "Day 03: Paro - Thimphu",
      details: `Rise very early at 2:30 am and drive to Paro Dzong to witness the Thongdroel ceremony, where a large cloth painting of Guru Rinpoche is ceremoniously unfurled on the Dzong’s facade. En route, make a stop at Tamchhog Lhakhang, the hereditary temple dedicated to Bhutan’s famed iron bridge builder.`,
    },
    {
      day: "Day 04: Thimphu",
      details: `Spend a full day exploring Thimphu, visiting the National Memorial Chorten, Changangkha Temple, Zilukha Nunnery, and the National Library, which preserves a remarkable collection of Bhutanese scriptures dating back to the 8th century.`,
    },
    {
      day: "Day 05: Thimphu - Trongsa",
      details: `Drive from Thimphu to Trongsa, a journey of 7–8 hours crossing the Dochu-La pass (3,100m) and Pele La pass (3,420m) along the Black Mountain range. En route, stop to admire the beautiful Chendebji Chorten. Trongsa, the destination, is the ancestral home of Bhutan’s royal dynasty.`,
    },
    {
      day: "Day 06: Trongsa - Bumthang",
      details: `In the morning, visit Trongsa Dzong, a stunning example of Bhutanese architecture, and the Ta Dzong museum, which showcases an impressive collection of the Royal Family’s historical artifacts and traditional armor. Afterward, continue the journey toward Bumthang, the spiritual heartland of Bhutan. The road climbs steeply to Yo Yutung La Pass (3,400m) before descending through dense coniferous forests into Chumey Valley.`,
    },
    {
      day: "Day 07: Bumthang",
      details: `Spend the day exploring the highlights of Bumthang. Visit the 16th-century Tang Ugyen Chholing Palace, which houses a museum offering a fascinating insight into traditional rural life in Bhutan. Continue to Mebartso, the “Lake of Fire,” where Pemalingpa, the founder of the Nyingmapa sect, is believed to have discovered a treasure hidden by Guru Rinpoche. Overnight at your lodge in Jakar, Bumthang.`,
    },
    {
      day: "Day 08: Bumthang - Punakha",
      details: `Depart for Punakha, the ancient capital of Bhutan, with a stop in Trongsa for lunch along the way. Upon arrival, take a leisurely stroll through Punakha town before retiring for the night at your hotel in Punakha.`,
    },
    {
      day: "Day 09: Punakha",
      details: `Visit Punakha Dzong, known as the “Palace of Great Happiness,” constructed in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by the revered Guru Rimpoche (Padmasambhava). Afterwards, take a short drive to reach Chimi Lhakhang, the temple of Lama Drukpa Kuenly, famously known as the Divine Madman.`,
    },
    {
      day: "Day 10: Punakha - Paro",
      details: `In the morning, drive to Yabesa village and hike through the rice fields up to Khamsum Yueley Namgyal Chorten, constructed by Her Majesty Queen Ashi Tshering Yangdon Wangchuk. Afterwards, continue your journey to Paro.`,
    },
    {
      day: "Day 11: Depart from Paro",
      details:"After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Experience the lively Paro Tshechu festival featuring sacred masked dances.",
    },
    {
      key: "Witness and photograph the striking traditional mask dances.",
    },
    {
      key: "Tour historic Buddhist monasteries and centuries-old dzongs (fortresses).",
    },
    {
      key: "Discover authentic Bhutanese villages and immerse in rural life.",
    },
    {
      key: "Refresh with a traditional Bhutanese herbal hot stone bath.",
    },
    {
      key: "Hike to the iconic Tiger’s Nest Monastery (Paro Taktsang) perched dramatically on a cliffside.",
    },
  ];

  const tourDetails = {
    duration: "10 Nights / 11 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "March-April",
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
            Paro Tsechu Festival
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
        A Bhutanese Spring of Culture and Blessings{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Experience the vibrant Bhutanese spring during the Paro Tshechu
        Festival, an important annual celebration. Enjoy traditional masked
        dances performed by monks and laypeople in colorful, elaborate costumes.
        The festival offers a profound glimpse into Bhutan’s living culture and
        spiritual heritage. A key highlight is the unveiling of the Thangka, a
        giant religious scroll, on the final day—viewing it is believed to
        bestow blessings on all who see it. Celebrate this unique festival
        amidst the pleasant spring weather, creating an unforgettable Bhutan
        travel experience.
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

export default ParoTsechu;
