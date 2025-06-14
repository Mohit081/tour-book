import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Container,
} from "@mui/material";
import useGetAllTour from "../hooks/useGetAllTours";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";

const tourPackages = [
  {
    title: "GOLDEN TEMPLE TOUR",
    image: "/image1.jpg",
  },
  {
    title: "AMAZING KERELA TOUR",
    image: "/image1.jpg",
  },
  {
    title: "KASHMIR HOLIDAY TOUR",
    image: "/image1.jpg",
  },
  {
    title: "RAJASTHAN TOUR",
    image: "/image1.jpg",
  },
  {
    title: "TRIP TO GOA",
    image: "/image1.jpg",
  },
  {
    title: "NAINITAL ESCAPE",
    image: "/image1.jpg",
  },
];

const TourPackages = () => {

  useGetAllTour();
  const {allTour} = useSelector((store) => store.tour)

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight={600}
        color="#007c91"
      >
        Top Selling Tour Packages of India
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Stay updated with our latest news and happenings through Informe.
      </Typography>

      <Grid container spacing={4}>
        {allTour.map((pkg, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} columns={2}>
            <Card
              sx={{
                overflow: "hidden",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                width: "100%",
                maxWidth: 340,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
              
            >
              <CardMedia
                component="img"
                height="180"
                image={pkg.image}
                alt={pkg.title}
                sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  align="center"
                  fontWeight="bold"
                  color="#007c91"
                >
                  {pkg.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3ec2b3",
                    borderRadius: 8,
                    px: 4,
                    fontWeight: 600,
                    ":hover": {
                      backgroundColor: "#35b2a3",
                    },
                  }}
                >
                  VIEW DETAILS
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TourPackages;
