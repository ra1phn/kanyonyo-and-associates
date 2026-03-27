export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
  <a href="#hero" className="flex items-center gap-3 text-xl font-bold text-[#0B1F3A] hover:text-[#C9A227] transition">
    <img src="/K-removebg-.png" alt="CPA Firm Logo" className="h-8 w-auto" />
    <span>Kanyonyo and Associates CPA</span>
  </a>
  <div className="flex gap-6">
    <a href="#hero" className="hover:text-[#C9A227] transition">Home</a>
    <a href="#services" className="hover:text-[#C9A227] transition">Services</a>
    <a href="#about" className="hover:text-[#C9A227] transition">About</a>
    <a href="#contact" className="hover:text-[#C9A227] transition">Contact</a>
  </div>
</nav>
  );
}
