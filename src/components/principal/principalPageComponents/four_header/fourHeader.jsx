import React, { Fragment } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function FourHeader() {
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
          background: "#E9FFFF",
          // marginTop: "-370px",
        }}
      >
        <Box
          component={"div"}
          sx={{
            marginTop: -10,
          }}
        >
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
                    // marginTop: "100px",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      backgroundImage: "url(borderSup.png)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                      // transform: "translate(0px, -130px)",
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
              id={"1"}
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
                    // width: "520px",
                    // height: "600px",
                    // borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <Box component={"div"}>
                    <Typography
                      component={"div"}
                      variant={"h2"}
                      sx={{
                        marginTop: 4,
                        fontWeight: "bold",
                        fontSize: 70,
                        color: "rgb(60, 60, 60)",
                        paddingLeft: "35px",
                        paddingRight: "35px",
                      }}
                    >
                      Want To Be A Good Rider?
                    </Typography>
                  </Box>
                  <Box
                    component={"div"}
                    sx={{ width: "430px", height: "850px", zIndex: 2 }}
                  >
                    <Box
                      component={"div"}
                      sx={{
                        backgroundImage: "url(girlWantToBe.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        transform: "translate(-17px, 70px)",
                        width: "100%",
                        height: "100%",
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
                      paddingRight: "30px",
                      paddingLeft: "30px",
                    }}
                  >
                    <Typography
                      component={"div"}
                      variant={"h6"}
                      sx={{
                        fontWeight: "bold",
                        fontSize: 25,
                        color: "rgb(60, 60, 60)",
                      }}
                    >
                      Transform Your Horse Riding Skills With Our Expert
                      Trainers. Book Your First Lesson Today And Embark On An
                      Unforgettable Journey
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
                  {/* <Box
                    component={"div"}
                    sx={{
                      backgroundImage: "url(girlAndHorse2.png)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  /> */}
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
                    width: "550px",
                    height: "450px",
                    transform: "translate(50px, 0px)",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      backgroundImage: "url(HRWantToBe.png)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      // borderRadius: "20px",
                      width: "100%",
                      height: "100%",
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
                background: "rgb(0, 20, 28)",
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
                    height: "260px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "relative",
                    // marginTop: "100px",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      backgroundImage: "url(border.png)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                      transform: "translate(0px, -230px)",
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

export default FourHeader;
