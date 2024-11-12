import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TrainerInfo from "./trainerInfo";

function PrincipalHeader() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          background: "rgb(4, 20, 27)",
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
          }}
        >
          <Grid
            container
            direction="row"
            sx={{
              marginTop: { xs: "15vh", sm: "22vh", md: "20vh", lg: "-2vh", xl: "-3vh" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "50px",
              marginLeft: "90px",
              marginRight: "90px",
              paddingBottom: { md: 2, lg: 25, xl: 25 },
            }}
          >
            <Grid
              id={"1"}
              item
              xl={3}
              lg={3}
              md={12}
              sm={12}
              xs={12}
              sx={{
                paddingLeft: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "20%", lg: "100%", xl: "100%" },
              }}
            >
              <Box component={"div"} sx={{ zIndex: 1, textAlign: "center" }}>
                <Typography
                  variant={"h2"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "24px",
                      sm: "40px",
                      md: "60px",
                      lg: "70px",
                    }, 
                  }}
                >
                  Improve Your{" "}
                  <Box component={"span"} sx={{ color: "#fC4B08" }}>
                    Riding
                  </Box>{" "}
                  Skill With Us
                </Typography>
                <Typography
                  component={"p"}
                  variant={"h6"}
                  sx={{
                    fontSize: { xs: "12px", sm: "16px", md: "18px" },
                    marginTop: 2,
                  }}
                >
                  Explore Our Website For Comprehensive Horse Riding Training.
                  Offering Expert Tips, Techniques, And Resources To Help Riders
                  Of All Skill Levels Succeed.
                </Typography>
                <Button
                  size="large"
                  sx={{
                    backgroundColor: "#fC4B08",
                    color: "white",
                    textTransform: "none",
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.20rem" },
                    marginTop: 3,
                  }}
                >
                  Join Our Club | <ArrowOutwardIcon />
                </Button>
              </Box>
            </Grid>

            <Grid
              id={"2"}
              item
              xl={5}
              lg={5}
              md={6}
              sm={6}
              xs={6}
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
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image
                  width={900}
                  height={850}
                  layout="responsive"
                  src={"/horse-header.png"}
                  alt={"image-header-horse"}
                  style={{ maxWidth: "100%", height: "auto" }} 
                />
              </Box>
            </Grid>

            <Grid
              id={"3"}
              item
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: { md: "50%", lg: "100%", xl: "100%" },
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: { xs: "80%", sm: "350px" },
                  height: { xs: "auto", sm: "520px" },
                  
                }}
              >
                <Image
                  width={400}
                  height={400}
                  src={"/trainerInfo.png"}
                  alt={"image-header-trainer"}
                  style={{ maxWidth: "100%", height: "auto" }} 
                />
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component={"div"}
                  variant={"h6"}
                  sx={{
                    marginTop: 2,
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  }} 
                >
                  Explore More
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#FC4B08",
                    borderRadius: "50%",
                    width: { xs: "50px", sm: "70px" },
                    height: { xs: "50px", sm: "70px" },
                    cursor: "pointer",
                    marginTop: 1,
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: { xs: "40px", sm: "65px" },
                      color: "#FFFFFF",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={12}
              xs={12}
              sx={{
                marginTop: { xs: "5vh", sm: "5vh", md: "0vh", lg: "0vh", xl: "0vh" },
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
                  marginTop: { md: "0px", lg: "-490px", xl: "-490px" },
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
              lg={4}
              md={4}
              sm={12}
              xs={12}
              sx={{
                marginTop: { xs: "5vh", sm: "5vh", md: "0vh", lg: "0vh", xl: "0vh" },
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
                  top: { md: "-30px", lg: "-280px", xl: "-280px" },
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
                      paddingTop: 2,
                      paddingBottom: 2.5,
                      fontSize: { xs: 35, sm: 35, md: 40, lg: 40, xl: 50 },
                    }}
                  >
                    Improve Your Riding Skill Through Training With Us.
                  </Typography>
                </Box>
                <Box component={"div"} sx={{ paddingBottom: { md: 2 } }}>
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
              lg={3}
              md={3}
              sm={12}
              xs={12}
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
                  marginTop: { xs: "5vh", sm: "5vh", md: "-10px", lg: "-490px", xl: "-490px" },
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
                      fontSize: { md: 75, lg: 80, xl: 130 },
                      fontWeight: "bold",
                      fontStyle: "italic",
                      color: "#fC4B08",
                    }}
                  >
                    15+
                  </Typography>
                </Box>
                <Box component={"div"}>
                  <Typography
                    component={"div"}
                    variant={"h5"}
                    
                  >
                    Years we have been giving Services carefully
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            id={"4"}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(0, 20, 28)",
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: "100%",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  height: "360px",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "relative",
                  
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    backgroundImage: "url(borderSup2.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default PrincipalHeader;
