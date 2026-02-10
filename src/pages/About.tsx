import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const principles = [
  {
    title: "Disciplined Legal Reasoning",
    description:
      "Every recommendation we make is grounded in rigorous legal analysis. We examine the regulatory framework, assess obligations, and formulate positions that are defensible under scrutiny. Judgment precedes action.",
  },
  {
    title: "Structured Execution",
    description:
      "Legal advice without clear implementation pathways creates liability, not clarity. We structure our work to produce actionable outputs—documented positions, defined processes, and measurable compliance outcomes.",
  },
  {
    title: "Systems Thinking",
    description:
      "Legal obligations do not exist in isolation. We consider how contractual terms, regulatory requirements, and operational realities interact. This perspective informs both our advisory work and our approach to legal technology.",
  },
];

const clarifications = [
  {
    heading: "We are not a traditional law firm.",
    text: "Tempus Ultra does not provide litigation services, court representation, or general legal counsel. We focus on regulatory advisory, contractual structuring, and the intersection of legal judgment with operational systems.",
  },
  {
    heading: "We are not a software vendor.",
    text: "We do not sell products, license platforms, or offer off-the-shelf solutions. Our technology work is advisory—helping organisations design, specify, and implement systems that serve their legal and operational requirements.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "Tempus Ultra | Legal Consultancy & Legal‑Tech Advisory";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Tempus Ultra offers structured legal advisory, regulatory compliance, and governance support for organisations in Nairobi and across Kenya.",
      );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-caption mb-6">About</p>
              <h1 className="heading-display text-foreground mb-8">
                Legal judgment, systematically applied.
              </h1>
              <div className="divider-accent mb-8" />
              <p className="text-body text-muted-foreground text-lg leading-relaxed">
                Tempus Ultra exists to bridge the gap between legal analysis and
                operational execution. We bring disciplined reasoning to complex
                regulatory environments and design systems that embed legal
                judgment into organisational workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12">
              <p className="text-caption mb-4">Philosophy</p>
              <h2 className="heading-section text-foreground">
                What guides our work
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="border-t border-border pt-8"
                >
                  <span className="text-caption text-accent mb-4 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading-subsection text-foreground mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clarifications */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12">
              <p className="text-caption mb-4">Positioning</p>
              <h2 className="heading-section text-foreground">
                What we are—and are not
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {clarifications.map((item) => (
                <div
                  key={item.heading}
                  className="border-l-2 border-accent pl-6"
                >
                  <h3 className="heading-subsection text-foreground mb-3">
                    {item.heading}
                  </h3>
                  <p className="text-body text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-3xl text-primary-foreground leading-relaxed">
                We work with organisations that value precision, require
                defensibility, and understand that sound legal judgment is the
                foundation of sustainable operations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
