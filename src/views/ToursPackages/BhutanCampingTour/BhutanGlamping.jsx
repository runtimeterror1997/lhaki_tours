import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/camping/camp2.png";
import hidden from "../../../assets/camping/camp1.png";
import TourServices from "../../TourServices";
import TourInfo from "../../TourInfo";

const BhutanGlamping = () => {
  

  const tripHighlights = [
    {
      key: "Stay in luxurious heated tents with boutique-style comforts.",
    },
    {
      key: "Savor gourmet farm-to-table dining beneath starlit Himalayan skies.",
    },
    {
      key: "Rejuvenate with sunrise yoga, riverside walks, and peaceful village trails.",
    },
    {
      key: "Indulge in romantic candlelit dinners in elegantly furnished tents.",
    },
    {
      key: "Explore Bhutan’s most stunning valleys – from Haa’s alpine meadows to Punakha’s riverside terraces and Phobjikha’s glacial plains.",
    },
    {
      key: "Immerse yourself in pristine Bhutanese nature while enjoying world-class comfort.",
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
            Bhutan Glamping Adventure
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
        Luxury in the Valleys of the Himalayas – Bhutan Glamping Experience{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Wake up to crisp Himalayan air, the scent of pine forests, and
        breathtaking valley views in Bhutan’s most enchanting landscapes. This
        luxury camping experience combines the romance of nature with boutique
        comfort, featuring plush beds, heated tents, and gourmet farm-to-table
        dining under starlit skies. In Haa Valley, immerse yourself in alpine
        tranquility with sunrise yoga sessions and leisurely village walks.
        Punakha offers riverside luxury with views of lush rice terraces and
        historic fortresses, along with options for river rafting or quiet
        orchard strolls. In Phobjikha Valley, enjoy expansive glacial plains,
        sightings of rare black-necked cranes, and candlelit dinners in
        elegantly appointed tents. This is Bhutan glamping redefined –
        indulgent, immersive, and unforgettable.
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

export default BhutanGlamping;
