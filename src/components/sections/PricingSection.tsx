"use client"

import SectionHeader from "@/components/SectionHeader"
import PricingCard from "@/components/PricingCard"
import { Zap, Crown } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "For small sellers just getting started",
      price: "Free",
      period: "forever",
      icon: <Zap size={24} />,
      features: [
        "Up to 10 listings monitored",
        "Basic policy checks",
        "Weekly alerts",
        "1 platform support",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "For serious sellers scaling fast",
      price: "$49",
      period: "month",
      icon: <Crown size={24} />,
      features: [
        "Unlimited listings monitored",
        "Advanced AI policy detection",
        "Real-time alerts",
        "All platforms supported",
        "Priority 24/7 support",
        "Advanced analytics",
        "Risk scoring",
        "Custom reports",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-dark-950">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          pretitle="Pricing"
          title="Simple, Transparent Pricing"
          description="Start free. Upgrade when you're ready. Cancel anytime."
        />

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-12 mb-16"
        >
          <span className="text-gray-700 dark:text-gray-300">Bill Monthly</span>
          <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-700 px-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:focus:ring-offset-dark-950">
            <span className="inline-block h-7 w-7 transform rounded-full bg-white transition-transform translate-x-0" />
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Bill Yearly
            <span className="ml-2 text-xs font-semibold text-accent-600 dark:text-accent-400">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              icon={plan.icon}
              cta={plan.cta}
              highlighted={plan.highlighted}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel your subscription at any time, no questions asked.",
              },
              {
                q: "Do you offer a free trial?",
                a: "Yes. Try Professional features free for 14 days with full access.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards and support monthly or annual billing.",
              },
              {
                q: "Is there a setup fee?",
                a: "No. Zero setup fees. You only pay for the plan you choose.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
