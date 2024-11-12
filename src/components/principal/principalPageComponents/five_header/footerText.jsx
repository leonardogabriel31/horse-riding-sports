import { Box, Typography } from "@mui/material";
import React from "react";

function FooterText() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100vw", 
        height: "20vh", 
      }}
    >
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          color: "rgb(200, 200, 200)",
          marginLeft: { xs: "2vw", md: "2vw", lg: "2vw", xl: "2vw" }, 
          marginRight: { xs: "5vw", md: "5vw", lg: "5vw", xl: "5vw" },
          width: { md: "20vw", md: "25vw", lg: "23vw", xl: "17vw" }, 
          fontSize: {
            xs: "1.5rem",
            sm: "1.5rem",
            md: "1.6rem",
            lg: "2rem",
            xl: "2rem",
          }, 
        }}
      >
        Master The Ride, Embrace The Journey.
      </Typography>
    </Box>
  );
}

export default FooterText;
