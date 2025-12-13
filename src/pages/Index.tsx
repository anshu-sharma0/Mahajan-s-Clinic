import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { DoctorProfile } from "@/components/shared/DoctorProfile";
import { GoogleMap } from "@/components/shared/GoogleMap";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main>
      <Hero />

      {/* Doctor Profile Section */}
      <Section heading="Meet Your Doctor" subheading="About">
        <DoctorProfile />
      </Section>

      <ServicesPreview />
      <WhyChooseUs />
      {/* <Testimonials /> */}

      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Ready to Take the Next Step?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Schedule your appointment today and experience healthcare that truly puts you first.
          </p>
          <Button href="/appointment" variant="hero" size="xl">
            <Calendar className="h-5 w-5" />
            Book Your Appointment
          </Button>
        </div>
      </Section>

      {/* Map Section */}
      {/* <Section heading="Find Us" subheading="Location" spacing="sm">
        <GoogleMap />
      </Section> */}
    </main>
  );
};

export default Index;
