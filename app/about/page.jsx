import Image from "next/image";
import { Navbar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Shield, Award, Globe, Leaf, HardHat, CheckCircle, MapPin, Droplets, Layers } from "lucide-react";

export const metadata = {
  title: "About AQUA Z | Engineering Excellence Since 2009",
  description: "Meet the team behind world-class geomembrane solutions. AQUA Z combines ISO-certified expertise with decades of engineering experience across Africa and the Middle East.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section 
        className="relative pt-32 pb-24 flex items-center"
        style={{
          backgroundImage: "url('/__mockup/images/aquaz/engineering-team.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/80"></div>
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 text-center">
          <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl text-white mb-4">
            About AQUA Z
          </h1>
          <p className="text-[#00A6A6] text-xl font-semibold uppercase tracking-wider">
            Engineering Excellence Since 2009
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#005B96] font-bold tracking-wide uppercase mb-4">
              <div className="w-8 h-[2px] bg-[#005B96]"></div>
              Our Mission
            </div>
            <h2 className="font-['Montserrat'] font-bold text-4xl text-[#0F172A] mb-6 leading-tight">
              To engineer and deliver the most reliable containment solutions in the region.
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              Founded on the principles of engineering precision and environmental stewardship, AQUA Z has grown from a specialized local contractor into a multinational infrastructure partner. We believe that protecting the environment while enabling industrial progress requires an uncompromising commitment to quality.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              Every seam we weld, every roll we deploy, and every project we hand over stands as a testament to our dedication to absolute impermeability and long-term durability.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#F97316] rounded-[20px] translate-x-4 translate-y-4"></div>
            <Image 
              src={"/assets/landscape.jpeg"}
              alt="Our Mission in action"
              width={1000}
              height={1000}
              className="relative z-10 w-full rounded-[20px] shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[120px] bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] font-bold text-4xl text-[#0F172A] mb-4">Core Values</h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">The principles that guide our engineering decisions and project execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Engineering Excellence", desc: "Rigorous standards, continuous training, and technical mastery in every installation." },
              { icon: Award, title: "Quality Assurance", desc: "Zero-defect tolerance policy backed by comprehensive destructive and non-destructive testing." },
              { icon: Globe, title: "Global Reach", desc: "Delivering world-class standards adapted to the specific operational realities of Africa and the Middle East." },
              { icon: Leaf, title: "Environmental Responsibility", desc: "Protecting groundwater and soil through impenetrable barriers that safeguard natural ecosystems." },
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,.05)] border border-[#CBD5E1]/50 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-[#005B96]/10 rounded-full flex items-center justify-center mb-6 text-[#005B96]">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F172A] mb-3">{val.title}</h3>
                <p className="text-[#475569] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise & Standards */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#0F172A] mb-8">Technical Expertise</h2>
            <p className="text-[#475569] mb-8">Our strength lies in our specialized workforce. Every team member brings deep domain knowledge to the site.</p>
            <div className="space-y-4">
              {[
                { role: "Geomembrane Specialists", icon: Layers, desc: "Certified master welders trained on the latest automated equipment." },
                { role: "QA/QC Engineers", icon: CheckCircle, desc: "Dedicated personnel ensuring absolute compliance with GRI-GM13/17." },
                { role: "Site Engineers", icon: HardHat, desc: "Experienced project managers coordinating complex logistical deployments." },
                { role: "Environmental Consultants", icon: Leaf, desc: "Experts in regulatory compliance and containment design." },
                { role: "Drainage Consultants", icon: Droplets, desc: "Specialists in geocomposite and geonet flow engineering." },
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-[#CBD5E1]/50 bg-[#F8FAFC]">
                  <div className="text-[#00A6A6]">
                    <role.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-[#0F172A]">{role.role}</h4>
                    <p className="text-sm text-[#475569]">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#0F172A] mb-8">Certifications & Standards</h2>
            <p className="text-[#475569] mb-8">We operate strictly within international guidelines, providing full traceability and documentation for every square meter installed.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "ISO 9001:2015", subtitle: "Quality Management" },
                { title: "ISO 14001:2015", subtitle: "Environmental Management" },
                { title: "ISO 45001:2018", subtitle: "Occupational Health & Safety" },
                { title: "GRI-GM13 / GM17", subtitle: "Material & Installation Compliance" },
              ].map((cert, i) => (
                <div key={i} className="p-6 border-2 border-[#005B96]/20 rounded-[20px] bg-white text-center">
                  <Award className="w-10 h-10 mx-auto text-[#F97316] mb-3" />
                  <h4 className="font-['Montserrat'] font-bold text-lg text-[#0F172A] mb-1">{cert.title}</h4>
                  <p className="text-sm text-[#475569]">{cert.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-[120px] bg-[#1E293B] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] font-bold text-4xl mb-4">Regional Presence</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Operating across three major regions with the logistical capacity to deploy teams rapidly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Egypt (HQ)", desc: "Our central hub directing engineering, material procurement, and executive leadership.", cities: ["Cairo", "Alexandria", "Aswan"] },
              { name: "Africa", desc: "Extensive experience navigating complex logistical challenges in remote mining environments.", cities: ["South Africa", "Ghana", "Tanzania"] },
              { name: "Middle East", desc: "Delivering massive infrastructure and water management projects under extreme climate conditions.", cities: ["Saudi Arabia", "UAE", "Oman"] }
            ].map((region, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[20px] backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-[#00A6A6] mb-4" />
                <h3 className="font-['Montserrat'] font-bold text-2xl mb-3">{region.name}</h3>
                <p className="text-white/60 mb-6">{region.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map(city => (
                    <span key={city} className="bg-black/30 text-white/80 text-sm px-3 py-1 rounded-full">{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#005B96] text-center px-6">
        <h2 className="font-['Montserrat'] font-bold text-4xl text-white mb-6">Partner with AQUA Z</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Discover how our engineering expertise can ensure the long-term success of your next containment project.</p>
        <button className="bg-[#F97316] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#ea580c] transition-colors shadow-lg">
          Contact Our Engineering Team
        </button>
      </section>

      <Footer />
    </div>
  );
}
