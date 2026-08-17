import { useEffect, useState } from 'react';
import { Calendar, Users, Bus, MapPin } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const stats = [
  { icon: Calendar, value: 14, suffix: '+', en: 'Years Experience', hi: 'वर्षों का अनुभव' },
  { icon: Users, value: 10000, suffix: '+', en: 'Happy Groups Served', hi: 'खुश ग्रुप सेवित' },
  { icon: Bus, value: 20, suffix: '+', en: 'Tempo Travellers', hi: 'टेम्पो ट्रैवलर' },
  { icon: MapPin, value: 100, suffix: '+', en: 'Destinations Covered', hi: 'गंतव्य कवर' },
];

function Counter({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, active]);

  return <>{count.toLocaleString()}</>;
}

export default function StatsSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl bg-charcoal-900 p-6 shadow-2xl sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.en} className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10">
                <stat.icon className="h-6 w-6 text-brand-400" />
              </div>
              <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                <Counter target={stat.value} active={isVisible} />
                <span className="text-brand-400">{stat.suffix}</span>
              </div>
              <p className="mt-1 text-xs text-charcoal-400 sm:text-sm">{t(stat.en, stat.hi)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
