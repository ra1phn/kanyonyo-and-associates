"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function WhyChooseUs() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="why-choose-us"
      className="py-16"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-bold text-center mb-10"
      >
        Why Choose Us
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          variants={fadeInUp}
          className="p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
          <p className="text-gray-600">
            High-quality services without breaking the bank.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Professional Expertise</h3>
          <p className="text-gray-600">
            Handled by experienced and certified professionals.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
          <p className="text-gray-600">
            We tailor solutions to your unique needs.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
