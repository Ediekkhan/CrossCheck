"use client"

import { motion } from "framer-motion"
import SectionHeader from "@/components/SectionHeader"
import { Play } from "lucide-react"

export default function DemoSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-950">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          pretitle="See It In Action"
          title="Watch CrossCheck in 2 Minutes"
          description="See how CrossCheck catches violations before they cost you."
        />

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 relative group"
        >
          <div className="card-base overflow-hidden bg-gray-900">
            {/* Placeholder Video */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
              {/* Placeholder Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-transparent" />

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-20 h-20 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-2xl flex items-center justify-center group/play transition-colors"
              >
                <Play size={32} className="ml-1" />
              </motion.button>

              {/* Video Mockup Content */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-8 left-8 right-8 bg-gray-700/50 rounded-lg p-4 space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-3/4" />
                  <div className="h-3 bg-gray-600 rounded w-1/2" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 space-y-3">
                  <div className="flex gap-2">
                    <div className="h-12 bg-green-500/30 rounded w-1/3" />
                    <div className="h-12 bg-yellow-500/30 rounded w-1/3" />
                    <div className="h-12 bg-red-500/30 rounded w-1/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mt-6"
        >
          See how CrossCheck identifies and alerts you to policy violations in real-time
        </motion.p>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Instant Scanning",
              description: "Real-time policy checks across all platforms",
            },
            {
              title: "Smart Recommendations",
              description: "Get actionable steps to fix violations fast",
            },
            {
              title: "Priority Alerts",
              description: "Only notified about critical issues first",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
