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
import laptop from "../assets/laptop.jpg";

const Demo = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${laptop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #2B3674, #4A60A1)", // attractive gradient
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar>
          {/* Logo + Brand */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              fontFamily: "'Russo One', sans-serif",
              fontSize: "26px",
              letterSpacing: "1px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            <img
              src={logoImg}
              alt="Logo"
              style={{
                height: 45,
                marginRight: 10,
                borderRadius: "8px",
                mixBlendMode: "multiply",
              }}
            />
            Vyoobam Tech
          </Typography>

          {/* Menu Buttons */}
          <Button color="inherit" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" sx={{ mx: 1 }}>
            About
          </Button>
          <Button color="inherit" sx={{ mx: 1 }}>
            Services
          </Button>
          <Button color="inherit" sx={{ mx: 1 }}>
            Contact
          </Button>

          {/* Action Buttons */}
          <Button
            variant="outlined"
            sx={{
              ml: 2,
              color: "#fff",
              borderColor: "#fff",
              "&:hover": { borderColor: "#FFD700", color: "#FFD700" },
            }}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: "#FFD700",
              color: "#000",
              "&:hover": { backgroundColor: "#FFC107" },
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Container sx={{ py: 12 }}>
        <Grid container spacing={6} justifyContent="space-between" sx={{ color: "#fff" }}>
          {/* Left Section */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontFamily: "'Playfair Display', serif",fontWeight: "bold", textShadow: "2px 2px 6px rgba(10, 10, 10, 0.6)"  }}
            >
              Welcome to Vyoobam Tech
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: "#f1f1f1" }}>
              Building Innovative Digital Solutions 🚀
            </Typography>
            <Typography variant="h6" color="#e0e0e0" paragraph>
              At Vyoobam Tech, we craft cutting-edge software solutions that
              simplify your business operations. From CRM to HR management, we
              provide tools that empower your workplace and enhance productivity.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                backgroundColor: "#FFD700",
                color: "#000",
                "&:hover": { backgroundColor: "#FFC107" },
              }}
            >
              Explore Our Solutions
            </Button>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: "12px",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#2B3674" }}>
                Featured Solutions
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="CRM Platform"
                      secondary="Manage customers & sales pipelines efficiently."
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Secure Mail"
                      secondary="Fast, secure, and encrypted business communication."
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <BookIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Smart Books"
                      secondary="Cloud accounting for growing businesses."
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="HR Management"
                      secondary="Streamline recruitment, payroll & employee data."
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Demo;
