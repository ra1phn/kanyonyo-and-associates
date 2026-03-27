export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="#hero" className="flex items-center gap-3 text-xl font-bold text-[#0B1F3A] hover:text-[#C9A227] transition">
          <img src="/K-removebg-.png" alt="CPA Firm Logo" className="h-8 w-auto" />
          <span>Kanyonyo & Associates</span>
        </a>
        <div className="space-x-6">
          <a href="#services" className="hover:text-[#F00000] transition" onClick={() => typeof window !== 'undefined' && window.requestAnimationFrame(() => { if (typeof document !== 'undefined') { document.dispatchEvent(new Event('navbar-nav-click')); } })}>Services</a>
          <a href="#why-choose-us" className="hover:text-[#F00000] transition" onClick={() => typeof window !== 'undefined' && window.requestAnimationFrame(() => { if (typeof document !== 'undefined') { document.dispatchEvent(new Event('navbar-nav-click')); } })}>Why Us</a>
          <a href="#about" className="hover:text-[#F00000] transition" onClick={() => typeof window !== 'undefined' && window.requestAnimationFrame(() => { if (typeof document !== 'undefined') { document.dispatchEvent(new Event('navbar-nav-click')); } })}>About</a>
          <a href="#contact" className="hover:text-[#F00000] transition" onClick={() => typeof window !== 'undefined' && window.requestAnimationFrame(() => { if (typeof document !== 'undefined') { document.dispatchEvent(new Event('navbar-nav-click')); } })}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
