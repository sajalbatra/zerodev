import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Episode {
  number: string
  title: string
  tags: string[]
  image: string
}

const episodes: Episode[] = [
  {
    number: "01",
    title: "SPACEBUZZ EP. 1",
    tags: ["#SPACE", "#ASTRONOMY"],
    image: "/sajalbatra.jpg"
  },
  {
    number: "02",
    title: "SPACEBUZZ EP. 2",
    tags: ["#COSMOS", "#ASTRONOMY"],
    image: "/agrim.jpg"
  },
  {
    number: "03",
    title: "SPACEBUZZ EP. 3",
    tags: ["#ASTRONAUT", "#ASTRONOMY"],
    image: "/aryansingh.jpg"
  },
  {
    number: "04",
    title: "SPACEBUZZ EP. 4",
    tags: ["#SPACE", "#ASTRONOMY"],
    image: "/shivamsingh.jpg"
  }
]

export default function PodcastOfWeek() {
  return (
    <section className="px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <h2 className="text-6xl font-bold leading-tight">
          PODCAST OF<br />THE WEEK
        </h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
          </p>
          <Button variant="outline" className="gap-2 text-black">
            Learn More
            <span className="rotate-45">↗</span>
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {episodes.map((episode) => (
          <div key={episode.number} className="flex gap-6">
            <span className="text-4xl font-bold text-gray-600">
              {episode.number}
            </span>
            <div className="flex gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={episode.image}
                  alt={episode.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-bold mb-2">{episode.title}</h3>
                <div className="flex gap-2">
                  {episode.tags.map((tag) => (
                    <span key={tag} className="text-sm text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

