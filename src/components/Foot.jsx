import { ArrowRight, Clock3, Mail, MapPin } from "lucide-react";

function Foot() {
  const aiLinks = [
    ["AI & LLM Engineering", "/services#capabilities"],
    ["AI CRM", "/services#enterprise-ai"],
    ["AI ERP", "/services#enterprise-ai"],
    ["Machine Learning", "/services#capabilities"],
    ["AI Cybersecurity", "/services#cybersecurity"],
  ];

  const engineeringLinks = [
    ["Software Engineering", "/services"],
    ["Data Engineering", "/services"],
    ["Cloud Engineering", "/services"],
    ["AI Integration", "/services#enterprise-ai"],
    ["Industries", "/industries"],
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="text-white text-2xl font-semibold tracking-tight">SICADA DIGITAL</p>
            <p className="mt-5 text-slate-400 leading-relaxed max-w-md">
              AI-first software engineering for intelligent applications, CRM and ERP platforms, machine-learning systems and AI-assisted cybersecurity.
            </p>
            <a href="/contact" className="mt-7 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Talk to our team <ArrowRight size={17} />
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">AI Solutions</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {aiLinks.map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Engineering</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {engineeringLinks.map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/insights" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li className="flex gap-3">
                <Mail className="text-blue-400 mt-0.5 shrink-0" size={17} />
                <a href="mailto:Hr@sicadadigital.com" className="hover:text-white transition-colors break-all">Hr@sicadadigital.com</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-blue-400 mt-0.5 shrink-0" size={17} />
                <span>Australia • India</span>
              </li>
              <li className="flex gap-3">
                <Clock3 className="text-blue-400 mt-0.5 shrink-0" size={17} />
                <span>Response within 24 hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-5 text-sm text-slate-500">
          <p>© 2026 Sicada Digital. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;