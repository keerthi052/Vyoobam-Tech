import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; 
import market2 from "../assets/market2.jpg";
import event2 from "../assets/event2.jpg";
import emart from "../assets/emart.jpg";
import sales2 from "../assets/sales2.jpg";

const products = [
  { id: 1, name: "Market Metrics", image: market2, action: "READ MORE", path:"/product" },
  { id: 2, name: "Event Ease", image: event2, action: "READ MORE" },
  { id: 3, name: "E-Grocery Mart", image: emart, action: "READ MORE" },
  { id: 4, name: "Sales Sage", image: sales2, action: "READ MORE" },
];

const ProductSection = () => {
  return (
    
    <Box sx={{ py: 8,px: 5, backgroundColor: "#02111cff " }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 5,
           mt:2,
          
          textAlign: "left",
          background: "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Products
      </Typography>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop
        centeredSlides={false}
         breakpoints={{
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
  }}
      
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Box
              sx={{
                position: "relative",
                 // 👈 fixed width
    height: 400,
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.1)",
                  filter: "brightness(0.6)", // keep zoom/dark effect
                  transition: "transform 0.6s ease, filter 0.6s ease",
                },
              }}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.85)",
                  transition: "transform 0.6s ease, filter 0.6s ease",
                }}
              />
                  <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: 3,
              color: "#fff",
              background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))", // gradient only at bottom
            }}
          >

              {/* Content Overlay - ALWAYS VISIBLE */}
              <Box
                className="contentBox"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  color: "#fff",
                  transform: "translateY(0%)", // always visible
                  opacity: 1,                  // always visible
                  backgroundColor: "rgba(0,0,0,0.4)", // semi-transparent overlay
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {product.name}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                >
                  {product.action}
                </Button>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductSection;
