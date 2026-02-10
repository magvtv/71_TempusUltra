import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="font-serif text-xl font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Tempus Ultra
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Legal Consultancy & Advisory
            </p>
          </div>

          {/* Internal Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/legal-tech"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal-Tech
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Tempus Ultra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
