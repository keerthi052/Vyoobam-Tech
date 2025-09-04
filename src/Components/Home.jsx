import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logoImg from "../assets/logo.jpg";
//import laptop from "../assets/laptop.jpg"
import gorcery from "../assets/grocery2.jpg"
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import VideoPlayer from "../Components/Videoplayer";
const Home = () => {

const navigate = useNavigate();

  return (
    <Box>
     <Header/>

      {/* Main Section */}
      <Container sx={{ py: 30 }}>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h4" gutterBottom >
       
              Welcome to Vyoobam Tech
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
             As a leading software solution provider, Vyoobam Tech is
            thrilled to announce the launch of e-Grocery Mart, our
             latest innovative software product. e-Grocery Mart brings you a 
             cutting-edge online shopping experience for all your daily needs. 
            Join us and discover the future of convenient and efficient shopping!.
            </Typography>
            <Button variant="contained" size="large" sx={{ mt: 3 }}>
             Explore Now
            </Button>
          </Grid>

          {/* Right Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Featured Apps
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon sx={{ color: "#6d81c2ff", fontSize: 32 }}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="CRM"
                      secondary="Comprehensive CRM platform for customer-facing teams."
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon color="error"/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Mail"
                      secondary="Secure email service for teams of all sizes."
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <BookIcon color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Books"
                      secondary="Powerful accounting platform for growing businesses."
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                     <PeopleIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="People"
                      secondary="Organize, automate, and simplify your HR processes."
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* E-Grocery Mart Banner */}


<Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
     backgroundColor: "#7eaaa8ff", // dark background
    color: "white",
    borderRadius: "16px",
    overflow: "hidden",
    mt: 0,
    mx: 4,
    height: "400px", // fixed height for section
  }}
>
  {/* Left Text Section */}
  <Box sx={{ flex: 1, p: 4 }}>
    <Typography
      variant="h3"
      sx={{ fontWeight: "bold", mb: 3, color: "#fcd34d" }}
    >
      Future of Shopping: <br /> E-Grocerymart
    </Typography>
    <Typography variant="body1" sx={{ color: "#8e2710ff", lineHeight: 1.8 }}>
      As a leading software solution provider, Vyoobam Tech is thrilled to
      announce the launch of e-Grocery Mart, our latest innovative software
      product. e-Grocery Mart brings you a cutting-edge online shopping
      experience for all your daily needs. Join us and discover the future
      of convenient and efficient shopping!
    </Typography>
  </Box>

  {/* Right Image with Play Button */}
  <Box
    sx={{
      flex: 1,
      position: "relative",
      height: "100%", 
    }}
  >
    <img
      src={gorcery} 
      alt="banner"
      style={{
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
      }}
    />
      <VideoPlayer/>
  </Box>
</Box>

<Box
  sx={{
    width: "100%",          
       
    backgroundColor: "#dee7f0ff",
    py: 6,
    textAlign: "center",
    mt: 4,
    borderRadius: 0,        
    px: 0                   
  }}
>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 2 }}>
        About Vyoobam Tech
      </Typography>
      <Typography variant="body1" sx={{ color: "#374151", maxWidth: "600px", mx: "auto" }}>
        We are a software solutions company building innovative and secure
        digital products. Our mission is to help businesses grow with modern
        technology solutions…
      </Typography>

      {/* Read More Button */}
      <Button
        variant="text"
        sx={{ mt: 2, color: "#2563eb", fontWeight: "bold" }}
        onClick={() => navigate("/about")}
      >
        Read More →
      </Button>
    </Box>
  <Footer/>
  
  </Box>


    
  );
};

export default Home;

