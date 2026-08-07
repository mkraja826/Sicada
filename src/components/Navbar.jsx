import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "AI Solutions", href: "/services" },
    { name: "AI CRM & ERP", href: "/services#enterprise-ai" },
    { name: "Cybersecurity", href: "/services#cybersecurity" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between gap-8">
        <a href="/" className="flex items-center shrink-0" aria-label="Sicada Digital home">
          <img src={logo} alt="Sicada Digital" className="h-10 w-auto" />
        </a>

        <nav className="hidden xl:flex items-center gap-8 text-[14px] font-medium text-slate-700">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-700 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden xl:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition-colors shrink-0"
        >
          Talk to our team
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden border border-slate-300 p-2 text-slate-900"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-6 py-7 shadow-lg">
          <nav className="flex flex-col gap-5 text-base font-medium text-slate-800">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="hover:text-blue-700">
                {link.name}
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)} className="mt-2 bg-blue-600 text-white px-5 py-3 text-center font-semibold">
              Talk to our team
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;