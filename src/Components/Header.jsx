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
  const [activeMega, setActiveMega] = useState(null);
  const [langOpen, setLangOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", mega: "about" },
    { text: "Services", mega: "services" },
    { text: "Products", mega: "products" },
    { text: "Careers", path: "/careers" },
     { text: "Internship", path: "/internship" },
    { text: "Contact", path: "/contact" },
    
  ];

  const megaMenus = {
    services: [
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
    ],
    about: [
      {
        category: "Company Overview",
        items: [
          { text: "Vision & Mission", path: "/about/vision" },
          { text: "Our Story", path: "/about/story" },
          { text: "Leadership", path: "/about/leadership" },
          { text: "Milestones", path: "/about#timeline-section" },
          { text: "Core Values", path: "/about/values" },
          { text: "Awards", path: "/about/Awards" },
        ],
      },
    ],
    products: [
      {
        category: "Overview",
        items: [
          { text: "Products", path: "/products" },
          { text: "Market Metrics", path: "/products/metrics" },
          { text: "Features", path: "/products/features" },
          { text: "Intuitive UI", path: "/products/ui" },
        ],
      },
      {
        category: "Management",
        items: [
          { text: "Order Management", path: "/products/order" },
          { text: "User Management", path: "/products/user" },
          { text: "Inventory Tracking", path: "/products/inventory" },
        ],
      },
      {
        category: "Insights",
        items: [
          { text: "Analytics & Reports", path: "/products/analytics" },
          { text: "Customer Management", path: "/products/customers" },
          { text: "Use Cases", path: "/products/usecases" },
          { text: "Pricing Plans", path: "/products/pricing" },
          { text: "Case Studies", path: "/products/casestudies" },
          { text: "Documentation", path: "/products/docs" },
        ],
      },
    ],
  };

  const languages = ["English", "தமிழ்", "हिंदी"];

  // Shared style for all menu buttons for underline on hover
  const menuButtonStyles = {
    mx: 1,
    position: "relative",
    color: "#2B3674",
    fontWeight: 500,
    textTransform: "none",
    backgroundColor: "transparent",
    "&::after": {
      content: "''",
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#1976d2",
      transition: "width 0.3s ease",
    },
    "&:hover::after": {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#2B3674",
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          zIndex: 1201,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          background: "#fff"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between",
         alignItems: "center",  
         minHeight: { xs: 70, md: 100 }, 
         px: { xs: 2, md: 4 },}}>
        
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
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {menuItems.map((item) =>
              item.mega ? (
                <Box
                  key={item.text}
                  onMouseEnter={() => setActiveMega(item.mega)}
                  onMouseLeave={() => setActiveMega(null)}
                  sx={{ position: "relative" }}
                >
                  <Button sx={menuButtonStyles}>{item.text}</Button>

                  {activeMega === item.mega && (
                    <Paper
                      elevation={4}
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: item.mega === "about" ? "-50px" : "-100px",
                        minWidth: "900px",
                        p: 4,
                        backgroundColor: "#fff",
                        display: "grid",
                        gridTemplateColumns: `repeat(${
                          megaMenus[item.mega].length
                        }, 1fr)`,
                        columnGap: 6,
                        rowGap: 2,
                        borderRadius: 2,
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        animation: "fadeIn 0.3s ease-in-out",
                        "@keyframes fadeIn": {
                          from: { opacity: 0, transform: "translateY(10px)" },
                          to: { opacity: 1, transform: "translateY(0)" },
                        },
                      }}
                    >
                      {megaMenus[item.mega].map((col) => (
                        <Box key={col.category}>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold", mb: 1, color: "#2B3674" }}
                          >
                            {col.category}
                          </Typography>
                         {col.items.map((sub) => (
  <Box
    key={sub.text}
    onClick={() => {
      navigate(sub.path);
      setActiveMega(null);
    }}
    sx={{
      position: "relative",
      cursor: "pointer",
      color: "#2B3674",
      px: 2,
      py: 0.8,
      pl: 4, // make space for dots
      borderRadius: "6px",
      transition: "all 0.3s ease",
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        opacity: 0,
        transition: "opacity 0.3s ease, left 0.3s ease",
      },
      "&::before": {
        left: "10px",
        backgroundColor: "#00b2ff", // dot 1 color
      },
      "&::after": {
        left: "18px",
        backgroundColor: "#ff267e", // dot 2 color
      },
      "&:hover::before, &:hover::after": {
        opacity: 1,
      },
      "&:hover": {
        backgroundColor: "#f9f9f9",
        color: "#00b2ff",
      },
    }}
  >
    {sub.text}
  </Box>
))}

                        </Box>
                      ))}
                    </Paper>
                  )}
                </Box>
              ) : (
                <Button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  sx={menuButtonStyles}
                >
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
