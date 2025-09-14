import { Box, Typography, Breadcrumbs, Link } from '@mui/material';

const Herosection = ({ backgroundImage, title }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: { xs: 10, md: 16 },
        px: 4,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '60vh',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ zIndex: 2 }}>
        <Typography variant="h3" fontWeight="bold">
          {title}
        </Typography>

        <Breadcrumbs
          separator="→"
          sx={{
            mt: 2,
            justifyContent: 'center',
            display: 'flex',
            color: 'white',
          }}
        >
          <Link underline="hover" color="inherit" href="/">
            VCODEZ
          </Link>
          <Typography color="inherit">{title?.toUpperCase()}</Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default Herosection;
