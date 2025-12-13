import { SERVICES } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Activity, Flower2, Users, Brain, Calendar, ArrowRight } from "lucide-react";

const iconMap = {
  Shield,
  Heart,
  Activity,
  Flower2,
  Users,
  Brain,
};

const Services = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70 mb-4 block">
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Comprehensive Care <br className="hidden sm:block" />
            For Your Whole Health
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From preventive care to chronic disease management, we offer a full range of services to keep you healthy at every stage of life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section heading="What We Offer" subheading="Services">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                variant="interactive"
                padding="lg"
                className={`animate-fade-up stagger-${(index % 4) + 1}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-5">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-base mb-5">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Includes:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="alt" spacing="lg">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Need a Service Not Listed?
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer many additional services and can coordinate specialized care when needed. Contact us to discuss your specific healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/appointment" size="lg">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Services;
