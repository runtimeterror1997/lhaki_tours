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
import nature from "../../../assets/festival/wangdi1.png";
import east from "../../../assets/festival/black.png";
import traditional from "../../../assets/festival/drukwangyel.png";
import background from "../../../assets/home/dcham.png";
import punakha from "../../../assets/festival/punakha2.png";
import paro from "../../../assets/festival/parotsechu.png";
import thimphu from "../../../assets/festival/thimphutsechu.png";
import gomphu from "../../../assets/festival/gomphu1.png";
import nimalung from "../../../assets/festival/nimalung.png";


import {useNavigate } from "react-router-dom";

const tours = [
  {
    image: punakha,
    label: "Punakha Tsechu Festival",
    route: "/punakha-tsechu",
  },
  {
    image: paro,
    label: "Paro Tsechu Festival",
    route: "/paro-tsechu",
  },
  {
    image: thimphu,
    label: "Thimphu Tsechu Festival",
    route: "/thimphu-tsechu",
  },
  {
    image: east,
    label: "Black Necked Crane Festival",
    route: "/black-necked-crane-tsechu",
  },
  {
    image: traditional,
    label: "Druk Wangyel Festival",
    route: "/druk-wangyel-tsechu",
  },
  {
    image: nature,
    label: "Wangduephodrang Tsechu Festival",
    route: "/wangdue-tsechu",
  },
  {
    image: gomphu,
    label: "Gomphu Kora Festival",
    route: "/gomphukora-tsechu",
  },
  {
    image: nimalung,
    label: "Nimalung Festival",
    route: "/nimalung-tsechu",
  },
];

const BhutanFestivalTours = () => {
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
            Bhutan Festival Tours
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

export default BhutanFestivalTours;
