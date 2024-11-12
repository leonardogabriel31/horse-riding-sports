import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function GirlAndArticles() {
  return (
    <Fragment>
      <Box component={"div"}>
        <Grid
          container
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "100px",
            paddingRight: "190px",
            marginTop: { md: "-120px", lg: "-360px", xl: "-360px" },
          }}
        >
          <Grid
            id={"1"}
            item
            xl={3}
            lg={3}
            md={6}
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
                width: {
                  xs: "43vh",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "100%",
                },
                height: { xs: "40vh", sm: "50vh", md: "970px" },
                paddingBottom: "50px",
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
                  backgroundImage: "url(our-selling-girl.png)",
                  backgroundSize: {
                    xs: "cover",
                    sm: "contain",
                    md: "contain",
                    lg: "contain",
                    xl: "contain",
                  }, 
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", 
                }}
              />
            </Box>
          </Grid>

          <Grid
            id={"2"}
            item
            xl={3}
            lg={3}
            md={6}
            sm={6}
            xs={12}
            sx={{
              color: "rgb(200, 200, 200)",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
              height: "100%",
              marginBottom: { sm: -30, md: -40, lg: -40, xl: -40 },
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: { xs: "30vw", sm: "80%", md: "750px" }, 
                height: {
                  xs: "22vh",
                  sm: "25vh",
                  md: "400px",
                  lg: "25vh",
                  xl: "40vh",
                }, 
                background: "rgb(249, 255, 254)",
                paddingTop: "20px", 
                paddingBottom: "20px",
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
                  backgroundImage: "url(helmet.png)",
                  backgroundSize: "contain", 
                  backgroundRepeat: "no-repeat",
                  width: "55%",
                  height: "80%",
                  margin: "0 auto", 
                }}
              />
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
                  sx={{ zIndex: 1, marginTop: 2 }}
                >
                  Riding Helmet
                </Typography>
                <Typography component={"div"} variant={"h6"} sx={{ zIndex: 1 }}>
                  110$
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            id={"3"}
            item
            xl={1}
            lg={1}
            md={6}
            sm={6}
            xs={12}
            sx={{
              color: "rgb(200, 200, 200)",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                transform: {
                  sm: "translate(0px, 50px)",
                  md: "translate(0px, 50px)",
                  lg: "translate(0px, 30px)",
                  xl: "translate(0px, 50px)",
                },
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 90,
                  height: 90,
                  border: "2px solid rgba(200, 200, 200, 0.5)",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <ArrowOutwardIcon
                  sx={{
                    fontSize: 40,
                  }}
                />
              </Box>
              <Box component={"div"} sx={{ marginTop: 2 }}>
                <Typography component={"div"} variant={"h6"}>
                  See All
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            id={"4"}
            item
            xl={2}
            lg={2}
            md={6}
            sm={6}
            xs={12}
            sx={{
              color: "rgb(200, 200, 200)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              marginBottom: { sm: -10 },
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: { xs: "35vw", sm: "80%", md: "530px" }, 
                height: {
                  xs: "30vh",
                  sm: "30vh",
                  md: "480px",
                  lg: "25vh",
                  xl: "40vh",
                }, 
                background: "rgb(249, 255, 254)",
                paddingTop: "20px", 
                paddingBottom: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                zIndex: 1,
                marginTop: { md: -15 },
              }}
            >
              <Box
                component={"div"}
                sx={{
                  backgroundImage: "url(boots.png)",
                  backgroundSize: "contain", 
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                }}
              />
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
                  sx={{ zIndex: 1, marginTop: 2 }}
                >
                  Shoe & Hat
                </Typography>
                <Typography component={"div"} variant={"h6"} sx={{ zIndex: 1 }}>
                  100$
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            id={"5"}
            item
            xl={3}
            lg={3}
            md={6}
            sm={6}
            xs={12}
            sx={{
              color: "rgb(200, 200, 200)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: { sm: -30 },
              marginTop: { md: "80px", xl: "-220px" },
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: { xs: "33vw", sm: "80%", md: "540px" }, 
                height: {
                  xs: "32vh",
                  sm: "30vh",
                  md: "480px",
                  lg: "30vh",
                  xl: "45vh",
                }, 
                background: "rgb(249, 255, 254)",
                paddingTop: "20px", 
                paddingBottom: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: -30,
              }}
            >
              <Box
                component={"div"}
                sx={{
                  backgroundImage: "url(jersey.png)",
                  backgroundSize: "contain", 
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  margin: "0 auto", 
                  marginTop: { xs: "10px", md: "20px" }, 
                }}
              />
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
                  sx={{ zIndex: 1, marginTop: 2 }}
                >
                  Training Shirt
                </Typography>
                <Typography component={"div"} variant={"h6"} sx={{ zIndex: 1 }}>
                  90$
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default GirlAndArticles;
