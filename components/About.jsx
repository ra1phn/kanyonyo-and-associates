"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function About() {
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
        About Our Firm
      </motion.h2>
      <motion.div
        variants={fadeInUp}
        className="p-6 rounded-2xl shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 max-w-3xl mx-auto"
      >
        <motion.p
          variants={fadeInUp}
          className="text-gray-600 mb-8"
        >
          We are a professional CPA firm committed to trust, accountability, transparency, and partnership.
          Our expertise covers audit & assurance, tax planning & compliance, and business advisory.
          We deliver high-quality, responsible guidance that helps individuals and businesses grow confidently.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-6"
        >
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
