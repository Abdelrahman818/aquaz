import Link from "next/link";
import { Navbar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ShieldCheck, FileText, AlertTriangle, Gavel, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | AQUA Z",
  description: "Review the terms and conditions for AQUA Z services, quotations, and project delivery.",
};

const sections = [
  {
    title: "1. Scope of Services",
    text: "AQUA Z provides geomembrane lining, waterproofing, containment, installation, and technical consulting services for projects across water, mining, waste, agriculture, and infrastructure sectors. Any scope, specification, schedule, or technical requirement must be confirmed in writing before work begins.",
    icon: FileText,
  },
  {
    title: "2. Quotations and Project Acceptance",
    text: "All quotations are based on the information provided by the client at the time of request. AQUA Z reserves the right to revise pricing or delivery timelines if site conditions, material availability, logistics, or regulatory requirements change materially.",
    icon: ShieldCheck,
  },
  {
    title: "3. Site Access and Conditions",
    text: "The client is responsible for providing safe and lawful access to the site, suitable working conditions, and any required permits or approvals. Delays caused by restricted access, incomplete site preparation, weather conditions, or third-party restrictions may affect project timelines and costs.",
    icon: AlertTriangle,
  },
  {
    title: "4. Warranty and Performance",
    text: "AQUA Z applies industry-standard quality controls and installation practices to deliver durable containment systems. However, system performance depends on proper design, site preparation, material handling, and ongoing maintenance by the client or appointed contractor.",
    icon: Gavel,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 bg-[#005B96] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(0,166,166,0.35),transparent_45%)]"></div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[#00E5E5] uppercase tracking-[0.35em] font-bold mb-6">Legal Information</p>
          <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl mb-6">
            Terms & Conditions
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-100 leading-relaxed">
            These terms outline the responsibilities, expectations, and commercial framework governing our services and client engagements.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white rounded-[30px] border border-[#E2E8F0] p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#0F172A] mb-6">
              General Terms for AQUA Z Services
            </h2>
            <p className="text-[#475569] leading-relaxed mb-6">
              By engaging AQUA Z for engineering, supply, installation, or consultancy services, the client agrees to the terms outlined below. These terms are intended to support clear project delivery, protect both parties, and define the basis for commercial and technical responsibility.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Where a formal contract, purchase order, or proposal is issued, that document shall take precedence over this summary where there is any conflict.
            </p>
          </div>

          <div className="bg-[#0F172A] text-white rounded-[30px] p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
            <h3 className="font-['Montserrat'] font-bold text-2xl mb-6">Need assistance?</h3>
            <p className="text-white/70 leading-relaxed mb-8">
              For project-specific questions, commercial clarifications, or contract review, our team is available to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] transition-colors text-white font-semibold px-6 py-3 rounded-full"
            >
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <article key={index} className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E0F2F1] text-[#005B96]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-xl text-[#0F172A] mb-3">
                      {section.title}
                    </h3>
                    <p className="text-[#475569] leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-[#005B96] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Additional Conditions</h2>
          <div className="grid gap-6 md:grid-cols-2 text-[#E2E8F0] leading-relaxed">
            <div className="rounded-[24px] border border-white/15 bg-white/10 p-8">
              <p>
                Confidentiality of project information, site data, and technical documentation shall be maintained unless disclosure is required by law or agreed in writing.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-white/10 p-8">
              <p>
                Any dispute arising from services shall be addressed first through good-faith discussion and, if necessary, through the appropriate legal jurisdiction applicable to the project location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
