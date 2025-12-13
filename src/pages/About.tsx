import { DoctorProfile } from "@/components/shared/DoctorProfile";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CLINIC_INFO } from "@/lib/constants";
import { Calendar, Heart, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Patients Served" },
    { icon: Heart, value: "40+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Patient Satisfaction" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70 mb-4 block">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Dedicated to Your Health
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            At {CLINIC_INFO.name}, we believe healthcare should be personal, comprehensive, and accessible. Learn more about our approach and the physician behind our practice.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Doctor Profile */}
      <Section heading="Meet Dr. Mitchell" subheading="Your Physician">
        <DoctorProfile extended />
      </Section>

      {/* Mission Section */}
      <Section background="alt" heading="Our Mission" subheading="Philosophy">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to provide exceptional, patient-centered healthcare that addresses not just symptoms, but the whole person. We believe in building lasting relationships with our patients, taking the time to understand their unique health needs, and creating personalized treatment plans that promote long-term wellness.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At {CLINIC_INFO.name}, we combine the latest medical advances with a compassionate, old-fashioned approach to care. We're committed to making healthcare accessible, understandable, and focused on prevention as much as treatment.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="lg">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Experience the Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            Schedule an appointment and see what personalized healthcare feels like.
          </p>
          <Button href="/appointment" size="xl">
            <Calendar className="h-5 w-5" />
            Book Your Appointment
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default About;
