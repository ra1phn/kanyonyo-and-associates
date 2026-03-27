export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
  <div className="flex items-center gap-3 text-xl font-bold">
    <img src="/Kanyonyo-removebg.png" alt="CPA Firm Logo" className="h-8 w-auto" />
    <span>Kanyonyo and Associates CPA</span>
  </div>
  <div className="flex gap-6">
    <a href="#hero" className="hover:text-[#C9A227] transition">Home</a>
    <a href="#services" className="hover:text-[#C9A227] transition">Services</a>
    <a href="#about" className="hover:text-[#C9A227] transition">About</a>
    <a href="#contact" className="hover:text-[#C9A227] transition">Contact</a>
  </div>
</nav>
  );
}
