import AppearOnScroll from "@/components/AppearOnScroll";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { value: 5000, suffix: "+", label: "Clients satisfaits" },
  { value: 120, suffix: "+", label: "Destinations" },
  { value: 15, suffix: "", label: "Années d'expérience" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const count = useCounter(value, 2000);

  return (
    <div className="text-center">
      <div className="text-[3.5rem] sm:text-[4.5rem] font-bold text-primary leading-none">
        {count}{suffix}
      </div>
      <p className="text-[1.4rem] text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppearOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default StatsSection;
