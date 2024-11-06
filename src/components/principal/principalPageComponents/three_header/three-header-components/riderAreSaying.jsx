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
          marginTop: "-370px",
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
            What's Riders Are Saying
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
                transform: "perspective(150px) rotateY(5deg)",
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
                transform: "perspective(150px) rotateY(-5deg)",
                position: "relative", // Necesario para el pseudo-elemento
                "&:hover": {
                  transform: "rotateY(0deg)",
                },
                "&:hover .overlay": {
                  transition: "0.5s linear",
                  opacity: 0, // Oculta la superposición al hacer hover
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
                    position: "relative", // Necesario para el overlay
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
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Color oscuro
                      borderRadius: "20px",
                      transition: "opacity 0.5s ease", // Transición suave
                      opacity: 1, // Inicialmente visible
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
            // spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              //   paddingLeft: "100px",
              //   paddingRight: "100px",
            }}
          >
            <Grid
              item
              id={"4"}
              xl={12}
              sx={{
                // color: "rgb(200, 200, 200)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // marginTop: "80px",
                // transition: "0.5s linear",
                // transform: "perspective(150px) rotateY(-5deg)",
                // position: "relative", // Necesario para el pseudo-elemento
                // "&:hover": {
                //   transform: "rotateY(0deg)",
                // },
                // "&:hover .overlay": {
                //   transition: "0.5s linear",
                //   opacity: 0, // Oculta la superposición al hacer hover
                // },
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  //   height: "100%",
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
                      //   borderRadius: "20px",
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
