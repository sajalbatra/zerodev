import Navbar from "@/components/navbar"
import PodcastHero from "@/components/podcast-hero"
import FeaturedPodcasts from "@/components/featured-podcasts"
import PodcastOfWeek from "@/components/podcast-of-week"
import Footer from "@/components/footer"
import ComingSoon from "@/components/ui/commingsoon"
export const metadata = {
  title: 'Podcasts | Zero Devs',
  description: 'Listen to our astronomy and space exploration podcasts',
}

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <PodcastHero />
      {/* <FeaturedPodcasts />
      <PodcastOfWeek /> */}
      <ComingSoon/>
      <Footer />
    </div>
  )
}

