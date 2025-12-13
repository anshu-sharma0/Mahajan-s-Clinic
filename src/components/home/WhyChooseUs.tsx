import { Section } from "@/components/ui/section";
import { WHY_CHOOSE_US } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <Section
      heading="Why Choose Harmony Medical"
      subheading="Our Difference"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {WHY_CHOOSE_US.map((item, index) => (
          <div
            key={item.title}
            className={`flex gap-4 animate-fade-up stagger-${index + 1}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
