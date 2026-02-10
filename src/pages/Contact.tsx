import { useActionState, useOptimistic, useEffect } from "react";
import { z } from "zod";
import { Mail, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  organisation: z.string().trim().max(150, "Organisation name must be less than 150 characters").optional(),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(30, "Phone number must be less than 30 characters").optional(),
  subject: z.string().trim().min(1, "Please select a subject area"),
  message: z.string().trim().min(1, "Please describe your enquiry").max(2000, "Message must be less than 2000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjectOptions = [
  "Contract Review & Structuring",
  "Regulatory & Compliance Advisory",
  "Policy & Governance",
  "Legal-Tech Systems Advisory",
  "General Enquiry"
];


type FormState = {
  success: boolean;
  errors: Record<string, string>;
};

// React 19 Server Action for form submission
async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const data = {
    name: formData.get("name") as string,
    organisation: formData.get("organisation") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  // Validate with Zod
  const result = contactSchema.safeParse(data);
  
  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      if (err.path[0]) {
        fieldErrors[err.path[0] as string] = err.message;
      }
    });
    return { success: false, errors: fieldErrors };
  }

  try {
    // Use environment variable for Formspree ID
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "mykwrkjd";
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    return { success: true, errors: {} };
  } catch (error) {
    return { 
      success: false, 
      errors: { 
        _form: "Please try again or contact us directly at info@tempusultra.co.ke" 
      } 
    };
  }
}

const Contact = () => {
  const { toast } = useToast();
  
  // React 19: useActionState for form state management
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    errors: {},
  });

  // React 19: useOptimistic for instant UI feedback
  const [optimisticState, setOptimisticState] = useOptimistic(
    { submitted: false },
    (state, newState: { submitted: boolean }) => newState
  );

  // Handle successful submission
  useEffect(() => {
    if (state.success) {
      toast({
        title: "Enquiry received",
        description: "We will review your submission and respond within two business days.",
      });
    } else if (state.errors._form) {
      toast({
        title: "Submission failed",
        description: state.errors._form,
        variant: "destructive",
      });
    }
  }, [state.success, state.errors._form, toast]);

  useEffect(() => {
    document.title = "Contact Tempus Ultra | Request a Legal Consultation in Nairobi";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Request a consultation with Tempus Ultra. We provide legal advisory, compliance support, and legal-tech guidance for organisations in Nairobi and across Kenya."
      );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-caption mb-6">Contact</p>
              <h1 className="heading-display text-foreground mb-8">Request a Consultation</h1>
              <div className="divider-accent mb-8" />
              <p className="text-body text-muted-foreground">
                Use the form below to describe your requirements. We will review your enquiry and respond to confirm
                whether we can assist.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <form 
                  action={formAction}
                  className="space-y-6"
                  onSubmit={() => {
                    // Optimistic update
                    setOptimisticState({ submitted: true });
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="Your full name"
                      />
                      {state.errors.name && <p className="mt-1 text-sm text-destructive">{state.errors.name}</p>}
                    </div>

                    {/* Organisation */}
                    <div>
                      <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="Your organisation"
                      />
                      {state.errors.organisation && (
                        <p className="mt-1 text-sm text-destructive">{state.errors.organisation}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="your@email.com"
                      />
                      {state.errors.email && <p className="mt-1 text-sm text-destructive">{state.errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="+254 700 000 000"
                      />
                      {state.errors.phone && <p className="mt-1 text-sm text-destructive">{state.errors.phone}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject Area <span className="text-accent">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors appearance-none"
                    >
                      <option value="">Select a subject area</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {state.errors.subject && <p className="mt-1 text-sm text-destructive">{state.errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Describe Your Enquiry <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="Please describe your requirements, the nature of your organisation, and any relevant context."
                    />
                    {state.errors.message && <p className="mt-1 text-sm text-destructive">{state.errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isPending || optimisticState.submitted}
                    className="inline-flex items-center justify-center px-10 py-4 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending || optimisticState.submitted ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Disclaimer */}
                <div className="border-t border-border pt-6 mb-8">
                  <h3 className="text-sm font-medium text-foreground mb-3">Important Notice</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Submitting this form does not create an advocate-client relationship. No professional relationship
                      arises until engagement terms are agreed in writing.
                    </p>
                    <p>
                      All engagements are confirmed through written engagement documentation that establishes scope,
                      terms, and responsibilities.
                    </p>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">Direct Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@tempusultra.co.ke"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail size={16} strokeWidth={1.5} className="text-accent" />
                      info@tempusultra.co.ke
                    </a>
                    <a
                      href="https://wa.me/254104475397"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <MessageCircle size={16} strokeWidth={1.5} className="text-accent" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Framework Section */}
        <section className="pb-24 lg:pb-32 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-20">
            <div className="max-w-3xl">
              <h2 className="heading-section text-foreground mb-6">Engagement Framework</h2>
              <div className="divider-accent mb-8" />
              <p className="text-body text-muted-foreground mb-12">
                Tempus Ultra works through structured engagements designed to ensure clarity, accountability, and
                defensible outcomes.
              </p>

              {/* How We Engage */}
              <div className="mb-12">
                <h3 className="heading-subsection text-foreground mb-4">How We Engage</h3>
                <p className="text-body text-muted-foreground mb-6">
                  Our work is undertaken through one of the following engagement types:
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-serif text-foreground mb-2">Legal Advisory Engagements</h4>
                    <p className="text-body text-muted-foreground">
                      These involve legal analysis, interpretation, and advice on contracts, regulation, or governance.
                      The scope, deliverables, and fees are agreed in writing before work begins.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-serif text-foreground mb-2">Systems-Only Advisory Engagements</h4>
                    <p className="text-body text-muted-foreground">
                      These focus on designing or advising on processes, workflows, and systems that support legal and
                      compliance functions. These engagements do not include legal advice and are limited to systems and
                      operational design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scope and Confirmation */}
              <div className="mb-12">
                <h3 className="heading-subsection text-foreground mb-4">Scope and Confirmation</h3>
                <ul className="space-y-3 text-body text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <span>Each engagement is clearly scoped and confirmed in writing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <span>We do not provide informal or ad-hoc advice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <span>Any work outside the agreed scope requires a separate written agreement.</span>
                  </li>
                </ul>
              </div>

              {/* Relationship and Responsibility */}
              <div>
                <h3 className="heading-subsection text-foreground mb-4">Relationship and Responsibility</h3>
                <ul className="space-y-3 text-body text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <span>
                      Submitting an inquiry or holding an initial discussion does not create an advocate-client
                      relationship.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <span>
                      Legal advice or systems advisory is provided only after an engagement is formally confirmed.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;