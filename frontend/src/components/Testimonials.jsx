import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    name: "Name",
    company: "Company / Designation",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
  },
  {
    name: "Name",
    company: "Company / Designation",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
  },
  {
    name: "Name",
    company: "Company / Designation",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Container>
        <Typography variant="h5" fontWeight={700} mb={4}>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 340,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 1,
                  backgroundColor: "#f9f9f9",
                  textAlign: "center",
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                    border: "3px solid white",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {testimonial.company}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Navigation Arrows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#e0e0e0",
              "&:hover": { backgroundColor: "#ccc" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#ffc107",
              "&:hover": { backgroundColor: "#ffb300" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
