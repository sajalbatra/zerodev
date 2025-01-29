import ProjectsHero from "@/components/projects-hero"
import ProjectsGrid from "@/components/projects-grid"
import Navbar from "@/components/navbar"
export const metadata = {
  title: "Projects | Zero Devs",
  description: "Showcase of projects built by the Zero Devs team",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
        <Navbar/>
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
}

