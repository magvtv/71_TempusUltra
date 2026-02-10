const CallToAction = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-relaxed mb-10">
            Engage Tempus Ultra to clarify legal risk, structure obligations,
            and design defensible systems.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-medium tracking-wide uppercase bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-300"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
