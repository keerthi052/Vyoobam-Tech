import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import aboutservice from '../assets/aboutservice.jpg'; // Replace with correct image

const services = [
  {
    title: 'Mobile Development',
    description: 'We build cross-platform mobile apps with beautiful UI and robust performance.',
    icon: <SmartphoneIcon />,
  },
  {
    title: 'Mobility Services',
    description: 'Smart transportation and IoT-based mobility platforms for enterprises.',
    icon: <DirectionsCarIcon />,
  },
  {
    title: 'Software Consulting',
    description: 'Expert advice and solutions for your digital transformation journey.',
    icon: <SupportAgentIcon />,
  },
  {
    title: 'Custom Software',
    description: 'Tailor-made software solutions built to meet your business needs.',
    icon: <CodeIcon />,
  },
  {
    title: 'Cybersecurity',
    description: 'Secure your infrastructure with modern threat detection and prevention.',
    icon: <SecurityIcon />,
  },
  {
    title: 'Cloud Integration',
    description: 'Leverage the power of cloud computing to scale your business.',
    icon: <CloudIcon />,
  },
];

const AboutService = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handleScroll = (direction) => {
    const maxIndex = services.length - visibleCards;
    if (direction === 'left') {
      setStartIndex((prev) => Math.max(prev - visibleCards, 0));
    } else {
      setStartIndex((prev) => Math.min(prev + visibleCards, maxIndex));
    }
  };

  const visibleServices = services.slice(startIndex, startIndex + visibleCards);

  return (
    <Box sx={{ backgroundColor: '#dbd9d92e', pb: 8 ,pt:3}}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mt: 6, mb: 3 }}
      >
        Our Services
      </Typography>

      {/* Banner Image */}
      <Box display="flex" justifyContent="center">
        <Box
          component="img"
          src={aboutservice}
          alt="Our Services"
          sx={{
            width: '100%',
            maxWidth: '1000px',
            height: { xs: '200px', md: '300px' },
            objectFit: 'cover',
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Carousel with Overlapping Cards */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: { xs: -6, md: -10 },
          px: 2,
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={() => handleScroll('left')}
          disabled={startIndex === 0}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 2,
            backgroundColor: '#4e8590ff',
            boxShadow: 2,
            '&:disabled': { opacity: 0.3 },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Cards */}
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            zIndex: 1,
            flexWrap: 'nowrap',
          }}
        >
          {visibleServices.map((service, index) => (
            <Card
  key={index}
  sx={{
    width: 300,
    textAlign: 'center',
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: '#fff',
    p: 3,
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 6,
    },
  }}
>

              <Avatar
                sx={{
                  bgcolor: 'black',
                  mb: 2,
                  width: 56,
                  height: 56,
                  mx: 'auto',
                }}
              >
                {service.icon}
              </Avatar>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" sx={{ fontWeight: 'bold' }}>
                  MORE
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => handleScroll('right')}
          disabled={startIndex + visibleCards >= services.length}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 2,
            backgroundColor: '#4e8590ff',
            boxShadow: 2,
            '&:disabled': { opacity: 0.3 },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutService;
