import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import useGetAllDestination from "../hooks/useGetAllDestination";
import { useSelector } from "react-redux";

const PopularDestinations = () => {
  useGetAllDestination();
  const { allDestination } = useSelector((store) => store.destination);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box py={8} sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          align="center"
          color="primary"
          gutterBottom
        >
          Explore Most Popular Destinations
        </Typography>
        <Typography
          variant="body1"
          align="center"
          mb={6}
          sx={{ px: { xs: 2, md: 0 }, color: "#666" }}
        >
          Plan your perfect trip with our most loved and best-selling tour
          packages.
        </Typography>

        <Grid container spacing={4}>
          {allDestination.map((place, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 340,
                  borderRadius: 3,
                  boxShadow: 3,
                  height: 300,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={place.image}
                  alt={place.title}
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{
                      color: "#0077b6",
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                    }}
                  >
                    {place.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#444", mt: 0.5 }}>
                    Starting From{" "}
                    <b style={{ color: "#009688" }}>₹{place.price}/-</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularDestinations;
