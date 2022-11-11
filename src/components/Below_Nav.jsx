import React from "react";
import { Box, Paper, Container, CardMedia, Card } from "@mui/material";
import image from "./images/prodigihackathon.png";
import image2 from "./images/1.jpg";

const Below_Nav = () => {
  return (
    <Container>
      <Container
        sx={{
          border: "none",
          display: "flex",
          justifyContent: "center",
          width: "1000px",
          height: "200px",
        }}
      >
        <CardMedia
          component="img"
          height="100"
          width="80"
          sx={{ marginTop: "60px", height: "120px" }}
          image={image}
        ></CardMedia>
      </Container>
      <Container
        sx={{
          border: "none",
          display: "flex",
          justifyContent: "center",
          width: "1000px",
          height: "200px",
        }}
      >
        <CardMedia
          component="img"
          height="100"
          width="80"
          sx={{ marginTop: "30px", height: "400px" }}
          image={image2}
        ></CardMedia>
      </Container>
    </Container>
  );
};

export default Below_Nav;
