import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ChevronRight, Layers, Globe, MapPin, Droplets } from "lucide-react";

export const metadata = {
  title: "Projects | AQUA Z | Geomembrane & Containment Engineering Projects",
  description: "Browse AQUA Z engineering projects across mining, aquaculture, wastewater, and infrastructure applications. See our track record in containment and geomembrane installations.",
};

const projects = [
  {
    title: "Mining Tailings Storage Facility Expansion",
    location: "Egypt",
    description: "8,000,000 m² HDPE liner system installed for a major gold mining operation, including pond preparation, welding, and QA/QC verification.",
    image: "mining-tsf.png",
    badge: "Mining",
  },
  {
    title: "Aquaculture Pond Containment",
    location: "North Africa",
    description: "2,500,000 m² of lined fish farm basins with specialized geomembrane systems to prevent seepage and contamination.",
    image: "aquaculture-ponds.png",
    badge: "Aquaculture",
  },
  {
    title: "Wastewater Treatment Lagoon Retrofit",
    location: "Saudi Arabia",
    description: "3,200,000 m² of impermeable geomembrane barrier installed for industrial effluent lagoons, including geotextile protection layers.",
    image: "wastewater-facility.png",
    badge: "Wastewater",
  },
  {
    title: "Infrastructure Reservoir Lining",
    location: "UAE",
    description: "Large-scale reservoir waterproofing using high-performance HDPE and PVC membranes to safeguard potable and stormwater assets.",
    image: "hero-reservoir.png",
    badge: "Infrastructure",
  },
  {
    title: "Civil Containment for Industrial Tank Farm",
    location: "Egypt",
    description: "Secondary containment system with welded geomembranes and engineered drainage for chemical storage tanks.",
    image: "hero-installation.png",
    badge: "Civil Works",
  },
  {
    title: "Environmental Liners for Landfill Cell",
    location: "Africa",
    description: "Comprehensive landfill lining solution featuring geosynthetics, compacted clay alternatives, and leak detection layers.",
    image: "wastewater-facility.png",
    badge: "Environmental",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 bg-[#0F172A] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(circle at top, rgba(0,166,166,0.35), transparent 45%)' }}
        />
        <div className="relative max-w-360 mx-auto px-6 md:px-12 text-center">
          <p className="text-[#00A6A6] uppercase tracking-[0.3em] font-bold mb-6">Featured Projects</p>
          <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl mb-6">
            Proven containment projects for demanding water, waste, and industrial environments.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed mb-10">
            AQUA Z delivers engineered geomembrane systems for large-scale reservoirs, mining operations, wastewater lagoons, and reinforced secondary containment across Africa and the Middle East.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#00A6A6] hover:bg-[#0d8b8b] transition-colors text-white font-semibold px-8 py-4 rounded-full shadow-lg"
            >
              Request a Project Quote
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white transition-colors text-white px-8 py-4 rounded-full"
            >
              View Project Showcase
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-25 bg-[#F8FAFC]">
        <div className="max-w-360 mx-auto px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[30px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] bg-white border border-[#E2E8F0]">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <Image
                    src={`/assets/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/80 via-transparent"></div>
                  <div className="absolute left-6 bottom-6 rounded-full bg-[#00A6A6] px-4 py-2 text-xs uppercase tracking-[0.25em] font-bold text-white">
                    {project.badge}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-4 text-sm uppercase tracking-[0.24em] text-[#64748B]">
                    <span>{project.location}</span>
                    <span>{project.badge}</span>
                  </div>
                  <h2 className="font-['Montserrat'] font-bold text-2xl text-[#0F172A] mb-4">{project.title}</h2>
                  <p className="text-[#475569] leading-relaxed mb-6">{project.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#00A6A6] font-semibold hover:text-[#0d8b8b] transition-colors"
                  >
                    Discuss similar work <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-25 bg-white">
        <div className="max-w-360 mx-auto px-6 md:px-12 grid gap-10 lg:grid-cols-3">
          {[
            { icon: <Droplets />, title: "Water Containment", desc: "Specialized lining systems for reservoirs, lakes, canals, and industrial water bodies." },
            { icon: <Layers />, title: "Geomembrane Installation", desc: "HDPE, PVC, TPO, and EPDM solutions tailored to each site environment and regulatory requirement." },
            { icon: <Globe />, title: "Regional Delivery", desc: "Project execution supported by local teams and logistics for Africa and the Middle East." },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="rounded-[28px] border border-[#E2E8F0] p-8 bg-[#F8FAFC]">
                <div className="w-14 h-14 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#00A6A6] mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-2xl text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-25 bg-[#0F172A] text-white">
        <div className="max-w-360 mx-auto px-6 md:px-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center gap-3 text-[#00A6A6] uppercase tracking-[0.3em] font-bold">
            <MapPin className="w-5 h-5" />
            Trusted Project Partners
          </div>
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
            From design through commissioning, AQUA Z stands behind every large-scale project.
          </h2>
          <p className="max-w-2xl mx-auto text-slate-200 leading-relaxed mb-10">
            We ensure full documentation, material traceability, and on-site quality control for every liner system. Our teams are mobilized with the right equipment and certification to deliver on time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#00A6A6] hover:bg-[#0d8b8b] transition-colors text-white font-semibold px-8 py-4 rounded-full shadow-lg"
          >
            Start Your Project Discussion
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
