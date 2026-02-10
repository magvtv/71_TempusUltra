const capabilities = [
  "Legal information architecture",
  "Contract and obligation systems",
  "Compliance workflows",
  "Documentation and process automation",
];
const LegalTechnology = () => {
  return (
    <section id="legal-technology" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <div>
            <p className="text-caption mb-4">What We Advise On</p>
            <h2 className="heading-section text-foreground mb-6">
              Legal Technology, Applied.
            </h2>
            <div className="divider-accent mb-6" />
            <p className="text-body text-muted-foreground">
              We apply legal technology to support and strengthen legal
              processes.
            </p>
          </div>

          {/* Right Column - Capabilities */}
          <div className="lg:pt-2">
            <p className="text-caption mb-6">Capabilities</p>
            <ul className="space-y-4">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-start gap-4 text-foreground"
                >
                  <span className="w-2 h-px bg-accent mt-3 flex-shrink-0" />
                  <span className="text-lg font-serif">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LegalTechnology;
