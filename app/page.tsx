"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import AnimatedBackground from "@/components/AnimatedBackground"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative  bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
        <section className=" flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              CODE FROM ZERO, BUILD LIKE A HERO
            </motion.h1>
            <motion.p
              className="text-lg mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              We are a group of passionate developers who love to explore and build new projects. Join Zero Devs as we push the boundaries of technology, create innovative products, and share knowledge through podcasts, reels, and more!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <a href="/about">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300 bg-transparent backdrop-blur-sm"
              >
                DISCOVER MORE
              </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Recent Projects & Events */}
        <section className="flex items-center px-6 backdrop-blur-sm bg-black/30 my-10 ">
          <div className="md:max-w-[65%] mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">OUR LATEST PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <div className="text-sm mb-2">01/12/2023</div>
                <h3 className="text-2xl font-bold mb-4">TECH REEL: BUILDING A FULLSTACK APP</h3>
                <p className="text-gray-300 mb-4">
                  In this reel, we dive deep into building a modern full-stack web app using the latest technologies. From backend to frontend, we cover it all!
                </p>
                <Button variant="secondary" size="sm">Watch Now</Button>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <div className="text-sm mb-2">15/11/2023</div>
                <h3 className="text-2xl font-bold mb-4">PODCAST: THE FUTURE OF AI IN DEVELOPMENT</h3>
                <p className="text-gray-300 mb-4">
                  Join us as we explore the future of AI in software development. How will it shape the way we code, build, and collaborate?
                </p>
                <Button variant="secondary" size="sm">Listen Now</Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Zero Dev Section */}
        <section className=" flex items-center px-6 ">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">ABOUT ZERO DEV</h2>
            <p className="text-xl mb-8">
              WE'RE A COMMUNITY OF DEVELOPERS, INNOVATORS, AND CREATORS. JOIN US IN THE JOURNEY OF EXPLORING AND BUILDING THE FUTURE.
            </p>
            <p className="text-gray-300 mb-12">
              Zero Dev is a collective of passionate developers constantly pushing the boundaries of technology. From creating cutting-edge projects to producing insightful podcasts on various tech topics, we share and learn together. Whether it’s exploring new frameworks or discussing the latest trends in the tech world, Zero Dev is where innovation happens.
            </p>
            <blockquote className="text-2xl italic text-gray-400">
              "INNOVATION STARTS WITH LEARNING AND SHARING — AND THAT'S WHAT WE DO AT ZERO DEV."
            </blockquote>
          </div>
          
        </section>
        <Footer />
      </div>
     
    </main>
  )
}
