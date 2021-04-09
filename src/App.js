import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import particlesConfig from "./components/config/configParticles";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div style={{ position: "absolute" }}>
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Navigation />
        <Home />
        <About />
        <Resume />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
