import { Mail, MessageCircle } from "lucide-react";
import { Btn } from "../Btn";

export const CTA = () => {
  return (
    <section className="py-[120px] bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/assets/tech-pattern-bg.png')" }}></div>
      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <h2 className="font-['Montserrat'] font-extrabold text-5xl text-white mb-6">Ready to Start Your Project?</h2>
        <p className="text-[#94A3B8] text-xl mb-10 max-w-2xl mx-auto">Contact our engineering team for technical specifications, material selection advice, or a comprehensive quote.</p>
        <Btn route={'/contact'} innerText={"Request a Quote"} classes={"bg-[#F97316] text-white px-10 py-5 rounded-md font-bold text-xl hover:bg-[#ea580c] transition-colors shadow-[0_4px_20px_rgba(249,115,22,0.4)] mb-8"} />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 font-medium">
          <span className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-[#00A6A6]" /> +02 010 9601 9174</span>
          <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-[#00A6A6]" /> contact@aquaz.com</span>
        </div>
      </div>
    </section>
  )
}
