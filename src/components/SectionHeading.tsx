import { useLang } from '../context/LanguageContext';

interface SectionHeadingProps {
  title: string;
  titleHi: string;
  subtitle?: string;
  subtitleHi?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  titleHi,
  subtitle,
  subtitleHi,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const { t } = useLang();

  return (
    <div className={`mb-8 lg:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-heading text-2xl font-bold sm:text-3xl lg:text-4xl ${
          light ? 'text-white' : 'text-charcoal-900'
        }`}
      >
        {t(title, titleHi)}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base ${
            light ? 'text-charcoal-300' : 'text-charcoal-500'
          } ${centered ? '' : 'mx-0'}`}
        >
          {t(subtitle, subtitleHi || subtitle)}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-brand-500 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
