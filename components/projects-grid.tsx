"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
    id: string
    title: string
    description: string
    image: string
    techStack: string[]
    liveUrl: string
    githubUrl: string
}

const projects: Project[] = [
    {
        id: "1",
        title: "New Year Message Generator",
        description: "A web application that allows users to create and share personalized New Year messages.",
        image: "/sampleimg.jpg",
        techStack: ["Next.js", "TailwindCSS", "Gemini"],
        liveUrl: "https://new-year-msg-gen.vercel.app/",
        githubUrl: "https://github.com/sajalbatra/new-year-msg-gen",
    },
    {
        id: "2",
        title: "Bhumi Sutra User App",
        description: "A mobile application for the Smart India Hackathon (SIH) project that allows users to capture images of unauthorized constructions, submit reports to government authorities, and view flagged construction sites on a map, among other features.",
        image: "/sampleimg.jpg",
        techStack: ["React Native", "Expo", "Express Js", "Mongo DB"],
        liveUrl: "https://github.com/sajalbatra/Bhumi-Sutra-User-App",
        githubUrl: "https://github.com/sajalbatra/Bhumi-Sutra-User-App",
    },
    {
        id: "3",
        title: "YeleLang",
        description: "YeleLang is a custom programming language built as a wrapper around C++, designed to help users learn the fundamentals of programming language creation, lexing, parsing, and interpretation.",
        image: "/sampleimg.jpg",
        techStack: ["Compiler Design", "Programming Language", "C++"],
        liveUrl: "https://github.com/sajalbatra/YeleLang",
        githubUrl: "https://github.com/sajalbatra/YeleLang",
    },
    {
        id: "4",
        title: "Tech Roadmaps",
        description: "An educational platform providing detailed roadmaps for various technology learning paths.",
        image: "/sampleimg.jpg",
        techStack: ["Next.js", "TailwindCSS"],
        liveUrl: "https://techroadmaps.vercel.app/",
        githubUrl: "https://github.com/sajalbatra/tech-roadmaps",
    },
    {
        id: "5",
        title: "Arishti Live",
        description: "A platform for a Bangalore-based company to showcase their chapters and different training programs.",
        image: "/sampleimg.jpg",
        techStack: ["AWS S3", "Next.js", "PostgreSQL", "Prisma", "Express.js", "Node.js", "Redis"],
        liveUrl: "https://github.com/sajalbatra/Arishti-Live",
        githubUrl: "https://github.com/sajalbatra/Arishti-Live",
    },
    {
        id: "6",
        title: "Harvest Hero",
        description: "A platform connecting donors with NGOs to efficiently distribute resources such as food, clothes, books, and more.",
        image: "/sampleimg.jpg",
        techStack: ["Redis", "PostgresSQL", "Node.js", "Express", "Prisma", "Next.js", "TailwindCSS", "Recoil"],
        liveUrl: "https://github.com/sajalbatra/HarvestHero",
        githubUrl: "https://github.com/sajalbatra/HarvestHero",
    },
    {
        id: "7",
        title: "Chatter Box - Real-time Chat App",
        description: "A full-stack TypeScript real-time chat application with authentication, chatrooms, and live messaging.",
        image: "/sampleimg.jpg",
        techStack: ["TypeScript", "NestJS", "Prisma", "GraphQL", "Redis", "Postgres", "ReactJS", "Apollo Client", "Zustand", "Mantine"],
        liveUrl: "https://github.com/sajalbatra/chatter-box",
        githubUrl: "https://github.com/sajalbatra/chatter-box",
    },
    {
        id: "8",
        title: "Bloggerz",
        description: "A full-stack blogging website allowing users to view, create, and manage blog posts.",
        image: "/sampleimg.jpg",
        techStack: ["Next.js", "PostgreSQL", "Prisma"],
        liveUrl: "https://github.com/sajalbatra/Bloggerz",
        githubUrl: "https://github.com/sajalbatra/Bloggerz",
    },
    {
        id: "9",
        title: "Social Media App",
        description: "A social media application with user registration, authentication, posting, and interaction features.",
        image: "/sampleimg.jpg",
        techStack: ["React Native", "Firebase", "Expo"],
        liveUrl: "https://github.com/sajalbatra/Social-Media-App",
        githubUrl: "https://github.com/sajalbatra/Social-Media-App",
    }
];


export default function ProjectsGrid() {
    return (
        <section className="px-6 py-20">
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group bg-gray-900/50 rounded-lg overflow-hidden"
                    >
                        <div className="relative aspect-[16/9]">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 space-y-4">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="text-gray-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-sm bg-gray-800 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {/* Live Demo Button */}
                                <a href={project.liveUrl} className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Live Demo</span>
                                    </button>
                                </a>

                                {/* Source Code Button */}
                                <a href={project.githubUrl} className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-green-500 hover:scale-105 hover:shadow-lg">
                                        <Github className="w-4 h-4" />
                                        <span>Source Code</span>
                                    </button>
                                </a>
                            </div>

                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
