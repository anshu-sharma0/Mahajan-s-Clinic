"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactInfo } from "@/components/shared/ContactInfo";
import { GoogleMap } from "@/components/shared/GoogleMap";
import { CLINIC_INFO } from "@/lib/constants";
import { Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70 mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions about our services or need assistance? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form + Map */}
      <Section background="alt">
        <div className="grid gap-12 lg:grid-cols-5 items-start">

          {/* LEFT: FORM (HERO) */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <Card variant="elevated" padding="lg" className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you within 1-2 business days.
                </p>
              </Card>
            ) : (
              <Card
                variant="elevated"
                padding="lg"
                className="shadow-lg"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Amit Mahajan"
                      required
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="amit@example.com"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Phone (Optional)"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 97802 95443"
                    />
                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    required
                  />

                  <Button type="submit" size="lg">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-xl font-semibold">
              Contact Information
            </h3>

            <ContactInfo />
          </div>
          {/* Map */}
          {/* <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Our Location</h2>
            <GoogleMap />
            <div className="mt-4">
              <p className="text-muted-foreground text-sm">
                We're conveniently located in the heart of San Francisco with easy access to public transit and parking available.
              </p>
            </div>
          </div> */}
        </div>
      </Section>

      {/* Additional Info */}
      <Section spacing="sm">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Prefer to Speak with Someone?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our friendly staff is available during office hours to assist you with scheduling, insurance questions, or general inquiries.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href={`tel:${CLINIC_INFO.phone}`}>
              Call {CLINIC_INFO.phone}
            </a>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
