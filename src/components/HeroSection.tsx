import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const target = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="min-h-screen flex flex-col justify-end px-6 pb-16 pt-32 max-w-7xl mx-auto hero-animate">
      <p className="text-primary font-body text-[10px] tracking-[4px] uppercase mb-6">
        — obsession.fx · advanced smc · slovakia
      </p>
      <h1 className="font-heading leading-[0.88]" style={{ fontSize: 'clamp(72px, 11vw, 140px)' }}>
        <span className="block text-foreground">{t('OBSESSION', 'POSADNUTOSŤ')}</span>
        <span className="block text-primary">{t('BEATS', 'PORÁŽA')}</span>
        <span className="block" style={{ WebkitTextStroke: '1px #2A2A2A', color: 'transparent' }}>
          {t('TALENT.', 'TALENT.')}
        </span>
      </h1>

      <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <div>
          <p className="font-body text-muted-foreground text-sm max-w-md mb-6">
            {t(
              'Advanced Smart Money Concepts refined through 1000+ hours of real market testing. 4 battle-tested strategies for serious traders.',
              'Pokročilé Smart Money koncepty overené 1000+ hodinami reálneho testovania. 4 stratégie pre serióznych traderov.'
            )}
          </p>
          <div className="flex gap-3">
            <button onClick={() => scrollTo('#formats')}
              className="bg-primary text-primary-foreground font-body text-xs font-bold tracking-[2px] uppercase px-6 py-3 hover:opacity-90 transition-opacity">
              {t('VIEW FORMATS →', 'ZOBRAZIŤ FORMÁTY →')}
            </button>
            <button onClick={() => scrollTo('#program')}
              className="border border-muted text-foreground font-body text-xs font-bold tracking-[2px] uppercase px-6 py-3 hover:border-foreground transition-colors">
              {t('EXPLORE PROGRAM', 'PRESKÚMAŤ PROGRAM')}
            </button>
          </div>
        </div>

        <div className="text-right">
          <p className="font-body text-[10px] tracking-[3px] uppercase text-muted-foreground mb-3">
            {t('Next intake starts in', 'Ďalší kurz začína o')}
          </p>
          <div className="flex gap-4">
            {[
              { val: days, label: t('DAYS', 'DNÍ') },
              { val: hours, label: t('HRS', 'HOD') },
              { val: minutes, label: 'MIN' },
              { val: seconds, label: t('SEC', 'SEK') },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading text-4xl text-foreground">{String(val).padStart(2, '0')}</div>
                <div className="font-body text-[9px] tracking-[2px] text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
