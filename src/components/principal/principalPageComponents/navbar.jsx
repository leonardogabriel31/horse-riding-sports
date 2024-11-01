"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PersonIcon from "@mui/icons-material/Person";
// import { useAppDispatch, useAppSelector } from "@/lib/features/hooks/hooks";
// import { changeColor } from "@/lib/features/reducers/colorReducer";
// import { getCartTotal } from "@/lib/features/reducers/products/productsCarReducer";
// import settings from "@/services/buttonsNavbar";
// import menuUser from "@/services/menuUser";
import { useRouter } from "next/navigation";
import { ButtonsNavbar } from "@/services/buttonsNavbar";
import {
  StyledToolbar,
//   StyledToolbarButtonsHidden,
//   Search,
//   SearchIconWrapper,
//   StyledInputBase,
} from "@/styles/index";
// import { getCategories } from "@/lib/features/actions/category/categoryAction";
// import { setSelectedCategory } from "@/lib/features/actions/product/productAction";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
//   const [hovered, setHovered] = useState(false);
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
  

  const theme = useTheme();
//   const router = useRouter();
//   const categoriesTotal = useAppSelector(
//     (state) => state.category.categoriesAll
//   );
//   const color = useAppSelector((state) => state.color.color);
//   const { cart, totalQuantity } = useAppSelector((state) => state.productsCar);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("806"));
//   const dispatch = useAppDispatch();
  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

//   const userData = useUserData();
//   let token = null;
//   let roleAdmin = null;
//   useEffect(() => {

//     if (getCategories) {
//       dispatch(getCategories());
//     }
//   }, [cart, dispatch]);

//   if (userData) {
//     token = userData.token;
//     roleAdmin = userData.user.role;

//   }

//   const handleMouseEnter = () => {
//     setHovered(true);
//     dispatch(changeColor("black"));
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//     dispatch(changeColor("white"));
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  return (
    <Box
      sx={{ flexGrow: 1 }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "red",
          transition: "background 0.4s",
          padding: 2,
          paddingLeft: 4,
        }}
      >
        <Box component={"div"}>
          <StyledToolbar>
            {ButtonsNavbar.map((buttonNavbar, index) => (
              <Link
                key={index}
                href={buttonNavbar.route}
                // onClick={() => dispatch(setSelectedCategory(category.id))}
              >
            
                <Button
                  sx={{
                    display: { xs: isSmallScreen ? "none" : "inline" },
                    fontWeight: "bold",
                    // color: color,
                    fontSize: 12,
            
                    "&:hover": {
                      color: "rgb(200, 200, 200)",
                      backgroundColor: "rgb(60, 60, 60)",
                    },
                  }}
            
                >
                  {buttonNavbar.name}
                </Button>
              </Link>
            ))}
          </StyledToolbar>
        </Box>
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
