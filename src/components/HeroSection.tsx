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

  const particles = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 2,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
    color: i % 3 === 0 ? 'rgba(212,240,0,0.4)' : i % 3 === 1 ? 'rgba(240,78,35,0.3)' : 'rgba(107,95,212,0.3)',
  })), []);

  return (
    <section className="hero-section min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 pt-32 max-w-[1280px] mx-auto hero-animate relative overflow-hidden text-primary">
      <div className="hero-spotlight hide-mobile" aria-hidden="true" />
      {particles.map(p => (
        <div key={p.id} className="particle hide-mobile" style={{
          left: p.left, bottom: '-10px', width: p.size, height: p.size,
          background: p.color, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`,
        }} />
      ))}

      <p className="font-label tracking-[0.15em] uppercase mb-8 section-tag relative z-10" style={{ color: '#D0FF00', fontSize: '10px' }}>
        {t('— this is not a course. this is a movement.', '— toto nie je kurz. toto je hnutie.')}
      </p>
      <h1 className="font-heading relative z-10" style={{ fontSize: 'clamp(64px, 10vw, 130px)', lineHeight: 0.88 }}>
        <span className="block" style={{ color: '#FEFFFC' }}>{t("WE DON'T", 'MY NEPREDÁVAME')}</span>
        <span className="block text-shimmer-accent">{t('SELL COURSES.', 'KURZY.')}</span>
        <span className="block" style={{ color: '#FEFFFC' }}>{t('WE BUILD', 'MY BUDUJEME')}</span>
        <span className="block" style={{ WebkitTextStroke: '1px rgba(254,255,252,0.2)', color: 'transparent' }}>
          {t('TRADERS.', 'TRADEROV.')}
        </span>
      </h1>

      <div className="mt-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 relative z-10">
        <div>
          <p className="font-body mb-6 leading-relaxed" style={{ color: '#AAAAAA', fontSize: '15px', maxWidth: '520px' }}>
            {t(
              'obsession.fx is a free trading education and a community of people obsessed with the markets. No price tag. No gurus. No fake promises.',
              'obsession.fx je bezplatné obchodné vzdelávanie a komunita ľudí posadnutých trhmi. Bez cenovky. Bez guru. Bez falošných sľubov.'
            )}
          </p>
          <div className="flex gap-4 flex-wrap mb-4">
            <button onClick={() => scrollTo('#products')}
              className="btn-primary-lift px-8 py-4 transition-all min-h-[48px]"
              style={{ background: '#D0FF00', color: '#000000', borderRadius: '12px', fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em' }}>
              {t('GET THE FREE COURSE →', 'ZÍSKAJ KURZ ZADARMO →')}
            </button>
            <button onClick={() => scrollTo('#products')}
              className="btn-ghost-lift px-8 py-4 transition-all min-h-[48px]"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#FEFFFC', background: 'transparent', borderRadius: '12px', fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em' }}>
              {t('JOIN THE COMMUNITY', 'PRIDAJ SA DO KOMUNITY')}
            </button>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#555555' }}>
            {t('👥 Already 500+ traders in the movement', '👥 Už 500+ traderov v hnutí')}
          </p>
        </div>

        <div className="text-right">
          <p className="font-label tracking-[0.15em] uppercase mb-2" style={{ color: '#888888', fontSize: '10px' }}>
            {t('Community free access closes in', 'Bezplatný prístup do komunity sa uzatvára o')}
          </p>
          <div className="flex gap-6">
            {[
              { val: days, label: t('DAYS', 'DNÍ') },
              { val: hours, label: t('HRS', 'HOD') },
              { val: minutes, label: 'MIN' },
              { val: seconds, label: t('SEC', 'SEK') },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading text-5xl" style={{ color: '#D0FF00' }}>{String(val).padStart(2, '0')}</div>
                <div className="font-label mt-1" style={{ color: '#888888', fontSize: '9px', letterSpacing: '0.1em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
