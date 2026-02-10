const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Caption */}
          <p
            className="text-caption mb-6 animate-fade-in"
            style={{
              animationDelay: "0.1s",
            }}
          >
            Legal Consultancy & Advisory
          </p>

          {/* Main Heading */}
          <h1
            className="heading-display text-foreground mb-8 animate-slide-up"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
            }}
          >
            Structured Legal Advice.
            <br />
            <span className="text-muted-foreground text-3xl">
              Executed with Precision.
            </span>
          </h1>

          {/* Divider */}
          <div
            className="divider-accent mb-8 animate-fade-in"
            style={{
              animationDelay: "0.4s",
              opacity: 0,
            }}
          />

          {/* Description */}
          <p
            className="text-body text-muted-foreground max-w-2xl mb-12 animate-slide-up"
            style={{
              animationDelay: "0.5s",
              opacity: 0,
            }}
          >
            Tempus Ultra provides clear legal advisory and regulatory strategy,
            supported by legal technology that simplifies legal processes.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{
              animationDelay: "0.7s",
              opacity: 0,
            }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              Request a Consultation
            </a>
            <a
              href="#approach"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide uppercase border border-border text-foreground hover:bg-secondary transition-colors duration-300"
            >
              Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
