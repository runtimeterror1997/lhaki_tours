import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/luxury/lee1.png";
import hidden from "../../../assets/luxury/lee2.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const LeeMeridien = () => {
  const tripHighlights = [
    {
      key: "Experience refined Bhutanese luxury with premium amenities and elegant design.",
    },
    {
      key: "Visit sacred Buddhist monasteries in Bhutan through immersive and privately guided experiences.",
    },
    {
      key: "Take in magnificent panoramic Himalayan mountain views from the scenic Dochula Pass.",
    },
    {
      key: "Hike to the legendary Tiger’s Nest Monastery (Paro Taktsang), Bhutan’s most famous cultural landmark.",
    },
    {
      key: "Discover traditional Bhutanese life and engage with authentic local customs and traditions.",
    },
    {
      key: "Rejuvenate with traditional Bhutanese hot-stone baths, a soothing wellness ritual amid tranquil Himalayan glades.",
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
            Le Meridien Bhutan
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
        Contemporary Luxury and Cultural Discovery in Bhutan’s Capital{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Le Méridien Bhutan offers a contemporary luxury experience in the
        Kingdom’s cultural and administrative centers. In Thimphu, the flagship
        Marriott property features elegantly designed rooms and suites that
        combine modern comfort with authentic Bhutanese motifs, while art-filled
        public spaces showcase the nation’s creative heritage. In Paro, Le
        Méridien Riverfront sits beside the Paro River, offering sweeping river
        and mountain views, an indoor heated pool, and a full-service spa.
        Dining at Latest Recipe and Latitude 27 blends international flavors
        with locally sourced ingredients, creating a refined culinary
        experience. Together, these properties provide a sophisticated and
        culturally immersive base for travelers seeking modern luxury in Bhutan.
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

export default LeeMeridien;
