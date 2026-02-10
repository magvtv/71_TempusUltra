import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/legal-tech",
      label: "Legal-Tech",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];
  const isHomePage = location.pathname === "/";
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && isHomePage) {
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              alt="Tempus Ultra — Legal Consultancy & Advisory in Nairobi, Kenya"
              className="h-32"
              src={logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#") && isHomePage) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/#") && isHomePage) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                      setIsOpen(false);
                    }}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
