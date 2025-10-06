import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/luxury/gantey2.png";
import hidden from "../../../assets/luxury/gantey1.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const GanteyLodge = () => {
  const tripHighlights = [
    {
      key: "Stay at Gangtey Lodge, a sustainable luxury retreat in Bhutan’s sacred Phobjikha Valley, surrounded by unspoiled Himalayan landscapes.",
    },
    {
      key: "Join early morning blessings with monks at the Gangtey Shedra, Bhutan’s spiritual college.",
    },
    {
      key: "Hike the Gangtey Nature Trail or trek through blue pine forests to the revered Gangtey Goenpa Monastery.",
    },
    {
      key: "Rejuvenate with traditional Bhutanese hot-stone baths, infused with forest herbs and rooted in ancient healing practices.",
    },
    {
      key: "Witness the rare winter migration of black-necked cranes, a sacred symbol in Bhutanese culture and conservation.",
    },
    {
      key: "Trek to Bhutan’s legendary Tiger’s Nest Monastery, a must-visit Himalayan spiritual site.",
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
            Gantey Lodge Bhutan
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
        Sustainable Luxury and Spiritual Serenity in Phobjikha Valley
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Gangtey Lodge offers sustainable luxury and spiritual serenity in
        Bhutan’s sacred Phobjikha Valley, surrounded by pristine Himalayan
        landscapes and deep monastic traditions. The twelve farmhouse-style
        suites feature underfloor heating, roll-top bathtubs, and sweeping
        valley views. Guests can participate in early morning blessings with
        monks at the Gangtey Shedra, hike the scenic Gangtey Nature Trail, and
        visit the revered Gangtey Goenpa Monastery. After a day of exploration,
        unwind with traditional herbal Bhutanese hot-stone baths. Committed to
        sustainability, Gangtey Lodge supports local communities and
        conservation efforts while providing front-row views of the endangered
        black-necked cranes during their winter migration.
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

export default GanteyLodge;
