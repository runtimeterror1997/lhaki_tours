import {
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import HikingIcon from "@mui/icons-material/Hiking";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const TourInfo = ({ tripHighlights, tourDetails, image }) => {
  return (
    <Box
      sx={{ px: { xs: 2, md: 6 }, py: 5 }}
      bgcolor={"rgba(144, 142, 142, 0.07)"}
    >
      <Grid container spacing={4} alignItems="center" paddingX={"2%"}>
        {/* Trip Highlights */}
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Trip Highlights
          </Typography>
          <ul
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              paddingLeft: "1.2rem",
              maxWidth: "700px", // adjust as needed
              overflowY: "auto",
            }}
          >
            {tripHighlights.map((highlight, index) => (
              <li key={index}>{highlight.key}</li>
            ))}
          </ul>
        </Grid>

        {/* Route Map */}
        <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={image} // replace with your route map image
            alt="Route Map"
            sx={{
              width: "100%",
              maxWidth: 450,
              borderRadius: 3,
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          />
        </Grid>
      </Grid>

      {/* ===== Tour Details with Icons ===== */}
      <Grid
        container
        spacing={4}
        sx={{ mt: 6, textAlign: "center" }}
        paddingX={tourDetails?.distance && tourDetails?.altitude ? "5%" : "17%"}
      >
        {tourDetails && (
          <>
            <Grid item xs={6} md={2}>
              <AccessTimeIcon sx={{ fontSize: 40, color: "#FA8732", mb: 1 }} />
              <Typography fontWeight="bold">Duration</Typography>
              <Typography>{tourDetails?.duration}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <GroupIcon sx={{ fontSize: 40, color: "#FA8732", mb: 1 }} />
              <Typography fontWeight="bold">Group Size</Typography>
              <Typography>{tourDetails?.groupSize}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <HikingIcon sx={{ fontSize: 40, color: "#FA8732", mb: 1 }} />
              <Typography fontWeight="bold">Difficulty</Typography>
              <Typography>{tourDetails?.difficulty}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <HotelIcon sx={{ fontSize: 40, color: "#FA8732", mb: 1 }} />
              <Typography fontWeight="bold">Accommodation</Typography>
              <Typography>{tourDetails?.accommodation}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <DirectionsWalkIcon
                sx={{ fontSize: 40, color: "#FA8732", mb: 1 }}
              />
              <Typography fontWeight="bold">Walking Hours</Typography>
              <Typography>{tourDetails?.walkingHours}</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <WbSunnyIcon sx={{ fontSize: 40, color: "#FA8732", mb: 1 }} />
              <Typography fontWeight="bold">Best Season</Typography>
              <Typography>{tourDetails?.bestSeason}</Typography>
            </Grid>
          </>
        )}
        {tourDetails?.distance && (
          <Grid item xs={6} md={2}>
            <WbSunnyIcon sx={{ fontSize: 40, color: "#FA8732", mb: 1 }} />
            <Typography fontWeight="bold">Avg. Walking Distance</Typography>
            <Typography>{tourDetails?.distance}</Typography>
          </Grid>
        )}
        {tourDetails?.altitude && (
          <Grid item xs={6} md={2}>
            <WbSunnyIcon sx={{ fontSize: 40, color: "#FA8732", mb: 1 }} />
            <Typography fontWeight="bold">Highest Altitude</Typography>
            <Typography>{tourDetails?.altitude}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default TourInfo;
