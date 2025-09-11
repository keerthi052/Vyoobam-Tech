import { Typography, Button, Container, Box } from "@mui/material";
//import logoImg from "../assets/logo.jpg";
import laptop from "../assets/laptop.jpg";
import city from "../assets/city.jpg";
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
      <Box sx={{ backgroundColor: "#cbc3f942", py: 0 }}>
        <Header />

        {/* Main Section */}

        <Container sx={{ py: 20 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "7fr 5fr" },
              columnGap: { xs: 2, md: 4 },
              alignItems: "center",
            }}
          >
            <motion.div
              ref={ref}
              variants={slideInLeft}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              {/* Left Content */}
              <Box>
                <Typography variant="h4" gutterBottom>
                  Welcome to Vyoobam Tech
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                  As a leading software solution provider, Vyoobam Tech is
                  thrilled to announce the launch of e-Grocery Mart, our latest
                  innovative software product. e-Grocery Mart brings you a
                  cutting-edge online shopping experience for all your daily
                  needs. Join us and discover the future of convenient and
                  efficient shopping!
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={() => navigate("/careers")}
                >
                  Explore Now
                </Button>
              </Box>
              <Box />
            </motion.div>

            {/* Right Image */}
            <motion.div
              ref={ref}
              variants={slideInLeft}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={city}
                  alt="Vyoobam Tech"
                  sx={{
                    width: "100%",
                    maxHeight: 400,
                    borderRadius: 4,
                    objectFit: "cover",
                    boxShadow: 3,
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

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
              fontWeight: 600,
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
              fontWeight: "default",
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
            Innovative software solutions must not only meet current needs but
            also anticipate future challenges
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

      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.02}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={2500}
      >
        <Box
          ref={aboutRef}
          sx={{
            width: "100%",
            position: "relative",
            backgroundImage: `url(${laptop})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            py: { xs: 8, md: 12 },
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            mt: 4,
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              color: "#fff",
              maxWidth: "700px",
            }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
              >
                About Vyoobam Tech
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
            >
              <Typography variant="body1" sx={{ color: "#e5e7eb", mb: 2 }}>
                We are a software solutions company building innovative and
                secure digital products. Our mission is to help businesses grow
                with modern technology solutions…
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
            >
              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  color: "#fff",
                  borderColor: "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
                onClick={() => navigate("/about#about-hero")}
              >
                Read More →
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Tilt>
      <Choose />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default Home;
