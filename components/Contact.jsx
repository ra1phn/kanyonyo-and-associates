"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function Contact() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="contact"
      className="py-16"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-bold text-center mb-10"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        variants={fadeInUp}
        className="p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 max-w-xl mx-auto text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-gray-600 mb-8"
        >
          Have questions or want to book a consultation? Reach out to us and we will get back to you promptly.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
