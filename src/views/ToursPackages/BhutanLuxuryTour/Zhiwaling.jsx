import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/luxury/zhiwaling.png";
import hidden from "../../../assets/luxury/zhiwa.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const Zhiwaling = () => {
  const tripHighlights = [
    {
      key: "Stay in a Bhutanese-owned luxury heritage hotel that reflects the country’s authentic values and design.",
    },
    {
      key: "Admire intricate traditional murals and hand-carved woodwork throughout this cultural retreat.",
    },
    {
      key: "Rejuvenate with hot-stone baths, forest-view yoga, and holistic spa therapies rooted in Bhutanese healing.",
    },
    {
      key: "Participate in authentic cultural experiences like butter tea ceremonies, traditional archery, and khuru (Bhutanese darts).",
    },
    {
      key: "Walk through serene gardens with native Himalayan trees and take in sweeping valley views.",
    },
    {
      key: "Enjoy privately guided visits to sacred temples and hike to Tiger’s Nest, just minutes away.",
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
            Zhiwaling Heritage Bhutan
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
        Authentic Bhutanese Luxury in Paro Valley{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Zhiwaling Heritage Bhutan in Paro offers an authentic Bhutanese luxury
        experience, blending five-star comfort with traditional cultural design.
        Built in the style of a dzong, the hotel showcases intricate wood
        carvings, hand-painted murals, and local craftsmanship throughout.
        Guests can enjoy wellness offerings such as Bhutanese hot-stone baths,
        yoga in the forest-view meditation house, and a spa honoring the Goddess
        Tara. Cultural experiences include Bhutanese archery and darts, butter
        tea ceremonies at the Tea House, and relaxing strolls through gardens
        with native trees. With convenient access to nearby temples and the
        Tiger’s Nest trailhead, Zhiwaling provides a serene retreat that
        harmoniously combines nature, culture, and mindful luxury.
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

export default Zhiwaling;
