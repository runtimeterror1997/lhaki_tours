import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/luxury/sixsenses.png";
import hidden from "../../../assets/luxury/sixes.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const SixSenses = () => {
  const tripHighlights = [
    {
      key: "Relax with personalized spa treatments, yoga, and traditional Bhutanese hot stone baths set against serene Himalayan backdrops.",
    },
    {
      key: "Experience true ultra-luxury lodges that fuse Bhutanese craftsmanship with modern elegance and eco-conscious design.",
    },
    {
      key: "Enjoy exclusive visits to sacred monasteries and remote villages, engaging with monks and artisans for authentic cultural immersion.",
    },
    {
      key: "Hike to the legendary Tiger’s Nest Monastery (Paro Taktsang), Bhutan’s most celebrated spiritual landmark.",
    },
    {
      key: "Soak in the Himalayan panoramas from the Dochula Pass, a scenic high point of your journey.",
    },
    {
      key: "Connect with Bhutan’s living culture through meaningful encounters and gain rare insight into the Kingdom’s unique way of life.",
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
            Six Senses Bhutan
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
        A Journey Through Wellness and Wonder
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Six Senses Bhutan offers an extraordinary journey through Bhutan’s most
        stunning valleys, with ultra-luxury lodges in Thimphu, Punakha, Gangtey,
        Bumthang, and Paro. Each lodge combines elegant traditional Bhutanese
        architecture with immersive natural surroundings, providing a serene
        retreat. Guests can rejuvenate with tailored spa treatments, yoga
        sessions, and wellness therapies rooted in Bhutanese traditions, while
        savoring garden-to-plate gourmet cuisine made from organic, locally
        sourced ingredients. With sweeping views of the Himalayas and access to
        iconic sites such as Tiger’s Nest Monastery, Six Senses Bhutan delivers
        a harmonious blend of authentic cultural experiences, indulgent comfort,
              and breathtaking natural beauty.
              
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

export default SixSenses;
