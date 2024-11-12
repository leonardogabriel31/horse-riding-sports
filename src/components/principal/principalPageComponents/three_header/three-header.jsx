import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Sponsors from "./three-header-components/Sponsors";
import OurBestSelling from "./three-header-components/ourBestSelling";
import GirlAndArticles from "./three-header-components/girlAndArticles";
import RiderAreSaying from "./three-header-components/riderAreSaying";

function ThreeHeader() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          background: "rgb(4, 20, 27)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginTop: "0vh",
          paddingBottom: "100px",
        }}
      >
        <Sponsors />
        <OurBestSelling />
        <GirlAndArticles />
        <RiderAreSaying />
      </Box>
    </Fragment>
  );
}

export default ThreeHeader;
