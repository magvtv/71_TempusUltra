import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LegalAdvisory from "@/components/LegalAdvisory";
import Process from "@/components/Process";
import LegalTechnology from "@/components/LegalTechnology";
import HowWeEngage from "@/components/HowWeEngage";
import CallToAction from "@/components/CallToAction";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Tempus Ultra | Legal Consultancy & Legal‑Tech Advisory";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Tempus Ultra provides legal advisory, contract review, compliance, and legal-tech workflows for organisations in Nairobi and across Kenya.");

    // Inject JSON-LD structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Tempus Ultra",
      "description": "Legal advisory, contracts and compliance, and legal-tech workflows for organisations in Nairobi and across Kenya.",
      "url": "https://tempusultra.co.ke",
      "areaServed": { "@type": "Place", "name": "Nairobi, Kenya" },
      "serviceType": ["Legal Advisory", "Legal Technology Consulting", "Regulatory Compliance", "Contract Review"],
      "email": "info@tempusultra.co.ke"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <LegalAdvisory />
        <Process />
        <LegalTechnology />
        <HowWeEngage />
        <CallToAction />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
