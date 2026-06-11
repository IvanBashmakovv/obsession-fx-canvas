import { useLanguage } from '@/contexts/LanguageContext';

const ComparisonSection = () => {
  const { t } = useLanguage();

  const rows: [string, string][] = [
    [t('Free course', 'Bezplatný kurz'), '299€ — 2000€+'],
    [t('You join a movement', 'Vstúpiš do hnutia'), t('You buy a product', 'Kúpiš produkt')],
    [t('Community + mentors after', 'Komunita + mentori potom'), t("You're on your own", 'Si sám')],
    [t("Honest — we're building with you", 'Úprimní — budujeme s tebou'), t('10x account in 30 days', '10x účet za 30 dní')],
    [t('Zero filler. Only what works.', 'Žiadna vata. Len to čo funguje.'), t('80% motivation, 20% content', '80% motivácia, 20% obsah')],
    [t('Real traders, real results', 'Skutoční traderi, skutočné výsledky'), t('Gurus with rented Lamborghinis', 'Guru s prenajatými Lamborghini')],
  ];

  return (
    <section className="relative z-10" style={{ padding: '100px 56px', background: 'rgba(129,22,224,0.03)' }}>
      <div className="max-w-[1280px] mx-auto">
        <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>
          {t('WHY OBSESSION.FX', 'PREČO OBSESSION.FX')}
        </p>
        <h2 className="font-heading mb-12 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
          {t('We do things differently.', 'Robíme veci inak.')}
        </h2>

        <div className="reveal-content" style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px', overflow: 'hidden',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.png" alt="" style={{ height: '32px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(208,255,0,0.5))' }} />
              <span style={{ fontFamily: 'Jura, sans-serif', fontWeight: 700, color: '#D0FF00', letterSpacing: '0.1em', fontSize: '13px' }}>obsession.fx</span>
            </div>
            <div style={{ fontFamily: 'Jura, sans-serif', fontWeight: 700, color: '#555555', letterSpacing: '0.1em', fontSize: '13px' }}>
              {t('⊘ Everyone else', '⊘ Všetci ostatní')}
            </div>
          </div>
          {rows.map(([left, right], i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              padding: '16px 32px',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#FEFFFC' }}>
                <span style={{ color: '#D0FF00', fontWeight: 700 }}>✓</span> {left}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#555555' }}>
                <span style={{ color: '#444444', fontWeight: 700 }}>✗</span> {right}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
