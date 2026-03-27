import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
       
       {/* Hero Section */}     
      <section id="hero" className="bg-[#F8FAFC] py-24 px-6 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/Kanyonyo-removebg.png"
            alt="Kanyonyo logo"
            className="h-32 md:h-40 w-auto opacity-90 animate-slide-in"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
          Professional Accounting & Tax Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Helping individuals and businesses stay compliant, organised, and financially confident.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#contact"
            className="bg-[#C9A227] text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Book Consultation
          </a>
          <a
            href="#services"
            className="border border-[#0B1F3A] text-[#0B1F3A] px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Our Services
          </a>
        </div>
      </section>

      <section id="why-choose-us" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">Why choose us</h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Kanyonyo Associates are a leading partner for financial audit, services and association.
        </p>
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
