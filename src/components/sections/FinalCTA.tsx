"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-base bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 p-12 md:p-16 text-center text-white overflow-hidden relative"
        >
          {/* Background Decorations */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
          />

          <div className="relative z-10">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to protect your listings?
            </h2>

            {/* Subheading */}
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of sellers already using CrossCheck to stay compliant and
              protect their revenue. Start for free today.
            </p>

            {/* Dual CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 hover:bg-gray-50 font-semibold rounded-lg transition-colors group"
              >
                <Download size={20} />
                Install Now Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-white/70 mt-8"
            >
              ✓ 10K+ sellers protected • ✓ $50M+ in revenue saved • ✓ 99.9% uptime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
