export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
        Get in Touch
      </h2>
      <p className="text-gray-600 mb-8">
        Have questions or want to book a consultation? Reach out to us and we will get back to you promptly.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-xl mx-auto">
        <a
          href="tel:+254722670127"
          className="border border-[#0B1F3A] text-[#0B1F3A] px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Call Us
        </a>
        <a
          href="mailto:chegesk@gmail.com"
          className="bg-[#C9A227] text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}
