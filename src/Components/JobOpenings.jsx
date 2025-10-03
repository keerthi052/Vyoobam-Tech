import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import adminImg from "../assets/admin.jpg";
import fullstackImg from "../assets/fullstack.jpg";
import softwareImg from "../assets/software.jpg";
import wordpressImg from "../assets/wordpress.jpg";
import reactnativeImg from "../assets/react.jpg";
import heroImg from "../assets/vyoobamrep.png";
import Header from "./Header";
import Footer from "./Footer";

;
import image from "../assets/CTA.jpg"; // your CTA illustration
import { useNavigate } from "react-router-dom";

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language'; // used instead of Html
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const jobOpenings = [
  {
    title: "Admin",
    location: "Kumbakonam / Remote",
    overview:
      "Manage day-to-day office operations, documentation, and team coordination. Ensure smooth workflow and support management in decision-making.",
    requirements: [
      "Graduate in Business Administration / Commerce",
      "Strong communication & organizational skills",
      "Knowledge of MS Office / Google Workspace",
    ],
    image: adminImg,
    icon: AdminPanelSettingsIcon
  },
  {
    title: "Full Stack Developer",
    location: "Hybrid (Kumbakonam + Remote)",
    overview: "Work on both front-end and back-end systems to build scalable applications.",
    requirements: [
      "Proficiency in JavaScript, React.js, Node.js, Express.js",
      "Experience with databases (MySQL/MongoDB)",
      "REST API integration, Git, CI/CD knowledge",
    ],
    image: fullstackImg,
    icon: CodeIcon
  },
  {
    title: "Software Engineer",
    location: "Flexible (Remote option available)",
    overview: "Design, develop, and test software applications with focus on performance and scalability.",
    requirements: [
      "Knowledge of Python, Java, or .NET",
      "Strong problem-solving skills",
      "Exposure to SDLC & Agile methodology",
    ],
    image: softwareImg,
    icon: StorageIcon
  },
  {
    title: "WordPress Developer",
    location: "Kumbakonam / Remote",
    overview:
      "Develop, customize, and maintain WordPress websites and plugins.",
    requirements: [
      "Experience with WordPress themes & plugins",
      "Strong skills in PHP, HTML, CSS, JavaScript",
      "Knowledge of SEO best practices",
    ],
    image: wordpressImg,
    icon: LanguageIcon
  },
  {
    title: "React Native Developer",
    location: "Remote / Hybrid",
    overview:
      "Build high-performance cross-platform mobile apps using React Native.",
    requirements: [
      "Proficiency in React Native, Redux, REST APIs",
      "Experience in publishing apps to Play Store / App Store",
      "Good knowledge of mobile UI/UX standards",
    ],
    image: reactnativeImg,
    icon: PhoneIphoneIcon
  },
];

const JobSection = ({ job, reverse }) => {
  const theme = useTheme();
  const IconComp = job.icon;

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        color: "#000",
        py: { xs: 6, md: 10 },
        borderBottom: "1px solid #eee",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Image with hover */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              component="img"
              src={job.image}
              alt={job.title}
              sx={{
                maxWidth: 280,
                width: "100%",
                height: 280,
                borderRadius: 4,
                boxShadow: 3,
                objectFit: "cover",
                transition: "0.4s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                },
              }}
            />
          </Box>

          {/* Job Details */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
              color="#000"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <IconComp sx={{ fontSize: 34, color: "#183278" }} />
              {job.title}
            </Typography>
            <Typography variant="subtitle1" fontWeight="medium" mb={1} color="#333">
              Location: {job.location}
            </Typography>
            <Typography variant="body1" mb={2} fontWeight="medium" color="#222">
              <strong>Role Overview:</strong> {job.overview}
            </Typography>
            <Typography variant="body1" mb={1} fontWeight="medium" color="#222">
              <strong>Requirements:</strong>
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: "#222" }}>
              {job.requirements.map((req, idx) => (
                <Typography
                  key={idx}
                  component="li"
                  sx={{ mb: 1, fontSize: 16 }}
                >
                  {req}
                </Typography>
              ))}
            </Box>

            {/* Apply Now Button */}
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                borderColor: "#183278",
                color: "#183278",
                "&:hover": { background: "#183278", color: "#fff" },
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const HeroZigzagPage = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: "75vh", md: "66vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(90deg, #183278 60%, #fff 100%)",
          pb: { xs: 4, md: 8 },
          mt:12
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,ml:6
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" fontWeight="400" color="white" sx={{ mb: 3 }}>
                Your Future Begins Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#e5eefd", maxWidth: 420, mb: 4 }}
              >
                Empower your career—Join our team of innovators and shape tomorrow.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
                  borderRadius: 3,
                  minWidth: 140,
                  textTransform: "none",
                  fontSize: 18,
                  py: 1.7,
                  px: 4,
                  fontWeight: 500,
                  boxShadow: "0 8px 24px 0 #1e88e540",
                  "&:hover": { background: "linear-gradient(90deg, #00e4c9, #3f5eec)" },
                }}
              >
                Apply Now
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Box
                component="img"
                src={heroImg}
                alt="hero"
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  borderRadius: 7,
                  boxShadow: 6,
                  objectFit: "cover",
                  border: "5px solid #f4f9ff",
                  mt:7
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Job Sections */}
      {jobOpenings.map((job, idx) => (
        <JobSection key={job.title} job={job} reverse={idx % 2 !== 0} />
      ))}
      {/* Call to Action Section */}
 <Box sx={{ backgroundColor: "white", py: 6 }}>
      <section
        style={{
          background: "linear-gradient(90deg, #f6e7ff 0%, #e3eaff 100%)",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3rem 2.5rem",
          margin: "0 auto",
          maxWidth: "1100px",
          width: "100%",
          boxShadow: "0 8px 32px rgba(80, 80, 120, 0.14)",
          gap: "2rem",
        }}
      >
        {/* Left: Text Content */}
        <div style={{ maxWidth: "480px" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#22223b",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Didn’t Find Your Role? 
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.05rem", color: "#37385b", mb: 3 }}
          >
            Great transformation begins with people who are passionate and
            creative. Even if you don’t see a role that fits today, share your
            profile with us. We’ll reach out when the right opportunity opens.
          </Typography>

          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 500,
              background: "linear-gradient(90deg, #3f5eec, #00e4c9)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #00e4c9, #3f5eec)",
              },
            }}
            href="https://forms.gle/your-general-application-form" // 🔹 Replace with your Google Form link
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Anyway →
          </Button>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src={image}
            alt="Join Our Team"
            style={{
              borderRadius: "18px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
              maxWidth: "360px",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
    </Box>


      <Footer />
    </>
  );
};

export default HeroZigzagPage;
