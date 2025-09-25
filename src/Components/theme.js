// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif", // default font for all text
    h1: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "36px" },
    h2: { fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "30px" },
    h3: { fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "24px" },
    body1: { fontFamily: "'Roboto', sans-serif", fontSize: "16px", fontWeight: 400 },
    button: { fontFamily: "'Roboto', sans-serif", fontSize: "14px", fontWeight: 500, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          padding: "10px 20px",
        },
      },
    },
  },
});

export default theme;
