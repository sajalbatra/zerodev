import Navbar from "@/components/navbar"
import PodcastHero from "@/components/podcast-hero"
import FeaturedPodcasts from "@/components/featured-podcasts"
import PodcastOfWeek from "@/components/podcast-of-week"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Podcasts | Dhruva Astronomy Club',
  description: 'Listen to our astronomy and space exploration podcasts',
}

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <PodcastHero />
      <FeaturedPodcasts />
      <PodcastOfWeek />
      <Footer />
    </div>
  )
}

