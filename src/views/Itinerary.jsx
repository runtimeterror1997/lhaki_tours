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


const Itinerary = ({ itinerary }) => {
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
      {/* Accordion List */}
      {itinerary.map((item, index) => (
        <Accordion key={index} sx={{ textAlign: "left", mb: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography fontWeight="bold" textTransform={'capitalize'}>{item.day}</Typography>
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
