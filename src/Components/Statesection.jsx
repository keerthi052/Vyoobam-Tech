import { Box, Typography, Paper } from '@mui/material';

const StatCard = ({ title, subtitle }) => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      textAlign: 'center',
      borderRadius: 3,
      minWidth: 220,
      flex: 1,
    }}
  >
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      {title}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      {subtitle}
    </Typography>
  </Paper>
);

const Statesection = () => (
  <Box sx={{ py: 8, px: 4, backgroundColor: '#f4f8fd' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <StatCard title="7+" subtitle="Years of Experience" />
      <StatCard title="500+" subtitle="Happy Customers" />
      <StatCard title="1000+" subtitle="Projects Delivered" />
    </Box>
  </Box>
);

export default Statesection;
