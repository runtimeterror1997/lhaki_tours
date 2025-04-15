import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "../assets/logo.png"; // Logo image for social media section

const Footer = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
      {/* Background Section */}

      {/* Footer Links Section */}
      <Box sx={{ backgroundColor: "#757575", color: "white", py: 5 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            sx={{
              display: "flex",
              direction: "column",
              justifyContent: "center",
            }}
          >
            {/* Important Links */}
            <Grid
              item
              size={{ xs: 12, sm: 12, md: 3 }}
              jdirection="column"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight="bold" textAlign={"center"}>
                Important Links
              </Typography>
              <Typography
                variant="body2"
                fontSize={15}
                fontWeight={600}
                paddingY={1}
                textAlign={"center"}
              >
                <a
                  href="https://www.tourism.gov.bt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Tourism Council of Bhutan
                </a>
              </Typography>
              <Typography
                variant="body2"
                textAlign={"center"}
                fontSize={15}
                fontWeight={600}
              >
                <a
                  href="https://www.drukair.com.bt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Drukair
                </a>
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                fontSize={15}
                fontWeight={600}
                paddingY={1}
              >
                <a
                  href="https://www.bhutanairlines.bt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Bhutan Airlines
                </a>
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                fontSize={15}
                fontWeight={600}
              >
                <a
                  href="http://www.abto.org.bt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ABTO
                </a>
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                fontSize={15}
                fontWeight={600}
                paddingY={1}
              >
                <a
                  href="https://immi.gov.bt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Immigration Office
                </a>
              </Typography>
            </Grid>

            {/* Company Info */}
            <Grid
              item
              size={{ xs: 12, sm: 12, md: 3 }}
              direction="column"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight="bold" textAlign={"center"}>
                Usefull Links
              </Typography>
              <Typography
                variant="body2"
                textAlign={"center"}
                fontSize={15}
                fontWeight={600}
                paddingY={1}
              >
                <a
                  href="/about-us"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  About Us
                </a>
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                fontSize={15}
                fontWeight={600}
              >
                <a
                  href="about-bhutan"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Bhutan
                </a>
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                fontSize={15}
                fontWeight={600}
                paddingY={1}
              >
                <a
                  href="/tours"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Itinerary Type
                </a>
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                fontSize={15}
                fontWeight={600}
              >
                <a
                  href="/contact-us"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Us
                </a>
              </Typography>
            </Grid>

            {/* Travel Tips */}
            <Grid
              item
              direction="column"
              alignItems="center"
              size={{ xs: 12, sm: 12, md: 3 }}
            >
              <Typography
                textAlign={"center"}
                variant="h6"
                sx={{ fontWeight: 500 }}
              >
                Lhaki Tours & Travels
              </Typography>
              <Typography textAlign={"center"} variant="body2">
                Tharpai Lam
              </Typography>
              <Typography textAlign={"center"} variant="body2" sx={{ py: 1 }}>
                Phuentsholing, Chukha
              </Typography>
              <Typography textAlign={"center"} variant="body2">
                Phone: +975 77252790
              </Typography>
              <Typography textAlign={"center"} variant="body2" sx={{ py: 1 }}>
                Email: lhakitours&travels@gmail.com
              </Typography>
            </Grid>

            {/* Contact Us in Social Media */}
            <Grid
              item
              size={{ xs: "12", md: 3 }}
              direction="column"
              alignItems="center"
            >
              <div align="center">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: 120, height: 95, marginRight: 10 }}
                />
              </div>
              <Typography variant="h6" fontWeight="bold" align="center">
                Connect with us in Social media
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <IconButton sx={{ color: "white" }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <PinterestIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Footer Bottom */}
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
              borderTop: "1px solid white",
              pt: 2,
            }}
          >
            <Typography variant="body2">
              ©{new Date().getFullYear()}. Lhaki Tours & Travels. All rights
              reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
