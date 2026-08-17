import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SectionHeading from '../../components/SectionHeading';

const previewImages = [
  {
    src: '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22.jpeg',
    label: '16 Seater',
    labelHi: '16 सीटर',
  },
  {
    src: '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.51.jpeg',
    label: '21 Seater',
    labelHi: '21 सीटर',
  },
  {
    src: '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.49.jpeg',
    label: '26 Seater',
    labelHi: '26 सीटर',
  },
];

export default function FleetGalleryPreview() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Tempo Travellers"
          titleHi="हमारे टेम्पो ट्रैवलर"
          subtitle="AC push-back seats, music system & ample luggage space — see inside our well-maintained fleet"
          subtitleHi="AC पुश-बैक सीटें, म्यूजिक सिस्टम और पर्याप्त सामान स्थान — हमारे सुव्यवस्थित बेड़े के अंदर देखें"
        />

        <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
          {previewImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={t(img.label, img.labelHi)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/10 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-charcoal-900 backdrop-blur-sm">
                  {t(img.label, img.labelHi)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/fleet" className="btn-secondary group">
            <Camera className="h-4 w-4" />
            {t('View Full Gallery', 'पूरी गैलरी देखें')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
