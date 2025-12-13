import { Button } from "@/components/ui/button";
import { CLINIC_INFO } from "@/lib/constants";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-background/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-background/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">Now accepting new patients</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight animate-fade-up">
            Healthcare That <br className="hidden sm:block" />
            <span className="text-accent">Puts You First</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-1">
            {CLINIC_INFO.tagline}. Experience personalized care from a physician who takes the time to understand your health goals and create a plan that works for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up stagger-2">
            <Button href="/appointment" variant="hero" size="xl" className="w-full sm:w-auto">
              <Calendar className="h-5 w-5" />
              Book Appointment
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="w-full sm:w-auto"
              asChild
            >
              <a href={`tel:${CLINIC_INFO.phone}`}>
                <Phone className="h-5 w-5" />
                {CLINIC_INFO.phone}
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 animate-fade-up stagger-3">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5.0 Rating (200+ Reviews)</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
            <div className="text-sm text-primary-foreground/70">15+ Years Experience</div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
            <div className="text-sm text-primary-foreground/70">Board Certified</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V60C240 20 480 0 720 0C960 0 1200 20 1440 60V100H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};
