import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav>
       <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Sicada Digital"
    className="h-12 w-auto"
  />

  <div>
    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
      
    </h1>

    <p className="text-sm text-slate-500">
      
    </p>
  </div>
</div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            
            <a href="/services" className="hover:text-orange-700 transition">
              Services
            </a>
            <a href="/Careers" className="hover:text-orange-700 transition">
              Careers
            </a>
            <a href="/about" className="hover:text-orange-700 transition">
              About
            </a>
            <a href="/contact" className="hover:text-orange-700 transition">
              Contact
            </a>
          </nav>

          <button className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-2 rounded-xl text-sm font-semibold transition shadow-sm">
            Get Started
          </button>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;