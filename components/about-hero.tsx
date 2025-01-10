import Image from "next/image"
import zerodevlogo from "@/public/zerodevslogo.png"

export default function AboutHero() {
  return (
    <section className="grid grid-cols-2 gap-12 px-6 py-20">
      <div>
        <h1 className="text-7xl font-bold mb-8">ABOUT US.</h1>
        <p className="text-gray-300">
        Welcome to ZeroDev! We are thrilled to be the proud winners of a SIH. Our mission is to inspire and educate the developer community through engaging content about coding, innovative tech events, and insightful developer stories. Our talented team of developers, designers, community leaders, and editors work tirelessly to bring you the best in technology. Join us on our journey to make a lasting impact in the tech world.
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

