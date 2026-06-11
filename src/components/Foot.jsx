import {
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

function Foot() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company */}
          <div>
            <h3 className="text-white text-2xl font-semibold">
              SICADA DIGITAL
            </h3>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Building custom software, cloud platforms, AI solutions,
              cybersecurity systems and digital transformation products for
              modern businesses.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition"
            >
              Start a project <ArrowRight size={16} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="/services" className="hover:text-white transition">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Cloud Engineering
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  AI & Automation
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Data & Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/industries" className="hover:text-white transition">
                  Industries
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-white transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Contact
            </h4>

            <ul className="space-y-5 text-slate-400">
              <li className="flex gap-3">
                <Mail className="text-blue-400 mt-1" size={18} />
                <div>
                  <p>contact@sicadadigital.com</p>
                  <p>careers@sicadadigital.com</p>
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="text-blue-400 mt-1" size={18} />
                <span>Australia • India</span>
              </li>

              <li className="flex gap-3">
                <Clock3 className="text-blue-400 mt-1" size={18} />
                <span>Response within 24 hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-slate-500 text-sm">
            © 2026 Sicada Digital. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;