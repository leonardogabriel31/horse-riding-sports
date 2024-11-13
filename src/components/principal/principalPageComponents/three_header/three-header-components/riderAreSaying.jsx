import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";

function RiderAreSaying() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: { xs: "40vh", sm: "60vh", md: "60vh", lg: "60px", xl: "60px" },
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "500px",
          }}
        >
          <Typography
            component={"div"}
            variant={"h2"}
            sx={{
              fontWeight: "bold",
              fontSize: 70,
              color: "rgb(200, 200, 200)",
            }}
          >
            What&apos;s Riders Are Saying
          </Typography>
        </Box>

        <Box
          component={"div"}
          sx={{
            marginTop: 10,
          }}
        >
          <Grid
            container
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "100px",
              paddingRight: "100px",
            }}
          >
            <Grid
              item
              id={"1"}
              xl={4}
              sx={{
                color: "rgb(200, 200, 200)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.5s linear",
                transform: {
                  sm: "perspective(150px) rotatex(-5deg)",
                  md: "perspective(150px) rotatex(-5deg)",
                  lg: "perspective(150px) rotatey(5deg)",
                  xl: "perspective(150px) rotatey(5deg)",
                },
                position: "relative",
                "&:hover": {
                  transform: {
                    sm: "rotatey(0deg)",
                    md: "rotatey(0deg)",
                    lg: "rotatey(0deg)",
                    xl: "rotatey(0deg)",
                  },
                },
                "&:hover .overlay": {
                  transition: "0.5s linear",
                  opacity: 0,
                },
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  height: "100%",
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
                    width: "520px",
                    height: "600px",
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
                      backgroundImage: "url(girlAndHorse1.jpg)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "20px",
                        transition: "opacity 0.5s ease",
                        opacity: 1,
                        transition: "0.5s linear",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              id={"2"}
              xl={4}
              sx={{
                color: "rgb(200, 200, 200)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  height: "100%",
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
                    width: "520px",
                    height: "600px",
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
                      backgroundImage: "url(girlAndHorse2.png)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              id={"3"}
              xl={4}
              sx={{
                color: "rgb(200, 200, 200)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.5s linear",
                transform: {
                  sm: "perspective(150px) rotatex(5deg)",
                  md: "perspective(150px) rotatex(5deg)",
                  lg: "perspective(150px) rotatey(-5deg)",
                  xl: "perspective(150px) rotatey(-5deg)",
                },
                position: "relative", 
                "&:hover": {
                  transform: "rotateY(0deg)",
                },
                "&:hover .overlay": {
                  transition: "0.5s linear",
                  opacity: 0, 
                },
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  height: "100%",
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
                    width: "520px",
                    height: "600px",
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
                      backgroundImage: "url(girlAndHorse3.avif)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)", 
                      borderRadius: "20px",
                      transition: "opacity 0.5s ease", 
                      opacity: 1, 
                      transition: "0.5s linear",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

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
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                    height: "160px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "relative",
                    marginTop: "100px",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      backgroundImage: "url(concavo.png)",
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
      </Box>
    </Fragment>
  );
}

export default RiderAreSaying;
