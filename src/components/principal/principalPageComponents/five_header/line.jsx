import { Box } from "@mui/material";
import React from "react";

function Line() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 3,
      }}
    >
      <Box
        component={"hr"}
        sx={{
          border: "none",
          borderTop: "3px dashed rgb(200, 200, 200)",
          width: "100%",
          marginLeft: {
            xs: "37vw",
            sm: "40vw",
            md: "40vw",
            lg: "42vw",
            xl: "42vw",
          },
          marginRight: {
            xs: "33vw",
            sm: "36vw",
            md: "38vw",
            lg: "42vw",
            xl: "44vw",
          },
        }}
      />
    </Box>
  );
}

export default Line;
