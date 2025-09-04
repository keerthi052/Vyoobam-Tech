// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";  
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 3,
        px: 2,
        textAlign: "center",
        borderTop: "1px solid #ddd",
        mt: 4,
      }}
    >
      {/* Links */}
      <Box sx={{ mb: 1 }}>
        {[
          "Home",
          "Contact Us",
          "Security",
          "Compliance",
          "Terms of Service",
          "Privacy Policy",
          "Cookie Policy",
        ].map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href="#"
              underline="hover"
              sx={{ mx: 1, color: "text.primary", fontSize: 14 }}
            >
              {item}
            </Link>
            {index < 6 && <span>|</span>}
          </React.Fragment>
        ))}
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        © {new Date().getFullYear()} Vyoobam Tech. All Rights Reserved.
      </Typography>

      {/* Social Media Icons */}
      <Box>
        <IconButton href="#" color="error">
          <YouTubeIcon />
        </IconButton>
        <IconButton href="#" color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="#" color="primary">
          <TwitterIcon />
        </IconButton>
        <IconButton href="#" color="secondary">
          <InstagramIcon />
        </IconButton>
        
      </Box>
    </Box>
  );
};

export default Footer;
