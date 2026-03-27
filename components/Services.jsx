export default function Services() {
  const serviceList = [
    {
      title: "Audit & Assurance",
      description: "Building trust through transparent financial reporting and rigorous compliance reviews.",
    },
    {
      title: "Tax Planning & Compliance",
      description: "Delivering accountable, accurate strategies that minimize risk and maximize long-term value.",
    },
    {
      title: "Business Advisory & Partnerships",
      description: "Collaborative advice that supports your goals with clear communication and dependable partnership.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#0B1F3A] mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {serviceList.map((service) => (
          <div
            key={service.title}
            className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
