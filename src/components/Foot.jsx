function Foot() {
  return (
    
      <footer className="bg-orange-950 text-slate-300">
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Company */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-4">
          SICADA DIGITAL
        </h3>

        <p className="text-slate-400 leading-relaxed">
          Delivering enterprise IT staffing, technology consulting,
          and digital transformation solutions across Australia and
          global markets.
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-semibold mb-4">
          Services
        </h4>

        <ul className="space-y-2">
          <li>Software Engineering</li>
          <li>Cloud & DevOps</li>
          <li>QA Automation</li>
          <li>Cybersecurity</li>
          <li>Data Engineering</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">
          Quick Links
        </h4>

        <ul className="space-y-2">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-semibold mb-4">
          Contact
        </h4>

        <ul className="space-y-3">
          <li>📧 careers@sicadadigital.com</li>
          <li>📧 contact@sicadadigital.com</li>
          <li>🌏 Australia • India</li>
          <li>⏱ Response within 24 Hours</li>
        </ul>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-slate-500 text-sm">
        © 2026 Sicada Digital. All Rights Reserved.
      </p>

      <div className="flex gap-6 text-sm">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>

    </div>
  </div>
</footer>
    
  );
}

export default Foot;