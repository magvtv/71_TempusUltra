import { FileText, Shield, Building } from "lucide-react";
const advisoryServices = [
  {
    icon: FileText,
    title: "Contract Review & Structuring",
    description:
      "We assess contractual risk, prepare and review agreements, and map obligations clearly to ensure obligations are precise and defensible.",
  },
  {
    icon: Shield,
    title: "Regulatory & Compliance Advisory",
    description:
      "Regulatory risk assessment and compliance strategy under Kenyan law.",
  },
  {
    icon: Building,
    title: "Policy & Governance",
    description:
      "Internal policies, governance frameworks, and regulatory-facing documentation built for clarity and durability.",
  },
];
const LegalAdvisory = () => {
  return (
    <section id="legal-advisory" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-caption mb-4">Services</p>
          <h2 className="heading-section text-foreground mb-6">
            Legal Advisory
          </h2>
          <div className="divider-accent mb-6" />
          <p className="text-body text-muted-foreground">
            We advise on contracts, regulation, and governance with a focus on
            clarity and defensibility.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {advisoryServices.map((service) => (
            <div key={service.title} className="border-t border-border pt-8">
              {/* Icon */}
              <div className="mb-5">
                <service.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-accent"
                />
              </div>

              {/* Title */}
              <h3 className="heading-subsection text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-body text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LegalAdvisory;
