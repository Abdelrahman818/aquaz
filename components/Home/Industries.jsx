import { HardHat, Droplets, Waves, Factory, Building2, Globe } from "lucide-react"

export const Industries = () => {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl text-[#0F172A] mb-4">Industries We Serve</h2>
          <p className="text-[#475569] text-lg max-w-2xl">Specialized expertise across multiple sectors requiring mission-critical fluid and gas containment.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Mining", icon: HardHat },
            { name: "Agriculture", icon: Droplets },
            { name: "Aquaculture", icon: Waves },
            { name: "Waste Management", icon: Factory },
            { name: "Infrastructure", icon: Building2 },
            { name: "Recreation", icon: Globe },
          ].map((ind, i) => (
            <div key={i} className="group border border-[#CBD5E1] rounded-[20px] p-6 text-center hover:bg-[#005B96] hover:border-[#005B96] transition-colors cursor-pointer">
              <ind.icon className="w-10 h-10 mx-auto text-[#00A6A6] group-hover:text-white mb-4 transition-colors" />
              <h4 className="font-['Montserrat'] font-bold text-[#0F172A] group-hover:text-white transition-colors">{ind.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
