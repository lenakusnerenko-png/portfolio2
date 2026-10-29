import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { instagramUrl, works } from '@/content';
import Lightbox from './Lightbox';

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-espresso py-20 sm:py-28 lg:py-32">
      <div className="container-edit">
        <div className="flex flex-col justify-between gap-6 border-b border-ivory/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow !text-milk">Портфоліо</p>
            <h2 className="mt-4 font-serif text-section font-medium text-ivory">Мої роботи</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ivory/50">
            Фактура, форма та характер у кожному плетінні.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {works.map((work, index) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-2xl border border-ivory/10 bg-chocolate-dark text-left shadow-[0_18px_50px_-28px_rgba(0,0,0,0.7)] transition-transform duration-700 hover:-translate-y-1"
              aria-label={`Відкрити фото: ${work.alt}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.045]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent p-5 pt-16">
                <span className="font-serif text-xl text-ivory">{work.label}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-colors group-hover:border-milk group-hover:bg-milk group-hover:text-espresso">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ivory/25 px-6 py-3 text-sm text-ivory/75 transition-all duration-500 hover:border-milk hover:bg-milk hover:text-espresso"
          >
            Більше робіт — в Instagram
          </a>
        </div>
      </div>

      <Lightbox
        images={works}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
