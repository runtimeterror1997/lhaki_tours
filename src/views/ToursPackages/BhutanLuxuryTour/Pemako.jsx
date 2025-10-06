import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/luxury/pemako.png";
import hidden from "../../../assets/luxury/pemako2.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const Pemako = () => {
  const tripHighlights = [
    {
      key: "Stay in Bhutanese luxury retreats in Thimphu or Punakha, blending Bhutanese heritage with modern elegance.",
    },
    {
      key: "Unwind in tented riverfront villas with private heated pools and serene Punakha Valley views along the Mo Chhu River.",
    },
    {
      key: "Discover ancient healing through Sowa-Rigpa therapies, herbal massages, and Bhutanese hot-stone baths at the Lotus Realm Spa.",
    },
    {
      key: "Enjoy farm-to-table dining with seasonal produce from on-site gardens and orchards.",
    },
    {
      key: "Enrich your journey with meditation with monks, river rafting in Bhutan, traditional archery, and privately guided temple tours, including Tiger’s Nest Monastery.",
    },
    {
      key: "Soak in breathtaking views of the Himalayas from Dochula Pass during your scenic transfers.",
    },
  ];

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
            Pemako Bhutan
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
        Dual-Location Wellness Retreats with Modern Luxury and Heritage
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Pemako Bhutan is a dual-location luxury retreat that seamlessly blends
        traditional heritage with immersive comfort. In Thimphu, stylish rooms
        overlooking the valley provide a serene base close to key cultural
        attractions, while in Punakha, 21 riverfront luxury tented villas
        feature private heated pools, spacious decks, and sweeping views of the
        Mo Chhu River. Guests can indulge at the Lotus Realm Spa with indigenous
        Sowa-Rigpa healing treatments, including herbal massages and traditional
        hot-stone baths. Farm-to-table dining at Alchemy House and riverside
        Soma showcases seasonal produce from local orchards and gardens. The
        retreat also offers monk-led meditation sessions, guided temple visits,
        river rafting, and archery, delivering a secluded and tailor-made
        Bhutanese wellness experience.
      </Typography>
      {/* ===== Trip Highlights & Tour Info Section ===== */}
      <TourInfo
        tripHighlights={tripHighlights}
        //tourDetails={tourDetails}
        image={hidden}
      />
      {/* <Itinerary itinerary={itinerary} /> */}
      <TourServices />
    </Box>
  );
};

export default Pemako;
