import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    // { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Services", href: "/services" },
    // { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Sicada Digital" className="h-11 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-700 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold transition"
        >
          Book Consultation
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden border border-slate-300 p-2 text-slate-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-5 text-base font-medium text-slate-700">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-blue-700 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-center font-semibold transition"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;