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

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const avatars = [
    { i: 'M', bg: 'linear-gradient(135deg,#D0FF00,#8FB300)' },
    { i: 'L', bg: 'linear-gradient(135deg,#8116E0,#4A0A8A)' },
    { i: 'J', bg: 'linear-gradient(135deg,#26A5E4,#1565C0)' },
    { i: 'P', bg: 'linear-gradient(135deg,#F04E23,#A02810)' },
    { i: 'D', bg: 'linear-gradient(135deg,#FF2D95,#8A0050)' },
  ];

  // mock candles
  const candles = useMemo(() => Array.from({ length: 28 }, (_, i) => {
    const up = Math.random() > 0.45;
    const h = 30 + Math.random() * 90;
    const top = 30 + Math.random() * 60;
    return { up, h, top, w: 6, x: 12 + i * 14, delay: i * 0.08 };
  }), []);

  return (
    <section className="hero-section min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16 max-w-[1280px] mx-auto hero-animate relative overflow-hidden">
      {/* Asymmetric background blobs */}
      <div aria-hidden className="hide-mobile" style={{
        position: 'absolute', top: '10%', left: '-10%', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(208,255,0,0.15), transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden className="hide-mobile" style={{
        position: 'absolute', bottom: '-10%', right: '-5%', width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(129,22,224,0.18), transparent 70%)',
        filter: 'blur(120px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 w-full relative z-10 items-center">
        {/* LEFT */}
        <div>
          <p className="font-label tracking-[0.15em] uppercase mb-8 section-tag inline-flex items-center gap-2" style={{ color: '#D0FF00', fontSize: '10px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D0FF00', animation: 'pulse 1.6s ease-in-out infinite' }} />
            {t('— THIS IS NOT A COURSE. THIS IS A MOVEMENT.', '— TOTO NIE JE KURZ. TOTO JE HNUTIE.')}
          </p>
          <h1 className="font-heading relative" style={{ fontSize: 'clamp(56px, 8vw, 110px)', lineHeight: 0.85 }}>
            <span className="block" style={{ color: '#FEFFFC' }}>{t("WE DON'T", 'MY NEPREDÁVAME')}</span>
            <span className="block">
              <span style={{ color: '#FEFFFC' }}>{t('SELL ', 'KURZY')}</span>
              <span style={{
                background: 'linear-gradient(90deg,#D0FF00,#8116E0,#D0FF00)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                color: 'transparent', animation: 'shimmerAccent 4s linear infinite',
              }}>{t('COURSES.', '.')}</span>
            </span>
            <span className="block" style={{ color: '#FEFFFC' }}>{t('WE BUILD', 'MY BUDUJEME')}</span>
            <span className="block" style={{ WebkitTextStroke: '1.5px rgba(208,255,0,0.6)', color: 'transparent' }}>
              {t('TRADERS.', 'TRADEROV.')}
            </span>
          </h1>

          <p className="font-body mt-8 leading-relaxed" style={{ color: '#BBBBBB', fontSize: '15px', maxWidth: '480px' }}>
            {t(
              'Free trading education and a community of people obsessed with the markets. No price tag. No gurus. No fake promises.',
              'Bezplatné obchodné vzdelávanie a komunita ľudí posadnutých trhmi. Bez cenovky. Bez guru. Bez falošných sľubov.'
            )}
          </p>

          <div className="flex gap-4 flex-wrap mt-8">
            <button onClick={() => scrollTo('#products')} className="btn-primary-lift cta-glow group"
              style={{
                background: 'linear-gradient(135deg,#D0FF00,#B8E600)', color: '#000', borderRadius: 12,
                fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.15em',
                padding: '16px 28px', minHeight: 48, border: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
              {t('GET THE FREE COURSE', 'ZÍSKAJ KURZ ZADARMO')}
              <span className="cta-arrow">→</span>
            </button>
            <button onClick={() => scrollTo('#products')} className="btn-ghost-lift group"
              style={{
                background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)', color: '#FEFFFC',
                borderRadius: 12, fontFamily: 'Jura, sans-serif', fontWeight: 700,
                fontSize: 12, letterSpacing: '0.15em', padding: '16px 28px', minHeight: 48,
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
              {t('JOIN THE COMMUNITY', 'PRIDAJ SA DO KOMUNITY')}
              <span className="cta-arrow">→</span>
            </button>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-4 mt-8">
            <div style={{ display: 'flex' }}>
              {avatars.map((a, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%', background: a.bg,
                  marginLeft: i === 0 ? 0 : -10,
                  border: '2px solid #0E0E0F',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: '#FFF',
                }}>{a.i}</div>
              ))}
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#888' }}>
              {t('500+ traders already in the movement', '500+ traderov už v hnutí')}
            </p>
          </div>
        </div>

        {/* RIGHT — DASHBOARD MOCK */}
        <div className="relative hide-mobile">
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(208,255,0,0.18)',
            borderRadius: 24,
            boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 100px rgba(208,255,0,0.08)',
            backdropFilter: 'blur(20px)',
            padding: 20, position: 'relative', overflow: 'hidden',
          }}>
            {/* top bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src="/logo.png" alt="" style={{ height: 22 }} />
                <span style={{ fontFamily: 'Jura', fontSize: 11, color: '#888', letterSpacing: '0.15em' }}>obsession.fx</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3DD688', animation: 'pulse 1.6s infinite' }} />
                <span style={{ fontFamily: 'Jura', fontSize: 9, color: '#3DD688', letterSpacing: '0.15em' }}>LIVE</span>
              </div>
            </div>

            {/* countdown pill */}
            <div style={{
              position: 'absolute', top: 16, right: 80,
              background: 'rgba(208,255,0,0.12)', border: '1px solid rgba(208,255,0,0.25)',
              padding: '4px 10px', borderRadius: 999,
              fontFamily: 'Jura', fontSize: 9, color: '#D0FF00', letterSpacing: '0.15em',
            }}>
              ⏱ {String(days).padStart(2, '0')}D {String(hours).padStart(2, '0')}H
            </div>

            {/* chart */}
            <div style={{
              position: 'relative', height: 240,
              background: 'linear-gradient(180deg, rgba(208,255,0,0.04), transparent)',
              borderRadius: 12, border: '1px solid rgba(255,255,255,0.04)',
              overflow: 'hidden',
            }}>
              {/* gridlines */}
              {[0,1,2,3].map(i => (
                <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${25*(i+1)}%`, height: 1, background: 'rgba(255,255,255,0.04)' }} />
              ))}
              <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
                {candles.map((c, i) => (
                  <rect key={i} x={c.x} y={c.top} width={c.w} height={c.h}
                    fill={c.up ? '#3DD688' : '#FF4D4D'}
                    style={{ animation: `pulse ${3 + (i % 4)}s ease-in-out ${c.delay}s infinite`, opacity: 0.85 }} />
                ))}
                {/* trend line */}
                <polyline
                  points={candles.map((c, i) => `${c.x + 3},${c.top + c.h / 2}`).join(' ')}
                  stroke="#D0FF00" strokeWidth="1.5" fill="none" opacity="0.7"
                />
              </svg>

              {/* floating chips */}
              <div style={{
                position: 'absolute', top: 12, right: 12,
                background: 'rgba(14,14,15,0.85)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(208,255,0,0.25)', borderRadius: 10,
                padding: '8px 12px', transform: 'rotate(3deg)',
                fontFamily: 'Inter', fontSize: 11, color: '#FEFFFC',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>📚 <b style={{ color: '#D0FF00' }}>30+</b> Lessons</div>
              <div style={{
                position: 'absolute', bottom: 12, left: 12,
                background: 'rgba(14,14,15,0.85)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(129,22,224,0.35)', borderRadius: 10,
                padding: '8px 12px', transform: 'rotate(-3deg)',
                fontFamily: 'Inter', fontSize: 11, color: '#FEFFFC',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}>🎯 <b style={{ color: '#B98AFF' }}>4</b> Strategies</div>
            </div>

            <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Inter', fontSize: 10, color: '#555' }}>
                {t('Live preview — Foundation Course · Module 3', 'Náhľad — Základný kurz · Modul 3')}
              </span>
              <span style={{ fontFamily: 'Jura', fontSize: 9, color: '#888', letterSpacing: '0.15em' }}>EURUSD · 15M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
