import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../../home.css";
import background from "../../../assets/camping/camping.png";
import rural from "../../../assets/camping/rural1.png";
import mountain from "../../../assets/camping/mountain2.png";
import adventure from "../../../assets/camping/camp.png";

import { useNavigate } from "react-router-dom";

const tours = [
  {
    image: rural,
    label: "Bhutan Rural Camping",
    route: "/rural-camping",
  },
  {
    image: mountain,
    label: "Bhutan Camping and Mountain Hiking",
    route: "/mountain-camping",
  },
  {
    image: adventure,
    label: "Bhutan Glamping Adventures",
    route: "/bhutan-glamping",
  },
];

const BhutanCampingTour = () => {
  const navigate = useNavigate();

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
            Bhutan Camping Tours
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
        Overview
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Our Bhutan Camping Tours offer a unique way to experience the country’s
        wilderness, combining rugged outdoor adventure with comfortable
        amenities. Led by expert guides, these tours let you pitch your tent
        beneath the stars in pristine alpine valleys and along forest streams,
        immersing you in Bhutan’s serene landscapes. Each campsite is carefully
        chosen to balance eco-friendly camping with comfort, whether beside a
        babbling stream or atop a scenic hilltop. From green lowland meadows to
        high mountain ridges, you’ll wake up surrounded by the majestic
        Himalayas. With our Bhutan Camping Tours, every night becomes a
        memorable chapter, bringing you closer to nature and the stars while
        discovering Bhutan like never before.
      </Typography>
      <Box loading="lazy" sx={{ width: "100%", overflow: "hidden" }}>
        <Grid
          container
          spacing={2}
          sx={{ paddingX: { xs: 3, md: 6 }, paddingY: 2 }}
        >
          {tours.map((tour, index) => (
            <Grid item size={{ sm: 12, md: 6, lg: 4 }} key={index}>
              <Card className="fade-card">
                <CardActionArea>
                  <Box className="fade-card-inner">
                    <CardMedia
                      component="img"
                      width={"100%"}
                      height="400"
                      image={tour.image}
                      alt={tour.label}
                      //className="fade-card-front"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        width: "100%",
                        bgcolor: "transparent",
                        color: "#ffffff",
                        textAlign: "center",
                        py: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontSize: 24, fontWeight: 900 }}
                      >
                        {tour.label}
                      </Typography>
                      <Button
                        onClick={() => navigate(`${tour?.route}`)}
                        variant="contained"
                        sx={{
                          mt: 1,
                          backgroundColor: "#FA8732",
                          borderRadius: "8px",
                          padding: "2",
                        }}
                      >
                        <Typography
                          color={"white"}
                          fontSize={12}
                          fontWeight={700}
                        >
                          View Detail
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BhutanCampingTour;
