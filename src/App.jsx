import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Foot />
    </BrowserRouter>
  );
}

export default App;