"use client"

import SectionHeader from "@/components/SectionHeader"
import FeatureCard from "@/components/FeatureCard"
import { AlertCircle, TrendingDown, Clock } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertCircle size={24} />,
      title: "Sudden Suspensions",
      description:
        "One policy slip and your account gets locked. No warning. No second chances. Revenue gone.",
    },
    {
      icon: <TrendingDown size={24} />,
      title: "Missed Policy Updates",
      description:
        "Platform policies change constantly. Keep up manually? Nearly impossible. Fall behind? Suspension.",
    },
    {
      icon: <Clock size={24} />,
      title: "Time & Revenue Loss",
      description:
        "Review appeals take weeks. Lost income during suspension. One incident can take months to recover.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-dark-950">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          pretitle="The Problem"
          title="One Mistake Can Get You Suspended"
          description="eCommerce sellers face an invisible threat: policy violations that can destroy their business overnight."
        />

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {problems.map((problem, index) => (
            <FeatureCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Pain Point Stats */}
        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl border border-red-200 dark:border-red-900/30 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider mb-2">
                  The Reality
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Sellers can lose $5K-$50K per suspension
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Without proactive monitoring, sellers operate blind. By the time they notice
                  a problem, its already too late.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "71% of sellers worry about policy violations",
                  "Average suspension lasts 30+ days",
                  "Appeal success rate: less than 20%",
                  "Most violations are preventable",
                ].map((stat, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
