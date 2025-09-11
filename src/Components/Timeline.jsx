import React, { useRef } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import {
  TrendingUp,
  EmojiObjects,
  Group,
  TrackChanges,
  BusinessCenter,
  Cloud,
  ShowChart,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";

// Brand Gradient Colors
const themeColors = {
  start: "#8BC34A",
  end: "#2196F3",
};

// Milestones Data
const milestones = [
  {
    year: "2022",
    title: "Launch",
    description: "Vyoobam Tech initial launch",
    details: "Company founded and core team setup.",
    Icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Academic",
    description: "Vyoobam Academic Initiatives",
    details: "Launched training & internship programs.",
    Icon: EmojiObjects,
  },
  {
    year: "2024",
    title: "Community",
    description: "Business & dev community building",
    details: "Partnered with startups and communities.",
    Icon: Group,
  },
  {
    year: "2025",
    title: "AI Products",
    description: "Launching AI-based solutions",
    details: "Product suite for healthcare & retail AI.",
    Icon: TrackChanges,
  },
  {
    year: "2026",
    title: "Expansion",
    description: "Global expansion plans",
    details: "Setup offices in Singapore & Dubai.",
    Icon: BusinessCenter,
  },
  {
    year: "2027",
    title: "SaaS Platform",
    description: "Launching cloud-based SaaS",
    details: "Enterprise subscription platform.",
    Icon: Cloud,
  },
  {
    year: "2028",
    title: "IPO",
    description: "Planning public offering",
    details: "Investor onboarding and IPO prep.",
    Icon: ShowChart,
  },
];

const spacingX = 200;
const startX = 60;

const Timeline = () => {
  const svgWidth = startX * 2 + spacingX * (milestones.length - 1);
  const pathRef = useRef();
  const isInView = useInView(pathRef, { once: true });

  const pathD = milestones
    .map((_, i) => {
      const x = startX + spacingX * i;
      const y = 160;
      if (i === 0) return `M ${x} ${y}`;
      const prevX = startX + spacingX * (i - 1);
      const controlX = (prevX + x) / 2;
      const controlY = i % 2 === 0 ? 60 : 260;
      return `Q ${controlX} ${controlY}, ${x} ${y}`;
    })
    .join(" ");

  return (
    <Box sx={{ overflowX: "auto", py: 12, background: "#e1daff3f" }}>
       <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ textAlign: "center", py: 5,pt:1}}
            >
            Milestone
            </Typography>
      <Box sx={{ width: svgWidth, mx: "auto", position: "relative", height: 420 }}>
        <svg width={svgWidth} height="100%" style={{ position: "absolute", top: 0 }}>
          <defs>
            <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={themeColors.start} />
              <stop offset="100%" stopColor={themeColors.end} />
            </linearGradient>
          </defs>

          <motion.path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="url(#timeline-gradient)"
            strokeWidth={10}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {milestones.map((_, i) => {
            const x = startX + spacingX * i;
            const y = 160;
            const lineY = i % 2 === 0 ? y - 90 : y + 90;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={8} fill="#e1aecd95" stroke="#888" strokeWidth={2} />
                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={lineY}
                  stroke="#bbb"
                  strokeDasharray="4,2"
                  strokeWidth={1}
                />
              </g>
            );
          })}
        </svg>

        {/* Content */}
        {milestones.map(({ year, title, description, details, Icon }, i) => {
          const x = startX + spacingX * i;
          const y = i % 2 === 0 ? 20 : 230;
          return (
            <Box
              key={i}
              sx={{
                position: "absolute",
                top: y,
                left: x - 60,
                width: 120,
                color:"#393131f9",
                textAlign: "center",
              }}
            >
              <Tooltip
                title={
                  <Box sx={{ px: 1, py: 0.5 }}>
                    <Typography fontSize={12} fontWeight="bold" >
                      {details}
                    </Typography>
                  </Box>
                }
                arrow
                enterTouchDelay={0}
                
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: "2px solid #aeaeae88",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s ease, background 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      backgroundColor:"#9ad3df88",
                      color: "#fcfafaff",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 28, color: "#c59191ff" }} />
                </Box>
              </Tooltip>
              <Typography mt={1} fontWeight="bold" fontSize={14}>
                {year}
              </Typography>
              <Typography fontSize={13}>{title}</Typography>
              <Typography fontSize={12} color="text.secondary">
                {description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Timeline;
