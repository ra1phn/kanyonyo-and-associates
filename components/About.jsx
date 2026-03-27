export default function About() {
  return (
    <section className="py-24 px-6 bg-[#F8FAFC] text-center">
      <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
        About Our Firm
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        We are a professional CPA firm committed to trust, accountability, transparency, and partnership.
        Our expertise covers audit & assurance, tax planning & compliance, and business advisory.
        We deliver high-quality, responsible guidance that helps individuals and businesses grow confidently.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="/contact"
          className="bg-[#C9A227] text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Contact Us
        </a>
        <a
          href="/services"
          className="border border-[#0B1F3A] text-[#0B1F3A] px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
