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
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "100px",
            paddingRight: "190px",
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
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: "530px",
                height: "970px",
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
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "83%",
                  transform: "translate(0px, -470px)",
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xl={3}
            sx={{
              color: "rgb(200, 200, 200)",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: "750px",
                height: "400px",
                background: "rgb(249, 255, 254)",
                paddingTop: "50px",
                paddingBottom: "50px",
                borderRadius: "20px",
                transform: "translate(0px, -220px)",
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
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "55%",
                  height: "80%",
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
            item
            xl={1}
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
                transform: "translate(0px, -240px)",
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
            item
            xl={2}
            sx={{
              color: "rgb(200, 200, 200)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: "530px",
                height: "480px",
                background: "rgb(249, 255, 254)",
                paddingTop: "50px",
                paddingBottom: "50px",
                borderRadius: "20px",
                transform: "translate(0px, -350px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                zIndex: 1,
              }}
            >
              <Box
                component={"div"}
                sx={{
                  backgroundImage: "url(boots.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "85%",
                  height: "77%",
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
            item
            xl={3}
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
                width: "540px",
                height: "480px",
                background: "rgb(249, 255, 254)",
                paddingTop: "50px",
                paddingBottom: "50px",
                borderRadius: "20px",
                transform: "translate(0px, -260px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  backgroundImage: "url(jersey.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "60%",
                  height: "75%",
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
