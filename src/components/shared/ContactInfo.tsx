import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

interface ContactInfoProps {
  variant?: "default" | "compact";
}

export const ContactInfo = ({ variant = "default" }: ContactInfoProps) => {
  const items = [
    {
      icon: Phone,
      label: "Phone",
      value: CLINIC_INFO.phone,
      href: `tel:${CLINIC_INFO.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: CLINIC_INFO.email,
      href: `mailto:${CLINIC_INFO.email}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: `${CLINIC_INFO.address}, ${CLINIC_INFO.city}`,
    },
    {
      icon: Clock,
      label: "Hours",
      value: `Mon-Fri: ${CLINIC_INFO.hours.weekdays}`,
      subValue: `Sat: ${CLINIC_INFO.hours.saturday}`,
    },
  ];

  if (variant === "compact") {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-sm text-foreground">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{item.value}</p>
              )}
              {item.subValue && (
                <p className="text-sm text-muted-foreground">{item.subValue}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <item.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-muted-foreground">{item.value}</p>
            )}
            {item.subValue && (
              <p className="text-muted-foreground">{item.subValue}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
