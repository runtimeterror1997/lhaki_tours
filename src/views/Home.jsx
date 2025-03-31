import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import punakha from "../assets/home/punakha1.png";
import bhuddha from "../assets/home/bhuddha.png";
import scenic from "../assets/home/scenic.png";
import scenic1 from "../assets/home/scenic1.png";
import maskdance from "../assets/home/mask.png";
import footer from "../assets/home/wangdi.png";
import taktsang from "../assets/home/tigernest.png";

import TourPackages from "./TourPackages";
import { useNavigate } from "react-router-dom";

const images = [punakha, bhuddha, scenic, scenic1, maskdance, taktsang];
const overlayTexts = [
  {
    title: "Explore the Majestic Punakha Valley",
    subtitle: "A Journey to Bhutan's Cultural Heart",
    description:
      "Discover the beauty of Punakha's ancient monasteries and breathtaking landscapes.",
    top: "0%",
  },
  {
    title: "Embrace the Peace at Buddha Dordenma",
    subtitle: "A Tranquil Experience at the World's Largest Buddha Statue",
    description:
      "Feel the serenity while gazing at the grand Buddha overlooking the valley.",
    top: "0%",
  },
  {
    title: "Scenic Views of Bhutan",
    subtitle: "A Land of Eternal Beauty",
    description:
      "Experience Bhutan’s awe-inspiring landscapes, from lush valleys to towering peaks.",
    top: "0%",
  },
  {
    title: "Visit Bhutan's Hidden Gems",
    subtitle: "A Land of Untouched Wilderness",
    description:
      "Uncover the secrets of Bhutan, with pristine nature and cultural heritage.",
    top: "0%",
  },
  {
    title: "Bhutan's Festival Experience",
    subtitle: "A Celebration of Culture and Tradition",
    description:
      "Dive into the heart of Bhutan's vibrant festivals, where ancient rituals, colorful processions, and spiritual celebrations await. Experience the joy and unity that define Bhutan’s rich cultural heritage.",
    top: "0%",
  },
  {
    title: "Bhutan's Sacred Cliffside Sanctuary",
    subtitle: "A Spiritual and Cultural Icon of Bhutan",
    description:
      "​Perched 800m above Paro Valley, Bhutan's Tiger's Nest Monastery, is famed for Guru Rinpoche's 8th-century meditation and vibrant Paro Tshechu festival",
    top: "20%",
  },
];

const Home = () => {
  let sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 800,
    lazyzLoad: true,
    slidesToShow: Math.min(images.length, 1),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    pauseOnHover: true,
    //beforeChange: (current, next) => setSlideIndex(next),
    //nextArrow: <CustomNextArrow />,
    //ssprevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(images.length, 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(images.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Box
        name="home"
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Image Slider */}
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {images.map((src, index) => (
            <Box
              key={index}
              sx={{ position: "relative", width: "100%", height: "100vh" }}
            >
              <Box
                component="img"
                src={src}
                alt={`slide-${index}`}
                sx={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />
              {/* Transparent Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)", // Adjust transparency
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                {/* Overlay Text for each image */}
                <Typography
                  paddingTop={overlayTexts[index]?.top}
                  variant="h5"
                  color="#e0e0e0"
                  fontWeight="500"
                  textAlign={"center"}
                  sx={{
                    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
                    mb: 1,
                    fontSize: { xs: "2rem", sm: "2.7rem", md: "3.2rem" }, // Responsive font size
                  }}
                >
                  {overlayTexts[index]?.title}
                </Typography>

                <Typography
                  textAlign={"center"}
                  variant="h5"
                  color="#e0e0e0"
                  fontWeight="300"
                  sx={{
                    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
                    mb: 1,
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
                  }}
                >
                  {overlayTexts[index]?.subtitle}
                </Typography>
                <Typography
                  textAlign={"center"}
                  variant="h6"
                  color="#e0e0e0"
                  sx={{
                    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                  }}
                >
                  {overlayTexts[index]?.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        color="black"
        sx={{
          py: 3,
          mt: "2%",
          fontSize: { xs: "1.1rem", sm: "0.9rem", md: "1.6rem" },
        }}
      >
        Travel with Confidence, Explore with Heart
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        sx={{
          paddingBottom: 5,
          fontSize: { xs: "1rem", sm: "0.9rem", md: "1.2rem" },
        }}
      >
        Lhaki Tours & Travels is a licensed Bhutanese tour operator and travel
        agency, officially accredited by the Tourism Council of Bhutan (TCB).
        Established and led by seasoned professionals with deep-rooted expertise
        in the tourism industry, our office is located in the vibrant hub of
        Phuentsholing, Chukha. Once you decide to embark on a journey to explore
        Bhutan, the next crucial step is selecting a travel partner who
        understands your unique needs. At Lhaki Tours & Travels, we are
        committed to curating extraordinary experiences for you, your friends,
        and your family—and we guarantee a journey that exceeds your
        expectations every step of the way.
      </Typography>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        color="black"
        textAlign="center"
        sx={{ pb: 2, fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.6rem" } }}
      >
        Tailored Travel Experiences
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Discover your custom Bhutan journey—immerse yourself in rich culture,
        vibrant festivals, thrilling wildlife safaris, serene retreats, or cozy
        homestays and hotels. We tailor every itinerary to suit your unique
        interests and travel style, ensuring an unforgettable adventure awaits
        you in Bhutan.
      </Typography>
      <TourPackages />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "50vh",
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "right 45% bottom 35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)", // Adjust transparency
          }}
        />
        {/* Call-to-Action Text */}
        {/* Call-to-Action Text */}
        <Box
          sx={{
            marginX: { xs: 10 },
            position: "relative",
            textAlign: "center",
            color: "white",
            zIndex: 1,
            border: "1px solid #ffffff", // White border
            padding: "20px", // Padding for spacing inside the box
            borderRadius: "10px", // Rounded corners for the border
            backgroundColor: "transparent", // Semi-transparent background for better text visibility
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)", // Optional shadow for a floating effect
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2, // Margin bottom for spacing between the lines
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Optional text shadow for better readability
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "2.2rem" },
            }}
          >
            Begin a tailor-made expedition created to suit your preferences
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            mt={1}
            sx={{
              mb: 2, // Margin bottom for spacing
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            Looking to Tailor Your Experience?
          </Typography>
          <Typography
            variant="h5"
            mt={1}
            sx={{
              mb: 1, // Margin bottom for spacing
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.4rem" },
            }}
          >
            Let's create your ideal travel experience together!
          </Typography>
          <Button
            onClick={() => navigate("/contact-us")}
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: "#FA8732",
              borderRadius: "8px",
              padding: "2",
              "&:hover": { backgroundColor: "#FFCE68" },
            }}
          >
            <Typography color={"white"} fontSize={12}>
              Get Started Now!
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
