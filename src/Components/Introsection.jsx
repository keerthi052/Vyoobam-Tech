import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Introsection = ({ title, description, benefits, image }) => (
  <Box sx={{ py: 10, px: 4 }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 6,
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={image}
        alt="Introduction"
        sx={{
          width: { xs: '100%', md: '50%' },
          borderRadius: 2,
        }}
      />

      {/* Text Section */}
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Benefits
        </Typography>

        <List>
          {benefits.map((benefit, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemIcon sx={{ color: 'primary.main', minWidth: 'auto', mr: 1 }}>
                <CheckCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={benefit} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </Box>
);

export default Introsection;
