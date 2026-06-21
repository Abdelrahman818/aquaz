import { Layers, Shield, Settings, Droplets, HardHat, Factory, ChevronRight } from "lucide-react"
import Link from "next/link"

export const Services = () => {
  return (
    <section className="py-[120px] bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#005B96] font-bold tracking-wide uppercase mb-4">
            <div className="w-8 h-[2px] bg-[#005B96]"></div>
            Core Services
            <div className="w-8 h-[2px] bg-[#005B96]"></div>
          </div>
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#0F172A] leading-tight">
            Comprehensive lining solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "HDPE Geomembranes", desc: "High-density polyethylene liners for maximum chemical resistance and durability in harsh environments.", icon: Layers },
            { title: "PVC Geomembranes", desc: "Flexible polyvinyl chloride liners ideal for complex geometries and specialized waterproofing applications.", icon: Shield },
            { title: "TPO Membranes", desc: "Thermoplastic polyolefin systems combining long-term weathering resistance with strong heat-welded seams.", icon: Settings },
            { title: "EPDM Systems", desc: "Ethylene propylene diene monomer rubber offering outstanding flexibility and UV resistance.", icon: Droplets },
            { title: "Mining Solutions", desc: "Heavy-duty containment for heap leach pads, tailings storage facilities, and process solution ponds.", icon: HardHat },
            { title: "Wastewater Solutions", desc: "Impermeable barriers for municipal and industrial wastewater treatment lagoons and sludge ponds.", icon: Factory },
          ].map((srv, i) => (
            <div key={i} className="bg-white p-8 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,.08)] hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#CBD5E1]">
              <div className="w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center mb-6">
                <srv.icon className="w-7 h-7 text-[#005B96]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F172A] mb-3">{srv.title}</h3>
              <p className="text-[#475569] leading-relaxed mb-6">{srv.desc}</p>
              <Link href="/services" className="text-[#00A6A6] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
