import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sicada Digital"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/services" className="hover:text-orange-700 transition">
            Services
          </a>
          <a href="/careers" className="hover:text-orange-700 transition">
            Careers
          </a>
          <a href="/about" className="hover:text-orange-700 transition">
            About
          </a>
          <a href="/contact" className="hover:text-orange-700 transition">
            Contact
          </a>
        </nav>

        <a
          href="/admin"
          className="hidden md:inline-block bg-orange-700 hover:bg-orange-800 text-white px-5 py-2 rounded-xl text-sm font-semibold transition shadow-sm"
        >
          Admin
        </a>

        {/* Mobile Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-xl border border-slate-300 p-2 text-slate-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-5 text-base font-medium">
            <a
              href="/services"
              onClick={() => setOpen(false)}
              className="hover:text-orange-700 transition"
            >
              Services
            </a>

            <a
              href="/careers"
              onClick={() => setOpen(false)}
              className="hover:text-orange-700 transition"
            >
              Careers
            </a>

            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-orange-700 transition"
            >
              About
            </a>

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-orange-700 transition"
            >
              Contact
            </a>

            <a
              href="/admin"
              onClick={() => setOpen(false)}
              className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-3 rounded-xl text-center font-semibold transition shadow-sm"
            >
              Admin 
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;