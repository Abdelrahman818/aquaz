import Image from "next/image"

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center pt-20"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src={"/assets/tool-in-water.jpeg"}
        width={1024}
        height={700}
        alt="Advanced geomembrane installation equipment in water containment project"
        className="absolute w-full left-0 top-0 h-full bg-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 text-center text-white">
        <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-7xl leading-[1.1] mb-6 max-w-5xl mx-auto animate-fade-in-up opacity-0">
          Advanced Geomembrane & Waterproofing Solutions for Critical Infrastructure
        </h1>
        <p className="text-[#00A6A6] font-medium text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up opacity-0 delay-100">
          Engineered for durability. Trusted across Africa and the Middle East.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-200">
          <button className="bg-[#F97316] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#ea580c] transition-colors w-full sm:w-auto">
            Request a Quote
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
            View Projects
          </button>
        </div>
      </div>
    </section>
  )
}
