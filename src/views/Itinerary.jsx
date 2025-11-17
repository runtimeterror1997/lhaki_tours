import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";

const Itinerary = ({ itinerary, via_pling, via_east, show, isFromEast }) => {
  const [selectedRoute, setSelectedRoute] = React.useState("via-paro");

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
    // You can add additional logic here to fetch or filter itinerary based on the selected route
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "85%",
        mx: "auto",
        textAlign: "center",
        mt: 10,
        mb: 10,
        px: 2,
      }}
    >
      {/* Customize Button */}
      <Button
        variant="contained"
        sx={{
          mb: 4,
          backgroundColor: "#ccc",
          color: "black",
          fontWeight: "800",
          fontSize: 16,
          "&:hover": { backgroundColor: "#bbb" },
        }}
      >
        Customize This Trip
      </Button>

      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Itinerary
      </Typography>
      {show && (
        <Grid container justifyContent="flex-start" sx={{ mb: 4 }}>
          <Grid item xs={12} md={2} paddingRight={2}>
            <Button
              onClick={() => handleRouteChange("via-paro")}
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor:
                  selectedRoute === "via-paro" ? "#08452E" : "#8e8c8cff",
                borderRadius: "8px",
                padding: "2",
              }}
            >
              <Typography color={"white"} fontSize={12} fontWeight={700}>
                Via Paro
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={2} paddingRight={2}>
            <Button
              onClick={() => handleRouteChange("via-phuntsholing")}
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor:
                  selectedRoute === "via-phuntsholing"
                    ? "#08452E"
                    : "#8e8c8cff",
                borderRadius: "8px",
                padding: "2",
              }}
            >
              <Typography color={"white"} fontSize={12} fontWeight={700}>
                Via Phuntsholing{" "}
              </Typography>
            </Button>
          </Grid>
          {isFromEast && (
            <Grid item xs={12} md={2}>
              <Button
                onClick={() => handleRouteChange("via-east")}
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor:
                    selectedRoute === "via-east" ? "#08452E" : "#8e8c8cff",
                  borderRadius: "8px",
                  padding: "2",
                }}
              >
                <Typography color={"white"} fontSize={12} fontWeight={700}>
                  Via Samdrupjonkhar{" "}
                </Typography>
              </Button>
            </Grid>
          )}
        </Grid>
      )}
      {/* Accordion List */}
      {selectedRoute === "via-paro" &&
        itinerary.map((item, index) => (
          <Accordion key={index} sx={{ textAlign: "left", mb: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography fontWeight="bold" textTransform={"capitalize"}>
                {item.day}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>
                {item.details}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      {selectedRoute === "via-phuntsholing" &&
        via_pling.map((item, index) => (
          <Accordion key={index} sx={{ textAlign: "left", mb: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography fontWeight="bold" textTransform={"capitalize"}>
                {item.day}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>
                {item.details}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      {selectedRoute === "via-east" &&
        via_east.map((item, index) => (
          <Accordion key={index} sx={{ textAlign: "left", mb: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography fontWeight="bold" textTransform={"capitalize"}>
                {item.day}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>
                {item.details}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
};
export default Itinerary;
