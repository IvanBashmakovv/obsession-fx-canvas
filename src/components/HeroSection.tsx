import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const avatars = [
    { i: 'M', bg: 'linear-gradient(135deg,#D0FF00,#8FB300)' },
    { i: 'L', bg: 'linear-gradient(135deg,#8116E0,#4A0A8A)' },
    { i: 'J', bg: 'linear-gradient(135deg,#26A5E4,#1565C0)' },
    { i: 'P', bg: 'linear-gradient(135deg,#F04E23,#A02810)' },
    { i: 'D', bg: 'linear-gradient(135deg,#FF2D95,#8A0050)' },
  ];


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

        {/* RIGHT — COURSE STATS CARD */}
        <div className="relative hide-mobile">
          <div className="glass-card" style={{
            borderRadius: 24,
            boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 100px rgba(208,255,0,0.06)',
            padding: 32, position: 'relative', overflow: 'hidden',
          }}>
            {/* top bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src="/logo.png" alt="" style={{ height: 24 }} />
                <span style={{ fontFamily: 'Jura', fontSize: 11, color: '#888', letterSpacing: '0.15em' }}>OBSESSION.FX</span>
              </div>
              <div className="tag tag-accent">
                {t('Free Forever', 'Navždy zadarmo')}
              </div>
            </div>

            <h3 className="font-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(28px, 3vw, 36px)', marginBottom: 8, lineHeight: 1.1 }}>
              {t('THE FOUNDATION COURSE', 'ZÁKLADNÝ KURZ')}
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#999', marginBottom: 28, lineHeight: 1.6 }}>
              {t(
                'Everything you need to understand how markets actually move. No indicators. No guesswork.',
                'Všetko, čo potrebuješ na pochopenie trhov. Bez indikátorov. Bez hádania.'
              )}
            </p>

            {/* stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
              {[
                { value: '30+', label: t('Lessons', 'Lekcií'), color: '#D0FF00' },
                { value: '10+', label: t('Hours of video', 'Hodín videa'), color: '#FEFFFC' },
                { value: '4', label: t('Strategies', 'Strategie'), color: '#B98AFF' },
                { value: '0€', label: t('Forever', 'Navždy'), color: '#D0FF00' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12, padding: '16px 18px',
                }}>
                  <div className="font-heading" style={{ fontSize: 32, color: stat.color, lineHeight: 1, marginBottom: 4 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: 'Jura', fontSize: 10, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* progress / social proof */}
            <div style={{
              background: 'rgba(208,255,0,0.06)',
              border: '1px solid rgba(208,255,0,0.15)',
              borderRadius: 12, padding: '14px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D0FF00', animation: 'pulse 1.6s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#FEFFFC' }}>
                  {t('500+ traders already inside', '500+ traderov už vo vnútri')}
                </span>
              </div>
              <span className="cta-arrow" style={{ color: '#D0FF00', fontFamily: 'Jura', fontSize: 12 }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
