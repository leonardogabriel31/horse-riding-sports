import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

function Sponsors() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "100%",
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
                backgroundImage: "url(border2.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>

        <Box component={"div"}>
          <Typography
            component={"div"}
            variant={"h2"}
            sx={{
              fontWeight: "bold",
              fontSize: 70,
              color: "rgb(200, 200, 200)",
            }}
          >
            Ours Sponsors
          </Typography>
        </Box>

        <Box
          component={"div"}
          sx={{ marginLeft: "10px", marginRight: "10px", padding: 10 }}
        >
          <Grid
            container
            direction="row"
            spacing={3}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {[
              "/lightbox.png",
              "/interlock.png",
              "/goodwell.png",
              "/magnolia.png",
              "/layers.png",
            ].map((imgSrc, index) => (
              <Grid
                item
                xl={2}
                key={index}
                sx={{
                  color: "rgb(200, 200, 200)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: 0.5,
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    border: "2px solid rgba(200, 200, 200, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "300px",
                    height: "150px",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      backgroundImage: `url(${imgSrc})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "210px",
                      height: "85px",
                      marginTop: "-10px",
                    }}
                  />
                </Box>
              </Grid>
            ))}
            {[
              "/alphawave.png",
              "/easytax.png",
              "/cubekit.png",
              "/catalxg.png",
              "/3portals.png",
            ].map((imgSrc, index) => (
              <Grid
                item
                xl={2}
                key={index}
                sx={{
                  color: "rgb(200, 200, 200)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: 0.5,
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgba(200, 200, 200, 0.5)",
                    width: "300px",
                    height: "150px",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      backgroundImage: `url(${imgSrc})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "210px",
                      height: "85px",
                      marginTop: "-10px",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Sponsors;
