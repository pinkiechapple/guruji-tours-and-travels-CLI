import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { useLang } from '../context/LanguageContext';

export default function FloatingWhatsApp() {
  const { t } = useLang();

  return (
    <button
      onClick={() =>
        openWhatsApp(
          t(
            'Hi Guruji Tour & Travels! I am visiting your website and would like to know more about your taxi services.',
            'नमस्ते गुरुजी टूर एंड ट्रैवल्स! मैं आपकी वेबसाइट देख रहा/रही हूँ और आपकी टैक्सी सेवाओं के बारे में अधिक जानना चाहता/चाहती हूँ।'
          )
        )
      }
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-whatsapp/40 active:scale-95 lg:bottom-6 lg:right-6 lg:h-16 lg:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white lg:h-8 lg:w-8" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
        1
      </span>
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-20" />
    </button>
  );
}
