import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <Section
      background="alt"
      heading="What Our Patients Say"
      subheading="Testimonials"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            variant="default"
            className={`animate-fade-up stagger-${index + 1} relative`}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>

            {/* Content */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary text-sm">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">Patient</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
