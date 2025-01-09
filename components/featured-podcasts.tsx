import Image from "next/image"

export default function FeaturedPodcasts() {
  return (
    <section className="px-6 space-y-6">
      
      {/* Podcast 1  */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src="/coverimage.png"
          alt="Studio microphone on dark background"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <Image
            src="/agrim.jpg"
            alt="Available on YouTube"
            width={120}
            height={27}
          />
        </div>
      </div>

      {/* Podcast 2 */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src="/coverimage.png"
          alt="Studio microphone with warm lighting"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <Image
            src="/aryansingh.jpg"
            alt="Available on YouTube"
            width={120}
            height={27}
          />
        </div>
      </div>
    </section>
  )
}

