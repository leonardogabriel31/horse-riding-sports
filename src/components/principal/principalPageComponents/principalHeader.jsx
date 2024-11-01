import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";

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
            padding: 3,
            color: "rgb(200, 200, 200)",
            display: "flex",
            justifyContent: "center",
            aligneItem: "center",
            textAligne: "center",
            marginTop: 30,
          }}
        >
          <Grid
            container
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Grid
              item
              xl={4}
              sx={{
                display: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component={"div"}>
                <Typography variant={"h1"}>
                  Improve Your Riding Skill With Us
                </Typography>
              </Box>
              <Box component={"div"}>
                <Typography component={"p"} variant={"h6"}>
                  Explore Our Website For Comprehensive Horse Riding Training.
                  Offering Expert Tips, Techniques, And Resources To Help Riders
                  Of All Skill Levels Succeed.
                </Typography>
              </Box>
              <Box component={"div"}>
                <Button>Join Our Club</Button>
              </Box>
            </Grid>
            <Grid
              item
              xl={5}
              sx={{
                display: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component={"div"}>
                <Image
                  width={450}
                  height={550}
                  src={"/horse-header.png"}
                  alt={"image-header-horse"}
                />
              </Box>
            </Grid>
            <Grid
              item
              xl={3}
              container
              justifyContent= "center"
              alignItems= "center"
              sx={{
                display: "row",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: 400, // Ajusta el tamaño del círculo
                  height: 400, // Ajusta el tamaño del círculo
                  border: "2px solid rgba(200, 200, 200, 0.5)", // Color y grosor del borde
                  borderRadius: "50%", // Hace que el Box sea un círculo
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Puedes agregar contenido dentro del círculo si lo deseas */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
}

export default PrincipalHeader;
