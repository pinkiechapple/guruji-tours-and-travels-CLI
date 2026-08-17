import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Bus } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { path: '/', en: 'Home', hi: 'होम' },
  { path: '/services', en: 'Services', hi: 'सेवाएं' },
  { path: '/fleet', en: 'Fleet', hi: 'वाहन' },
  { path: '/packages', en: 'Packages', hi: 'पैकेज' },
  { path: '/destinations', en: 'Destinations', hi: 'गंतव्य' },
  { path: '/pricing', en: 'Pricing', hi: 'मूल्य' },
  { path: '/about', en: 'About', hi: 'हमारे बारे में' },
  { path: '/contact', en: 'Contact', hi: 'संपर्क' },
];

export default function Navbar() {
  const { t } = useLang();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-charcoal-950/95 backdrop-blur-lg shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500">
              <Bus className="h-5 w-5 text-charcoal-950" />
            </div>
            <div className="leading-tight">
              <span className="block font-heading text-sm font-bold text-white lg:text-base">
                GURUJI
              </span>
              <span className="block text-[10px] font-medium tracking-wider text-brand-400 lg:text-xs">
                TOUR & TRAVELS
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-brand-500/10 text-brand-400'
                    : 'text-charcoal-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {t(link.en, link.hi)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="tel:7838626565"
              className="hidden items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 font-heading text-sm font-semibold text-charcoal-950 transition-all hover:bg-brand-400 lg:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {t('Book Now', 'बुक करें')}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-charcoal-950/98 backdrop-blur-xl lg:hidden">
          <nav className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-brand-500/10 text-brand-400'
                    : 'text-charcoal-200 hover:bg-white/5'
                }`}
              >
                {t(link.en, link.hi)}
              </Link>
            ))}
            <a
              href="tel:7838626565"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 font-heading text-sm font-semibold text-charcoal-950"
            >
              <Phone className="h-4 w-4" />
              {t('Call Now - 7838626565', 'कॉल करें - 7838626565')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
