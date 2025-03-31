import React from "react";
import {
  Box,

  Typography,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./home.css";

import cultural from "../assets/home/cultural.png";
import festival from "../assets/home/festival.png";
import trekking from "../assets/home/bridge.png";
import camping from "../assets/home/camping.png";
import luxury from "../assets/home/punakha1.png";
import adventure from "../assets/home/drugyel.png";
import background from "../assets/home/jakar.png";
import { useLocation } from "react-router-dom";

const tours = [
  {
    image: cultural,
    label: "Bhutan Cultural Tour",
    description:
      "A Bhutan Cultural Tour offers an immersive experience into the rich traditions, history, and spiritual life of the Himalayan nation. Travelers visit iconic sites such as the Tiger's Nest Monastery and Punakha Dzong, exploring picturesque villages and engaging with locals to gain a deeper understanding of Bhutanese culture. Many tours also coincide with vibrant festivals, providing unique insights into the country's religious practices and communal celebrations. ",
  },
  {
    image: festival,
    label: "Bhutan Festival Tour",
    description:
      "​Bhutan Festival Tours immerse travelers in the nation's vibrant cultural heritage through Tsechus—Buddhist festivals honoring Guru Rinpoche. During these events, monks and lay performers don elaborate costumes to perform masked dances and rituals depicting Buddhist tales. Notable festivals like Paro Tsechu and Thimphu Tsechu attract locals and visitors, offering a unique insight into Bhutan's traditions and communal celebrations. ",
  },
  {
    image: trekking,
    label: "Trekking Tour",
    description:
      "​Bhutan offers a variety of trekking experiences, from short hikes like the Druk Path Trek—a five to six-day journey connecting Paro and Thimphu along ancient trade routes—to challenging adventures such as the 23-day Snowman Trek. Trekkers can explore the recently restored 403 km Trans Bhutan Trail, which traverses the country from Haa to Trashigang, passing through 27 gewogs across nine dzongkhags. These treks provide immersive experiences into Bhutan's natural beauty and cultural heritage",
  },
  {
    image: camping,
    label: "Camping Tours",
    description:
      "​Bhutan Camping Tours provide immersive experiences in the kingdom's unspoiled landscapes, combining trekking adventures with overnight stays in remote locations. For instance, the Bumdra Trek includes a night of camping in the wilderness, offering a blend of natural beauty and cultural exploration. These tours often feature fully supported camping with experienced crews, ensuring comfort while maintaining a minimal environmental footprint. Participants can enjoy breathtaking views, visit ancient monasteries, and gain insights into Bhutan's rich heritage",
  },
  {
    image: luxury,
    label: "Bhutan Luxury Tour",
    description:
      "Bhutan Luxury Tours offer discerning travelers an exclusive journey through the kingdom's serene monasteries, stunning landscapes, and rich traditions. Tailored experiences may include private guided visits to sacred sites, stays in premium accommodations, and personalized cultural activities. These tours provide an intimate exploration of Bhutan's unique heritage, ensuring comfort and authenticity throughout the adventure.​",
  },
  {
    image: adventure,
    label: "Adventure and Nature Tour",
    description:
      "Bhutan Adventure and Nature Tours offer immersive experiences in the kingdom's pristine landscapes and rich cultural heritage. Activities include trekking to iconic sites like Tiger's Nest Monastery, exploring ancient fortresses, and hiking the historic Trans Bhutan Trail. These journeys provide opportunities to engage with local communities, witness diverse ecosystems, and appreciate Bhutan's commitment to environmental preservation",
  },
];

const TourPackages = () => {
  const location = useLocation();
  const route = location?.state;

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {route === "/tours" && (
        <div>
          <Box
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
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Grid
          container
          spacing={2}
          sx={{ paddingX: { xs: 3, md: 6 }, paddingY: 2 }}
        >
          {tours.map((tour, index) => (
            <Grid item size={{ sm: 12, md: 6, lg: 4 }} key={index}>
              <Card className="fade-card" >
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
                    </Box>
                    <Box className="fade-card-back">
                      <Typography
                        textAlign={"center"}
                        variant="body2"
                        sx={{ fontSize: 18, fontWeight: 900 }}
                      >
                        {tour.description}
                      </Typography>
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
