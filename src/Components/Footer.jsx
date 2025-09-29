import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.jpg";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",        // default: no underline
    marginBottom: "0.5rem",
    position: "relative",
    "&:hover": {
      textDecoration: "underline", // underline on hover
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f9fafc",
        color: "#010000ff",
        textAlign: "center",
        py: 2,
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Logo */}
      

      {/* Copyright */}
      <Typography variant="body2">© 2025 Vyoobam Tech. All Rights Reserved.</Typography>

      {/* Expanded Content on Hover */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "100%",
              left: 0,
              width: "100%",
              background: "#021530ff",
              padding: "3rem 1rem",
              zIndex: 1300,
            }}
          >
            {/* Columns Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                textAlign: "left",
                mb: 3,
              }}
            >
              <Box sx={{ minWidth: 200 }}>
                <Typography variant="h6" gutterBottom color="white" sx={{mb:3}}>
                  FOOTER CONTENT
                </Typography>
                <Typography variant="body1" color="white" >
                   Vyoobam Tech is a leading technology solutions company providing innovative<br /> software, mobile, and web solutions to businesses globally.
                </Typography>
              </Box>

              <Box sx={{ minWidth: 120, borderRight: "1px solid white", pr: 2 }}>
                <Typography variant="h6" gutterBottom color="white">
                  Company
                </Typography>
                <Link component={RouterLink} to="/overview" sx={linkStyle}>Overview</Link>
                <Link component={RouterLink} to="/vision" sx={linkStyle}>Vision/Mission</Link>
                <Link component={RouterLink} to="/timeline" sx={linkStyle}>Timeline</Link>
                <Link component={RouterLink} to="/core-values" sx={linkStyle}>Core Values</Link>
              </Box>

              <Box sx={{ minWidth: 120, borderRight: "1px solid white", px: 2 }}>
                <Typography variant="h6" gutterBottom color="white">
                  PRODUCTS
                </Typography>
                <Link component={RouterLink} to="/market-metrics" sx={linkStyle}>Market Metrics</Link>
                <Link component={RouterLink} to="/events" sx={linkStyle}>Events</Link>
                <Link component={RouterLink} to="/sales-sage" sx={linkStyle}>Sales Sage</Link>
                <Link component={RouterLink} to="/e-grocery" sx={linkStyle}>E-Grocery</Link>
              </Box>

              <Box sx={{ minWidth: 120, pl: 2 }}>
                <Typography variant="h6" gutterBottom color="white">
                  SERVICES
                </Typography>
                <Link component={RouterLink} to="/web-development" sx={linkStyle}>Web Development</Link>
                <Link component={RouterLink} to="/mobile-development" sx={linkStyle}>Mobile Development</Link>
                <Link component={RouterLink} to="/data-analysis" sx={linkStyle}>Data Analysis</Link>
                <Link component={RouterLink} to="/ui-ux-design" sx={linkStyle}>UI/UX Design</Link>
                <Link component={RouterLink} to="/consulting" sx={linkStyle}>Consulting</Link>
              </Box>
            </Box>

            {/* Connect Section */}
            <Box sx={{ mb: 3 }}>
              <Button variant="contained" color="error">
                CONNECT WITH US
              </Button>
            </Box>

            {/* Social Icons */}
            <Box>
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton color="info">
                <TwitterIcon />
              </IconButton>
              <IconButton color="secondary">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Footer;
