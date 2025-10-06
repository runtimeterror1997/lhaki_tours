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
import background from "../../../assets/luxury/luxury.png";
import amankora from "../../../assets/luxury/amankora2.png";
import sixsenses from "../../../assets/luxury/six.png";
import zhiwaling from "../../../assets/luxury/zhiwaling1.png";
import pemako from "../../../assets/luxury/pemako1.png";
import lee from "../../../assets/luxury/lee.png";
import poatcard from "../../../assets/luxury/post.png";
import gantey from "../../../assets/luxury/gantey.png";

import { useNavigate } from "react-router-dom";

const tours = [
  {
    image: amankora,
    label: "Amankora Bhutan",
    route: "/amankora",
  },
  {
    image: sixsenses,
    label: "Six Senses Bhutan",
    route: "/six-senses",
  },
  {
    image: zhiwaling,
    label: "Zhiwaling Heritage Bhutan",
    route: "/zhiwaling",
  },
  {
    image: pemako,
    label: "Pemako Bhutan",
    route: "/pemako",
  },
  {
    image: lee,
    label: "Le Meridien Thimphu",
    route: "/lee-meridien",
  },
  {
    image: poatcard,
    label: "The Postcard Dewa Thimphu",
    route: "/postcard-dewa",
  },
  {
    image: gantey,
    label: "Gantey Lodge Bhutan",
    route: "/gantey-lodge",
  },
];

const BhutanLuxuryTour = () => {
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
            Bhutan Luxury Tours
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
        Bhutan Festival Tours provide a chance to fully experience the kingdom’s
        iconic cultural celebrations, including the vibrant Tshechu festivals.
        Held yearly in temples and dzongs, these lively events bring communities
        together in their traditional attire, offering a genuine insight into
        Bhutanese customs and heritage. With our festival tour package, you’ll
        enjoy an immersive experience guided by knowledgeable locals. Witness
        captivating masked dances, take part in sacred rituals for blessings,
        and join in the joyous festivities. This Bhutan festival journey deepens
        cultural appreciation and makes your travel experience truly memorable.
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

export default BhutanLuxuryTour;
