import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function FooterText() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        //   width: "80%",
        //   height: "80%",
        }}
      >
        <Typography
          variant={"h3"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            color: "rgb(200, 200, 200)",
            marginLeft: 40,
            marginRight: 40,
            width: "25%",
            height: "50%",
          }}
        >
          Master The Ride, Embrace The Journey.
        </Typography>
      </Box>
    </Fragment>
  );
}

export default FooterText;
