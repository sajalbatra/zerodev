import Link from "next/link"
import { MessageCircle, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <blockquote className="text-2xl text-center italic mb-12">
          "ASTRONOMY COMPELS THE SOUL TO LOOK UPWARDS AND LEADS US FROM THIS WORLD TO ANOTHER"
        </blockquote>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/expert" className="hover:text-gray-300">Experts</Link>
            <Link href="/about" className="hover:text-gray-300">About us</Link>
            <Link href="/podcast" className="hover:text-gray-300">Podcasts</Link>
            <Link href="/contact" className="hover:text-gray-300">Contacts</Link>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <MessageCircle className="w-5 h-5" />
              <span className="sr-only">Let's chat</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email us</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

