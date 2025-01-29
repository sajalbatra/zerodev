import Image from "next/image";
import zerodevlogo from "@/public/zerodevslogo.png";

export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">ABOUT US.</h1>
        <p className="text-gray-300 leading-relaxed">
          Zero Devs is a collective of <span className="text-white font-semibold">passionate developers, innovators, and creators</span> 
          dedicated to exploring and pushing the boundaries of technology. We believe in{" "}
          <span className="text-white font-semibold">learning by doing</span>—whether it's building modern web and mobile applications, 
          discussing the latest tech trends, or sharing insights through podcasts and blogs.
        </p>

        <p className="text-gray-300 mt-4">
          Our community thrives on <span className="text-white font-semibold">collaboration, innovation, and continuous learning.</span> 
          We explore cutting-edge tools, contribute to open-source projects, and inspire others to build something amazing.
        </p>

        {/* What We Do Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-white">What We Do</h2>
          <ul className="text-gray-300 mt-2 space-y-2">
            <li>🔹 <span className="text-white font-semibold">Innovate</span> – We build and experiment with new technologies, frameworks, and platforms.</li>
            <li>🔹 <span className="text-white font-semibold">Share Knowledge</span> – Through podcasts, reels, and blogs, we bring the latest insights in tech.</li>
            <li>🔹 <span className="text-white font-semibold">Grow Together</span> – We foster a community where developers can learn, collaborate, and create.</li>
          </ul>
        </div>

        {/* Our Vision */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-white">Our Vision</h2>
          <p className="text-gray-300 mt-2">
            At Zero Devs, we believe that <span className="text-white font-semibold">every great product starts from zero.</span> Our mission 
            is to help developers at all levels learn, grow, and contribute to the tech world. Whether you're a beginner or an experienced 
            engineer, Zero Devs is the place to <span className="text-white font-semibold">innovate, code, and evolve.</span>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:flex justify-center items-center hidden">
        <Image
          src={zerodevlogo}
          alt="Zero Dev Logo"
          className="object-contain"
          priority
          width={500}
        />
      </div>
    </section>
  );
}
