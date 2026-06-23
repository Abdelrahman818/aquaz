import { Analytics } from "@vercel/analytics/next"
import { Hero } from "@/components/Home/Hero";
import { Navbar } from "@/components/Nav";
import { StatStrip } from "@/components/Home/StatStrip";
import { CompanyIntro } from "@/components/Home/CompanyIntro";
import { Services } from "@/components/Home/Services";
import { Industries } from "@/components/Home/Industries";
import { Featured } from "@/components/Home/Featured";
import { WhyUs } from "@/components/Home/WhyUs";
import { WorkProcess } from "@/components/Home/WorkProcess";
import { CTA } from "@/components/Home/CTA";
import { Footer } from "@/components/Footer";

import '@/styles/animations.css';

export const metadata = {
  title: "AQUA Z | Geomembrane & Containment Solutions | Engineering Excellence",
  description: "Leading geomembrane installation and environmental containment solutions across Africa and Middle East. ISO certified engineering since 2009.",
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Analytics />
      <Navbar />
      <Hero />
      <StatStrip />
      <CompanyIntro />
      <Services />
      <Industries />
      <Featured />
      <WhyUs />
      <WorkProcess />
      <CTA />
      <Footer />
    </div>
  );
}
