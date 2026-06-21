
export const WorkProcess = () => {
  return (
    <section className="py-[120px] bg-gradient-to-br from-[#005B96] to-[#00A6A6] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] font-bold text-4xl mb-4">Our Execution Process</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">A systematic approach ensuring zero-defect containment systems.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
            {[
              "Consultation", "Site Assessment", "Engineering Design", "Installation", "Testing", "Handover"
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white text-[#005B96] font-['Montserrat'] font-bold text-xl flex items-center justify-center mb-6 shadow-lg relative z-10 border-4 border-[#00A6A6]">
                  {i + 1}
                </div>
                <h4 className="font-bold text-lg">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
