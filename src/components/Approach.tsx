const principles = [
  {
    number: "01",
    title: "Legal judgment first",
    description:
      "Every engagement begins with rigorous legal analysis. Technology may accelerate execution, but it does not substitute for professional assessment of your circumstances.",
  },
  {
    number: "02",
    title: "Bespoke, not off-the-shelf",
    description:
      "Generic solutions rarely address the complexity of real organisations. We develop recommendations fitted to your specific regulatory environment, operational structure, and strategic objectives.",
  },
  {
    number: "03",
    title: "Considered advice",
    description:
      "We favour thoroughness over speed. Complex legal and technical questions warrant careful analysis, and we communicate findings with clarity, not jargon.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-caption mb-4">Approach</p>
          <h2 className="heading-section text-foreground mb-6">How we work</h2>
          <div className="divider-accent" />
        </div>

        {/* Principles */}
        <div className="grid lg:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className="border-t border-border pt-8"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number */}
              <span className="text-caption text-accent mb-4 block">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="heading-subsection text-foreground mb-4">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-body text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
