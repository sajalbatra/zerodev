import Image from "next/image"

const images = [
  { src: "/aryansingh.jpg", alt: "Nebula in deep space" },
  { src: "/aryansingh.jpg", alt: "Solar eclipse" },
  { src: "/aryansingh.jpg", alt: "Astronaut in space" },
  { src: "/aryansingh.jpg", alt: "Milky Way galaxy" },
  { src: "/aryansingh.jpg", alt: "Astronaut figures" }
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

