"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

interface BlogPost {
    id: string
    title: string
    excerpt: string
    coverImage: string
    date: string
    author: {
        name: string
        image: string
    }
    readingTime: string
    category: string
    url: string
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Caching Decoded",
        excerpt: "Scaling Applications with Redis and Memcached · Understanding Caching What is Caching? Caching is a performance optimization technique that stores...",
        coverImage: "/i1.webp",
        date: "23-01-2025",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "6 min read",
        category: "Performance",
        url: "https://sajalbatra.hashnode.dev/caching-decoded",
    },
    {
        id: "2",
        title: "Understanding SSR vs CSR: Making the Right Choice for Your Web Application",
        excerpt: "The choice between Server-Side Rendering (SSR) and Client-Side Rendering (CSR) is crucial for modern web applications. Each approach...",
        coverImage: "/i2.png",
        date: "21-01-2025",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "7 min read",
        category: "Web Development",
        url: "https://sajalbatra.hashnode.dev/understanding-ssr-vs-csr",
    },
    {
        id: "3",
        title: "Understanding Hashing: SHA-256 and bcrypt.js Explained",
        excerpt: "Developer’s Guide to Securely Protecting Data and Storing Passwords · Every day, millions of passwords and sensitive data traverse the internet. Behind...",
        coverImage: "/i3.webp",
        date: "19-01-2025",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "9 min read",
        category: "Security",
        url: "https://sajalbatra.hashnode.dev/understanding-hashing-sha256-bcrypt-guide",
    },
    {
        id: "4",
        title: "How to Get Started Contributing to Open Source",
        excerpt: "Introduction: What is open-source software? Open-source software is software whose source code is made available to the public. This allows anyone to...",
        coverImage: "/i4.png",
        date: "12-07-2023",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "5 min read",
        category: "Open Source",
        url: "https://sajalbatra.hashnode.dev/how-to-get-started-contributing-to-open-source",
    },
    {
        id: "5",
        title: "How did Netflix use technology to change the way we watch movies?",
        excerpt: "Netflix has revolutionized the way we watch movies and television shows through its innovative use of technology. From its humble beginnings as a DVD...",
        coverImage: "/i5.jpeg",
        date: "05-07-2023",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "6 min read",
        category: "Technology",
        url: "https://sajalbatra.hashnode.dev/how-did-netflix-use-technology-to-change-the-way-we-watch-movies",
    },
    {
        id: "6",
        title: "Getting Started with Data Structures and Algorithms: A Beginner's Guide",
        excerpt: "In the world of computer science, Data Structures and Algorithms (DSA) are the main parts of software development and problem-solving....",
        coverImage: "/i6.jpeg",
        date: "28-06-2023",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "10 min read",
        category: "Programming",
        url: "https://sajalbatra.hashnode.dev/getting-started-with-data-structures-and-algorithms-a-beginners-guide",
    },
    {
        id: "7",
        title: "How to Become a Web Developer: A Step-by-Step Guide",
        excerpt: "In today's digital age, web development plays an important role in shaping the online world with which we interact in daily life. From...",
        coverImage: "/i7.jpeg",
        date: "17-06-2023",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "8 min read",
        category: "Career",
        url: "https://sajalbatra.hashnode.dev/how-to-become-a-web-developer-a-step-by-step-guide",
    },
    {
        id: "8",
        title: "Unlocking the World of APIs: Everything You Need to Know",
        excerpt: "APIs, or Application Programming Interfaces, play a pivotal role in today's technology landscape. They enable developers to create...",
        coverImage: "/i8.png",
        date: "13-06-2023",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "7 min read",
        category: "Development",
        url: "https://sajalbatra.hashnode.dev/unlocking-the-world-of-apis-everything-you-need-to-know",
    },
    {
        id: "9",
        title: "Unleashing the Power of Appwrite: A Comprehensive Guide to Benefits and Usage",
        excerpt: "Appwrite, a powerful backend-as-a-service platform, has been revolutionizing the way developers build and deploy…",
        coverImage: "/i9.webp",
        date: "13-06-2023",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "6 min read",
        category: "Backend",
        url: "https://sajalbatra.hashnode.dev/unleashing-the-power-of-appwrite-a-comprehensive-guide-to-benefits-and-usage",
    },
    {
        id: "10",
        title: "HTTP vs HTTPS",
        excerpt: "You’ve probably come across websites that begin with “http://” or “https://” if you’ve ever visited the internet. HTTP and HTTPS are two…",
        coverImage: "/i10.png",
        date: "04-03-2023",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "5 min read",
        category: "Web Security",
        url: "https://sajalbatra.medium.com/http-vs-https-944a06fbd7f?source=user_profile---------2----------------------------",
    },
    {
        id: "11",
        title: "Can robots overtake humans?",
        excerpt: "“Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them…",
        coverImage: "/i11.webp",
        date: "25-11-2020",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "4 min read",
        category: "Future",
        url: "https://sajalbatra.medium.com/can-robots-overtake-humans-b981cedf366?source=user_profile---------3----------------------------",
    },
    {
        id: "12",
        title: "Artificial intelligence (AI)",
        excerpt: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic…",
        coverImage: "/i12.webp",
        date: " 22-08-2020",
        author: {
            name: "Sajal Batra",
            image: "/sajalbatra.jpg",
        },
        readingTime: "6 min read",
        category: "Technology",
        url: "https://sajalbatra.medium.com/artificial-intelligence-ai-7f7ce37a8a6e?source=user_profile---------4----------------------------",
    },
];


export default function BlogGrid() {
    return (
        <section className="px-6 py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                    >
                        <Link href={post.url}>
                            <div className="space-y-4">
                                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                                    <Image
                                        src={post.coverImage || "/sampleimg.jpg"}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-sm text-blue-500">{post.category}</span>
                                    <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{post.title}</h2>
                                    <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <img src={post.author.image} alt={post.author.name} className="w-6 h-6 rounded-full" />
                                            {post.author.name}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(post.date).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {post.readingTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}

