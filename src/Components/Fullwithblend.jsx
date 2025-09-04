import { Box, Container } from "@mui/material";

function Fullwidthblend({ children, bg = "#dee7f0ff" }) {
  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",          // background goes edge-to-edge
        backgroundColor: bg,
        borderRadius: 0,
        py: 6,
      }}
    >
      <Container maxWidth="lg">  {/* keeps content nicely centered */}
        {children}
      </Container>
    </Box>
  );
}
export default Fullwidthblend;
