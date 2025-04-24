import React, { useRef } from "react";
import { Box, Button, Typography, TextField, Container } from "@mui/material";
import emailjs from "@emailjs/browser";
import { Email, Phone, AccessTime, Home, Place } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import background from "../assets/home/contact.png";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("email", e);
    emailjs
      .sendForm(
        "service_4z5ondj",
        "template_nqqzdhv",
        form.current,
        "x-zUsRD9abGdt2UpF"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again later.");
          form.current.reset();
        }
      );
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Content Section */}
      <div>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "20% 55%",
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
            Send Us a Message​{" "}
          </Typography>
        </Box>
      </div>
      <Container sx={{ padding: "2%" }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom textAlign="center">
          We welcome your inquiries!. Feel free to fill out the form below or
          email us your travel plans, and we'll get back to you promptly.
        </Typography>
      </Container>
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              padding: 3,
              boxShadow: 3,
              borderRadius: 2,
              marginX: 10,
              marginBottom: 5,
              //backgroundColor: "background.paper",
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                margin="normal"
                required
                sx={{
                  "& label.Mui-focused": {
                    color: "#FA8732", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "darkgray", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FA8732", // Border color when focused
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                margin="normal"
                required
                sx={{
                  "& label.Mui-focused": {
                    color: "#FA8732", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "darkgray", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FA8732", // Border color when focused
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                margin="normal"
                required
                sx={{
                  "& label.Mui-focused": {
                    color: "#FA8732", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "darkgray", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FA8732", // Border color when focused
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={5}
                margin="normal"
                required
                sx={{
                  "& label.Mui-focused": {
                    color: "#FA8732", // Label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "darkgray", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FA8732", // Border color when focused
                    },
                  },
                }}
              />
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FA8732" }}
                  type="submit"
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
        {/* Contact Information */}
        <Grid size={{ xs: 12, md: 6 }} container direction="column" spacing={3}>
          <Grid>
            <Box display="flex" alignItems="center" gap={1}>
              <Place />
              <Typography variant="h6">Physical Address:</Typography>
            </Box>
            <Typography>Lhaki Tours and Travels</Typography>
            <Typography>
              Tharpai Lam, Phuentsholing, Chukha, 21101, Bhutan
            </Typography>
          </Grid>
          <Grid>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone />
              <Typography variant="h6">Phone:</Typography>
            </Box>
            <Typography>Call/WhatsApp: +975 77252790</Typography>
          </Grid>
          <Grid>
            <Box display="flex" alignItems="center" gap={1}>
              <Email />
              <Typography variant="h6">Email Address:</Typography>
            </Box>
            <Typography>bhutanlhakitoursandtravels2025@gmail.com</Typography>
            <Typography>chadorgarabodboc@gmail.com</Typography>
          </Grid>
          <Grid>
            <Box display="flex" alignItems="center" gap={1}>
              <AccessTime />
              <Typography variant="h6">Working Hours:</Typography>
            </Box>
            <Typography>
              Monday - Friday: 9:00 AM - 8:00 PM (Local Time)
            </Typography>
            <Typography>Saturday: Closed</Typography>
            <Typography>Sunday: Closed</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
