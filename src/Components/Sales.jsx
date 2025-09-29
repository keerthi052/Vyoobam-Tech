import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import overviewImage from "../assets/Market.jpg"; // keep this or replace with Sales Sage image
import logo from "../assets/marketproduct.png"; // replace with your Sales Sage logo
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

const Sales = () => {
  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          backgroundColor: "#fff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <Box sx={{ mb: 3, mt: 5 }}>
            <img
              src={logo}
              alt="Sales Sage Logo"
              style={{ width: "120px", height: "auto", margin: "0 auto" }}
            />
          </Box>

          {/* Hero Title */}
          <Typography
            variant="h4"
            fontSize="58px"
            fontWeight="600"
            mb="3px"
            color="black"
            gutterBottom
          >
            Sales Sage
          </Typography>

          {/* Hero Subtitle */}
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{
              background:
                "linear-gradient(90deg,#FF0080,#FF8C00,#0070F3,#7928CA)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            gutterBottom
          >
            “Turn Leads into Customers. Faster.”
          </Typography>

          {/* Hero Description */}
          <Typography
            variant="h6"
            fontWeight={500}
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            A CRM-powered sales management tool to organize pipelines, boost productivity, and improve win rates.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap:"wrap" }}>
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1.4,
                borderRadius: "30px",
                textTransform: "none",
              }}
            >
              Request Demo
            </Button>
            <Button
              variant="outlined"
              sx={{
                px: 5,
                py: 1.4,
                borderRadius: "30px",
                textTransform: "none",
                borderColor: "#0070F3",
                color: "#0070F3",
              }}
            >
              Try Now
            </Button>
          </Box>
        </motion.div>
      </Box>

      {/* ================= OVERVIEW SECTION ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#f9fafc",
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="58px"
            color="black"
            gutterBottom
            sx={{ pb: 2 }}
          >
            Overview
          </Typography>
          <Typography variant="h6" fontWeight="400" color="text.secondary">
            Sales teams struggle with scattered leads and missed opportunities. Sales Sage is designed to centralize pipelines, boost team productivity, and improve win rates.
          </Typography>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              width: { xs: 280, md: 400 },
              height: { xs: 280, md: 400 },
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={overviewImage} // replace with Sales Sage overview image if you have
              alt="Overview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </Box>
      <Box sx={{ height: "40px", backgroundColor: "#f9fafc" }} />

      {/* ================= KEY FEATURES SECTION ================= */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          backgroundColor: "#00182aff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="48px"
            color="white"
            textAlign="center"
            gutterBottom
          >
            Key Features
          </Typography>

          <Typography
            variant="h6"
            fontWeight="400"
            fontSize={20}
            color="white"
            textAlign="center"
            maxWidth="700px"
            mx="auto"
            mb={6}
          >
            Lead Management, Pipeline Visualization, Sales Forecasting, Team Collaboration, and Performance Analytics.
          </Typography>

          {/* Features Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
            }}
          >
            {[
              { title: "Lead Management", description: "Capture, nurture, and convert prospects efficiently." },
              { title: "Pipeline Visualization", description: "Track deals at every stage for better control." },
              { title: "Sales Forecasting", description: "Predict revenue with accuracy to plan ahead." },
              { title: "Team Collaboration", description: "Shared notes, reminders, and alerts for productivity." },
              { title: "Performance Analytics", description: "Measure KPIs and conversion rates." },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "#051e42ff",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  borderLeft: "1px solid #f9f9f9ff",
                }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontWeight="400"
                  fontSize="23px"
                  gutterBottom
                >
                  {feature.title}
                </Typography>
                <Typography variant="body" fontWeight="400" color="white">
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>

      {/* ================= BUSINESS BENEFITS SECTION ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2, md: 8 },
          py: { xs: 8, md: 12 },
          background: "linear-gradient(90deg, #ffffff 60%, #f3f4fdff 100%)",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Left side: heading & intro */}
        <Box sx={{ flex: 1, maxWidth: 400 }}>
          <Typography variant="h6" fontWeight={600} fontSize={25} sx={{ color: "#024d87", mb: 1 }}>
            Business Benefits
          </Typography>
          <Typography variant="h6" fontWeight="600" color="black" sx={{ mb: 2 }}>
            Close deals faster <br /> Strengthen customer relationships <br /> Improve sales predictability <br /> Empower teams
          </Typography>
          <Typography variant="body" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Sales Sage helps businesses accelerate deal closures, enhance customer engagement, and provide actionable insights to drive performance.
          </Typography>
        </Box>

        {/* Right side: use-cases grid */}
        <Box
          sx={{
            flex: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {[
            { title: "B2B Sales Organizations" },
            { title: "Retail Chains with Sales Teams" },
            { title: "Service Companies Managing Clients" },
            { title: "Startups & Growing Teams" },
          ].map((useCase, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
                borderLeft: "4px solid #07bdfaff",
              }}
            >
              <Typography variant="h6" fontWeight="600" fontSize="20px" color="black">
                {useCase.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <CTA />
      <Footer />
    </>
  );
};

export default Sales;
