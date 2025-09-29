import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import overviewImage from "../assets/Market.jpg"; // replace with event-related image
import logo from "../assets/marketproduct.png"; // replace with Event Ease logo
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

const Event = () => {
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
          {/* 🔹 Logo on top */}
          <Box sx={{ mb: 3, mt: 5 }}>
            <img
              src={logo}
              alt="Event Ease Logo"
              style={{ width: "120px", height: "auto", margin: "0 auto" }}
            />
          </Box>

          <Typography
            variant="h4"
            fontSize="58px"
            fontWeight="600"
            mb="3px"
            color="black"
            gutterBottom
          >
            Event Ease
          </Typography>

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
            “Plan, Manage, and Track Events—Effortlessly”
          </Typography>

          <Typography
            variant="h6"
            fontWeight={500}
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            The all-in-one event management platform that simplifies
            registration, ticketing, communication, and analytics—
            so you can focus on delivering great experiences.
          </Typography>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1.4,
                borderRadius: "30px",
                textTransform: "none",
              }}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outlined"
              sx={{
                px: 5,
                py: 1.4,
                borderRadius: "30px",
                textTransform: "none",
              }}
            >
              Contact Sales
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
            Events are complex, but managing them shouldn’t be.
            Event Ease is an end-to-end event management platform
            that simplifies registration, ticketing, communication,
            and analytics—so you can focus on delivering great experiences.
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
              src={overviewImage}
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

      {/* ================= KEY FEATURES ================= */}
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
            Everything you need to plan, execute, and analyze successful events.
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
              {
                title: "Online Registration & Ticketing",
                description: "Secure payments with easy registration.",
              },
              {
                title: "Attendee Management",
                description:
                  "Track participants, confirmations, and no-shows with ease.",
              },
              {
                title: "Event Communications",
                description:
                  "Send reminders, updates, and notifications instantly.",
              },
              {
                title: "Analytics Reports",
                description:
                  "Measure attendance, revenue, and engagement metrics.",
              },
              {
                title: "Multi-Event Dashboard",
                description:
                  "Manage multiple events from one powerful platform.",
              },
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

      {/* ================= BUSINESS BENEFITS ================= */}
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
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={25}
            sx={{ color: "#024d87", mb: 1 }}
          >
            WHY EVENT EASE?
          </Typography>
          <Typography
            variant="h6"
            fontWeight="600"
            color="black"
            sx={{ mb: 2 }}
          >
            Save Time, Improve Engagement, <br />
            Boost ROI with Smart Insights.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            Event Ease helps you save hours of manual coordination,
            improve attendee experiences, and make data-driven decisions
            that maximize event ROI.
          </Typography>
        </Box>

        {/* Right side: Benefits */}
        <Box
          sx={{
            flex: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {[
            {
              title: "Save Time",
              subtitle: "Less manual coordination",
              desc: "Automate registration, communication, and reporting.",
            },
            {
              title: "Better Engagement",
              subtitle: "Happier Attendees",
              desc: "Deliver smooth experiences with real-time updates.",
            },
            {
              title: "Boost ROI",
              subtitle: "Data-driven insights",
              desc: "Track performance with analytics and reports.",
            },
            {
              title: "Flexible Use Cases",
              subtitle: "Conferences to workshops",
              desc: "Perfect for conferences, exhibitions, trainings & more.",
            },
          ].map((benefit, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
                borderLeft: "4px solid #07bdfaff",
                "&:hover": {
                  boxShadow: 4,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="20px"
                color="black"
                sx={{ mb: 1 }}
              >
                {benefit.title}
              </Typography>
              <Typography
                variant="body"
                fontWeight="400"
                sx={{ color: "#07bdfaff" }}
              >
                {benefit.subtitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1.2, color: "text.secondary" }}
              >
                {benefit.desc}
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

export default Event;
