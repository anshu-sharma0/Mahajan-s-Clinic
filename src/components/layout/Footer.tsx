import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { CLINIC_INFO, NAV_LINKS } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-xl font-bold text-primary-foreground">H</span>
              </div>
              <span className="font-display text-xl font-semibold">
                {CLINIC_INFO.name.split(" ")[0]}
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {CLINIC_INFO.tagline}. Providing compassionate, comprehensive healthcare for you and your family.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href={CLINIC_INFO.social.facebook} className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={CLINIC_INFO.social.twitter} className="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={CLINIC_INFO.social.instagram} className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={CLINIC_INFO.social.linkedin} className="text-background/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-background/70 hover:text-background transition-colors text-sm">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-background/70 hover:text-background transition-colors text-sm">
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  {CLINIC_INFO.address}<br />
                  {CLINIC_INFO.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Office Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-background/70">
                    <span className="text-background">Mon - Fri:</span> {CLINIC_INFO.hours.weekdays}
                  </p>
                  <p className="text-background/70 mt-1">
                    <span className="text-background">Saturday:</span> {CLINIC_INFO.hours.saturday}
                  </p>
                  <p className="text-background/70 mt-1">
                    <span className="text-background">Sunday:</span> {CLINIC_INFO.hours.sunday}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
