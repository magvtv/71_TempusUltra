import { Scale, Settings } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Legal Advisory",
    description:
      "Strategic counsel on regulatory compliance, contractual matters, and governance frameworks. We provide considered legal analysis tailored to your organisation's circumstances and objectives.",
    areas: [
      "Regulatory compliance assessment",
      "Contract review and drafting",
      "Corporate governance advisory",
      "Risk analysis and mitigation",
    ],
  },
  {
    icon: Settings,
    title: "Legal-Tech Advisory",
    description:
      "Guidance on the design, procurement, and implementation of legal technology systems. We ensure technology decisions are grounded in legal requirements and operational realities.",
    areas: [
      "System requirements and specification",
      "Vendor selection advisory",
      "Implementation oversight",
      "Workflow design and optimisation",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-caption mb-4">Services</p>
          <h2 className="heading-section text-foreground mb-6">
            Advisory grounded in legal expertise
          </h2>
          <div className="divider-accent" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <service.icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-accent"
                />
              </div>

              {/* Title */}
              <h3 className="heading-subsection text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-body text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Areas */}
              <ul className="space-y-2">
                {service.areas.map((area) => (
                  <li
                    key={area}
                    className="text-sm text-muted-foreground flex items-start gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
