"use client"

import SectionHeader from "@/components/SectionHeader"
import FeatureCard from "@/components/FeatureCard"
import {
  RadarIcon,
  Zap,
  Brain,
  GitBranch,
  TrendingUp,
} from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <RadarIcon size={24} />,
      title: "Real-time Policy Detection",
      description:
        "AI-powered scanning that checks your listings against 1000+ platform policies in real-time.",
    },
    {
      icon: <GitBranch size={24} />,
      title: "Multi-platform Support",
      description:
        "Unified monitoring for Amazon, Shopify, WooCommerce, eBay, Etsy, and Walmart all in one place.",
    },
    {
      icon: <Zap size={24} />,
      title: "Smart Alerts",
      description:
        "Intelligent notifications that prioritize critical issues and actionable recommendations.",
    },
    {
      icon: <Brain size={24} />,
      title: "Background Monitoring",
      description:
        "Works silently in the background without slowing down your browser or workflow.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Risk Scoring System",
      description:
        "Get a compliance score for each listing with clear insights on what needs fixing.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-dark-950">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          pretitle="Features"
          title="Powerful Features Built for Sellers"
          description="Everything you need to stay compliant and protect your eCommerce business."
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          <div className="card-base p-8 md:p-12 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-950/30 dark:to-primary-900/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  One Dashboard. All Your Platforms.
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Stop managing multiple tools. See your entire store ecosystem from a single,
                  intuitive dashboard. Know your compliance status at a glance.
                </p>
                <ul className="space-y-3">
                  {[
                    "Unified compliance view across all platforms",
                    "Custom alerts for your business",
                    "Historical compliance trending",
                    "Export reports for records",
                  ].map((item, index) => (
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
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="card-base bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                  <div className="space-y-3">
                    {[
                      { label: "Amazon", status: "98% Compliant", color: "bg-green-500" },
                      { label: "Shopify", status: "95% Compliant", color: "bg-green-500" },
                      { label: "WooCommerce", status: "88% Compliant", color: "bg-yellow-500" },
                      { label: "eBay", status: "92% Compliant", color: "bg-green-500" },
                    ].map((platform) => (
                      <div key={platform.label} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">{platform.label}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gray-600" />
                          <span className="text-xs text-gray-400">{platform.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
