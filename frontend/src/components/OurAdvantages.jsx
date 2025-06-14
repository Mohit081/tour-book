import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import {
  FaClock,
  FaWallet,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";

const advantages = [
  {
    title: "Save Time",
    description: "No More Switching For Packages Or Plans.",
    icon: <FaClock size={32} color="#0097A7" />,
  },
  {
    title: "Save Money",
    description: "Compare, Negotiate, And Choose The Best.",
    icon: <FaWallet size={32} color="#0097A7" />,
  },
  {
    title: "Trusted Network",
    description: "A Trusted Network Of 7000+ Travel Agents",
    icon: <FaUsers size={32} color="#0097A7" />,
  },
  {
    title: "Multiple Options",
    description: "Itineraries & Travel Tips From Trusted Agents",
    icon: <FaBookOpen size={32} color="#0097A7" />,
  },
];

const OurAdvantages = () => {
  return (
    <Box py={8} sx={{ backgroundColor: "#81d8d0" }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          color="#fff"
          gutterBottom
        >
          Our Advantages
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="white"
          mb={6}
        >
          You can rely on our experience and the quality of services we provide.
          <br />
          Here are other reasons to book tours at Treat Holidays
        </Typography>

        <Grid container spacing={4}>
          {advantages.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box textAlign="center" sx={{
                flex: "0 0 auto",
                width: 260,
                scrollSnapAlign: "start",
                textAlign: "center",
              }}>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    width: 100,
                    height: 100,
                    mx: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Paper>
                <Typography variant="subtitle1" fontWeight="bold" color="white">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="white" sx={{ mt: 1, px: 2 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurAdvantages;
