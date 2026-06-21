import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const CompanyIntro = () => {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[#005B96] font-bold tracking-wide uppercase mb-4">
            <div className="w-8 h-[2px] bg-[#005B96]"></div>
            About AQUA Z
          </div>
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#0F172A] leading-tight mb-6">
            Your trusted engineering partner for large-scale containment.
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed mb-8">
            AQUA Z is where engineering meets environmental responsibility at massive scale. We specialize in the supply, installation, and testing of geosynthetic lining systems for the most demanding industrial applications. With over 25 million square meters installed, we have the capacity, expertise, and technical precision to deliver flawless results on every project.
          </p>
          <button className="text-[#005B96] font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-wide">
            Read Our Story <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#005B96] rounded-[20px] translate-x-4 translate-y-4"></div>
          <Image 
            src={"/assets/hero-reservoir.png"}
            alt="Large-scale water reservoir with AQUA Z geomembrane installation for agricultural irrigation"
            width={1000}
            height={1000}
            className="relative z-10 w-full h-auto rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  )
}
