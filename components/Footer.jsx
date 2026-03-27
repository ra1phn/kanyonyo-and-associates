export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white py-12 px-6 text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} CPA Firm. All rights reserved.</p>
      <div className="flex justify-center gap-6 mb-4">
        <a href="tel:+254722670127" className="hover:underline">
          Call Us
        </a>
        <a href="mailto:chegesk@gmail.com" className="hover:underline">
          Email Us
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        Designed by Ralph Njuguna | Affordable professional web solutions
      </p>
    </footer>
  );
}
