import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Section Header */}
          <p className="text-caption mb-4">Contact</p>
          <h2 className="heading-section text-foreground mb-6">
            Begin a conversation
          </h2>
          <div className="divider-accent mb-8" />

          {/* Description */}
          <p className="text-body text-muted-foreground mb-10">
            We welcome enquiries from organisations seeking considered legal and
            legal-technology advisory. Initial consultations allow us to
            understand your circumstances and assess how we might assist.
          </p>

          {/* Contact Link */}
          <a
            href="mailto:info@tempusultra.co.ke"
            className="inline-flex items-center gap-3 text-foreground group"
          >
            <Mail size={20} strokeWidth={1.5} className="text-accent" />
            <span className="text-lg font-serif border-b border-transparent group-hover:border-accent transition-colors duration-300">
              info@tempusultra.co.ke
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
