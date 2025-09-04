import React from "react";
import { Box, Typography } from "@mui/material";
import Header from './Header'
const About = () => {
  return (
    <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#f9fafb" }}>
         <Header/>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
        About Vyoobam Tech
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.8 }}>
        Vyoobam Tech is a trusted software solutions company specializing in
        modern IT services, custom applications, and enterprise systems.  
        We empower businesses with scalable, secure, and innovative technology
        to achieve long-term success.  
        <br /><br />
        Our team of passionate developers and designers works across industries
        to deliver digital solutions that simplify business processes and create
        real impact.
      </Typography>
    </Box>
  );
};

export default About;
