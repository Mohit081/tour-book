import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaSun } from "react-icons/fa";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url("/travel.avif")`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" gutterBottom>
            Discover Your Next Adventure
          </Typography>
          <Typography variant="h6" gutterBottom>
            Choose from our curated experiences, customized for every kind of traveler.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#FFD700",
              color: "black",
              fontWeight: "bold",
              px: 4,
              borderRadius: 50,
              "&:hover": {
                backgroundColor: "#FFC400",
              },
            }}
          >
            BOOK NOW
          </Button>
        </Box>
      </Container>

      {/* Decorative Icon (e.g., sunburst) */}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            bottom: 50,
            right: 50,
            color: "#FFD700",
            opacity: 0.9,
            fontSize: 100,
          }}
        >
          <FaSun />
        </Box>
      )}

      {/* Bottom Feature Row */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          py: 2,
        }}
      >
        <Container>
          <Grid container justifyContent="space-around" textAlign="center">
            {["Easy Booking", "Curated Destinations", "Trusted Support"].map((text, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Typography variant="subtitle1">{text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
