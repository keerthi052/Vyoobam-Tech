// src/components/Header.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", mega: true }, // mega menu
    { text: "Awards", path: "/awards" },
    { text: "Contact", path: "/contact" },
  ];

  const servicesMegaMenu = [
    {
      category: "Development",
      items: [
        { text: "Web Development", path: "/service/web" },
        { text: "Mobile Apps", path: "/service/mobile" },
        { text: "API Integration", path: "/service/api" },
      ],
    },
    {
      category: "Design",
      items: [
        { text: "UI/UX Design", path: "/service/uiux" },
        { text: "Graphic Design", path: "/service/graphic" },
        { text: "Brand Identity", path: "/service/brand" },
      ],
    },
    {
      category: "Cloud & Hosting",
      items: [
        { text: "Cloud Setup", path: "/service/cloud" },
        { text: "DevOps", path: "/service/devops" },
        { text: "Hosting", path: "/service/hosting" },
      ],
    },
  ];

  const languages = ["English", "தமிழ்", "हिंदी"];

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          zIndex: 1201,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              fontFamily: "'Russo One', sans-serif",
              fontSize: { xs: "18px", md: "26px" },
              fontWeight: "bold",
              color: "#2B3674",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img
              src={logoImg}
              alt="Logo"
              style={{ height: 45, marginRight: 8, mixBlendMode: "multiply" }}
            />
            Vyoobam Tech
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {menuItems.map((item) =>
              item.mega ? (
                <Box
                  key={item.text}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                  sx={{ position: "relative" }}
                >
                  <Button sx={{ mx: 1 }}>{item.text}</Button>

                  {megaOpen && (
                    <Paper
                      elevation={4}
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "800px",
                        p: 3,
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 2,
                        animation: "fadeIn 0.3s ease-in-out",
                        "@keyframes fadeIn": {
                          from: { opacity: 0, transform: "translateY(10px)" },
                          to: { opacity: 1, transform: "translateY(0)" },
                        },
                      }}
                    >
                      {servicesMegaMenu.map((col) => (
                        <Box key={col.category}>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold", mb: 1, color: "#2B3674" }}
                          >
                            {col.category}
                          </Typography>
                          {col.items.map((sub) => (
                            <Typography
                              key={sub.text}
                              sx={{
                                cursor: "pointer",
                                color: "#444",
                                "&:hover": { color: "#1976d2" },
                                mb: 0.5,
                              }}
                              onClick={() => navigate(sub.path)}
                            >
                              {sub.text}
                            </Typography>
                          ))}
                        </Box>
                      ))}
                    </Paper>
                  )}
                </Box>
              ) : (
                <Button key={item.text} onClick={() => navigate(item.path)} sx={{ mx: 1 }}>
                  {item.text}
                </Button>
              )
            )}

            {/* 🌍 Language Selector */}
            <Box
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
              sx={{ position: "relative" }}
            >
              <IconButton color="inherit">
                <LanguageIcon />
              </IconButton>
              {langOpen && (
                <Paper
                  elevation={3}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    minWidth: "150px",
                    p: 1,
                  }}
                >
                  {languages.map((lang) => (
                    <Typography
                      key={lang}
                      sx={{
                        cursor: "pointer",
                        p: 1,
                        "&:hover": { background: "#f0f0f0" },
                      }}
                      onClick={() => setLangOpen(false)}
                    >
                      {lang}
                    </Typography>
                  ))}
                </Paper>
              )}
            </Box>
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
                    navigate(item.path || "/");
                    setOpen(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
