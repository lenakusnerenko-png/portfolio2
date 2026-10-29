import { ArrowUpRight } from 'lucide-react';
import { instagramUrl, site } from '@/content';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-ivory/10 bg-espresso/10 py-5 backdrop-blur-[2px] sm:py-7">
      <div className="container-edit flex items-center justify-between gap-6">
        <nav className="hidden items-center gap-8 md:flex" aria-label="Головна навігація">
          <a href="#about" className="text-sm text-ivory/65 transition-colors hover:text-milk">
            Про майстриню
          </a>
          <a href="#portfolio" className="text-sm text-ivory/65 transition-colors hover:text-milk">
            Мої роботи
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-milk"
          >
            {site.handle}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-milk px-5 py-2.5 text-xs font-semibold text-espresso transition-all duration-500 hover:bg-ivory hover:shadow-[0_14px_30px_-16px_rgba(230,207,183,0.8)] sm:px-6 sm:text-sm"
        >
          Написати в Direct
        </a>
      </div>
    </header>
  );
}
