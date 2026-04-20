"use client"

import { motion } from "framer-motion"
import SectionHeader from "@/components/SectionHeader"
import { CheckCircle, Zap, Shield } from "lucide-react"

export default function SolutionSection() {
  const solutions = [
    {
      icon: <Zap size={32} />,
      title: "Real-time Monitoring",
      description:
        "CrossCheck runs silently in your browser, analyzing your listings 24/7 against platform policies.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Instant Alerts",
      description:
        "Get notified before violations happen. Fix problems before platforms catch them.",
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance Guarantee",
      description:
        "Stay compliant across all platforms with unified monitoring and smart recommendations.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/30 dark:to-dark-950">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          pretitle="The Solution"
          title="Meet CrossCheck"
          description="Your personal compliance assistant that catches violations before they cost you."
        />

        {/* Solution Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-600 dark:text-primary-400 mx-auto mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How It Works Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="card-base overflow-hidden">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-white">Install the extension</p>
                    <p className="text-sm text-gray-400">One-click setup on your browser</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-white">Connect your stores</p>
                    <p className="text-sm text-gray-400">
                      Link Amazon, Shopify, WooCommerce, eBay, and more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-white">Get instant alerts</p>
                    <p className="text-sm text-gray-400">
                      Receive notifications when violations are detected
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-white">Stay compliant 24/7</p>
                    <p className="text-sm text-green-300">
                      Real-time monitoring prevents suspensions before they happen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
