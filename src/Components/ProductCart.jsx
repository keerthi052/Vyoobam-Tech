import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import market2 from "../assets/market2.jpg";
import event2 from "../assets/event2.jpg";
import emart from "../assets/emart.jpg";
import sales2 from "../assets/sales2.jpg";

const products = [
  { title: 'AI and Data & Analytics', image:market2 },
  { title: 'Cloud', image: event2 },
  { title: 'Cognitive Business Operations', image: emart},
  { title: 'Consulting', image: sales2 },
];

export default function ProductCard() {
  return (
    <Box sx={{ background: '#f3f5f8ff', p: 5 }}>
      <Typography variant="h4" sx={{ color: '#fff', mb: 5 }}>
        Transform your business with advanced technologies
      </Typography>

      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {products.map((prod) => (
          <Card
            key={prod.title}
            sx={{
              borderRadius: 4,
              boxShadow: 8,
              position: 'relative',
              minWidth: 280,
              minHeight: 310,
              flex: '1 1 280px',
            }}
          >
            <CardMedia
              component="img"
              image={prod.image}
              alt={prod.title}
              sx={{ height: 310, filter: 'brightness(0.7)' }}
            />
            <CardContent sx={{ position: 'absolute', top: 30, left: 30 }}>
              <Typography variant="h5" sx={{ color: '#fff', fontWeight: 500 }}>
                {prod.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          mt: 6,
          background: 'linear-gradient(90deg,#277eff,#40bdff)',
          borderRadius: 3,
          fontWeight: 600,
        }}
      >
        View all topics
      </Button>
    </Box>
  );
}
