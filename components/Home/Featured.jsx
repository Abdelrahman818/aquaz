import Image from "next/image";

export const Featured = () => {
  return (
    <section className="py-[120px] bg-[#0F172A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#00A6A6] font-bold tracking-wide uppercase mb-4">
              <div className="w-8 h-[2px] bg-[#00A6A6]"></div>
              Track Record
            </div>
            <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-white leading-tight">
              Featured Projects
            </h2>
          </div>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0F172A] transition-colors self-start md:self-auto">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Mining TSF Expansion", region: "Egypt", desc: "8,000,000 m² HDPE installation for gold mine tailings storage.", img: "mining-tsf.png" },
            { title: "Fish Farm Complex", region: "North Africa", desc: "2,500,000 m² containment for intensive aquaculture ponds.", img: "aquaculture-ponds.png" },
            { title: "Wastewater Lagoons", region: "Saudi Arabia", desc: "3,200,000 m² industrial effluent treatment facility.", img: "wastewater-facility.png" },
          ].map((proj, i) => (
            <div key={i} className="relative rounded-[20px] overflow-hidden group cursor-pointer aspect-[4/5]">
              <Image 
                src={`/assets/${proj.img}`}
                alt={`${proj.title} - ${proj.desc} - AQUA Z geomembrane engineering project in ${proj.region}`}
                width={700}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-[#00A6A6] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">
                  {proj.region}
                </div>
                <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-2">{proj.title}</h3>
                <p className="text-white/80 line-clamp-2">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
