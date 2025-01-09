import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Event {
  id: string;
  number: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: "1",
    number: "#1",
    date: "18/06/2023",
    title: "TALK ON DARK MATTER",
    description: "Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur.",
    image: "/events/dark-matter.jpg"
  },
  {
    id: "2",
    number: "#2",
    date: "16/06/2023",
    title: "ASTRONAUTS WE KNOW",
    description: "Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.",
    image: "/events/astronaut.jpg"
  }
]

export default function RecentEvents() {
  return (
    <section className="px-6 py-20">
      <div className="relative">
        <Image
          src="/moon.png"
          alt=""
          width={400}
          height={400}
          className="absolute -left-20 top-0"
        />
        <h2 className="text-4xl font-bold mb-12 relative z-10">
          RECENT EVENTS
        </h2>
        <div className="space-y-20">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              <span className="absolute right-0 top-0 text-8xl font-bold text-gray-800">
                {event.number}
              </span>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-gray-800/50 p-8 rounded-lg">
                      <div className="text-sm mb-2">{event.date}</div>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <p className="text-gray-300 mb-6">{event.description}</p>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-800/50 p-8 rounded-lg">
                      <div className="text-sm mb-2">{event.date}</div>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <p className="text-gray-300 mb-6">{event.description}</p>
                      <Button variant="outline">Learn More</Button>
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

