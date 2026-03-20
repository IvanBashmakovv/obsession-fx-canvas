import { useLanguage } from '@/contexts/LanguageContext';

const BecomeAMentorSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  const pills = [
    { en: '✓ Funded account experience', sk: '✓ Skúsenosť s funded účtom' },
    { en: '✓ Proven track record', sk: '✓ Preukázateľný track record' },
    { en: '✓ Passion for teaching', sk: '✓ Vášeň pre učenie' },
  ];

  return (
    <section className="py-24 px-6 scroll-mt-20">
      <div
        className="max-w-7xl mx-auto border-l-4 border-primary relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(255,30,30,0.15) 0%, transparent 60%), #0F0F0F' }}
      >
        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16">
          {/* Left */}
          <div className="reveal-heading">
            <h2 className="font-heading leading-[0.9]" style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}>
              <span style={{ WebkitTextStroke: '1px #F5F5F5', color: 'transparent' }}>{t('GOT THE', 'MÁŠ')}</span>
              <br />
              <span className="text-primary mentor-edge-slide">{t('EDGE?', 'VÝHODU?')}</span>
            </h2>
            <p className="font-body text-sm text-[#AAAAAA] mt-6 max-w-sm">
              {t(
                "Then prove it. We're looking for mentors who know what they're doing.",
                'Tak to dokáž. Hľadáme mentorov, ktorí vedia, čo robia.'
              )}
            </p>
          </div>

          {/* Right */}
          <div className="reveal-content flex flex-col justify-center">
            <p className="font-body text-sm text-[#AAAAAA] leading-relaxed mb-6">
              {t(
                "We're not looking for people who watched YouTube for 6 months. We're looking for proven traders with real funded account experience, who can pass their knowledge — not just their screenshots — to the next generation. If that's you, let's talk.",
                "Nehľadáme ľudí, ktorí pol roka sledovali YouTube. Hľadáme overených traderov s reálnymi skúsenosťami s funded účtami, ktorí dokážu odovzdať svoje know-how — nie len screenshoty — ďalšej generácii. Ak si to ty, porozprávajme sa."
              )}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {pills.map((p, i) => (
                <span key={i} className="bg-secondary text-[#AAAAAA] font-label text-[10px] tracking-[1px] uppercase px-4 py-2">
                  {t(p.en, p.sk)}
                </span>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="self-start bg-primary text-primary-foreground font-body text-xs font-bold tracking-[2px] uppercase px-8 py-4 hover:bg-transparent hover:text-primary border border-primary transition-all"
            >
              {t('APPLY AS MENTOR →', 'PRIHLÁSIŤ SA AKO MENTOR →')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAMentorSection;
