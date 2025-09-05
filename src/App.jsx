//import Demo from "./Components/Demo"
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Awards from "./Components/Awards";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/Awards" element={<Awards />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
