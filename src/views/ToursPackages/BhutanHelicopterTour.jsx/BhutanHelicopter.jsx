import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/heli.png";
import hidden from "../../../assets/home/heli1.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const BhutanHelicopter = () => {
  const tripHighlights = [
    {
      key: "Soar over Bhutan’s iconic landmarks: Tiger’s Nest Monastery, Paro Dzong, Punakha Dzong, and Gangtey Monastery.",
    },
    {
      key: "Witness stunning aerial views of the Himalayas, including Mount Jomolhari and Jichu Drake.",
    },
    {
      key: "Fly across the scenic valleys of Western Bhutan.",
    },
    {
      key: "Capture dramatic landscapes of glacial rivers, sacred temples, and crane-populated Himalayan wetlands.",
    },
    {
      key: "Enjoy a private, luxury helicopter experience with expert pilots and customized landing options.",
    },
    {
      key: "Ideal for honeymoons, aerial photography, or once-in-a-lifetime Bhutan sightseeing flights.",
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
            Bhutan Scenic Helicopter Tour
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
        Luxury Aerial Experience Over Sacred Himalayan Peaks and Nature{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Take flight on a luxury helicopter tour over Bhutan, where snow-draped
        Himalayan peaks, pristine wilderness, and sacred landmarks unfold
        beneath you. Soar over Thimphu, Paro, Punakha, Phobjikha, Laya, and
        Gasa, admiring iconic sites such as Paro Dzong, Tiger’s Nest Monastery,
        Punakha Dzong, and Gangtey Monastery in valleys frequented by
        black-necked cranes. Continue past sacred valleys toward Mount Jomolhari
        and Mount Jichu Drake, two revered Himalayan giants central to Bhutanese
              lore.<br />
              Whether you choose a short panoramic sightseeing flight or a
        customized heli-expedition with remote landings, this exclusive
        experience provides unparalleled access to Bhutan’s natural wonders.
        Operated by certified pilots aboard modern, high-altitude aircraft, it’s
        perfect for photography, special celebrations, or simply witnessing
        Bhutan’s majestic landscapes from a breathtaking perspective.
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

export default BhutanHelicopter;
