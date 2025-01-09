import Image from "next/image"

const images = [
  { src: "/gallery/nebula.jpg", alt: "Nebula in deep space" },
  { src: "/gallery/eclipse.jpg", alt: "Solar eclipse" },
  { src: "/gallery/spacewalk.jpg", alt: "Astronaut in space" },
  { src: "/gallery/milkyway.jpg", alt: "Milky Way galaxy" },
  { src: "/gallery/astronauts.jpg", alt: "Astronaut figures" }
]

export default function GalleryStrip() {
  return (
    <section className="py-20">
      <div className="flex gap-4 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="relative w-72 aspect-[4/3] flex-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

