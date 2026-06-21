
export const StatStrip = () => {
  return (
    <section className="bg-[#1E293B] py-12 border-b-4 border-[#005B96]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <div className="text-center px-4">
            <p className="text-[#F97316] font-['Montserrat'] font-bold text-4xl mb-2">25M+ m²</p>
            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Installed</p>
          </div>
          <div className="text-center px-4">
            <p className="text-[#F97316] font-['Montserrat'] font-bold text-4xl mb-2">100+</p>
            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Projects</p>
          </div>
          <div className="text-center px-4">
            <p className="text-[#F97316] font-['Montserrat'] font-bold text-4xl mb-2">3</p>
            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Regions</p>
          </div>
          <div className="text-center px-4">
            <p className="text-[#F97316] font-['Montserrat'] font-bold text-4xl mb-2">15+</p>
            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Years Exp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
