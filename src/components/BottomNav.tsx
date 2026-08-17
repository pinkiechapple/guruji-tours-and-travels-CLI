import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Car, Package, Phone, MapPin } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const tabs = [
  { path: '/', icon: Home, en: 'Home', hi: 'होम' },
  { path: '/services', icon: Briefcase, en: 'Services', hi: 'सेवाएं' },
  { path: '/destinations', icon: MapPin, en: 'Destinations', hi: 'गंतव्य' },
  { path: '/fleet', icon: Car, en: 'Fleet', hi: 'वाहन' },
  { path: '/packages', icon: Package, en: 'Packages', hi: 'पैकेज' },
  { path: '/contact', icon: Phone, en: 'Contact', hi: 'संपर्क' },
];

export default function BottomNav() {
  const { t } = useLang();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-charcoal-800 bg-charcoal-950/95 backdrop-blur-xl safe-bottom lg:hidden">
      <div className="flex items-center justify-around px-2 py-1.5">
        {tabs.map(({ path, icon: Icon, en, hi }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 transition-all duration-200 ${
                active
                  ? 'text-brand-500'
                  : 'text-charcoal-400 hover:text-charcoal-200'
              }`}
            >
              <div className="relative">
                <Icon className={`h-5 w-5 transition-transform duration-200 ${active ? 'scale-110' : ''}`} />
                {active && (
                  <span className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-500" />
                )}
              </div>
              <span className="text-[10px] font-medium">{t(en, hi)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
