import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/adventure/rafting.png";
import hidden from "../../../assets/adventure/rafting1.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const BhutanRiverRafting = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro - Thimphu",
      details: `Upon arrival at Paro, you will be welcomed by our representative after completing customs formalities. The flight into Paro itself is a breathtaking introduction to Bhutan, offering ever-changing views of some of the world’s highest mountains. After lunch, enjoy afternoon sightseeing in Paro, including visits to the Ta Dzong Museum and Rimpung Dzong. Later, drive along the scenic Pachu River to the capital, Thimphu (approximately 1.5 hours), where you will check in and overnight at your hotel.`,
    },
    {
      day: "Day 02: Thimphu",
      details: `Spend a full day sightseeing in Thimphu, beginning with the National Memorial Chorten, followed by the 12th-century Changangkha Temple, and the National Library, which houses a remarkable collection of Bhutanese scriptures dating back to the 8th century. You will also visit Tashichhodzong, an impressive fortress that serves as the seat of some government ministries, His Majesty’s secretariat, and the central monk body.
If your visit falls on the weekend, take time to explore the vibrant Thimphu Market, where you can admire baskets of fiery chillies, fresh cheese, and an array of greens, along with Bhutanese handicrafts and household items. (The market is open Friday to mid-Sunday.) Overnight stay at your hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu - Punakha",
      details: `Drive over the scenic Dochu-La Pass at 3,100 meters, where, on a clear day, you can enjoy breathtaking views of the Himalayan peaks before descending into the lush Punakha Valley, a journey of approximately three hours.
Punakha, the ancient capital of Bhutan, is home to the magnificent Punakha Dzong, also known as the “Palace of Great Happiness.” Built in 1637 by the Shabdrung, the unifier of Bhutan, as foretold by the great Guru Rimpoche (Padmasambhava), the dzong remains one of the country’s most impressive and historically significant fortresses.`,
    },
    {
      day: "Day 04: Punakha",
      details: `In the morning, drive to Yabesa Village and embark on a scenic hike through lush rice fields up to the Khamsum Yulley Namgyal Chorten, a beautiful structure commissioned by Her Majesty Queen Ashi Tshering Yangdon Wangchuk.
Following the hike, enjoy an exhilarating whitewater rafting experience on the river. Pause for a picnic lunch along a picturesque riverside before continuing to explore Wangduephodrang Dzong. Built in 1639, this strategically located dzong sits atop a spur at the confluence of two rivers and historically played a crucial role in unifying Bhutan’s western, central, and southern regions during the 17th century.`,
    },
    {
      day: "Day 05: Punakha - Thimphu - Haa",
      details: `Drive back to Thimphu, stopping to explore local handicraft and souvenir stores. En route, visit Semtokha Dzong, Bhutan’s oldest dzong built in 1627, which now houses the Institute for Language and Cultural Studies.
Afterward, continue the journey to Haa via Chelela Pass, where you can enjoy panoramic views of the Paro and Haa Valleys, along with Mt. Jomolhari and the stunning Himalayan ranges. Descend through dense pine forests into the narrow valley of Haa, and check in for an overnight stay at your hotel in Haa.`,
    },
    {
      day: "Day 06: Haa - Paro",
      details: `The extraordinarily beautiful Haa Valley, recently opened to tourists, is a picturesque and fertile valley perfect for mountain biking and hiking. Visit the historic Lhakhang Karpo and Lhakhang Nagpo (the White and Black Temples), built in the 8th century by the Tibetan King Songtsen Gampo, who sent two doves—one black and one white—to select a sacred site for the monasteries.`,
    },
    {
      day: "Day 07: Paro",
      details: `After breakfast, embark on a hike to the iconic Taktsang Monastery. The trail is broad and takes approximately 1.5 to 2 hours uphill, climbing nearly a kilometre above the Paro valley floor. For those who prefer not to hike, horses are available to reach the cafeteria point. In the afternoon, drive to the nearly fully reconstructed Drukgyel Dzong. The original fortress, destroyed by fire in 1951, was built by Shabdrung in 1644 to commemorate his victory over invading Tibetan forces.`,
    },
    {
      day: "Day 08: Depart from Paro",
      details: `Breakfast in the hotel, then drive to the airport for flight to your onward destination.
In the afternoon drive to the fully reconstructed Drukgyel Dzong.  The original monument (destroyed by fire in 1951)  was built by Shabdrung to commemorate his victory against invading Tibetans in 1644.`,
    },
  ];

  const tripHighlights = [
    {
      key: "Visit the Buddha Dordenma statue, a 54-meter statue of the Lord Buddha, before your journey.",
    },
    {
      key: "Experience thrilling Punakha River rafting through lush forests and dramatic canyon walls.",
    },
    {
      key: "Drive over Dochula Pass for spectacular views of the Himalayan peaks.",
    },
    {
      key: "Hike to the famous Tiger’s Nest Monastery to balance your adrenaline with spiritual awe.",
    },
    {
      key: "Explore Khamsum Yulley Temple and Chimi Lhakhang (a fertility temple) for cultural insight and scenic trekking.",
    },
    {
      key: "Relax with traditional Bhutanese herbal hot stone baths, a rejuvenating activity rooted in indigenous wellness practices.",
    },
  ];

  const tourDetails = {
    duration: "7 Nights / 8 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: " Sep – Dec",
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
            Bhutan River Rafting Tour
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
        Paddle through the icy rapids of Bhutan’s rivers on an exhilarating
        whitewater rafting adventure! Navigate lush valleys and pristine
        wilderness on this unforgettable Bhutan Water Adventure Sports
        experience. Centered around the main rivers of Punakha, the Kingdom’s
        former administrative capital, this tour is ideal for families, friends,
        or solo travelers seeking thrilling aquatic fun amid the stunning
        backdrop of the Himalayan landscape.
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

export default BhutanRiverRafting;
