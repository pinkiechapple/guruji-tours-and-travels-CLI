import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface PageHeroProps {
  title: string;
  titleHi: string;
  subtitle?: string;
  subtitleHi?: string;
  image: string;
  breadcrumb?: { label: string; labelHi: string; path: string }[];
}

export default function PageHero({ title, titleHi, subtitle, subtitleHi, image, breadcrumb }: PageHeroProps) {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-[240px] items-end overflow-hidden sm:min-h-[300px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="gradient-overlay" />
      <div className="container-custom relative z-10 pb-8 pt-24 sm:pb-12 sm:pt-32">
        {breadcrumb && (
          <nav className="mb-3 flex items-center gap-1 text-xs text-charcoal-300 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-brand-400">
              {t('Home', 'होम')}
            </Link>
            {breadcrumb.map((item) => (
              <span key={item.path} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                <Link to={item.path} className="transition-colors hover:text-brand-400">
                  {t(item.label, item.labelHi)}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {t(title, titleHi)}
        </h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-charcoal-300 sm:text-base lg:text-lg">
            {t(subtitle, subtitleHi || subtitle)}
          </p>
        )}
      </div>
    </section>
  );
}
