import Image from "next/image";

export default function TeamPhoto() {
  return (
    <section className="flex justify-center items-center py-20">
      <div className="w-[90%] max-w-6xl">
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl border border-white">
          <Image
            src="/team-photo.jpg"
            alt="Dhruva Team"
            width={1920}
            height={1080} 
            priority
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}