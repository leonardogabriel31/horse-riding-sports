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
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonsNavbar2 } from "@/services/buttonsNavbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("806"));
  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          background: "transparent",
          transition: "background 0.4s",
          padding: 1,
          paddingLeft: { xs: 2, sm: 3, md: 3, lg: 3, xl: 3 },
          paddingRight: { xs: 2, sm: 3, md: 3, lg: 3, xl: 3 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexWrap: "wrap",
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
              gap: 1,
            }}
          >
            <Box component={"div"}>
              <Typography
                variant="h2"
                sx={{ fontWeight: "bold", color: "#fC4B08" }}
              >
                HR
              </Typography>
            </Box>
            <Box component={"div"}>
              <Typography
                variant="body1"
                sx={{ fontSize: 20, color: "rgb(200, 200, 200)" }}
              >
                Horse
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: 20, color: "rgb(200, 200, 200)" }}
              >
                Riding
              </Typography>
            </Box>
          </Box>
          <Box
            component={"div"}
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            {!isSmallScreen &&
              ButtonsNavbar2.map((buttonNavbar, index) => (
                <Link key={index} href={buttonNavbar.route}>
                  <Button
                    sx={{
                      fontSize: { xs: 14, md: 20 },
                      color: "rgb(200, 200, 200)",
                      textTransform: "none",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#fC4B08",
                      },
                      marginRight: 2,
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

          {isSmallScreen && (
            <MenuIcon
              onClick={toggleDrawer(true)}
              sx={{
                cursor: "pointer",
                fontSize: 35,
                color: "rgb(200, 200, 200)",
              }}
            />
          )}
        </Toolbar>
      </Box>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          {ButtonsNavbar2.map((buttonNavbar, index) => (
            <Link href={buttonNavbar.route} key={index}>
              <ListItem button>{buttonNavbar.name}</ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
