import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const target = useMemo(() => new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).getTime(), []);
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

  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 2,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      color: i % 3 === 0 ? 'rgba(212,240,0,0.4)' : i % 3 === 1 ? 'rgba(240,78,35,0.3)' : 'rgba(107,95,212,0.3)',
    }));
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-end px-6 pb-16 pt-32 max-w-7xl mx-auto hero-animate relative overflow-hidden">
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
        <span className="block text-shimmer-accent">{t('BEATS', 'PORÁŽA')}</span>
        <span className="block text-ghost-glow">
          {t('TALENT.', 'TALENT.')}
        </span>
      </h1>

      <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <div>
          <p className="font-body text-sm text-[#AAAAAA] max-w-md mb-6">
            {t(
              "We've watched enough trading courses to know exactly what's wrong with them. So we built the opposite — zero filler, only what actually gets you funded.",
              "Videli sme dosť trading kurzov na to, aby sme vedeli, čo im chýba. Preto sme postavili opak — žiadna vata, len to, čo ťa skutočne dostane k funded účtu."
            )}
          </p>
          <div className="flex gap-3">
            <button onClick={() => scrollTo('#formats')}
              className="bg-primary text-primary-foreground font-body text-xs font-bold tracking-[2px] uppercase px-6 py-3 hover:shadow-[0_0_24px_rgba(212,240,0,0.3)] transition-all" style={{ background: '#D4F000', color: '#1E1E20' }}>
              {t('VIEW FORMATS →', 'ZOBRAZIŤ FORMÁTY →')}
            </button>
            <button onClick={() => scrollTo('#program')}
              className="border border-[#333336] text-foreground font-body text-xs font-bold tracking-[2px] uppercase px-6 py-3 hover:border-primary hover:text-primary transition-colors">
              {t('EXPLORE PROGRAM', 'PRESKÚMAŤ PROGRAM')}
            </button>
          </div>
        </div>

        <div className="text-right">
          <p className="font-label text-[10px] tracking-[3px] uppercase text-[#666666] mb-3">
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
                <div className="font-heading text-4xl" style={{ color: '#D4F000' }}>{String(val).padStart(2, '0')}</div>
                <div className="font-label text-[9px] tracking-[2px] text-[#666666]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
