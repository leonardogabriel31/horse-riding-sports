import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function SecondHeader() {
  return (
    <Fragment>
      <Box
        component={"div"}
        id={"second-header"}
        sx={{
          background: "#F2FFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: {
            xs: "40vh",
            sm: "60vh",
            md: "70vh",
            lg: "90vh",
            xl: "100vh",
          },
        }}
      >
        <Box
          component={"div"}
          sx={{
            backgroundImage: "url(/caballo.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component={"div"}
            sx={{
              marginLeft: { xs: 5, sm: 25, md: 26, lg: 26, xl: 26 },
              marginBottom: { xs: 1 },
              width: 510,
            }}
          >
            <Typography
              component={"div"}
              variant={"h2"}
              sx={{ fontWeight: "bold", fontSize: { xs: 30, md: 75 } }}
            >
              Racing Horse Details
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default SecondHeader;
