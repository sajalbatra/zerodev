import Image from "next/image"

export default function FeaturedPodcasts() {
  return (
    <section className="px-6 space-y-6">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src="/podcast-1.jpg"
          alt="Studio microphone on dark background"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <Image
            src="/youtube.png"
            alt="Available on YouTube"
            width={120}
            height={27}
          />
        </div>
      </div>
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src="/podcast-2.jpg"
          alt="Studio microphone with warm lighting"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <Image
            src="/youtube.png"
            alt="Available on YouTube"
            width={120}
            height={27}
          />
        </div>
      </div>
    </section>
  )
}

