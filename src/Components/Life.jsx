import React from "react";
import { Box, Typography } from "@mui/material";
import vector from "../assets/vector3.jpeg" // replace with your image path

const Life = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${vector})`, // background image
        backgroundSize: "cover",             // cover entire section
        backgroundPosition: "center",        // center image
        backgroundRepeat: "no-repeat",       // no repeat
        color: "white",
        py: 6,                               // vertical padding
        px: { xs: 2, sm: 4 },                // responsive horizontal padding
        textAlign: "center",
        height:"100%"
      }}
    >
      <Typography variant="h4" color="black" sx={{ mb:3,mt:10, fontWeight: 600, textShadow: "2px 2px 4px rgba(249, 249, 249, 0.7)" }}>
        Life at Vyoobam Tech (Culture Teaser)
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.8, textShadow: "1px 1px 3px rgba(252, 250, 250, 0.6)" ,mb: 10}}>
        At Vyoobam Tech, work is more than just coding. We foster a culture of innovation,
        learning, and celebration. From office events and festive gatherings to hackathons
        and training programs, our team thrives in an environment where creativity meets collaboration.
      </Typography>
    </Box>
  );
};

export default Life;
