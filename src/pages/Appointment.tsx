"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactInfo } from "@/components/shared/ContactInfo";
import { CLINIC_INFO } from "@/lib/constants";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
    isNewPatient: "yes",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <main>
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Book an Appointment
            </h1>
          </div>
        </section>

        <Section spacing="lg">
          <Card variant="elevated" padding="lg" className="max-w-xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              Thank You, {formData.firstName}!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your appointment request has been received. Our team will contact you within 24 hours to confirm your appointment.
            </p>
            <div className="text-left bg-muted rounded-lg p-4 mb-6">
              <p className="text-sm"><strong>Preferred Date:</strong> {formData.preferredDate}</p>
              <p className="text-sm"><strong>Preferred Time:</strong> {formData.preferredTime}</p>
              <p className="text-sm"><strong>Reason:</strong> {formData.reason || "General appointment"}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Questions? Call us at <a href={`tel:${CLINIC_INFO.phone}`} className="text-primary font-medium">{CLINIC_INFO.phone}</a>
            </p>
          </Card>
        </Section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70 mb-4 block">
            Schedule a Visit
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Book an Appointment
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Schedule your visit with Dr. Mitchell. Fill out the form below and we'll confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card variant="outline" padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Preferred Date"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                  />
                  <div className="w-full space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="w-full space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Are you a new patient?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="isNewPatient"
                        value="yes"
                        checked={formData.isNewPatient === "yes"}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-sm">Yes, I'm new</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="isNewPatient"
                        value="no"
                        checked={formData.isNewPatient === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-sm">I'm a returning patient</span>
                    </label>
                  </div>
                </div>

                <Textarea
                  label="Reason for Visit"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please describe the reason for your visit or any symptoms you're experiencing..."
                />

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Calendar className="h-5 w-5" />
                  Request Appointment
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card variant="default" padding="lg">
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">{CLINIC_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">{CLINIC_INFO.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">{CLINIC_INFO.hours.sunday}</span>
                </div>
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
              <ContactInfo variant="compact" />
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Appointment;
