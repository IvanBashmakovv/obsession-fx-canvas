import { useLanguage } from '@/contexts/LanguageContext';

const cards = [
  {
    title_en: 'No Signal Dependency',
    title_sk: 'Žiadna závislosť na signáloch',
    desc_en: 'You learn how to understand the market yourself instead of blindly following calls.',
    desc_sk: 'Naučíš sa trh chápať sám, nie slepo nasledovať cudzie calls.',
  },
  {
    title_en: 'Structured Curriculum',
    title_sk: 'Štruktúrované učivo',
    desc_en: 'Every lesson connects to a clear trading skill: analysis, entry, risk, execution or review.',
    desc_sk: 'Každá lekcia nadväzuje na konkrétnu zručnosť: analýza, vstup, risk, exekúcia, review.',
  },
  {
    title_en: 'Risk-First Approach',
    title_sk: 'Risk na prvom mieste',
    desc_en: 'We focus on protecting your capital before chasing profits.',
    desc_sk: 'Sústredíme sa na ochranu kapitálu skôr ako na honbu za ziskom.',
  },
  {
    title_en: 'Mentor Guidance',
    title_sk: 'Vedenie mentora',
    desc_en: 'You are not left alone with videos. You get support, answers and direction.',
    desc_sk: 'Nezostávaš sám s videami. Dostávaš podporu, odpovede a smerovanie.',
  },
];

const EdgeSection = () => {
  const { t, lang } = useLanguage();
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="edge" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>
        {t('Our Edge', 'Naša výhoda')}
      </p>
      <h2 className="font-heading mb-8 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('WHAT MAKES OBSESSION FX ', 'V ČOM JE OBSESSION FX ')}
        <span style={{ color: '#D4F000' }}>{t('DIFFERENT?', 'INÝ?')}</span>
      </h2>
      <p className="font-body text-base leading-relaxed mb-16 reveal-content max-w-3xl" style={{ color: '#BABABA' }}>
        {t(
          "We don't teach you to chase trades. We teach you to build a repeatable decision-making process.",
          'Neučíme ťa naháňať obchody. Učíme ťa stavať opakovateľný rozhodovací proces.'
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-content">
        {cards.map((c, i) => (
          <div
            key={i}
            className="glass-card p-8 md:p-10 reveal-card flex gap-6"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="font-heading text-5xl leading-none flex-shrink-0" style={{ color: '#D4F000' }}>
              0{i + 1}
            </span>
            <div>
              <h3 className="font-heading text-2xl mb-3" style={{ color: '#F0EDE6' }}>
                {lang === 'en' ? c.title_en : c.title_sk}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#AAAAAA' }}>
                {lang === 'en' ? c.desc_en : c.desc_sk}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center reveal-content">
        <button
          onClick={() => scrollTo('#program')}
          className="btn-primary-lift font-body text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all min-h-[48px]"
          style={{ background: '#D4F000', color: '#0E0E0F', borderRadius: '12px' }}
        >
          {t("SEE WHAT'S INSIDE →", 'POZRI OBSAH →')}
        </button>
      </div>
    </section>
  );
};

export default EdgeSection;
