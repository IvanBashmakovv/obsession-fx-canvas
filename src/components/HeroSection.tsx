import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const target = useMemo(() => new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).getTime(), []);
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

  // Generate particles
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 2,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      color: i % 2 === 0 ? 'rgba(255,30,30,0.4)' : 'rgba(255,45,149,0.3)',
    }));
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-end px-6 pb-16 pt-32 max-w-7xl mx-auto hero-animate relative overflow-hidden">
      {/* Floating particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-6 section-tag">
        — obsession.fx · advanced smc · slovakia
      </p>
      <h1 className="font-heading leading-[0.88]" style={{ fontSize: 'clamp(72px, 11vw, 140px)' }}>
        <span className="block text-shimmer-white">{t('OBSESSION', 'POSADNUTOSŤ')}</span>
        <span className="block text-shimmer-red">{t('BEATS', 'PORÁŽA')}</span>
        <span className="block text-ghost-glow">
          {t('TALENT.', 'TALENT.')}
        </span>
      </h1>

      <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <div>
          <p className="font-body text-sm text-muted-foreground max-w-md mb-6">
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
          <p className="font-label text-[10px] tracking-[3px] uppercase text-dim mb-3">
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
                <div className="font-label text-[9px] tracking-[2px] text-dim">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
