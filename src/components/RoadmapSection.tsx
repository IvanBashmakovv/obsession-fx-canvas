import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Brain, Users } from 'lucide-react';

const RoadmapSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      n: '01', Icon: BookOpen,
      bg: 'linear-gradient(135deg,#D0FF00,#B8E600)',
      glow: 'rgba(208,255,0,0.4)', numColor: '#0E0E0F',
      title: t('Get the free course', 'Získaj bezplatný kurz'),
      text: t('Access 30+ lessons covering everything from Market Structure to Prop Strategy. Free. No strings attached.', 'Prístup k 30+ lekciám. Zadarmo. Bez záväzkov.'),
    },
    {
      n: '02', Icon: Brain,
      bg: 'linear-gradient(135deg,#8116E0,#6B0FC0)',
      glow: 'rgba(129,22,224,0.5)', numColor: '#FEFFFC',
      title: t('Study the material', 'Preštuduj materiál'),
      text: t('Go through the methodology. Backtest. Practice. The foundation is there — the work is yours.', 'Prejdi metodológiu. Backtestuj. Precvičuj.'),
    },
    {
      n: '03', Icon: Users,
      bg: 'linear-gradient(135deg,#D0FF00,#8116E0)',
      glow: 'rgba(208,255,0,0.4)', numColor: '#0E0E0F',
      title: t('Join the movement', 'Pridaj sa k hnutiu'),
      text: t('Morning calls, live sessions, mentor access. Where knowledge becomes real results.', 'Ranné hovory, živé sedenia, prístup k mentorovi.'),
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: 11 }}>
        {t('YOUR PATH', 'TVOJA CESTA')}
      </p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('Simple. ', 'Jednoduché. ')}
        <span style={{ background: 'linear-gradient(90deg,#D0FF00,#8116E0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{t('Three steps.', 'Tri kroky.')}</span>
      </h2>

      <div className="relative reveal-content">
        {/* connector line (desktop) */}
        <div aria-hidden className="hidden md:block" style={{
          position: 'absolute', top: 60, left: '8%', right: '8%', height: 2,
          background: 'linear-gradient(90deg,#D0FF00,#8116E0,#D0FF00)',
          opacity: 0.3, zIndex: 0,
        }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((s, i) => (
            <div key={i} className="reveal-card" style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: 40,
              backdropFilter: 'blur(10px)',
              transitionDelay: `${i * 120}ms`,
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%', background: s.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Bebas Neue', fontSize: 28, color: s.numColor,
                boxShadow: `0 0 30px ${s.glow}, 0 0 60px ${s.glow}`,
                marginBottom: 24,
              }}>{s.n}</div>
              <s.Icon size={24} color={i === 1 ? '#B98AFF' : '#D0FF00'} strokeWidth={1.5} />
              <h3 style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 700, color: '#FEFFFC', marginTop: 16 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#999', lineHeight: 1.75, marginTop: 8 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16 reveal-content">
        <button
          onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary-lift cta-glow group"
          style={{
            background: 'linear-gradient(135deg,#D0FF00,#B8E600)', color: '#000',
            fontFamily: 'Jura', fontWeight: 700, fontSize: 13, letterSpacing: '0.2em',
            padding: '18px 40px', borderRadius: 14, border: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 12,
            boxShadow: '0 10px 40px rgba(208,255,0,0.25)',
          }}>
          {t('START FOR FREE NOW', 'ZAČNI ZADARMO TERAZ')}
          <span className="cta-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default RoadmapSection;
