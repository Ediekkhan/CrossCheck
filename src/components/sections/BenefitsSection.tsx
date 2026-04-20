"use client"

import SectionHeader from "@/components/SectionHeader"
import FeatureCard from "@/components/FeatureCard"
import { Shield, DollarSign, Zap } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "Avoid Suspensions",
      description:
        "Catch policy violations before platforms do. Stay proactive, not reactive.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Protect Revenue",
      description:
        "No more surprise account lockouts. Keep selling consistently without fear.",
    },
    {
      icon: <Zap size={24} />,
      title: "Stay Compliant Effortlessly",
      description:
        "Automated monitoring means you can focus on growing instead of worrying.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-950 dark:to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          pretitle="The Benefits"
          title="What You Gain"
          description="Stop losing sleep over policy compliance. With CrossCheck, you're always protected."
        />

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* ROI Section */}
        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  metric: "1 in 500",
                  label: 'Sellers avoid suspension with proactive monitoring',
                },
                {
                  metric: "$15K+",
                  label: "Average saved per suspension prevented",
                },
                {
                  metric: "24/7",
                  label: "Automatic monitoring while you sleep",
                },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold mb-2">{stat.metric}</p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
