"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  pretitle?: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({
  pretitle,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={centered ? "text-center" : ""}
    >
      {pretitle && (
        <p className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">
          {pretitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
