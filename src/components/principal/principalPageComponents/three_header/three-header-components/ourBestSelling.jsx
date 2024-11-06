
import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

function ourBestSelling() {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        // spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          //   textAlign: "center",
        }}
      >
        <Grid
          item
          xl={3}
          sx={{
            color: "rgb(200, 200, 200)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // textAlign: "center",
          }}
        >
          <Box component={"div"}>
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(new.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "150px",
                height: "260px",
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xl={5}
          direction="row"
          sx={{
            color: "rgb(200, 200, 200)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "70px",
          }}
        >
          <Box component={"div"}>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginBottom: 20,
              }}
            >
              <Typography
                component={"div"}
                variant={"h2"}
                sx={{
                  fontWeight: "bold",
                  fontSize: 80,
                  color: "rgb(200, 200, 200)",
                }}
              >
                Our Best Selling Horse Riding Products
              </Typography>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingLeft: "300px",
                // paddingRight: "150px",
              }}
            >
              <Typography component={"div"} variant={"h6"} sx={{ zIndex: 1 }}>
                A Good Horse Racing Rider Product Selling Website Offers
                Top-Quality Gear, Detailed Descriptions, Secure Transactions,
                And Excellent Customer Service.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xl={4}
          sx={{
            color: "rgb(200, 200, 200)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // textAlign: "center",
          }}
        >
          <Box component={"div"} sx={{ width: "100%", height: "100%" }}>
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(horse-our-selling.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "810px",
                height: "1040px",
                transform: "translate(-100px, 10px)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ourBestSelling;
