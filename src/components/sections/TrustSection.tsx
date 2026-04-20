"use client"

import { motion } from "framer-motion"

export default function TrustSection() {
  const logos = [
    { name: "Amazon", initials: "A" },
    { name: "Shopify", initials: "S" },
    { name: "WooCommerce", initials: "W" },
    { name: "eBay", initials: "E" },
    { name: "Etsy", initials: "E" },
    { name: "Walmart", initials: "W" },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
            Trusted by thousands of sellers across
          </p>
          <p className="text-lg text-gray-900 dark:text-white font-semibold">
            Leading eCommerce Platforms
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {logo.initials}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
          {[
            { number: "10K+", label: "Active Sellers" },
            { number: "500K+", label: "Listings Monitored Daily" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
