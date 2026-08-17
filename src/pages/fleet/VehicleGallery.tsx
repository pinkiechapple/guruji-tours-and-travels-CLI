import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SectionHeading from '../../components/SectionHeading';

const galleryCategories = [
  {
    key: '16seater',
    en: '16 Seater',
    hi: '16 सीटर',
    images: [
      '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.21.jpeg',
      '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22.jpeg',
      '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22_(1).jpeg',
    ],
  },
  {
    key: '21seater',
    en: '21 Seater',
    hi: '21 सीटर',
    images: [
      '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.51.jpeg',
      '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.52.jpeg',
      '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.52_(1).jpeg',
    ],
  },
  {
    key: '26seater',
    en: '26 Seater',
    hi: '26 सीटर',
    images: [
      '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.49.jpeg',
      '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.49_(1).jpeg',
      '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.53.jpeg',
      '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.53_(1).jpeg',
      '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.53_(2).jpeg',
    ],
  },
];

export default function VehicleGallery() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('16seater');
  const [lightbox, setLightbox] = useState<{ catIdx: number; imgIdx: number } | null>(null);

  const activeCategory = galleryCategories.find((c) => c.key === activeTab)!;

  const openLightbox = useCallback((catIdx: number, imgIdx: number) => {
    setLightbox({ catIdx, imgIdx });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const navigateLightbox = useCallback(
    (direction: 1 | -1) => {
      if (!lightbox) return;
      const cat = galleryCategories[lightbox.catIdx];
      const nextIdx = (lightbox.imgIdx + direction + cat.images.length) % cat.images.length;
      setLightbox({ catIdx: lightbox.catIdx, imgIdx: nextIdx });
    },
    [lightbox]
  );

  const activeCatIdx = galleryCategories.findIndex((c) => c.key === activeTab);

  return (
    <>
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Vehicle Gallery"
            titleHi="हमारे वाहनों की गैलरी"
            subtitle="Take a closer look at our Tempo Traveller fleet - clean, comfortable, and ready for your journey"
            subtitleHi="हमारे टेम्पो ट्रैवलर बेड़े को करीब से देखें - साफ, आरामदायक और आपकी यात्रा के लिए तैयार"
          />

          <div className="mb-8 flex items-center justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat.key
                    ? 'bg-charcoal-900 text-white shadow-lg shadow-charcoal-900/20'
                    : 'bg-white text-charcoal-600 ring-1 ring-charcoal-200 hover:bg-charcoal-100 hover:text-charcoal-900'
                }`}
              >
                {t(cat.en, cat.hi)}
                <span
                  className={`ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    activeTab === cat.key
                      ? 'bg-brand-500 text-charcoal-950'
                      : 'bg-charcoal-100 text-charcoal-500'
                  }`}
                >
                  {cat.images.length}
                </span>
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => openLightbox(activeCatIdx, idx)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                <img
                  src={img}
                  alt={`${t(activeCategory.en, activeCategory.hi)} - ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-charcoal-900 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Camera className="h-3.5 w-3.5" />
                  {t('View', 'देखें')}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryCategories[lightbox.catIdx].images[lightbox.imgIdx]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-charcoal-950/80 to-transparent px-4 pb-4 pt-8 text-center">
              <p className="text-sm font-medium text-white">
                {t(
                  `Tempo Traveller ${galleryCategories[lightbox.catIdx].en}`,
                  `टेम्पो ट्रैवलर ${galleryCategories[lightbox.catIdx].hi}`
                )}
              </p>
              <p className="mt-1 text-xs text-charcoal-300">
                {lightbox.imgIdx + 1} / {galleryCategories[lightbox.catIdx].images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
