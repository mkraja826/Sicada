import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Foot from "./components/Foot";
import Navbar from "./components/Navbar";
import SicadaChat from "./components/SicadaChat";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
      <Foot />
      <SicadaChat />
    </BrowserRouter>
  );
}

export default App;