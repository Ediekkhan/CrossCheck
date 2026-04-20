"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

export default function StepCard({
  number,
  title,
  description,
  icon,
  delay = 0,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="card-base p-8 h-full">
        {/* Step Number Badge */}
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white font-bold text-xl mb-4">
          {number}
        </div>

        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-600 flex items-center justify-center mb-4">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
