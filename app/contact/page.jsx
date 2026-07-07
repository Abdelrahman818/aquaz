'use client';

import { useState } from "react";
import { Navbar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, ChevronRight, MessageCircle } from "lucide-react";

const initialFormState = {
  name: "",
  company: "",
  mail: "",
  phone: "",
  country: "",
  projType: "",
  msgContent: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.company.trim() || !formData.mail.trim() || !formData.msgContent.trim()) {
      return "Please complete all required fields before sending your message.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.mail)) {
      return "Please enter a valid email address.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    setSubmitting(true);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Unable to send your message.");
      }

      setStatus("Your request was sent successfully. We will contact you shortly.");
      setFormData(initialFormState);
    } catch (err) {
      setError(err?.message || "Unexpected error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Inter'] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section 
        className="relative pt-32 pb-24 flex items-center"
        style={{
          backgroundImage: "url('/__mockup/images/aquaz/tech-pattern-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#005B96]/90"></div>
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 text-center">
          <h1 className="font-['Montserrat'] font-extrabold text-5xl md:text-6xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            Get in touch with our engineering team for technical specifications or to request a quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-[120px] bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,.08)] border border-[#CBD5E1]/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#005B96]/10 text-[#005B96] px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase flex items-center gap-2">
                <Clock className="w-4 h-4" /> We respond within 24 hours
              </div>
            </div>
            
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#0F172A] mb-8">Send us your project details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name || ""}
                    placeholder="John Doe"
                    onChange={handleForm}
                    className="w-full px-4 py-3 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:border-[#005B96] focus:ring-1 focus:ring-[#005B96] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    id="company-name"
                    value={formData.company || ""}
                    placeholder="Engineering Corp"
                    onChange={handleForm}
                    className="w-full px-4 py-3 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:border-[#005B96] focus:ring-1 focus:ring-[#005B96] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    value={formData.mail || ""}
                    placeholder="john@company.com"
                    onChange={handleForm}
                    className="w-full px-4 py-3 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:border-[#005B96] focus:ring-1 focus:ring-[#005B96] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone || ""}
                    placeholder="+02 12 3456 7890"
                    onChange={handleForm}
                    className="w-full px-4 py-3 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:border-[#005B96] focus:ring-1 focus:ring-[#005B96] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Country / Region</label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country || ""}
                    placeholder="Egypt"
                    onChange={handleForm}
                    className="w-full px-4 py-3 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:border-[#005B96] focus:ring-1 focus:ring-[#005B96] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Project Type</label>
                  <select
                    name="projType"
                    id="projType"
                    value={formData.projType || ""}
                    onChange={handleForm}
                    className="w-full px-4 py-3 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:border-[#005B96] focus:ring-1 focus:ring-[#005B96] outline-none transition-colors text-[#475569]"
                  >
                    <option value="">Select project type...</option>
                    <option>Mining / TSF</option>
                    <option>Water Reservoir</option>
                    <option>Waste Management</option>
                    <option>Aquaculture</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Project Details / Message</label>
                <textarea
                  rows={5}
                  name="msgContent"
                  value={formData.msgContent || ""}
                  placeholder="Please provide project scale, location, and specific requirements..."
                  onChange={handleForm}
                  className="w-full px-4 py-3 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] focus:bg-white focus:border-[#005B96] focus:ring-1 focus:ring-[#005B96] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {status && <p className="text-green-700 bg-green-100 border border-green-200 p-4 rounded-md">{status}</p>}
              {error && <p className="text-red-700 bg-red-100 border border-red-200 p-4 rounded-md">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#F97316] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#ea580c] transition-colors shadow-lg w-full flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Submit Request"} <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0F172A] text-white p-8 rounded-[20px] shadow-lg">
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00A6A6]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium mb-1">Email</p>
                    <a href="mailto:projects@aquaz.com" className="font-semibold text-lg hover:text-[#00A6A6] transition-colors">{process.env.NEXT_PUBLIC_MAIL}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00A6A6]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium mb-1">Phone (HQ)</p>
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${process.env.NEXT_PUBLIC_PHONE2}`} className="font-semibold text-lg hover:text-[#00A6A6] transition-colors">{process.env.NEXT_PUBLIC_PHONE2}</a>
                      <a href={`tel:${process.env.NEXT_PUBLIC_PHONE3}`} className="font-semibold text-lg hover:text-[#00A6A6] transition-colors">{process.env.NEXT_PUBLIC_PHONE3}</a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#00A6A6]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium mb-1">Whatsapp</p>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-lg hover:text-[#00A6A6] transition-colors">{process.env.NEXT_PUBLIC_PHONE1}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00A6A6]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium mb-1">Regions</p>
                    <span className="font-semibold text-lg hover:text-[#00A6A6] transition-colors">Egypt</span>
                    <span className="font-semibold text-lg hover:text-[#00A6A6] transition-colors">Sengal</span>
                    <span className="font-semibold text-lg hover:text-[#00A6A6] transition-colors">Cote d’ivoire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#F97316] text-white text-center px-6">
        <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl mb-4">Need an Urgent Quote for a Tender?</h2>
        <p className="text-white/90 font-medium mb-6">We provide expedited pricing for active bids.</p>
        <button className="bg-white text-[#F97316] px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
          Email Tender Documents
        </button>
      </section>

      <Footer />
    </div>
  );
}
