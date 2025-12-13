import { DOCTOR } from "@/lib/data";
import { Award, Globe, GraduationCap } from "lucide-react";

interface DoctorProfileProps {
  extended?: boolean;
}

export const DoctorProfile = ({ extended = false }: DoctorProfileProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="relative">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm">Dr. Sarah Mitchell, MD</p>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-2xl -z-10" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
            {DOCTOR.name}
          </h3>
          <p className="text-primary font-medium">{DOCTOR.title}</p>
          <p className="text-muted-foreground mt-1">{DOCTOR.specialty}</p>
        </div>

        <div className="space-y-4">
          {extended ? (
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {DOCTOR.extendedBio}
            </div>
          ) : (
            <p className="text-muted-foreground leading-relaxed">{DOCTOR.bio}</p>
          )}
        </div>

        {extended && (
          <div className="space-y-6 pt-4">
            {/* Qualifications */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Qualifications
              </h4>
              <ul className="space-y-2">
                {DOCTOR.qualifications.map((qual, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {qual}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {DOCTOR.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
