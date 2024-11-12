import NavbarFooter from "@/components/navbar/navbarFooter";
import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Line from "./line";
import FooterText from "./footerText";

function Footer() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{
          background: "rgb(0, 20, 28)",
          marginTop: "-140px",
          paddingBottom: 6,
        }}
      >
        <NavbarFooter />
        <Line />
        <FooterText />
      </Box>
    </Fragment>
  );
}

export default Footer;
