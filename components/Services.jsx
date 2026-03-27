"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function Services() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-16"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-bold text-center mb-10"
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Litigation", "Corporate Law", "Consultation"].map((service, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">
              Professional legal services tailored to your needs.
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
