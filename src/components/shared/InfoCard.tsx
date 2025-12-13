interface InfoCardProps {
  icon: any;
  label: string;
  value: string;
  subValue?: string;
  href?: string;
  className?: string;
}

const InfoCard = ({
  icon: Icon,
  label,
  value,
  subValue,
  href,
  className = "",
}: InfoCardProps) => {
  return (
    <div
      className={`flex items-start gap-4 p-6 rounded-xl bg-card border border-border ${className}`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <div className="min-w-0">
        <p className="font-medium text-foreground">{label}</p>

        {href ? (
          <a
            href={href}
            className="text-muted-foreground hover:text-primary transition-colors break-words"
          >
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground break-words">{value}</p>
        )}

        {subValue && (
          <p className="text-muted-foreground">{subValue}</p>
        )}
      </div>
    </div>
  );
};

export default InfoCard;