import Image from "next/image"

export default function EventsHero() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <Image
        src="/aryansingh.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col justify-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight">
          OUR STARGAZERS SPECTACLE
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-200">
          A JOURNEY THROUGH THE COSMOS
        </p>
      </div>
    </section>
  )
}

