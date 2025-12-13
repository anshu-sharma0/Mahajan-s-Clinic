import { CLINIC_INFO } from "@/lib/constants";

export const GoogleMap = () => {
  // Using a generic medical center location for demo
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977699426074!2d-122.42010068439578!3d37.77912797975792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635959481234!5m2!1sen!2sus`;

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-border">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Location of ${CLINIC_INFO.name}`}
      />
      {/* Overlay with address */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6">
        <div className="text-background">
          <p className="font-display font-semibold text-lg">{CLINIC_INFO.name}</p>
          <p className="text-background/80 text-sm">{CLINIC_INFO.address}</p>
          <p className="text-background/80 text-sm">{CLINIC_INFO.city}</p>
        </div>
      </div>
    </div>
  );
};
