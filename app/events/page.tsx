import Navbar from "@/components/navbar"
import EventsHero from "@/components/events-hero"
import RecentEvents from "@/components/recent-events"
import GalleryStrip from "@/components/gallery-strip"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Events | Zero Devs',
  description: 'Explore our upcoming and past astronomy events',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <EventsHero />
      <RecentEvents />
      <GalleryStrip />
      <Footer />
    </div>
  )
}

