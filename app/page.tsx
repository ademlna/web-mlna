import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import ServicesSection from "@/components/ServicesSection"
import PortfolioSection from "@/components/PortfolioSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import { Photo } from "@/types/photo"

async function getPhotos(): Promise<Photo[]> {
  const res = await fetch("http://localhost:3000/api/photo", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch photos")
  }

  return res.json()
}

export default async function HomePage() {
  const photos = await getPhotos()

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection totalProjects={photos.length} />
      <ServicesSection />
      <PortfolioSection photos={photos} />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}