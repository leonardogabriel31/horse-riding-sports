"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Drawer, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ButtonsNavbar2 } from "@/services/buttonsNavbar";
import { StyledToolbar } from "@/styles/index";

function NavbarFooter() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("806"));
  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        // position="fixed"
        // elevation={0}
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
            <Box component={"div"} sx={{ color: "rgb(200, 200, 200)" }}>
              <Typography variant={"h6"}>Horse</Typography>
              <Typography variant={"h6"}>Riding</Typography>
            </Box>
          </Box>
          <Box
            component={"div"}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            {ButtonsNavbar2.map((buttonNavbar, index) => (
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
          <Box
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                border: "2px solid #fC4B08",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <FacebookIcon
                sx={{
                  fontSize: 35,
                  color: "#fC4B08",
                }}
              />
            </Box>

            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                border: "2px solid #fC4B08",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <InstagramIcon
                sx={{
                  fontSize: 35,
                  color: "#fC4B08",
                }}
              />
            </Box>

            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                border: "2px solid #fC4B08",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <TwitterIcon
                sx={{
                  fontSize: 35,
                  color: "#fC4B08",
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Box>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          {ButtonsNavbar2.map((buttonNavbar, index) => (
            <Link href={buttonNavbar.route} key={index}>
              <ListItem>{buttonNavbar.name}</ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NavbarFooter;
