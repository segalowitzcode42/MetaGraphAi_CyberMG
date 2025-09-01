import { HeroSection } from "@/components/hero-section"
import { TechnologySection } from "@/components/technology-section"
import { SolutionsSection } from "@/components/solutions-section"
import { InnovationSection } from "@/components/innovation-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <SolutionsSection />
      <InnovationSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
