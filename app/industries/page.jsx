import Image from "next/image";
import { Navbar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HardHat, Droplets, Waves, Factory, Building2, Globe, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Industries | AQUA Z | Mining, Agriculture, Waste Management & More",
  description: "AQUA Z provides specialized geomembrane solutions for mining, agriculture, aquaculture, waste management, infrastructure, and recreation industries across Africa and Middle East.",
};

export default function Industries() {
  const industries = [
    {
      id: "mining",
      title: "Mining",
      icon: HardHat,
      img: "mining-tsf.png",
      desc: "Robust containment solutions designed for the extreme chemical and mechanical stresses of modern mining operations.",
      apps: ["Tailings Storage Facilities (TSF)", "Heap Leach Pads", "Process Solution Ponds", "Evaporation Ponds", "Stormwater Containment"]
    },
    {
      id: "agriculture",
      title: "Agriculture",
      icon: Droplets,
      img: "hero-reservoir.png",
      desc: "Preserving vital water resources for large-scale agricultural operations through reliable geomembrane lining.",
      apps: ["Irrigation Reservoirs", "Water Storage Canals", "Anaerobic Digesters", "Farm Runoff Containment"]
    },
    {
      id: "aquaculture",
      title: "Aquaculture",
      icon: Waves,
      img: "aquaculture-ponds.png",
      desc: "Creating controlled, impermeable environments for intensive fish farming operations that prevent seepage and cross-contamination.",
      apps: ["Fish Farm Ponds", "Shrimp Farming Basins", "Hatchery Tanks", "Water Treatment Lagoons"]
    },
    {
      id: "waste",
      title: "Waste Management",
      icon: Factory,
      img: "wastewater-facility.png",
      desc: "Multi-layered environmental barrier systems designed to protect groundwater from hazardous municipal and industrial waste.",
      apps: ["Municipal Solid Waste Landfills", "Hazardous Waste Cells", "Leachate Collection Ponds", "Capping and Closure Systems"]
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      icon: Building2,
      img: "hero-installation.png",
      desc: "Specialized waterproofing and containment for civil engineering projects, ensuring long-term structural integrity.",
      apps: ["Artificial Lakes", "Tunnel Waterproofing", "Secondary Containment for Tanks", "Stormwater Retention Basins"]
    },
    {
      id: "recreation",
      title: "Recreation",
      icon: Globe,
      img: "hero-reservoir.png",
      desc: "Aesthetic and highly functional water containment for recreational facilities, resorts, and master-planned communities.",
      apps: ["Golf Course Lakes", "Decorative Water Features", "Massive Swimming Pools", "Theme Park Lagoons"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section 
        className="relative pt-32 pb-24 flex items-center"
        style={{
          backgroundImage: "url('/__mockup/images/aquaz/tech-pattern-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#005B96]/90"></div>
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 text-center">
          <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl text-white mb-6">
            Industries We Serve
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Providing mission-critical geomembrane solutions tailored to the specific regulatory and operational demands of every sector.
          </p>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-[120px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-24">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const isEven = i % 2 === 0;

            return (
              <div key={ind.id} id={ind.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#F8FAFC] rounded-[30px] overflow-hidden shadow-lg border border-[#CBD5E1]/50">
                
                {/* Image side */}
                <div className={`h-full min-h-[400px] relative ${isEven ? 'order-first' : 'lg:order-last order-first'}`}>
                  <Image 
                    src={`/assets/${ind.img}`} 
                    alt={ind.title} 
                    width={1000}
                    height={1000}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                    <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-['Montserrat'] font-bold tracking-widest uppercase text-sm">{ind.title}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 md:p-12">
                  <h2 className="font-['Montserrat'] font-bold text-4xl text-[#0F172A] mb-6">{ind.title}</h2>
                  <p className="text-[#475569] text-lg leading-relaxed mb-8">
                    {ind.desc}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-[#0F172A] mb-4 text-sm uppercase tracking-wider">Key Applications:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ind.apps.map((app, j) => (
                        <li key={j} className="flex items-start gap-2 text-[#475569] text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00A6A6] mt-1.5 shrink-0"></div>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-transparent border-2 border-[#005B96] text-[#005B96] px-6 py-3 rounded-md font-bold hover:bg-[#005B96] hover:text-white transition-colors flex items-center gap-2">
                    View {ind.title} Projects <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A] text-center px-6">
        <h2 className="font-['Montserrat'] font-bold text-4xl text-white mb-6">Need a Specialized Solution?</h2>
        <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">Don&apos;t see your industry listed? Our engineering team designs custom containment systems for unique applications.</p>
        <button className="bg-[#F97316] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#ea580c] transition-colors shadow-lg">
          Consult an Engineer
        </button>
      </section>

      <Footer />
    </div>
  );
}
