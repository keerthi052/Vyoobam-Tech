import { Typography, Button, Container, Box } from "@mui/material";
//import logoImg from "../assets/logo.jpg";
import laptop from "../assets/laptop.jpg";

// import bgVideo from "../assets/video.mp4"
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServiceSlider from "../Components/ServiceSlider";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import Choose from "../Components/Choose";
import TestimonialSlider from "../Components/TestimonialSlider";
import ProductSection from "./ProductSection";
import Contactsection from "./Contactsection";
import AboutUs from "./AboutUs";

const Home = () => {
  const navigate = useNavigate();
  const serviceSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (serviceSectionRef.current) {
      observer.observe(serviceSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Inside your Home component, at the top
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const [ref, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slideInLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  


  return (
    <div>
      <Box sx={{ backgroundColor: "#d7e5f7ff", py: 0 }}>
        

        {/* 🔹 Fullscreen Fixed Background Video */}
<Box
  sx={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 0, // behind all content
    overflow: "hidden",
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔹 Optional Dark Overlay */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(31, 31, 32, 0.5)", // adjust darkness
    }}
  />
</Box>


        {/* Main Section */}
        
<Header />
<Box
  sx={{
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "transparent", // ✅ allow video to be seen
    zIndex: 1,
    px: 2,
  }}
>
       

          {/* Center Content */}
          <Container
            sx={{
              py: { xs: 12, md: 20 },
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <motion.div
              ref={ref}
              variants={slideInLeft}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              style={{ maxWidth: "800px" }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{mt: 5,
                  color: "#fff",
                
                   fontSize: { xs: "1.6rem", md: "2.4rem",    },
                 
                }}
              >
                “Empowering Businesses with Digital Innovation”
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
               
                sx={{ mt: 5, color: "#ddd", fontSize: { xs: "1rem", md: "1.2rem", } }}
              >
                At Vyoobam Tech, we deliver next-gen IT solutions that help businesses scale faster,
                operate smarter, and adapt better in the digital-first world. From web and mobile applications
                to analytics and enterprise platforms, we are the technology partner that drives your success.
              </Typography>
              {/* <Box sx={{mt:3}}> <BlobButton >GET IN TOUCH </BlobButton></Box> */}
             
            </motion.div>
          </Container>
        </Box>
        </Box>
    
     
      
<Box sx={{ position: "relative", zIndex: 1 }}>
      <Box
        ref={serviceSectionRef}
        sx={{
          py: 0,
          px: 2,
          backgroundColor: "#fff",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0px)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* 👇 Heading Section with Logo-Matched Gradient */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="subtitle2"
            sx={{
             
              fontSize: "0.875rem",
              background:
                "linear-gradient(to right, #000a09ff, #020004ff, #000000ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: 1,
              py: 3,
            }}
          >
            WHAT DO WE OFFER?
          </Typography>

          <Typography
            variant="h4"
            sx={{
             
              mt: 1,
              mb: 1,
              background:
                "linear-gradient(to right, #00e4c9, #00b2ff, #ff267e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Services
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: "#6b7280",
            }}
          >
            We provide end-to-end technology services designed to deliver measurable business outcomes:
          </Typography>

          <Box
            sx={{
              height: "3px",
              width: "60px",
              background:
                "linear-gradient(to right, #00e4c9, #a033ff, #ff267e)",
              mx: "auto",
              mt: 2,
              borderRadius: "4px",
            }}
          />
        </Box>

        {/* 👇 Service Slider */}
        <ServiceSlider />
      </Box>

     <AboutUs/>
     
      <ProductSection/>
     
      
      <TestimonialSlider />
       <Choose />
      <Contactsection/>     
       <Footer />
      </Box>
    </div>
  );
};

export default Home;
