"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-gray-50 dark:from-gray-900 dark:via-dark-950 dark:to-gray-900" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary-200 dark:bg-primary-900/20 blur-3xl opacity-20"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent-200 dark:bg-accent-900/20 blur-3xl opacity-10"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800"
            >
              <div className="w-2 h-2 rounded-full bg-accent-500" />
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                Real-time monitoring now live
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Never Lose a{" "}
              <span className="gradient-text">Listing Again</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-xl">
              Prevent eCommerce suspensions with CrossCheck. Real-time policy monitoring
              for Amazon, Shopify, and WooCommerce—catching violations before they cost
              you.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button className="btn-primary group">
                <Download size={20} />
                Install Chrome Extension
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline">
                Watch Demo (2 min)
              </button>
            </motion.div>

            {/* Trust Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-500 dark:text-gray-400 mt-8"
            >
              ✓ Free to install • ✓ Works on all platforms • ✓ Set up in 2 minutes
            </motion.p>
          </motion.div>

          {/* Right Visual - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Card Mockup */}
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="card-base overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-gray-400">crosscheck.extension</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    {/* Status Bar */}
                    <div className="bg-gray-700/30 rounded-lg p-3 border border-gray-600/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Your Listings</span>
                        <span className="text-xs font-semibold text-green-400">All Clear ✓</span>
                      </div>
                      <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-400" />
                      </div>
                    </div>

                    {/* Alerts */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-green-300 font-semibold">Policy compliant</p>
                          <p className="text-xs text-green-200/70">5 Amazon listings</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-accent-500/10 border border-accent-500/30 rounded-lg p-3">
                        <div className="w-2 h-2 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-accent-300 font-semibold">Review recommended</p>
                          <p className="text-xs text-accent-200/70">Product description too promotional</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-600/30">
                      <div className="text-center py-2">
                        <p className="text-lg font-bold text-white">24</p>
                        <p className="text-xs text-gray-400">Listings</p>
                      </div>
                      <div className="text-center py-2 border-l border-r border-gray-600/30">
                        <p className="text-lg font-bold text-green-400">92%</p>
                        <p className="text-xs text-gray-400">Compliance</p>
                      </div>
                      <div className="text-center py-2">
                        <p className="text-lg font-bold text-accent-400">3</p>
                        <p className="text-xs text-gray-400">Issues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 card-base bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-lg shadow-xl"
              >
                <p className="text-sm font-bold text-white">✓ All Clear</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
