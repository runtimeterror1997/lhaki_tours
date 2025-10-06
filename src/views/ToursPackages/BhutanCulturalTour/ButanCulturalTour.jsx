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
import nature from "../../../assets/home/nature.png";
import east from "../../../assets/home/east1.png";
import traditional from "../../../assets/home/traditional.png";
import background from "../../../assets/home/cultural_tour.png";
import punakha from "../../../assets/home/punakha.png";
import hidden from "../../../assets/home/scenic.png";
import thimphu from "../../../assets/home/thimphu.png";

import {useNavigate } from "react-router-dom";

const tours = [
  {
    image: punakha,
    label: "Bhutan History and Heritage Tour",
    route: "/history-heritage-tours",
  },
  {
    image: hidden,
    label: "Bhutan Hidden Tour",
    route: "/bhutan-hiden-tours",
  },
  {
    image: thimphu,
    label: "Heart of Bhutan Cultural Tour",
    route: "/bhutan-heart-cultural-tours",
  },
  {
    image: east,
    label: "East to West Bhutan Heritage Tours",
    route: "/east-west-heritage-tours",
  },
  {
    image: traditional,
    label: "Bhutan Traditions Imersion Tour",
    route: "/bhutan-traditions-imemrsion-tours",
  },
  {
    image: nature,
    label: "Bhutan Nature & Culture Tour",
    route: "/bhutan-nature-tours",
  },
];

const BhutanCulturaltour = () => {
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
            Bhutan Cultural Tours
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
        A Bhutan Cultural Tour offers an immersive experience into the rich
        traditions, history, and spiritual life of the Himalayan nation.
        Travelers visit iconic sites such as the Tiger's Nest Monastery and
        Punakha Dzong, exploring picturesque villages and engaging with locals
        to gain a deeper understanding of Bhutanese culture. Many tours also
        coincide with vibrant festivals, providing unique insights into the
        country's religious practices and communal celebrations.
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

export default BhutanCulturaltour;
