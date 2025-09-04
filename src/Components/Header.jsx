// src/components/Header.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/service" },
    { text: "Awards", path: "/awards" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          zIndex: 1201,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo + Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              fontFamily: "'Russo One', sans-serif",
              fontSize: { xs: "18px", md: "28px" },
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#2B3674",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img
              src={logoImg}
              alt="Logo"
              style={{ height: 50, marginRight: 8, mixBlendMode: "multiply" }}
            />
            Vyoobam Tech
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {menuItems.map((item) => (
              <Button key={item.text} onClick={() => navigate(item.path)} sx={{ mx: 1 }}>
                {item.text}
              </Button>
            ))}
            <Button color="inherit" variant="contained" sx={{ ml: 2 }}>
              Sign In
            </Button>
            <Button color="secondary" variant="contained" sx={{ ml: 2 }}>
              Sign Up
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton>
                <Button fullWidth variant="contained" onClick={() => setOpen(false)}>
                  Sign In
                </Button>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Button
                  fullWidth
                  color="secondary"
                  variant="contained"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Button>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
