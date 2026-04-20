import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import TrustSection from "@/components/sections/TrustSection"
import ProblemSection from "@/components/sections/ProblemSection"
import SolutionSection from "@/components/sections/SolutionSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import HowItWorks from "@/components/sections/HowItWorks"
import DemoSection from "@/components/sections/DemoSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import PricingSection from "@/components/sections/PricingSection"
import FinalCTA from "@/components/sections/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-950">
      <Navbar />
      <Hero />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorks />
      <DemoSection />
      <BenefitsSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
