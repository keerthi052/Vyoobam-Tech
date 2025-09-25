// src/pages/ServicesPage.jsx
import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useInView } from "framer-motion";
import { Divider } from "@mui/material";
import web from "../assets/web.png";
import moblie from "../assets/moblie.jpg";
import data from "../assets/data.jpg";

const services = [
  {
    title: "Web Development – Building the Digital Face of Your Business",
    description: `Your website is more than just an online presence—it is your brand identity. At Vyoobam Tech, we design and build future-ready websites that are scalable, secure, and engaging.`,
    points: [
      "Responsive & adaptive web applications",
      "Enterprise-grade portals & e-commerce platforms",
      "API integrations & secure payment systems",
      "SEO-first architecture for higher visibility",
    ],
    impact:
      "Empowers organizations to connect with customers globally, streamline online operations, and achieve measurable growth.",
    image: web,
  },
  {
    title: "Mobile App Development – Engaging Customers Anywhere, Anytime",
    description: `In today’s mobile-first world, apps are the fastest way to engage customers. We create high-performance mobile applications that combine scalability, security, and intuitive design.`,
    points: [
      "Native iOS & Android apps",
      "Cross-platform development (Flutter, React Native)",
      "Real-time features: push notifications, geo-tracking, chatbots",
      "Secure authentication & cloud integration",
    ],
    impact:
      "Delivers apps that strengthen customer engagement, increase loyalty, and open new revenue streams.",
    image: moblie,
  },
  {
    title: "UI/UX Design – Experiences that Delight and Convert",
    description: `Great design is not about pixels—it’s about human-centered experiences. Our design process ensures users interact with your brand in the most seamless and meaningful way.`,
    points: [
      "User research & behavioral analysis",
      "Wireframes, prototypes, and usability testing",
      "Minimalist, scalable, and accessible design systems",
      "Consistent branding across platforms",
    ],
    impact:
      "Improves customer satisfaction, product adoption, and business conversions.",
    image: web,
  },
  {
    title: "Data Analytics – From Information to Intelligence",
    description: `We transform raw data into actionable intelligence, enabling businesses to make faster and smarter decisions.`,
    points: [
      "Predictive & prescriptive analytics",
      "Customer behavior insights",
      "Automated reporting & real-time dashboards",
      "AI/ML-driven data models",
    ],
    impact:
      "Transforms decision-making from guesswork to data-backed precision.",
    image: data,
  },
  {
    title: "Data Visualization – Making Complex Data Simple",
    description: `Information is powerful only when it is clear. Our data visualization services deliver interactive dashboards and real-time insights for leaders and teams.`,
    points: [
      "Rich visuals: charts, maps, and performance dashboards",
      "Custom role-based views (C-suite, managers, analysts)",
      "Integration with ERP, CRM, IoT & cloud systems",
      "Self-service analytics tools",
    ],
    impact:
      "Simplifies complex datasets, enabling faster decisions and improved business agility.",
    image: web,
  },
  {
    title: "Consulting Services – Driving Digital Transformation",
    description: `We partner with organizations to design and implement future-ready digital strategies. Our consultants bring deep expertise in technology, industry trends, and process optimization.`,
    points: [
      "IT strategy & digital roadmaps",
      "System modernization & cloud migration",
      "Workflow automation & process redesign",
      "Technology stack advisory",
    ],
    impact:
      "Helps organizations optimize operations, reduce costs, and build resilience in an evolving digital economy.",
    image: web,
  },
];

const impactStats = [
  { value: "100+", label: "Projects Delivered Globally" },
  { value: "250k+", label: "App Downloads" },
  { value: "85%", label: "Client Satisfaction" },
];

const ServiceSection = ({ service, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const isEven = index % 2 === 0;

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0b0136ff",
      }}
    >
      {/* Image */}
      <motion.img
        src={service.image}
        alt={service.title}
        style={{
          position: "absolute",
          top: 0,
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: 0,
        }}
        initial={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          borderRadius: 0,
        }}
        animate={
          inView
            ? isEven
              ? {
                  width: "48%",
                  height: "70vh",
                  top: "50%",
                  left: "5%",
                  translateY: "-50%",
                  borderRadius: 16,
                }
              : {
                  width: "45%",
                  height: "65vh",
                  top: "50%",
                  right: "5%",
                  left: "auto",
                  translateY: "-50%",
                  borderRadius: 16,
                }
            : {
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                translateY: 0,
                borderRadius: 0,
              }
        }
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        animate={
          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 30 : -30 }
        }
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          position: "absolute",
          top: "20%",
          transform: "translateY(-50%)",
          maxWidth: 520,
          width: "50%",
          zIndex: 20,
          ...(isEven ? { right: "5%" } : { left: "5%" }),
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "700", mb: 1,mt:1,color:"whitesmoke"}}>
          {service.title}
        </Typography>
        <Typography variant="body1" sx={{ color:"whitesmoke", mb: 2,pt:3 }}>
          {service.description}
        </Typography>
        {service.points.map((point, i) => (
          <Typography key={i} variant="body2" sx={{ mb:1,color:"whitesmoke", }}>
            👉 {point}
          </Typography>
        ))}
        <Typography variant="body2" sx={{ mt: 2,color:"whitesmoke",pt:3 }}>
          <b>Business Impact:</b> {service.impact}
        </Typography>
      </motion.div>
       <Divider
        sx={{
          width: "50%",          // half width
          mx: "auto",            // center horizontally
          mt: 4,                 // margin top (space from content)
          borderColor: "#ccc",   // line color
          borderBottomWidth: 2,  // line thickness
        }}
      />
    </Box>
  );
};

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          py: 12,
          textAlign: "center",
          background: "#9dbddb60",
          color: "#fff",
        }}
        data-aos="fade-up"
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, color:"#02164bff" }}>
          Transforming Ideas into Digital Excellence
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 ,color:"#02164bff"}}>
          Enterprise-grade web, mobile, and AI-powered solutions for tomorrow’s
          business
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff6f61",
            color: "#fff",
            "&:hover": { bgcolor: "#ff3b2d" },
          }}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Explore Our Services
        </Button>
      </Box>

      {/* Services */}
      <Box>
        {services.map((service, i) => (
          <ServiceSection key={i} service={service} index={i} />
        ))}
      </Box>

      {/* Impact */}
      <Box
        sx={{
          py: 10,
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
        data-aos="fade-up"
      >
        <Typography variant="h4" sx={{ mb: 6 }}>
          Driving Measurable Business Impact
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {impactStats.map((stat, index) => (
            <Box
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 150}
              sx={{
                flex: { xs: "1 1 45%", sm: "1 1 30%", md: "1 1 20%" },
              }}
            >
              <Paper sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ color: "#ff6f61", fontWeight: "bold", mb: 1 }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2">{stat.label}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          color: "#fff",
           background: "#9dbddb60",
        }}
        data-aos="zoom-in"
      >
        <Typography variant="h4" sx={{ mb: 3 , color:"#02164bff"}}>
          Ready to Accelerate Your Digital Transformation?
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "#ff6f61", "&:hover": { bgcolor: "#ff3b2d" } }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

export default Service;
