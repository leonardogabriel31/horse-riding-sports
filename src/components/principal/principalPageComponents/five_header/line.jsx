import { Box } from "@mui/material";
import React, { Fragment } from "react";

function Line() {
  return (
    <Fragment>
      <Box
        component={"div"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          component={"hr"}
          sx={{
            border: "none",
            borderTop: "3px dashed rgb(200, 200, 200)", 
            width: "100%", 
            margin: "16px 940px", 
          }}
        />
      </Box>
    </Fragment>
  );
}

export default Line;
