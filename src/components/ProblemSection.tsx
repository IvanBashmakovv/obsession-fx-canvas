import { useLanguage } from '@/contexts/LanguageContext';

const ProblemSection = () => {
  const { t } = useLanguage();

  const oldWay = [
    t('Lamborghini gurus selling dreams', 'Lamborghini guru predávajú sny'),
    t('80% motivation, 20% content', '80% motivácia, 20% obsah'),
    t('Pay first, figure it out later', 'Najprv zaplať, potom rieš'),
  ];
  const newWay = [
    t('Free education, real methodology', 'Bezplatné vzdelávanie, reálna metodológia'),
    t('Zero filler — only what works', 'Žiadny filler — len to čo funguje'),
    t('Try everything before you pay anything', 'Vyskúšaj všetko skôr než zaplatíš'),
  ];

  return (
    <section id="problem" className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <div aria-hidden style={{
        position: 'absolute', top: '20%', left: '-10%', width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(255,30,30,0.08), transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none', zIndex: -1,
      }} />
      <div aria-hidden style={{
        position: 'absolute', top: '20%', right: '-10%', width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(208,255,0,0.15), transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none', zIndex: -1,
      }} />

      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: 11 }}>
        {t("WHY WE'RE DIFFERENT", 'PREČO SME INÍ')}
      </p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('Everyone else ', 'Všetci ostatní ')}
        <span style={{ color: '#666' }}>vs.</span>
        <span style={{ background: 'linear-gradient(90deg,#D0FF00,#8116E0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}> {t('Us', 'My')}</span>
      </h2>

      <div className="relative reveal-content grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* LEFT — OLD WAY */}
        <div style={{
          background: 'rgba(255,30,30,0.04)',
          borderRight: '1px solid rgba(255,30,30,0.15)',
          borderRadius: '16px 0 0 16px',
          padding: 48, filter: 'saturate(0.7)',
        }}>
          <p style={{ fontFamily: 'Jura', fontSize: 11, color: '#FF5050', letterSpacing: '0.15em', marginBottom: 24 }}>
            😬 {t("WHAT YOU'VE SEEN BEFORE", 'ČO SI UŽ VIDEL')}
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {oldWay.map((l, i) => (
              <li key={i} style={{
                fontFamily: 'Inter', fontSize: 16, color: '#888', lineHeight: 1.6,
                display: 'flex', alignItems: 'center', gap: 14,
                textDecoration: 'line-through', textDecorationColor: 'rgba(255,80,80,0.5)',
              }}>
                <span style={{ color: '#FF5050', fontSize: 18 }}>❌</span>
                {l}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — OBSESSION WAY */}
        <div style={{
          background: 'rgba(208,255,0,0.04)',
          borderLeft: '1px solid rgba(208,255,0,0.15)',
          borderRadius: '0 16px 16px 0',
          padding: 48, boxShadow: 'inset 0 0 80px rgba(208,255,0,0.04)',
        }}>
          <p style={{ fontFamily: 'Jura', fontSize: 11, color: '#D0FF00', letterSpacing: '0.15em', marginBottom: 24 }}>
            ✨ {t('WHAT WE BUILT INSTEAD', 'ČO SME POSTAVILI MIESTO TOHO')}
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {newWay.map((l, i) => (
              <li key={i} style={{
                fontFamily: 'Inter', fontSize: 16, color: '#FEFFFC', lineHeight: 1.6,
                display: 'flex', alignItems: 'center', gap: 14, fontWeight: 500,
              }}>
                <span style={{ color: '#D0FF00', fontSize: 18 }}>✅</span>
                {l}
              </li>
            ))}
          </ul>
        </div>

        {/* VS badge */}
        <div className="hide-mobile" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg,#D0FF00,#8116E0)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Bebas Neue', fontSize: 22, color: '#0E0E0F',
          boxShadow: '0 0 40px rgba(208,255,0,0.4), 0 0 80px rgba(129,22,224,0.3)',
          border: '3px solid #0E0E0F',
        }}>VS</div>
      </div>
    </section>
  );
};

export default ProblemSection;
