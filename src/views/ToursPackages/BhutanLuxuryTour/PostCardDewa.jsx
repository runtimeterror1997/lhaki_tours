import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/luxury/post1.png";
import hidden from "../../../assets/luxury/post2.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const PostcardDewa = () => {
  const tripHighlights = [
    {
      key: "Stay at an exclusive boutique luxury resort in Thimphu with only 15 elegant rooms and suites.",
    },
    {
      key: "Wake to scenic views over the Khasadrapchu Valley and Wang Chhu River.",
    },
    {
      key: "Rejuvenate with yoga, meditation, spa rituals, and herbal Bhutanese hot-stone baths.",
    },
    {
      key: "Indulge in holistic wellness therapies and relaxation by the heated indoor pool.",
    },
    {
      key: "Savor gourmet farm-to-table Bhutanese cuisine crafted from seasonal local produce.",
    },
    {
      key: "Embark on privately guided tours to nearby monasteries, scenic hiking trails, and rich cultural landmarks such as the iconic Tiger’s Nest Monastery.",
    },
    {
      key: "Take in sweeping Himalayan views from Dochula Pass, one of Bhutan’s most scenic highlights.",
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
            Postcard Dewa Bhutan
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
        A Wellness Boutique Hideaway in Bhutan
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        The Postcard Dewa is a luxury wellness boutique retreat nestled among
        pine-clad forests on the outskirts of Thimphu. This intimate property
        offers 15 elegant rooms and suites inspired by Dzong architecture, each
        with sunlit interiors, traditional Bhutanese motifs, and private
        sit-outs overlooking the Khasadrapchu Valley and Wang Chhu River. Guests
        can unwind in a heated indoor pool, enjoy yoga and meditation sessions,
        and experience holistic spa therapies, including authentic Bhutanese
        hot-stone baths. Dining focuses on gourmet Bhutanese cuisine prepared
        with seasonal local ingredients. Combining mindful wellness with serene
        alpine surroundings, The Postcard Dewa provides a tranquil yet luxurious
        escape just minutes from Thimphu.
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

export default PostcardDewa;
