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
import background from "../../../assets/adventure/adventure.png";
import manas from "../../../assets/adventure/manas2.png";
import rafting from "../../../assets/adventure/rafting2.png";
import bird from "../../../assets/adventure/bird1.png";

import { useNavigate } from "react-router-dom";

const tours = [
  {
    image: manas,
    label: "Royal Manas National Park Tour",
    route: "/manas-tour",
  },
  {
    image: bird,
    label: "Bhutan Bird Watching Tour",
    route: "/bird-watching-tour",
  },
  {
    image: rafting,
    label: "Bhutan River Rafting Tour",
    route: "/river-rafting-tour",
  },
];

const BhutanAdventureTour = () => {
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
            Bhutan Adventure & Nature Tour
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
        Embark on thrilling outdoor adventures in Bhutan with our Adventure and
        Nature tours, designed for nature enthusiasts and adrenaline seekers
        alike. Explore Bhutan’s diverse terrain, from rugged highlands to misty
        valleys, under the guidance of expert local guides. Hike scenic trails,
        take on challenging Himalayan treks, or enjoy heart-pumping mountain
        activities like biking and climbing. For water lovers, experience
        exhilarating sports such as whitewater rafting and kayaking. Along the
        way, connect deeply with Bhutan’s pristine landscapes, passing golden
        rice terraces, lush farmlands, and sacred mountains. Whether traveling
        solo or in a group, these tours offer the ultimate adventure in Bhutan’s
        unspoiled wilderness.
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

export default BhutanAdventureTour;
