// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   typography: {
//     fontFamily: "'Roboto', sans-serif", // default (body, content, subheading)

//     // 🔹 Main Heading Styles (use Montserrat)
//     h1: {
//        fontFamily: "abel",
//       fontWeight: 700,
//       color: "#fff",
//       letterSpacing: "1.5px",
      
//       textTransform: "uppercase",
//     },
//     h2: {
//       fontFamily: "abel",
//       fontWeight: 600,
//       color: "#fff",
//       letterSpacing: "1px",
//     },
//     h3: {
//       fontFamily: "abel",
//       fontWeight: 600,
//       color: "#fff",
//     },
//     h4: {
//        fontFamily: "abel",
//       fontWeight: 300,
//       color: "#fefefe",
//       letterSpacing: "1.2px",
//       textTransform: "uppercase",
//     },

//     // 🔹 Subheadings (Roboto)
//     h5: {
//       fontFamily: "abel",
//       fontWeight: 600,
//       color: "#fefbfb",
//       letterSpacing: "1px",
//     },
//     h6: {
//        fontFamily: "abel",
//       fontWeight: 200,
//       color: "#fff",
//       letterSpacing: "0.5px",
//     },

//     // 🔹 Paragraph / body
//     body1: {
//        fontFamily: "abel",
//       fontSize: "1.1rem",
//       lineHeight: 1.6,
//       color: "#ddd",
//     },

//     // 🔹 Button
//     button: {
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 600,
//       letterSpacing: "1px",
//       textTransform: "uppercase",
//     },
//   },
//   // 🔹 Palette (optional)
//   // palette: {
//   //   primary: {
//   //     main: "#0066cc", // Tata-like blue
//   //   },
//   //   secondary: {
//   //     main: "#00aaff",
//   //   },
//   // },
// });

// export default theme;
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    h1: { fontWeight: 500, fontSize: "100px" },
    h2: {  fontWeight: 400, fontSize: "37px" },
    h3: { fontWeight: 400, fontSize: "2.2rem" },
    h4: { fontWeight: 600, fontSize: "37px" },
    h5: { fontWeight: 500, fontSize: "2.2rem" },
    h6: { fontWeight: 300, fontSize: "17px" },
    body1: { fontWeight: 500, fontSize: "1rem", lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: "none" },
  },
});

export default theme;
