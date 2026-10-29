import { ArrowUpRight } from 'lucide-react';
import { instagramUrl } from '@/content';

const paragraphs = [
  'Я брейдер-майстриня, і я дуже люблю свою справу. Для мене плетіння — це не просто зачіска, а можливість підкреслити індивідуальність кожної дівчини.',
  'Я створюю авторські комплекти кіс різної довжини, кольорів і текстур, а також виконую точкове плетіння. У своїй роботі приділяю особливу увагу тому, щоб зачіски були не лише красивими, а й легкими та комфортними.',
  'Вага моїх комплектів — від 160 до 300 грамів. Я дбаю про кожну деталь, щоб волосся виглядало гарно, а зачіску було зручно носити.',
  'Також я плету брейди, боксерські коси, «Сфінкс», створюю різні види дредів і працюю з канекалоном та біоволоссям.',
  'Допомагаю кожній клієнтці знайти саме той образ, який їй до душі.',
];

export default function About() {
  return (
    <section id="about" className="bg-chocolate py-20 sm:py-28 lg:py-32">
      <div className="container-edit grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-ivory/10 bg-espresso shadow-[0_24px_60px_-30px_rgba(0,0,0,0.65)]">
            <img
              src="/images/work/image copy 5.png"
              alt="Портрет брейдер-майстрині з яскравим кучерявим волоссям."
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-editorial hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-eyebrow text-milk/60">Про майстриню</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow">Знайомство</p>
          <h2 className="mt-4 font-serif text-section font-medium text-ivory text-balance">
            Плетіння, у якому є ти
          </h2>
          <div className="mt-7 space-y-4 text-[0.98rem] leading-relaxed text-ivory/70 sm:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-8 border-l border-milk pl-5 font-serif text-2xl leading-tight text-milk sm:text-3xl">
            Для мене важливо, щоб ти не просто отримала красиву зачіску, а й почувалася в ній комфортно та впевнено.
          </blockquote>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-milk/40 px-5 py-3 text-sm font-semibold text-milk transition-all duration-500 hover:border-milk hover:bg-milk hover:text-espresso"
          >
            Познайомитися ближче в Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
