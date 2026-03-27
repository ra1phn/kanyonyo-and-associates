"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import WhyChooseUs from "../../components/WhyChooseUs";
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
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src="/Kanyonyo-removebg.png"
            alt="Kanyonyo logo"
            className="h-32 md:h-40 w-auto opacity-90"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>


        <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-xl mx-auto">
          Reliable, affordable, and professional CPA services tailored to your needs.
        </p>

        <p className="text-sm text-gray-500 mb-8">
          ✔ Registered Professionals | ✔ Affordable Pricing | ✔ Fast Turnaround
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

      <section id="services">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Services />
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WhyChooseUs />
      </motion.div>

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
