import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import Router Link
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate(); // Corrected hook
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: 1, link: "home", route: "/" },
    { id: 2, link: "about us", route: "/about-us" },
    { id: 3, link: "about bhutan", route: "/about-bhutan" },
    { id: 4, link: "travel Info", route: "/travel-info" },
    { id: 5, link: "Itinerary Type", route: "/tours" },
    { id: 6, link: "contact us", route: "/contact-us" },
  ];

  const handleNavigation = (path) => {
    navigate(path, { state: path });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change color after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(32, 31, 31, 0.9)" : "transparent", // transparent at top
        boxShadow: scrolled ? 2 : "none", // no shadow at top
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Grid container>
          <Grid item size={{ md: 4 }}>
            {/* Logo */}

            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <img
                onClick={() => navigate("/")}
                src={logo}
                alt="logo"
                style={{
                  paddingTop: "3%",
                  width: "23%",
                  height: "23%",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            size={{ md: 8 }}
            marginTop={{ md: 1, lg: 5 }}
            paddingRight={4}
          >
            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "right",
              }}
            >
              <List
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 3,
                  flexDirection: "row",
                }}
              >
                {links?.map(({ id, link, route }) => (
                  <ListItem key={id} disablePadding sx={{ width: "auto" }}>
                    <ListItemButton
                      onClick={() => handleNavigation(route)}
                      sx={{
                        p: 0,
                        "&:hover": {
                          backgroundColor: "transparent", // remove background hover
                          boxShadow: "none", // remove shadow
                        },
                      }}
                    >
                      <RouterLink
                        to={route}
                        style={{
                          textAlign: "center",
                          textTransform: "capitalize",
                          color: scrolled ? "#FA8732" : "#ffffff", // change color on scroll
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          cursor: "pointer",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "#FA8732";
                        }}
                        onMouseLeave={(e) => {
                          if (!scrolled) {
                            e.target.style.color = "#ffffff";
                          }
                        }}
                      >
                        {link}
                      </RouterLink>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          sx={{ backgroundColor: "transparent" }}
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <IconButton
            sx={{ alignSelf: "flex-end", m: 2 }}
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <List
            sx={{
              width: 250,
              gap: 3,
              paddingLeft: "30%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {links.map(({ id, link, route }) => (
              <ListItem
                key={id}
                sx={{
                  width: "100%",
                  display: "flex",
                  backgroundColor: "transparent",
                  padding: 0,
                }}
              >
                <ListItemButton
                  onClick={() => {
                    handleNavigation(route);
                    setMobileOpen(false);
                  }}
                  sx={{
                    width: "auto",
                    backgroundColor: "transparent",
                    padding: "2px",
                  }}
                >
                  <RouterLink
                    to={route}
                    style={{
                      textTransform: "capitalize",
                      color: "#000",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </RouterLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
