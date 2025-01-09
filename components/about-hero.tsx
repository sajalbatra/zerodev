import Image from "next/image"
import zerodevlogo from "@/public/zerodevslogo.png"

export default function AboutHero() {
  return (
    <section className="grid grid-cols-2 gap-12 px-6 py-20">
      <div>
        <h1 className="text-7xl font-bold mb-8">ABOUT US.</h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={zerodevlogo}
          alt="Dhruva Logo"
          className="object-contain"
          priority
          width={500}
        />
      </div>
    </section>
  )
}

