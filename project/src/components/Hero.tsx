import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { instagramUrl } from '@/content';
import { heroImage } from '@/content';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[min(800px,100vh)] items-end overflow-hidden bg-espresso pb-14 pt-32 sm:pb-20 lg:min-h-screen lg:pb-24">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Модель з професійно заплетеними афрокосами."
          className="h-full w-full object-cover object-center opacity-45"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/75 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/45" />
      </div>

      <div className="container-edit relative grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow !text-milk animate-reveal">Авторське плетіння · Бровари</p>
          <h1 className="mt-6 max-w-4xl font-serif text-hero font-medium leading-[0.95] text-ivory text-balance animate-reveal" style={{ animationDelay: '100ms' }}>
            Твоя текстура.<br />
            Твій характер.<br />
            <span className="italic text-milk">Твоє плетіння.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-ivory/70 sm:text-lg animate-reveal" style={{ animationDelay: '200ms' }}>
            Професійне плетіння та авторські комплекти кіс з увагою до кожної деталі.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-milk px-6 py-3.5 text-sm font-semibold text-espresso transition-all duration-500 hover:bg-ivory hover:shadow-[0_18px_44px_-18px_rgba(230,207,183,0.75)] animate-reveal"
            style={{ animationDelay: '300ms' }}
          >
            Записатися в Direct
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="hidden items-end justify-end lg:col-span-4 lg:flex">
          <a href="#portfolio" className="group mb-1 flex items-center gap-3 text-sm text-ivory/65 transition-colors hover:text-milk">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 transition-colors group-hover:border-milk">
              <ArrowDown className="h-4 w-4" />
            </span>
            Дивитися роботи
          </a>
        </div>
      </div>
    </section>
  );
}
