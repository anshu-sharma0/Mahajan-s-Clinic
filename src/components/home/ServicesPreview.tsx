import { SERVICES } from "@/lib/data";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Shield, Heart, Activity, Flower2, Users, Brain, ArrowRight } from "lucide-react";

const iconMap = {
  Shield,
  Heart,
  Activity,
  Flower2,
  Users,
  Brain,
};

export const ServicesPreview = () => {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <Section
      background="alt"
      heading="Our Services"
      subheading="What We Offer"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredServices.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Card
              key={service.id}
              variant="interactive"
              className={`animate-fade-up stagger-${index + 1}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mb-2">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.slice(0, 2).map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Button href="/services" variant="outline" size="lg">
          View All Services
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </Section>
  );
};
