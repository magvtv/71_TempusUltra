import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const capabilities = [
  {
    title: "Legal Information Architecture",
    description:
      "Structuring legal knowledge, obligations, and regulatory requirements into organised, retrievable systems that support consistent decision-making across an organisation.",
  },
  {
    title: "Contract & Obligation Systems",
    description:
      "Designing systems for contract lifecycle management, obligation tracking, and counterparty risk monitoring—tailored to your specific contractual environment.",
  },
  {
    title: "Compliance Workflow Design",
    description:
      "Mapping regulatory requirements to operational processes. We design workflows that embed compliance checkpoints without creating unnecessary friction.",
  },
  {
    title: "Documentation & Process Automation",
    description:
      "Specification and oversight of document generation systems, approval workflows, and process automation—where repetition can be systematised without compromising judgment.",
  },
];

const clarifications = [
  {
    statement: "We do not sell software.",
    explanation:
      "Tempus Ultra provides advisory services, not products. We help you specify, select, and implement systems—but we are not a vendor and do not license technology.",
  },
  {
    statement: "We do not automate legal judgment.",
    explanation:
      "Legal conclusions require professional assessment. Our systems work supports the execution of decisions, not the replacement of the reasoning that produces them.",
  },
  {
    statement: "We do not offer off-the-shelf solutions.",
    explanation:
      "Every organisation's regulatory environment, contractual landscape, and operational structure is distinct. Our recommendations are fitted to your circumstances.",
  },
];

const LegalTechSystems = () => {
  useEffect(() => {
    document.title =
      "Legal‑Tech Advisory in Kenya | Workflow Design for Compliance Teams | Tempus Ultra";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Tempus Ultra provides legal‑tech advisory and workflow design for compliance teams in Nairobi and across Kenya. We design bespoke systems that support legal judgment, not replace it.",
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
              <p className="text-caption mb-6">Legal-Tech Advisory</p>
              <h1 className="heading-display text-foreground mb-8">
                Systems that serve legal judgment.
              </h1>
              <div className="divider-accent mb-8" />
              <p className="text-body text-muted-foreground text-lg leading-relaxed">
                Tempus Ultra provides bespoke systems advisory for organisations
                that require technology to support—not supplant—legal
                decision-making. We design, specify, and oversee implementation
                of systems that bring structure to legal operations.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12">
              <p className="text-caption mb-4">Approach</p>
              <h2 className="heading-section text-foreground mb-6">
                Advisory, not products
              </h2>
              <div className="divider-accent mb-6" />
              <p className="text-body text-muted-foreground">
                Our role is to translate legal requirements into system
                specifications, guide technology selection, and ensure
                implementations serve their intended purpose. We sit between
                legal judgment and technical execution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {clarifications.map((item, index) => (
                <div
                  key={item.statement}
                  className="border-t border-border pt-6"
                >
                  <span className="text-caption text-accent block mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {item.statement}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-12">
              <p className="text-caption mb-4">Capabilities</p>
              <h2 className="heading-section text-foreground">
                What we advise on
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="border-l-2 border-accent pl-6"
                >
                  <h3 className="heading-subsection text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Note */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-caption mb-4">Process</p>
              <h2 className="heading-section text-foreground mb-6">
                How systems work proceeds
              </h2>
              <div className="divider-accent mb-8" />

              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  Systems advisory begins with understanding your legal and
                  regulatory environment. We assess existing processes, identify
                  where systematisation adds value, and determine where human
                  judgment must remain central.
                </p>
                <p>
                  From this foundation, we develop specifications that describe
                  what a system must do—functionally and legally. We can then
                  support vendor selection, oversee implementation, and verify
                  that delivered systems meet their stated requirements.
                </p>
                <p>
                  Throughout, legal judgment governs. Technology is
                  instrumental.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-3xl text-primary-foreground leading-relaxed mb-8">
                Systems should clarify legal obligations, not obscure them.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-medium tracking-wide uppercase bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-300"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalTechSystems;
