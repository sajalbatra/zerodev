import Scene from '@/components/canvas/scene'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      {/* <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        <Link href="/" className="text-xl font-bold">
          DHRUVA
          <span className="block text-sm">ASTRONOMY CLUB</span>
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-gray-300">HOME</Link>
          <Link href="/products" className="hover:text-gray-300">PRODUCTS</Link>
          <Link href="/events" className="hover:text-gray-300">EVENTS</Link>
          <Link href="/podcast" className="hover:text-gray-300">PODCAST</Link>
          <Link href="/about" className="hover:text-gray-300">ABOUT</Link>
        </div>
      </nav> */}
      <Navbar/>

      {/* 3D Scene Background */}
      {/* <div className="absolute inset-0">
        <Scene />
      </div> */}

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              LET'S TRAVEL TO THE EDGE OF SPACE
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              We are a group that love to explore and learn new information related to our universe.
              Join us and Explore
            </p>
            <Button 
              variant="outline" 
              className="text-black border-white hover:bg-black hover:text-white bg-gradient-to-r from-white to-gray-800"
            >
              DISCOVER MORE
            </Button>
          </div>
        </section>

        {/* Recent Events Section */}
        <section className="min-h-screen flex items-center px-6 backdrop-blur-sm bg-black/30">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">RECENT EVENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <div className="text-sm mb-2">16/06/2023</div>
                <h3 className="text-2xl font-bold mb-4">TALK ON COSMIC NEBULA</h3>
                <p className="text-gray-300 mb-4">
                  Join us for an enlightening discussion about the mysteries of cosmic nebulae,
                  their formation, and their role in the cosmic dance of star birth and death.
                </p>
                <Button variant="secondary" size="sm">Read More</Button>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <div className="text-sm mb-2">20/06/2023</div>
                <h3 className="text-2xl font-bold mb-4">STARGAZING NIGHT</h3>
                <p className="text-gray-300 mb-4">
                  Experience the wonders of the night sky through professional telescopes.
                  Our experts will guide you through the constellations and celestial objects.
                </p>
                <Button variant="secondary" size="sm">Read More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center px-6 backdrop-blur-sm bg-black/30">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">ABOUT US</h2>
            <p className="text-xl mb-8">
              WE ARE CLUB THAT LEARN, SHARE AND EXPLORE EVERYTHING RELATED TO OUR UNIVERSE.
            </p>
            <p className="text-gray-300 mb-12">
              DHRUVA IS A COLLEGE CLUB, WE WORK TOWARD INCREASING KNOWLEDGE
              ABOUT SPACE, COSMOS AND EVERYTHING WE ARE STILL LEARNING ABOUT.
              WE SHARE AND LEARN TOGETHER.
            </p>
            <blockquote className="text-2xl italic text-gray-400">
              "ASTRONOMY COMPELS THE SOUL TO LOOK UPWARDS AND LEADS US FROM THIS WORLD TO ANOTHER"
            </blockquote>
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  )
}

