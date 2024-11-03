"use client";
// import React, { useEffect, useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import {
//   Avatar,
//   Button,
//   Divider,
//   Drawer,
//   List,
//   ListItem,
//   Menu,
//   MenuItem,
//   Tooltip,
// } from "@mui/material";
// import Link from "next/link";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import { useRouter } from "next/navigation";
// import { ButtonsNavbar } from "@/services/buttonsNavbar";
// import { StyledToolbar } from "@/styles/index";

// function Navbar() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("806"));
//   const toggleDrawer = (open) => () => {
//     setOpenDrawer(open);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           background: "transparent",
//           transition: "background 0.4s",
//           padding: 2,
//           paddingLeft: 4,
//         }}
//       >
//         <Box component={"div"}>
//           <h1>Horse Riding</h1>
//         </Box>
//         <Box component={"div"}>
//           <StyledToolbar>
//             {ButtonsNavbar.map((buttonNavbar, index) => (
//               <Link key={index} href={buttonNavbar.route}>
//                 <Button
//                   sx={{
//                     display: { xs: isSmallScreen ? "none" : "inline" },
//                     // fontWeight: "bold",
//                     fontSize: 20,
//                     color: "white",
//                     textTransform: "none",
//                     "&:hover": {
//                       color: "rgb(200, 200, 200)",
//                       backgroundColor: "rgb(60, 60, 60)",
//                     },
//                   }}
//                 >
//                   {buttonNavbar.name}
//                 </Button>
//               </Link>
//             ))}
//           </StyledToolbar>
//         </Box>
//         <Box component={"div"}>
//           <Button
//             size="large"
//             sx={{
//               backgroundColor: "#fC4B08",
//               color: "white",
//               textTransform: "none",
//               fontSize: "1.20rem",
//             }}
//           >
//             Contact Us | <ArrowOutwardIcon />
//           </Button>
//         </Box>
//       </AppBar>
//       <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
//         <List>
//           {ButtonsNavbar.map((buttonNavbar, index) => (
//             <Link href={buttonNavbar.route} key={index}>
//               <ListItem>{buttonNavbar.name}</ListItem>
//             </Link>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Drawer, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ButtonsNavbar } from "@/services/buttonsNavbar";
import { StyledToolbar } from "@/styles/index";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("806"));
  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
          transition: "background 0.4s",
          padding: 2,
          paddingLeft: 23,
          paddingRight: 23,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box component={"div"}>
              <Typography
                variant={"h1"}
                sx={{ fontWeight: "bold", color: "#fC4B08" }}
              >
                HR
              </Typography>
            </Box>
            <Box component={"div"}>
              <Typography variant={"h6"}>Horse</Typography>
              <Typography variant={"h6"}>Riding</Typography>
            </Box>
          </Box>
          <Box
            component={"div"}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            {ButtonsNavbar.map((buttonNavbar, index) => (
              <Link key={index} href={buttonNavbar.route}>
                <Button
                  sx={{
                    display: { xs: isSmallScreen ? "none" : "inline" },
                    fontSize: 20,
                    color: "rgb(200, 200, 200)",
                    textTransform: "none",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#fC4B08",
                    },
                    marginRight: 2, // Espacio entre los botones
                  }}
                >
                  {buttonNavbar.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box component={"div"}>
            <Button
              size="large"
              sx={{
                backgroundColor: "#fC4B08",
                color: "white",
                textTransform: "none",
                fontSize: "1.20rem",
              }}
            >
              Contact Us | <ArrowOutwardIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          {ButtonsNavbar.map((buttonNavbar, index) => (
            <Link href={buttonNavbar.route} key={index}>
              <ListItem>{buttonNavbar.name}</ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
