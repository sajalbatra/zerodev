import Navbar from "@/components/navbar"
import AboutHero from "@/components/about-hero"
import TeamPhoto from "@/components/team-photo"
import TeamLeaders from "@/components/team-leaders"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <AboutHero />
      <TeamPhoto />
      <TeamLeaders />
      <Footer />
    </div>
  )
}

