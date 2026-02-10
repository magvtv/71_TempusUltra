const engagementTypes = [
  {
    title: "Advisory Engagements",
    description:
      "Scoped legal opinions and ongoing retainer arrangements for organisations requiring consistent access to legal counsel on regulatory, contractual, or governance matters.",
  },
  {
    title: "Project-Based Work",
    description:
      "Defined engagements for specific deliverables—contract drafting and review, compliance assessments, policy development, or bespoke legal-technology system design.",
  },
];

const HowWeEngage = () => {
  return (
    <section id="engagement" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-caption mb-4">Engagement</p>
          <h2 className="heading-section text-foreground mb-6">
            How We Engage
          </h2>
          <div className="divider-accent mb-6" />
          <p className="text-body text-muted-foreground">
            Tempus Ultra works through structured engagements only. Each matter
            proceeds under clear scope, defined timelines, and written
            engagement terms.
          </p>
        </div>

        {/* Engagement Types */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {engagementTypes.map((type) => (
            <div key={type.title} className="border-l-2 border-accent pl-6">
              <h3 className="heading-subsection text-foreground mb-3">
                {type.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Terms Note */}
        <div className="max-w-2xl border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            All engagements are governed by written terms that establish scope,
            deliverables, timelines, and responsibilities. We do not commence
            work without agreed engagement documentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeEngage;
