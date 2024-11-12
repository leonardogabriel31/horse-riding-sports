import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

function ourBestSelling() {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          id={"1"}
          item
          xl={3}
          sx={{
            color: "rgb(200, 200, 200)",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
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
          id={"2"}
          item
          xl={5}
          lg={6}
          md={6}
          sm={8}
          xs={7}
          direction="row"
          sx={{
            color: "rgb(200, 200, 200)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: {xs: "20px", sm: "70px", md: "70px", lg: "70px", xl: "70px"},
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
                  fontSize: { xs: 45, sm: 50, md: 70, lg: 70, xl: 70 },
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
                paddingLeft: { md: "0px", lg: "300px", xl: "300px" },
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
          id={"3"}
          item
          xl={4}
          lg={6}
          md={6}
          sm={4}
          xs={5}
          sx={{
            color: "rgb(200, 200, 200)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component={"div"} sx={{ width: "100%", height: "100%" }}>
            <Box
              component={"div"}
              sx={{
                backgroundImage: "url(horse-our-selling.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: {
                  xl: "40vw",
                  lg: "41vw",
                  md: "42vw",
                  sm: "44vw",
                  xs: "47vw",
                },
                height: {
                  xl: "110vh",
                  lg: "80vh",
                  md: "65vh",
                  sm: "49vh",
                  xs: "37vh",
                },
                transform: {
                  xl: "translate(-120px, 10px)",
                  lg: "translate(130px, 10px)",
                  md: "translate(100px, 10px)",
                  sm: "translate(-90px, 10px)",
                  xs: "translate(-30px, 80px)",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ourBestSelling;
