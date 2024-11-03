import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrainerInfo from "./trainerInfo";

function PrincipalHeader() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          backgroundImage: "url(/fondo-principal-head.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "absolute",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "100%",
            height: "100%",

            color: "rgb(200, 200, 200)",
            display: "flex",
            justifyContent: "center",

            marginTop: "-180px",
          }}
        >
          <Grid
            container
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "50px",
              marginLeft: "90px",
              marginRight: "90px",
              paddingBottom: 40,
            }}
          >
            <Grid
              item
              xl={3}
              sx={{
                paddingLeft: 5,

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box component={"div"} sx={{ zIndex: 1 }}>
                <Box component={"div"}>
                  <Typography
                    variant={"h2"}
                    sx={{ fontWeight: "bold", fontSize: "70px" }}
                  >
                    Improve Your{" "}
                    <Box component={"span"} sx={{ color: "#fC4B08" }}>
                      Riding
                    </Box>{" "}
                    Skill With Us
                  </Typography>
                </Box>
                <Box component={"div"} sx={{ marginTop: 5 }}>
                  <Typography component={"p"} variant={"h6"}>
                    Explore Our Website For Comprehensive Horse Riding Training.
                    Offering Expert Tips, Techniques, And Resources To Help
                    Riders Of All Skill Levels Succeed.
                  </Typography>
                </Box>
                <Box component={"div"} sx={{ marginTop: 5 }}>
                  <Button
                    size="large"
                    sx={{
                      backgroundColor: "#fC4B08",
                      color: "white",
                      textTransform: "none",
                      fontSize: "1.20rem",
                    }}
                  >
                    Join Our Club | <ArrowOutwardIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xl={5}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  position: "relative",
                  transform: "translate(-20%, 0%)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image
                  width={900}
                  height={850}
                  src={"/horse-header.png"}
                  alt={"image-header-horse"}
                />
              </Box>
            </Grid>
            <Grid
              item
              xl={3}
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <TrainerInfo />
            </Grid>

            <Grid
              item
              xl={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: 3,
                  marginTop: "-490px",
                  paddingTop: 10,
                  paddingBottom: 10,
                  border: "2px solid",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    backgroundImage: "url(/file.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: 150,
                    height: 150,

                    borderRadius: "50%",
                  }}
                />
                <Box component={"div"}>
                  <Typography component={"div"} variant={"h2"} sx={{}}>
                    100%
                  </Typography>
                </Box>
                <Box component={"div"}>
                  <Typography component={"div"} variant={"h5"}>
                    Satisfaction Guarantee
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xl={4}
              sx={{
                marginLeft: 3,
                marginRight: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                textAlign: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  backgroundImage:
                    "url(/fondo-blanco-gris-degradado_7954-21239.avif)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "absolute",
                  backgroundPosition: "center",
                  overflow: "hidden",
                  width: "100%",
                  height: "500px",
                  top: "-280px",
                  padding: 3,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  border: "2px solid",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box component={"div"}>
                  <Typography
                    component={"div"}
                    variant={"h2"}
                    sx={{
                      color: "rgb(70, 70, 70)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 2.5,
                      paddingBottom: 2.5,
                      fontSize: 50,
                    }}
                  >
                    Improve Your Riding Skill Through Training With Us.
                  </Typography>
                </Box>
                <Box component={"div"}>
                  <Button
                    size="large"
                    sx={{
                      backgroundColor: "rgb(200, 200, 200)",
                      color: "rgb(70, 70, 70)",
                      textTransform: "none",
                      fontSize: "1.20rem",
                    }}
                  >
                    Become a Member <ArrowForwardIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xl={3}
              sx={{
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  height: "100%",
                  marginTop: "-490px",
                  paddingTop: 13,
                  paddingBottom: 13,
                  paddingLeft: 8,
                  paddingRight: 8,
                  border: "2px solid",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box component={"div"}>
                  <Typography
                    component={"div"}
                    variant={"h1"}
                    sx={{
                      fontSize: 130,
                      fontWeight: "bold",
                      fontStyle: "italic",
                      color: "#fC4B08",
                    }}
                  >
                    15+
                  </Typography>
                </Box>
                <Box component={"div"}>
                  <Typography component={"div"} variant={"h5"}>
                    Years we have been giving Services carefully
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
}

export default PrincipalHeader;
