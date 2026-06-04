import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadModal from './LeadModal';

const BecomeAMentorSection = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollToContact = () => setOpen(true);

  const pills = [
    { en: '✓ Funded account experience', sk: '✓ Skúsenosť s funded účtom' },
    { en: '✓ Proven track record', sk: '✓ Preukázateľný track record' },
    { en: '✓ Passion for teaching', sk: '✓ Vášeň pre učenie' },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative z-10">
      <div
        className="max-w-[1280px] mx-auto relative overflow-hidden mentor-section"
        style={{
          background: `linear-gradient(135deg, rgba(240,78,35,0.15) 0%, rgba(240,78,35,0.06) 30%, transparent 60%)`,
          borderLeft: '4px solid #F04E23',
          borderRadius: '12px',
          boxShadow: 'inset 4px 0 60px rgba(240,78,35,0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="grid md:grid-cols-2 gap-16 p-8 md:p-16">
          <div className="reveal-heading">
            <h2 className="font-heading leading-[0.9]" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
              <span style={{ WebkitTextStroke: '1px rgba(240,237,230,0.2)', color: 'transparent' }}>{t('GOT THE', 'MÁŠ')}</span>
              <br />
              <span className="mentor-edge-slide" style={{ color: '#F04E23' }}>{t('EDGE?', 'VÝHODU?')}</span>
            </h2>
            <p className="font-body text-sm mt-8 leading-relaxed" style={{ color: '#AAAAAA', maxWidth: '400px' }}>
              {t(
                "Then prove it. We're looking for mentors who know what they're doing.",
                'Tak to dokáž. Hľadáme mentorov, ktorí vedia, čo robia.'
              )}
            </p>
          </div>

          <div className="reveal-content flex flex-col justify-center">
            <p className="font-body text-sm leading-relaxed mb-8" style={{ color: '#AAAAAA' }}>
              {t(
                "We're not looking for people who watched YouTube for 6 months. We're looking for proven traders with real funded account experience, who can pass their knowledge — not just their screenshots — to the next generation. If that's you, let's talk.",
                "Nehľadáme ľudí, ktorí pol roka sledovali YouTube. Hľadáme overených traderov s reálnymi skúsenosťami s funded účtami, ktorí dokážu odovzdať svoje know-how — nie len screenshoty — ďalšej generácii. Ak si to ty, porozprávajme sa."
              )}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {pills.map((p, i) => (
                <span key={i} className="tag">
                  {t(p.en, p.sk)}
                </span>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="btn-primary-lift self-start font-body text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all min-h-[48px]"
              style={{ background: '#F04E23', color: '#F0EDE6', border: '1px solid #F04E23', borderRadius: '12px' }}
            >
              {t('APPLY AS MENTOR →', 'PRIHLÁSIŤ SA AKO MENTOR →')}
            </button>
          </div>
        </div>
      </div>
      <LeadModal isOpen={open} onClose={() => setOpen(false)} variant="mentor" lang={lang} />
    </section>
  );
};

export default BecomeAMentorSection;
