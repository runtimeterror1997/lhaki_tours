import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import flags from "../assets/home/flags.png"; // Background image
import aboutus from "../assets/home/thimphu.png"; // Side image

const AboutUs = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        loading="lazy"
        sx={{
          position: "relative",
          width: "100%",
          height: "50vh",
          backgroundImage: `url(${flags})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
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
            mt: { xs: "40%", sm: "20%", md: "20%", lg: "7%" },
            fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
          }}
        >
          Green Travel & Responsible Business Solutions!
        </Typography>
      </Box>

      {/* Content Section */}
      <div sx={{ paddingBottom: 5, paddingX: 5 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          textAlign={"center"}
          sx={{ py: 3 }}
        >
          Why Choose Us for Responsible Tourism?
        </Typography>
        <Grid container spacing={2} paddingX={"3%"} paddingBottom={"2%"}>
          {/* Left Image */}
          <Grid item size={{ xs: 12, md: 6, ml: 10 }}>
            <Box
              component="img"
              src={aboutus}
              alt="About Us"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "4px",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>

          {/* Right Text Box */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Paper
              position={"absolute"}
              elevation={3}
              sx={{
                padding: 4,
                backgroundColor: "#f8f8f8",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h6"
                color="black"
                textAlign="center"
                paragraph
              >
                At Lhaki Tours & Travels, we are dedicated to fostering
                responsible and sustainable tourism. Our goal is to safeguard
                Bhutan’s rich natural beauty and cultural traditions while
                ensuring that tourism serves as a force for good in local
                communities.
              </Typography>

              <Typography
                variant="h6"
                color="black"
                textAlign="center"
                paragraph
              >
                Though small in size, Bhutan stands as a global leader in
                conservation, being one of the few nations that absorbs more
                carbon than it produces. With nearly 70% of its land covered in
                forests, Bhutan provides a sanctuary for numerous endangered
                species.
              </Typography>

              <Typography
                variant="h6"
                color="black"
                textAlign="center"
                paragraph
              >
                Additionally, we strive to raise awareness among travelers about
                responsible tourism. We encourage them to reduce their
                ecological footprint, honor local customs, and support
                eco-friendly initiatives.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutUs;
