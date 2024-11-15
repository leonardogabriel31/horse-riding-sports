import NavbarFooter from "@/components/navbar/navbarFooter";
import { Box } from "@mui/material";
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
          marginTop: {xs: "-220px", sm: "-140px", md: "-140px", lg: "-140px", xl: "-140px"},
          paddingBottom: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
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
