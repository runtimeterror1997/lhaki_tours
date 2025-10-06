import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const TourServices = () => {
  return (
    <Box bgcolor={"#F5F5F5"} paddingTop={'1%'}>
      <Grid container spacing={8} sx={{ mt: 6 }} paddingX={"20%"}>
        <Grid item xs={12} md={6}>
          <Typography
            textTransform={"capitalize"}
            gutterBottom
            fontWeight={"bold"}
            variant="h5"
          >
            Cost Includes
          </Typography>
          <ul
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              paddingLeft: "1.2rem",
            }}
          >
            <li>Sustainable Development Fee of USD 100 Per night per person</li>
            <li>Bhutan Visa Fees</li>
            <li>Accommodation</li>
            <li>Transportation</li>
            <li>All meals</li>
            <li>Certified English Speaking Bhutanese Guide</li>
            <li>Entrance fees</li>
            <li>All internal taxes & charges</li>
            <li>Mineral Water</li>
            <li>All applicable internal taxes and service fees</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            textTransform={"capitalize"}
            gutterBottom
            fontWeight={"bold"}
            variant="h5"
          >
            Cost Excludes
          </Typography>
          <ul
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              paddingLeft: "1.2rem",
            }}
          >
            <li>Flight tickets</li>
            <li>Insurance</li>
            <li>Drinks and Beverages</li>
            <li>Tips</li>
            <li>Internet and Phone bills</li>
            <li>Other personal expenses</li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TourServices;
