import { useLang } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="relative flex h-8 items-center rounded-full bg-charcoal-800 p-0.5 text-xs font-semibold transition-colors"
      aria-label="Toggle language"
    >
      <span
        className={`relative z-10 rounded-full px-2.5 py-1 transition-colors duration-200 ${
          lang === 'en' ? 'text-charcoal-950' : 'text-charcoal-300'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 rounded-full px-2.5 py-1 transition-colors duration-200 ${
          lang === 'hi' ? 'text-charcoal-950' : 'text-charcoal-300'
        }`}
      >
        HI
      </span>
      <span
        className={`absolute top-0.5 h-7 w-[38px] rounded-full bg-brand-500 transition-all duration-300 ease-out ${
          lang === 'hi' ? 'left-[38px]' : 'left-0.5'
        }`}
      />
    </button>
  );
}
