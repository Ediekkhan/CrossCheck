"use client"

import SectionHeader from "@/components/SectionHeader"
import StepCard from "@/components/StepCard"
import { Download, Zap, Bell } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    {
      title: "Install Extension",
      description:
        "Add CrossCheck to your browser in one click. Works on Chrome, Edge, and Brave.",
      icon: <Download size={24} />,
    },
    {
      title: "Connect Your Stores",
      description:
        "Link your Amazon, Shopify, WooCommerce accounts. Takes 2 minutes.",
      icon: <Zap size={24} />,
    },
    {
      title: "Get Alerts & Fix",
      description:
        "Receive instant alerts when violations are detected. Fix before platforms catch them.",
      icon: <Bell size={24} />,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-950 dark:to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          pretitle="Getting Started"
          title="How It Works in 3 Simple Steps"
          description="Set up CrossCheck in minutes, stay protected for life."
        />

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 relative">
          {/* Connecting Lines - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-primary-200 dark:via-primary-800 to-transparent -z-10" />

          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Installation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "< 2 min", label: "Setup Time" },
              { metric: "0 Code", label: "Technical Skills Required" },
              { metric: "∞", label: "Listings Monitored" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl font-bold gradient-text mb-2">{item.metric}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
