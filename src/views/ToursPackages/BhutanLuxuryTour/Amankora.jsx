import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/luxury/amankora.png";
import hidden from "../../../assets/luxury/amankora1.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const Amankora = () => {
  const tripHighlights = [
    {
      key: "Stay at ultra-luxury Amankora lodges where elegant design meets timeless Bhutanese heritage.",
    },
    {
      key: "Unwind with bespoke Bhutanese hot stone baths, yoga sessions, and spa therapies, all rooted in traditional wellness customs.",
    },
    {
      key: "Explore dzongs, monasteries, and pilgrim trails on privately guided visits led by local experts.",
    },
    {
      key: "Trek to the legendary Tiger’s Nest Monastery, Bhutan’s most famous site.",
    },
    {
      key: "Visit the tranquil Dochula Pass and take in sweeping views of the Himalayan ranges.",
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
            Amankora Bhutan{" "}
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
        A Journey of Quiet Luxury Across Five Valleys{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Amankora Bhutan offers a journey of quiet luxury across five stunning
        valleys—Paro, Thimphu, Punakha, Gangtey, and Bumthang—through a
        collection of elegantly understated lodges. Guests can immerse
        themselves in serene design and deep cultural connections while
        exploring forested trails and enjoying guided access to sacred
        monasteries. Each stay includes bespoke wellness therapies, traditional
        Bhutanese hot-stone baths, and locally inspired cuisine. Highlights of
        the experience include hiking to the iconic Tiger’s Nest Monastery and
        taking in sweeping views of the Himalayas at Dochula Pass. Every moment
        is crafted with Aman’s signature attention to detail, allowing travelers
        to slow down, reflect, and savor the tranquil beauty of Bhutan in
        unparalleled comfort.
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

export default Amankora;
