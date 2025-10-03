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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpg";
import marketproduct from "../assets/marketproduct1.png";
import eventproduct from "../assets/eventproduct.png";
import salesproduct from "../assets/salesproduct.png";
import eproduct from "../assets/eproduct.png";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [activeProductFeature, setActiveProductFeature] = useState(null);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", mega: "about" },
    { text: "Products", mega: "products" },
    { text: "Services", mega: "services" },
    
    { text: "Careers", path: "/careers" },
    { text: "Internship", path: "/internship" },
    { text: "Contact", path: "/contact" },
  ];

  const megaMenus = {
    services: [
      {
        category: "Our Services",
        items: [
          { text: "Web Development", path: "/service" },
          { text: "Data Analytics", path: "/service/data" },
          { text: "Mobile App Development", path: "/service/mobile" },
          { text: "Consulting Service", path: "/service/consulting" },
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
          { text: "Awards", path: "/about/awards" },
        ],
      },
    ],
    products: [
      {
        category: "Market Metrics",
        description: "Billing, inventory, and analytics platform",
       icon: (
        <img
          src={marketproduct}
          alt="Market Metrics"
          style={{ width: 50, height: 50, objectFit: "contain" }}
        />
      ),
      items: [{ text: "Explore Market Metrics", path: "/product" }],
      },
      {
        category: "Event Ease",
        description: "Event management platform",
       icon: (
        <img
          src={eventproduct}
          alt="Market Metrics"
          style={{ width: 50, height: 50, objectFit: "contain" }}
        />
      ),
      items: [{ text: "Explore Market Metrics", path: "/Event" }],
      },
      {
        category: "Sales Sage",
        description: "CRM-powered sales management tool",
        icon: (
        <img
          src={salesproduct}
          alt="Market Metrics"
          style={{ width: 50, height: 50, objectFit: "contain" }}
        />
      ),
      items: [{ text: "Explore Market Metrics", path: "/Sales" }],
      },
      {
        category: "Vyoobam Nudge",
        description: "Smart reminder & notification platform",
        icon: <NotificationsActiveIcon sx={{ color: "#1976d2" }} />,
        items: [{ text: "Explore Vyoobam Nudge", path: "/vyoobam" }],
      },
      {
        category: "E-GroceryMart",
        description: "Seamless digital grocery store",
        icon: (
        <img
          src={eproduct}
          alt="Market Metrics"
          style={{ width: 50, height: 50, objectFit: "contain" }}
        />
      ),
      items: [{ text: "Explore Market Metrics", path: "/Allproduct" }],
      },
    ],
  };

  const languages = ["English", "தமிழ்", "हिंदी"];

  const menuButtonStyles = {
    mx: 1,
    fontFamily: "'Source Sans Pro', serif",
    
    position: "relative",
    color: "#010830ff",
    fontSize: { xs: "18px", md: "16px" },
    textTransform: "none",
    backgroundColor: "transparent",
    "&::after": {
      content: "''",
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#020748ff",
      transition: "width 0.3s ease",
    },
    "&:hover::after": { width: "100%" },
    "&:hover": { backgroundColor: "transparent", color: "#040f4dff" },
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          zIndex: 1201,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          background: "#fcfbfeff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 70, md: 100 },
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              fontWeight:"400",
              fontSize: { xs: "18px", md: "26px" },
              
              color: "#000a43ff",
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
                <Box key={item.text} sx={{ position: "relative" }}>
                  <Button
                    sx={menuButtonStyles}
                    onClick={() =>
                      setActiveMega(activeMega === item.mega ? null : item.mega)
                    }
                    endIcon={
                      <KeyboardArrowDownIcon
                        sx={{
                          transform:
                            activeMega === item.mega ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                      />
                    }
                  >
                    {item.text}
                  </Button>

                  {/* About + Services Simple Grid */}
                  {activeMega === item.mega &&
                    (item.mega === "services" || item.mega === "about") && (
                      <Paper
                        elevation={4}
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: "-50px",
                          minWidth: "400px",
                          p: 3,
                          fontFamily: "'Source Sans Pro'",
                          backgroundColor: "#fbfcfdff",
                          borderRadius: 2,
                          fontSize: { xs: "18px", md: "17px" },
                          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {megaMenus[item.mega][0].items.map((sub) => (
                          <Box
                            key={sub.text}
                            onClick={() => {
                              navigate(sub.path);
                              setActiveMega(null);
                            }}
                            sx={{
                              cursor: "pointer",
                              color: "#000000ff",
                              p: 1,
                              borderRadius: "6px",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "#04145eff",
                                color: "#f0f3f4ff",
                              },
                            }}
                          >
                            {sub.text}
                          </Box>
                        ))}
                      </Paper>
                    )}

                  {/* Products Advanced Panel */}
                  {activeMega === "products" && item.mega === "products" && (
                    <Paper
                      elevation={4}
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: "-150px",
                        minWidth: "950px",
                        p: 3,
                        backgroundColor: "#fdfeffff",
                        display: "flex",
                        borderRadius: 2,
                        fontSize: { xs: "18px", md: "17px" },
                        fontFamily: "'Source Sans Pro', serif",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* Left side list */}
                      <Box
                        sx={{
                          width: "35%",
                          borderRight: "1px solid #eee",
                          pr: 2,
                        }}
                      >
                        {megaMenus.products.map((col) => (
                          <Box
                            key={col.category}
                            onMouseEnter={() => setActiveProductFeature(col)}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              p: 1,
                              cursor: "pointer",
                              "&:hover": { background: "#102458ff", color: "#f8f8f8ff" },
                            }}
                          >
                            <span>{col.category}</span>
                            <ChevronRightIcon fontSize="small" sx={{"&:hover": {
                                backgroundColor: "#04145eff",
                                color: "#f0f3f4ff",} }}/>
                          </Box>
                        ))}
                      </Box>

                      {/* Right side details */}
                      <Box sx={{ flex: 1, pl: 3 }}>
                        {activeProductFeature ? (
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 1,
                              }}
                            >
                              {activeProductFeature.icon}
                              <Typography
                                variant="h6" 
                                sx={{  color: "#2B3674" }}
                              >
                                {activeProductFeature.category}
                              </Typography>
                            </Box>
                            <Typography  sx={{ mb: 2, color: "gray" }}>
                              {activeProductFeature.description}
                            </Typography>
                            {activeProductFeature.items.map((sub) => (
                              <Button
                                key={sub.text}
                                variant="outlined"
                                endIcon={<ArrowForwardIcon />}
                                sx={{ mt: 1 }}
                                onClick={() => {
                                  navigate(sub.path);
                                  setActiveMega(null);
                                }}
                              >
                                {sub.text}
                              </Button>
                            ))}
                          </Box>
                        ) : (
                          <Typography sx={{ color: "black" }}>
                            Hover over a product to see details
                          </Typography>
                        )}
                      </Box>
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
                    fontFamily: "'Crimson Text', serif"
                  }}
                >
                  {languages.map((lang) => (
                    <Typography
                      key={lang}
                      sx={{
                        cursor: "pointer",
                        p: 1,
                        "&:hover": { background: "#050d4aff" ,color:"white" },
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

      {/* Drawer for Mobile */}
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
