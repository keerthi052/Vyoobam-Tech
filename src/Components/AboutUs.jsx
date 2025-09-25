import { Box, Typography, Button, Stack, Avatar, Rating, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

// Sample images for cards (replace with your assets)
import laptop from "../assets/laptop.jpg";
import {
  RocketLaunch,
  Groups,
  TrendingUp,
  WorkspacePremium,
} from "@mui/icons-material";
import marketproduct from "../assets/marketproduct.png";
import eventproduct from "../assets/eventproduct.png";
import salesproduct from "../assets/salesproduct.png";
import eproduct from "../assets/eproduct.png";
import journey from "../assets/journey.jpg"
import trust from "../assets/trust.jpeg"


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutUs() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #ffffff 60%, #f3f4fdff 100%)",
        minHeight: "70vh",
        position: "relative"
      }}
    >
      {/* Cards Section (Left) */}
      <Stack direction={{ xs: "column", md: "row" }} gap={3} sx={{ flex: 1, ml: { md: 8 } }}>
          <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeUp}
  >
          <Card
            sx={{
              bgcolor: "#accde5da",
              boxShadow: 6,
              borderRadius: 6,
              minWidth: 180,
              p: 2,
              mb: 2, 
              mt:10
            }}
          >
            <img src={trust} alt="Product" style={{ width: "100%", borderRadius: 20 }} />
            <Typography sx={{ mt: 2, }}>Trusted Partner</Typography>
<Box sx={{ mt: 1 }}>
  <Typography sx={{ fontSize: 14 }}>500+ Projects</Typography>
  <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
    <Avatar
      src={marketproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    />
    <Avatar
      src={eventproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    />
    <Avatar
      src={eproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    />
    <Avatar
      src={salesproduct}
      alt="Product 1"
      sx={{ width: 24, height: 24 }}
    />
  </Stack>
</Box>
          </Card>
        </motion.div>

         <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeUp}
  >
          <Card
            sx={{
              bgcolor: "#84aeccc6",
              boxShadow: 10,
              borderRadius: 6,
              minWidth: 180,
              p: 2,
              mb: 2,
            }}
          >
            <img src={journey} alt="Product" style={{ width: "100%", borderRadius: 20 }} />
            <Typography sx={{ mt: 2,  }}>Our Journey</Typography>
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ fontSize: 14 }}>30,000+ client</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                <Avatar sx={{ width: 24, height: 24 }} />
                <Avatar sx={{ width: 24, height: 24, bgcolor: "primary.main" }} />
                <Avatar sx={{ width: 24, height: 24, bgcolor: "secondary.main" }} />
              </Stack>
            </Box>
          </Card>
        </motion.div>
      </Stack>

      {/* Info Section (Right) */}
      <Box sx={{ flex: 2, ml: { md: 30 }, textAlign: { xs: "center", md: "left" } }}>
        {/* <Typography
          variant="overline"
          sx={{ color: "#8C5BC8", letterSpacing: 2, fontWeight: 700, mb: 1 }}
        >
          A BIT
        </Typography> */}
          <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeUp}
  >
        <Typography
          variant="h4"
          sx={{ mb: 2, color: "#150357ff" }}
        >
          WHO WE ARE
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#6b7280", mb: 3, maxWidth: 400 }}
        >
          Founded in 2015, Vyoobam Tech has grown from a web solutions provider into a full-scale digital transformation company. With expertise across Web Development, Mobile Applications, Data Analytics, UI/UX Design, and Consulting, we help businesses of all sizes navigate their digital journey.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#06145aff",
            borderRadius: 3,
            px: 4,
            py: 1.5,
            
            boxShadow: 3,
            "&:hover": { bgcolor: "#192f9eff" }
          }}
        >
          EXPLORE MORE
        </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
