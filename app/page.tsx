"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import AnimatedBackground from "@/components/AnimatedBackground"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
       <AnimatedBackground />
      <Navbar />

     

      <div className="relative z-10">
      
        <section className="min-h-screen flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              CODE FROM ZERO BUILD LIKE A HERO
            </motion.h1>
            <motion.p
              className="text-lg mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              We are a group of passionate developers who love to explore and learn new technologies. Join Zero Devs and code the future with us!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300 bg-transparent backdrop-blur-sm"
              >
                DISCOVER MORE
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Rest of the content remains the same */}
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
      <Footer />
    </main>
  )
}

