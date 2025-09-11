import { Box, Typography, Paper, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import meeting from "../assets/metting.jpg";
import best from "../assets/best2.jpg";
import InsightsIcon from "@mui/icons-material/Insights";
import LockIcon from "@mui/icons-material/Lock";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import { motion, AnimatePresence } from "framer-motion";


const features = [
  {
    title: "Real-Time Insights",
    description:
      "Make smarter decisions with live data and actionable insights, delivered in real-time.",
    icon: <InsightsIcon />,
  },
  {
    title: "Flexible Plans",
    description:
      "Choose plans that adapt to your business needs, offering scalability and cost-effectiveness.",
    icon: <SettingsIcon />,
  },
  {
    title: "Secure Transactions",
    description:
      "Prioritize safety with encryption and robust security features.",
    icon: <LockIcon />,
  },
  {
    title: "Dedicated Support",
    description:
      "Access expert assistance 24/7 to ensure you're never alone on your journey.",
    icon: <SupportAgentIcon />,
  },
];

const Choose = () => {
   const theme = useTheme();
  const images = [meeting, best];
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
    const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
    }),
  };


  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 6 },
        backgroundColor: "#0A2A42",
        color: "#fff",
        mt: 10,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "6fr 6fr" },
          gap: 6,
          alignItems: "center",
        }}
      >
          {/* Left: Animated Image Transition */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Choosing the right technology partner is crucial for the success of
            your business. Here’s why Vyoobam Tech stands out.
          </Typography>

          {/* Animated Image Wrapper */}
          <Box sx={{ position: "relative", width: 450, height: 320, overflow: "hidden", borderRadius: 3, mt: 3 }}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={activeIndex}
          src={images[activeIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
      </AnimatePresence>
    </Box>
        </Box>
        {/* Right Section - Features */}
        <Box sx={{ display: "grid", gap: 3 }}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  backgroundColor: "#123B5E",
                  color: "#fff",
                  borderRadius: 2,
                  overflow: "hidden",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,

                  "&:hover": {
                    transform: "scale(1.04)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.35)",
                  },

                  "&:hover .feature-icon": {
                    transform: "scale(1.5)",
                    color: "#00E5FF",
                  },
                }}
              >
                {/* Icon */}
                <Box
                  className="feature-icon"
                  sx={{
                    fontSize: 36,
                    color: theme.palette.primary.main,
                    transition: "transform 0.3s ease, color 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 48,
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Text */}
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2">{feature.description}</Typography>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Choose;
