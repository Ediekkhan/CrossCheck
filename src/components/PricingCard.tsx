"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface PricingCardProps {
  name: string
  description: string
  price: string
  period?: string
  features: string[]
  icon: ReactNode
  cta: string
  highlighted?: boolean
  delay?: number
}

export default function PricingCard({
  name,
  description,
  price,
  period = "month",
  features,
  icon,
  cta,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-2xl border-2 transition-all duration-300 ${
        highlighted
          ? "border-primary-600 bg-gradient-to-br from-primary-50 to-white dark:from-primary-950/30 dark:to-gray-900 shadow-2xl scale-105"
          : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl"
      }`}
    >
      <div className="p-8">
        {/* Badge */}
        {highlighted && (
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20">
            <span className="text-xs font-semibold text-accent-600 dark:text-accent-400">
              POPULAR
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-600 flex items-center justify-center mb-4">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
            <span className="text-gray-600 dark:text-gray-400">/{period}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-colors duration-200 mb-6 ${
            highlighted
              ? "btn-primary"
              : "border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          {cta}
        </button>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
