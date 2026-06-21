import Image from "next/image";
import { Shield, HardHat, CheckCircle, Settings } from "lucide-react";

export const WhyUs = () => {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-['Montserrat'] font-bold text-4xl text-[#0F172A] mb-10">Why Choose AQUA Z</h2>
          <div className="space-y-8">
            {[
              { title: "Certified Installation", desc: "Our technicians hold international welding certifications and follow strict CQA protocols.", icon: Shield },
              { title: "Experienced Engineers", desc: "In-house design and technical support teams with decades of specialized geosynthetics experience.", icon: HardHat },
              { title: "Rigorous QA/QC", desc: "Comprehensive destructive and non-destructive testing on every seam we weld.", icon: CheckCircle },
              { title: "Long-Term Durability", desc: "We select and install materials engineered to perform for decades under harsh UV and chemical exposure.", icon: Settings },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center border border-[#CBD5E1]">
                    <item.icon className="w-6 h-6 text-[#005B96]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-xl text-[#0F172A] mb-2">{item.title}</h4>
                  <p className="text-[#475569]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={"/assets/aquaculture-ponds.png"}
            alt="AQUA Z certified technician performing precision geomembrane welding on aquaculture containment pond"
            width={1000}
            height={1000}
            className="rounded-[20px] object-cover h-[300px] w-full"
          />
          <Image
            src="/assets/workers.jpeg"
            alt="AQUA Z engineering team installing geomembrane barriers on industrial containment project"
            width={1000}
            height={1000}
            className="rounded-[20px] object-cover h-[300px] w-full mt-12"
          />
        </div>
      </div>
    </section>
  )
}
