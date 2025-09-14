import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const Contactsection = () => (
  <Box sx={{ py: 8, px: 4 }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start',
        gap: 6,
      }}
    >
      {/* Left Section: Heading & Description */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Let’s Build Something Great Together!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Fill out the form below, and let’s make your vision a reality!
        </Typography>
      </Box>

      {/* Right Section: Form */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, flex: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Apply for Service
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Row 1 */}
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <TextField label="Name" variant="filled" fullWidth />
            <TextField label="Phone" variant="filled" fullWidth />
          </Box>

          {/* Row 2 */}
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <TextField label="Email" variant="filled" fullWidth />
            <TextField label="Expect from us" variant="filled" fullWidth />
          </Box>

          {/* Row 3 */}
          <TextField label="Deadline" variant="filled" fullWidth />

          {/* Submit Button */}
          <Button variant="contained" fullWidth sx={{ py: 1.5 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  </Box>
);

export default Contactsection;
