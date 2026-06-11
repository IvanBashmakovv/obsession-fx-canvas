import { useLanguage } from '@/contexts/LanguageContext';

const RoadmapSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      n: '01',
      bg: '#D0FF00', color: '#000000', border: 'none',
      title: t('Get the free course', 'Získaj bezplatný kurz'),
      text: t(
        'Access 100+ lessons covering everything from Market Structure to Prop Strategy. Free. No strings attached.',
        'Prístup k 100+ lekciám. Zadarmo. Bez záväzkov.'
      ),
    },
    {
      n: '02',
      bg: 'rgba(129,22,224,0.3)', color: '#8116E0', border: '2px solid #8116E0',
      title: t('Study the material', 'Preštuduj materiál'),
      text: t(
        'Go through the methodology. Backtest. Practice. The foundation is there — the work is yours.',
        'Prejdi metodológiu. Backtestuj. Precvičuj. Základ je tam — práca je na tebe.'
      ),
    },
    {
      n: '03',
      bg: 'rgba(208,255,0,0.15)', color: '#D0FF00', border: '2px solid #D0FF00',
      title: t('Join the movement', 'Pridaj sa k hnutiu'),
      text: t(
        'Morning calls, live sessions, mentor access. This is where knowledge becomes real results.',
        'Ranné hovory, živé sedenia, prístup k mentorovi. Tu sa vedomosti menia na reálne výsledky.'
      ),
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>
        {t('YOUR PATH', 'TVOJA CESTA')}
      </p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('Simple. Three steps.', 'Jednoduché. Tri kroky.')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal-content relative">
        {steps.map((s, i) => (
          <div key={i} className="reveal-card relative" style={{ transitionDelay: `${i * 100}ms` }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '80px', color: 'rgba(208,255,0,0.1)', lineHeight: 1, marginBottom: '8px' }}>
              {s.n}
            </div>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              background: s.bg, color: s.color, border: s.border,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px',
              marginBottom: '20px',
            }}>
              {s.n}
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700, color: '#FEFFFC', marginBottom: '10px' }}>
              {s.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#888888', lineHeight: 1.75 }}>
              {s.text}
            </p>
            {i < 2 && (
              <div className="hidden md:block" style={{
                position: 'absolute', top: '120px', right: '-30px', width: '60px',
                borderTop: '2px dotted #D0FF00', opacity: 0.4,
              }} />
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16 reveal-content">
        <button
          onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary-lift"
          style={{
            background: '#D0FF00', color: '#000000',
            fontFamily: 'Jura, sans-serif', fontWeight: 700, fontSize: '13px',
            letterSpacing: '0.15em', padding: '18px 36px', borderRadius: '12px',
            border: 'none', cursor: 'pointer',
          }}>
          {t('START FOR FREE NOW →', 'ZAČNI ZADARMO TERAZ →')}
        </button>
      </div>
    </section>
  );
};

export default RoadmapSection;
