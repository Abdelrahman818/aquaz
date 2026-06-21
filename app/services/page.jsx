import Image from "next/image";
import { Navbar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Shield, Layers, Settings, Droplets, HardHat, Factory, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | AQUA Z | Geomembrane Lining, Waterproofing & Containment",
  description: "Explore AQUA Z services, including HDPE, PVC, TPO, EPDM, mining and wastewater containment solutions for Africa and the Middle East.",
};

const services = [
  {
    title: "HDPE Geomembranes",
    description: "High-density polyethylene liners engineered for exceptional chemical resistance, low permeability, and long-term durability in large containment systems.",
    icon: <Layers />,
  },
  {
    title: "PVC Geomembranes",
    description: "Flexible polyvinyl chloride lining systems designed for complex geometries, strict regulatory compliance, and reliable waterproofing performance.",
    icon: <Shield />,
  },
  {
    title: "TPO Membranes",
    description: "Thermoplastic polyolefin barriers that combine strong seam welding with excellent weathering resistance for long-term protection.",
    icon: <Settings />,
  },
  {
    title: "EPDM Systems",
    description: "Ethylene propylene diene monomer rubber membranes delivering superior UV stability, flexibility, and leak-proof containment for difficult applications.",
    icon: <Droplets />,
  },
  {
    title: "Mining Containment",
    description: "Large-scale geomembrane installation for heap leach pads, tailings storage facilities, process ponds, and stormwater control.",
    icon: <HardHat />,
  },
  {
    title: "Wastewater Solutions",
    description: "Engineered lining systems for municipal and industrial effluent lagoons, sludge ponds, and environmental protection cells.",
    icon: <Factory />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 bg-[#005B96] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(0,166,166,0.35),transparent_45%)]"></div>
        <div className="relative max-w-360 mx-auto px-6 md:px-12 text-center">
          <p className="text-[#00E5E5] uppercase tracking-[0.35em] font-bold mb-6">Our Services</p>
          <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl mb-6">
            Complete geomembrane and containment solutions engineered for lasting performance.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-100 leading-relaxed mb-10">
            From primary liners to full environmental containment systems, AQUA Z delivers tailored service packages for every water, waste, and industrial project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea580c] transition-colors text-white font-semibold px-8 py-4 rounded-full shadow-lg"
            >
              Request a Consultation
            </Link>
            <a
              href="#service-list"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white transition-colors text-white px-8 py-4 rounded-full"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section id="service-list" className="py-25 bg-[#F8FAFC]">
        <div className="max-w-360 mx-auto px-6 md:px-12">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-[30px] border border-[#E2E8F0] p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#E0F2F1] flex items-center justify-center mb-6 text-[#005B96]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F172A] mb-4">{service.title}</h2>
                  <p className="text-[#475569] leading-relaxed mb-8">{service.description}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[#00A6A6] font-semibold hover:text-[#0f8f8f] transition-colors">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-25 bg-white">
        <div className="max-w-360 mx-auto px-6 md:px-12 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-[#005B96] uppercase tracking-[0.3em] font-bold mb-4">Why AQUA Z</p>
            <h2 className="font-['Montserrat'] font-bold text-4xl text-[#0F172A] mb-6">
              Integrated service delivery for every liner, seam, and inspection.
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-8">
              Our teams handle design, material procurement, installation, welding, and verification. The result is a turn-key containment solution backed by rigorous quality management.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Full project mobilization",
                "Certified welding and QA/QC",
                "Multi-material systems",
                "24/7 on-site engineering support",
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-[#F8FAFC] p-5 border border-[#E2E8F0]">
                  <p className="text-[#0F172A] font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
            <Image
              src="/assets/hero-installation.png"
              alt="AQUA Z service team installing geomembrane lining"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-25 bg-[#005B96] text-white">
        <div className="max-w-360 mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">Ready to specify your lining system?</h2>
          <p className="max-w-3xl mx-auto text-slate-200 leading-relaxed mb-10">
            Contact AQUA Z for help choosing the right geomembrane and containment service for your water storage, mining, waste, or infrastructure project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea580c] transition-colors text-white font-semibold px-8 py-4 rounded-full shadow-lg"
          >
            Talk to Our Service Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
