import Image from "next/image"

export default function PodcastHero() {
  return (
    <section className="px-6 py-20">
      <h1 className="text-[200px] font-bold tracking-tight leading-none">
        P
        <span className="inline-block relative w-[200px] h-[200px] -mb-8">
          <Image
            src="/moon.png"
            alt=""
            fill
            className="object-cover rounded-full"
            priority
          />
        </span>
        DCASTS
      </h1>
    </section>
  )
}

