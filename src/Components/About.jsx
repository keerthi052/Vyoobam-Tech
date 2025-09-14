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
import AboutService from "./AboutService";
import AboutCore from "./AboutCore";
import Footer from "./Footer"

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
    <Box>
      <Header />
      {/* Hero Section */}
      {/* <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(153, 183, 220, 0.29), rgba(0,198,255,0.8)), url(${laptopImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
         py:8,
         mt:12,
          color: "white",
          textAlign: "center",
          height: "350px",
         
        }}
      > */}
      <Box
        id="about-hero"
        sx={{
          height: "450px",
          position: "relative",
          overflow: "hidden",
          mt: 10,
        }}
      >
        {backgroundImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
              transition: "opacity 1.5s ease-in-out",
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
          />
        ))}

        {/* Dark Overlay to dim background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(97, 95, 95, 0.5)", // adjust opacity here
            zIndex: 1,
          }}
        />

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
                Welcome to Vyoobam Tech, where innovation meets excellence. We
                are a premier technology solutions provider dedicated to
                empowering businesses with cutting-edge digital solutions.
                Founded with a vision to drive digital transformation, Vyoobam
                Tech has grown into a trusted partner for companies looking to
                enhance their technological capabilities and achieve their
                business goals.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                Having served a diverse range of clients, we have a proven track
                record of delivering exceptional digital solutions.
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
       
      }}
    >
      <IoTelescopeSharp size={70} color="#4FC3F7" />
      <Typography variant="h5" fontWeight="bold" mt={2} color="#fff">
        Our Vision
      </Typography>
      <Typography variant="body1" color="rgba(255,255,255,0.8)" mt={1}>
        To be a global leader in technology innovation, delivering
        transformative digital solutions and shaping a better tomorrow.
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
      }}
    >
      <TbTargetArrow size={70} color="#4DB6AC" />
      <Typography variant="h5" fontWeight="bold" mt={2} color="#fff">
        Our Mission
      </Typography>
      <Typography variant="body1" color="rgba(255,255,255,0.8)" mt={1}>
        To deliver innovative and customized digital solutions that empower
        businesses to thrive and succeed in the digital age.
      </Typography>
    </Box>
  </Box>
</Box>


      <Box id="timeline-section">
        <Timeline />
      </Box>
      <Box id="service-section">
        <AboutService/>
        </Box>
        <Box>
          <AboutCore/>
        </Box>
        <Footer/>
    </Box>
  );
};

export default About;
