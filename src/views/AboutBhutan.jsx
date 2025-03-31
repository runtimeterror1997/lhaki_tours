import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import punakha from "../assets/home/dochula.png";
import bhuddha from "../assets/home/prayers.png";
import scenic1 from "../assets/home/phalus.png";
import maskdance from "../assets/home/chorten.png";
import cham from "../assets/home/dcham.png";
import thimphu from "../assets/home/thimphu.png";
import jakar from "../assets/home/jakar.png";

const images = [punakha, bhuddha, scenic1, maskdance, cham, thimphu, jakar];

const AboutBhutan = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Image Slider */}
      <div>
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box key={index} sx={{ position: "relative", width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "60vh",
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "15% 68%",
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
                    mt: { xs: "40%", sm: "20%", md: "20%", lg: "12%" },
                    fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
                  }}
                >
                  Bhutan: The Kingdom of Happiness!
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </div>

      <Box
        sx={{
          padding: 5,
        }}
      >
        <Typography
          variant="h6"
          color="black"
          textAlign="center"
          paddingX={5}
          paragraph
        >
          Bhutan, known as the Land of the Thunder Dragon, is a small yet
          captivating Buddhist kingdom nestled in the eastern Himalayas between
          China and India. Home to approximately 0.8 million people, this
          mystical nation is celebrated for its rich cultural heritage,
          fascinating architecture, and an unspoiled natural landscape that has
          earned it the reputation of being the last Shangri-La.
        </Typography>

        <Typography
          variant="h6"
          color="black"
          textAlign="center"
          paddingX={5}
          paragraph
        >
          The country's unique approach to tourism, known as “High Value, Low
          Impact Tourism,” ensures that visitors experience its pristine
          ecology, lush valleys, and traditional way of life without
          overwhelming the local environment. Bhutan's commitment to sustainable
          practices and preservation of its cultural identity makes it a rare
          gem for travelers seeking an authentic experience
        </Typography>

        <Typography
          variant="h6"
          color="black"
          textAlign="center"
          paddingX={5}
          paragraph
        >
          Since the 1970s, Bhutan has followed a pioneering development
          philosophy centered on Gross National Happiness—a principle that
          prioritizes the wellbeing and happiness of its people over mere
          economic growth. This approach has positioned Bhutan as one of the
          safest, happiest, and even carbon-negative countries in the world.
          Recent accolades, such as winning the 2018 Sustainable Destinations
          Top 100 Earth Award, underscore its global standing as a premier
          destination for sustainable travel.
        </Typography>
        <Typography
          variant="h6"
          color="black"
          textAlign="center"
          paddingX={5}
          paragraph
        >
          Visiting Bhutan offers an unparalleled opportunity to immerse yourself
          in a harmonious blend of ancient traditions, spiritual practices, and
          breathtaking natural beauty—a journey that not only delights the
          senses but also nourishes the soul.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutBhutan;
