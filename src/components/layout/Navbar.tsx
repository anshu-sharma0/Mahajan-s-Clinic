import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, CLINIC_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Stethoscope className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-xl font-semibold text-foreground">
              {CLINIC_INFO.name.split(" ")[0]}
            </span>
            <span className="hidden md:inline font-display text-xl font-normal text-muted-foreground">
              {" "}{CLINIC_INFO.name.split(" ").slice(1).join(" ")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>{CLINIC_INFO.phone}</span>
          </a>
          <Button href="/appointment" size="sm">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu - Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-t border-border bg-background shadow-elevated animate-fade-in z-50">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 text-base font-medium transition-colors",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
              <Button href="/appointment" className="w-full">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
