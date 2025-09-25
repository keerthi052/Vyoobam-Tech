import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import laptopImage from "../assets/laptop.jpg";
import laptopImage2 from "../assets/laptop2.jpg";
import laptopImage3 from "../assets/laptop3.jpg";
import teamMeetingImage from "../assets/metting.jpg";
import Header from "../Components/Header";
import Timeline from "../Components/Timeline";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoTelescopeSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import building from "../assets/building.jpg";

import AboutCore from "./AboutCore";
import Footer from "./Footer"
import "../Styles/About.css"
import CTA from "./CTA";
const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const backgroundImages = [laptopImage, laptopImage2, laptopImage3];

const About = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
     <Box className="about-section">
      <Header />
     
    
      <Box  className="hero-stars" sx={{ position: "relative", height: "100vh",  }}>
      {/* Stars Layers */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

        {/* Fixed Text Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fdffff7a",
            textAlign: "center",
            px: 2,
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ textAlign: "center", py: 5 }}
               className="masked-text"
            >
              Empowering Digital Transformation
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 0 }}>
              <span
                onClick={() => navigate("/")}
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Home
              </span>
              &nbsp;&gt;&nbsp;{" "}
              <span style={{ fontWeight: "bold" }}>About Us</span>
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInRight}
        >
          <Typography variant="h4" gutterBottom>
            With years of experience, our team excels in Data Analytics, Data
            Visualization, and Mobile App Development, leveraging the latest
            technologies for superior results.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "7fr 5fr",
            columnGap: { xs: 2, md: 4 },
            alignItems: "center",
            marginTop: 4,
            marginBottom: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left – text */}
          <Box sx={{ minWidth: 0 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
            >
              <Typography variant="body1">
                At Vyoobam Tech, innovation meets impact. Since our founding in 2015, we have been committed to helping businesses embrace digital transformation and thrive in an ever-changing world. From startups to enterprises, we deliver scalable, secure, and future-ready technology solutions that empower organizations to stay ahead of the competition
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
               We operate at the intersection of creativity, technology, and strategy—building solutions that are not just functional but transformative. Our services span across web and mobile development, data analytics, consulting, and enterprise applications, with one clear mission: to enable success for every client we partner with.
              </Typography>
            </motion.div>
          </Box>

          {/* Right – image card */}
          <Box sx={{ minWidth: 0 }}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Box
                  component="img"
                  src={teamMeetingImage}
                  alt="Team Meeting"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 1,
                    display: "block",
                  }}
                />
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ borderRadius: 5, height: 40, px: 3 }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      <Box
  sx={{
    py: 10,
    px: 2,
      minHeight: "100vh",
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    backgroundImage: `url(${building})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional dim effect
      zIndex: 1,
     
    },
  }}
>
  {/* Inner Content Box */}
  <Box
    sx={{
      width: "100%",
      maxWidth: "1200px",
      borderRadius: 2,
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      overflow: "hidden",
      zIndex: 2,
      backgroundColor: "rgba(255, 255, 255, 0.05)", // very light transparent box
      border: "1px solid rgba(18, 17, 17, 0.1)", // optional soft border
      backdropFilter: "blur(8px)", // adds modern glass effect
    }}
  >
    {/* Vision Section */}
    <Box
      sx={{
        flex: 1,
        p: { xs: 4, md: 6 },
        textAlign: "center",
       
    display: "flex",          // ✅ New
    flexDirection: "column", // ✅ New
    justifyContent: "center",
    alignItems: "center",   
      }}
    >
      <IoTelescopeSharp size={70} color="#4FC3F7" />
      <Typography variant="h5" fontWeight="bold" mt={2} color="#fff">
        Our Vision
      </Typography>
      <Typography variant="body1" color="rgba(255,255,255,0.8)" mt={1}>
        To be a global leader in technology innovation, enabling businesses to achieve sustainable growth and lasting impact through cutting-edge digital solutions.
      </Typography>
    </Box>

    {/* Divider */}
 {/* Vertical Divider */}
<Box
  sx={{
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    px: 2,
  }}
>
  <Box
    sx={{
      width: "1px",
      height: "70%", // or use 150px or any fixed height
      backgroundColor: "rgba(252, 240, 240, 0.3)", // soft grey line
      mx: 2,
    }}
  />
</Box>


    {/* Mission Section */}
    <Box
      sx={{
        flex: 1,
        p: { xs: 4, md: 6 },
        textAlign: "center",
         display: "flex",          // ✅ New
    flexDirection: "column", // ✅ New
    justifyContent: "center",
    alignItems: "center",
      }}
    >
      <TbTargetArrow size={70} color="#4FC3F7" />
      <Typography variant="h5" fontWeight="bold" mt={2} color="#fff">
        Our Mission
      </Typography>
      <Typography variant="body1" color="rgba(255,255,255,0.8)" mt={1}>
       To deliver customized, high-quality, and innovative solutions that align with business goals, enhance efficiency, and accelerate growth—while maintaining the highest levels of integrity, collaboration, and excellence.
      </Typography>
    </Box>
  </Box>
</Box>


      <Box id="timeline-section" sx={{ overflowX: "visible" }}>
      <Timeline />
    </Box>
      
        <Box>
          <AboutCore/>
        </Box>
        <CTA/>
        <Footer/>
    </Box>
  );
};

export default About;
