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
import "./home.css";
import cultural from "../assets/home/cultural.png";
import festival from "../assets/home/festival.png";
import trekking from "../assets/home/trek.png";
import camping from "../assets/home/camping.png";
import luxury from "../assets/home/punakha1.png";
import adventure from "../assets/home/adventure.png";
import helicopter from "../assets/home/helicopter.png";
import background from "../assets/home/jakar.png";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

const tours = [
  {
    image: cultural,
    label: "Bhutan Cultural Tour",
    route: "/cultural-tours",
  },
  {
    image: festival,
    label: "Bhutan Festival Tour",
    route: "/festival-tours",
  },
  {
    image: trekking,
    label: "Bhutan Trekking Tour",
    route: "/trekking-tours",
  },
  {
    image: camping,
    label: "Bhutan Camping Tours",
    route: "/camping-tours",
  },
  {
    image: luxury,
    label: "Bhutan Luxury Tour",
    route: "/bhutan-luxury-tours",
  },
  {
    image: adventure,
    label: "Bhutan Adventure and Nature Tour",
    route: "/adventure-nature-tours",
    // description:
    //   "Bhutan Adventure and Nature Tours offer immersive experiences in the kingdom's pristine landscapes and rich cultural heritage. Activities include trekking to iconic sites like Tiger's Nest Monastery, exploring ancient fortresses, and hiking the historic Trans Bhutan Trail. These journeys provide opportunities to engage with local communities, witness diverse ecosystems, and appreciate Bhutan's commitment to environmental preservation",
  },
  {
    image: helicopter,
    label: "Bhutan Scenic Helicopter Tour",
    route: "/scenic-helicopter-tours",
    // description:
    //   "Bhutan Adventure and Nature Tours offer immersive experiences in the kingdom's pristine landscapes and rich cultural heritage. Activities include trekking to iconic sites like Tiger's Nest Monastery, exploring ancient fortresses, and hiking the historic Trans Bhutan Trail. These journeys provide opportunities to engage with local communities, witness diverse ecosystems, and appreciate Bhutan's commitment to environmental preservation",
  },
];

const TourPackages = () => {
  const location = useLocation();
  const route = location?.state;
  const navigate = useNavigate();

  return (
    <Box loading="lazy" sx={{ width: "100%", overflow: "hidden" }}>
      {route === "/tours" && (
        <div>
          <Box
            loading="lazy"
            sx={{
              width: "100%",
              height: "50vh",
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
                py: 3,
                mt: { xs: "40%", sm: "20%", md: "20%", lg: "10%" },
                fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
              }}
            >
              Tour Packages
            </Typography>
          </Box>
        </div>
      )}
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
                        sx={{ fontSize: 22, fontWeight: 900 }}
                      >
                        {tour.label}
                      </Typography>
                      <Button
                        onClick={() => navigate(tour?.route)}
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

export default TourPackages;
