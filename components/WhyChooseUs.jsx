export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#0B1F3A] mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
          <p className="text-gray-600">
            High-quality services without breaking the bank.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">Professional Expertise</h3>
          <p className="text-gray-600">
            Handled by experienced and certified professionals.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">Client-Focused</h3>
          <p className="text-gray-600">
            We tailor solutions to your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
}
