'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

interface TeamMember {
  name: string
  image: string
  social?: {
    instagram?: string
    github?: string
    linkedin?: string
    twitter?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Sajal Batra",
    image: "/sajalbatra.jpg",
    social: {
      instagram: "https://instagram.com/sajalbatra.js",
      github: "https://github.com/sajalbatra",
      linkedin: "https://linkedin.com/in/sajal-batra",
      twitter: "https://x.com/sajal_batra"
    }
  },
  {
    name: "Aryan Singh",
    image: "/aryansingh.jpg",
    social: {
      instagram: "https://www.instagram.com/i.aryan_28_/",
      github: "https://github.com/Aryan-dev-enth",
      linkedin: "https://linkedin.com/in/aryan",
      twitter: "https://x.com/just_i_aryan_28"
    }
  },
  {
    name: "Shivam Singh",
    image: "/shivamsingh.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/shivam-singh-3599ab2a5",
      instagram: "https://www.instagram.com/_i.shivam017/"
    }
  },
  {
    name: "Agrim Sangotra",
    image: "/agrim.jpg",
    social: {
      instagram: "https://www.instagram.com/agrxim/",
      linkedin: "https://www.linkedin.com/in/agrim-sangotra/",
      twitter: "https://x.com/agxrim",
      github: "https://github.com/agrixm"
    }
  },
  {
    name: "Shresth Singh",
    image: "/shresthsingh.jpg",
    social: {
      instagram: "https://www.instagram.com/shresth_captures/",
      linkedin: "https://www.linkedin.com/in/shresth-singh-2abbb4249/"
    }
  },
  {
    name: "Aakrash",
    image: "/aakrash.png",
    social: {
      instagram: "https://www.instagram.com/am.aakarsh?igsh=cm00N3Iyc2RzYzhl&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/aakarsh-rawat-a0b488276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  }
]

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-4 h-4" />
    <span className="sr-only">Visit {label}</span>
  </motion.a>
)

export default function TeamLeaders() {
  return (
    <section className="px-6 py-20">
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        TEAM
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.slice(0, 4).map((member, index) => (
          <motion.div
            key={index}
            className="group relative space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  {member.social?.instagram && (
                    <SocialIcon 
                      href={member.social.instagram} 
                      icon={Instagram} 
                      label={`${member.name}'s Instagram`}
                    />
                  )}
                  {member.social?.github && (
                    <SocialIcon 
                      href={member.social.github} 
                      icon={Github} 
                      label={`${member.name}'s GitHub`}
                    />
                  )}
                  {member.social?.linkedin && (
                    <SocialIcon 
                      href={member.social.linkedin} 
                      icon={Linkedin} 
                      label={`${member.name}'s LinkedIn`}
                    />
                  )}
                  {member.social?.twitter && (
                    <SocialIcon 
                      href={member.social.twitter} 
                      icon={Twitter} 
                      label={`${member.name}'s Twitter`}
                    />
                  )}
                </div>
              </div>
            </div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
            >
              <h3 className="font-bold text-lg">{member.name}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
      

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
        {teamMembers.slice(4).map((member, index) => (
          <motion.div
            key={index + 4}
            className="group relative space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  {member.social?.instagram && (
                    <SocialIcon 
                      href={member.social.instagram} 
                      icon={Instagram} 
                      label={`${member.name}'s Instagram`}
                    />
                  )}
                  {member.social?.github && (
                    <SocialIcon 
                      href={member.social.github} 
                      icon={Github} 
                      label={`${member.name}'s GitHub`}
                    />
                  )}
                  {member.social?.linkedin && (
                    <SocialIcon 
                      href={member.social.linkedin} 
                      icon={Linkedin} 
                      label={`${member.name}'s LinkedIn`}
                    />
                  )}
                  {member.social?.twitter && (
                    <SocialIcon 
                      href={member.social.twitter} 
                      icon={Twitter} 
                      label={`${member.name}'s Twitter`}
                    />
                  )}
                </div>
              </div>
            </div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: (index + 4) * 0.1 + 0.3 }}
            >
              <h3 className="font-bold text-lg">{member.name}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}