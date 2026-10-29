import { ArrowUpRight } from 'lucide-react';
import { instagramUrl, site } from '@/content';

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-espresso py-7">
      <div className="container-edit flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-ivory/60 transition-colors hover:text-milk"
        >
          {site.handle}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <p className="text-xs text-ivory/35">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
