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
        }}
      >
        <Box
          component={"div"}
          sx={{
            marginTop: -10,
            background: "#E9FFFF",
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
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{
                background: "#E9FFFF",
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
                    height: "30vh",
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
                      backgroundImage: "url(borderSup.png)",
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

          <Grid
            container
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              
            }}
          >
            <Grid
              item
              id={"1"}
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={6}
              sx={{
                color: "rgb(200, 200, 200)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative", 
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
                  overflow: "hidden", 
                }}
              >
                <Typography
                  component={"div"}
                  variant={"h2"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: 40, sm: 45, md: 55, lg: 65, xl: 70 },
                    color: "rgb(60, 60, 60)",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    textAlign: "center",
                  }}
                >
                  Want To Be A Good Rider?
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    marginTop: { md: "30px", lg: "-60px", xl: "-60px" },
                    width: {
                      xl: "19.5vw",
                      lg: "25vw",
                      md: "35vw",
                      sm: "30vw",
                      xs: "50vw",
                    },
                    height: {
                      xl: "90vh",
                      lg: "85vh",
                      md: "80vh",
                      sm: "70vh",
                      xs: "70vh",
                    },
                    zIndex: 2,
                    backgroundImage: "url(girlWantToBe.png)",
                    backgroundSize: "contain", 
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: {
                      xl: "translate(-17px, 70px)",
                      lg: "translate(-17px, 70px)",
                      md: "translate(-17px, 20px)",
                      sm: "translate(-17px, 20px)",
                      xs: "translate(-15px, 10px)",
                    },
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              id={"2"}
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={6}
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
                <Typography
                  component={"div"}
                  variant={"h6"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "4vw",
                      sm: "3vw",
                      md: "2.5vw",
                      lg: "2vw",
                      xl: "1.5vw",
                    },
                    color: "rgb(60, 60, 60)",
                    textAlign: "center",
                    padding: "0 10px", 
                  }}
                >
                  Transform Your Horse Riding Skills With Our Expert Trainers.
                  Book Your First Lesson Today And Embark On An Unforgettable
                  Journey
                </Typography>
                <Button
                  size="large"
                  sx={{
                    backgroundColor: "#fC4B08",
                    color: "white",
                    textTransform: "none",
                    fontSize: "1.20rem",
                    marginTop: 2, 
                  }}
                >
                  Join Our Club | <ArrowOutwardIcon />
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              id={"3"}
              xl={4}
              lg={4}
              md={4}
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
                  overflow: "hidden", 
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url(HRWantToBe.png)",
                    backgroundSize: "contain", 
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
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
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
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
                    height: "25vh",
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
