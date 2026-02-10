const steps = [
  {
    number: "01",
    title: "Identify legal risk and obligations",
    description:
      "We begin by analysing the legal issues, risks, and obligations relevant to the matter.",
  },
  {
    number: "02",
    title: "Structure advice defensibly",
    description:
      "Legal advice is structured clearly, with defined assumptions, boundaries, and decision points.",
  },
  {
    number: "03",
    title: "Embed decisions into workflows or systems",
    description:
      "Where appropriate, we support execution by embedding legal processes into workflows, documents or systems.",
  },
];
const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-caption mb-4">Process</p>
          <h2 className="heading-section text-foreground mb-6">What We Do</h2>
          <div className="divider-accent" />
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-6" />
              )}

              {/* Number */}
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-14 h-14 border border-accent text-accent font-serif text-xl">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="heading-subsection text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-body text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
