import { ArrowUpRight } from 'lucide-react';
import { instagramUrl } from '@/content';

export default function FinalCta() {
  return (
    <section className="bg-chocolate py-20 sm:py-24">
      <div className="container-edit flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow !text-milk">@afrokosichki_brovaru</p>
          <h2 className="mt-4 max-w-xl font-serif text-display font-medium text-ivory text-balance">
            Твій образ починається з діалогу.
          </h2>
        </div>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-milk px-6 py-3.5 text-sm font-semibold text-espresso transition-all duration-500 hover:bg-ivory hover:shadow-[0_18px_44px_-18px_rgba(230,207,183,0.75)]"
        >
          Написати в Direct
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
