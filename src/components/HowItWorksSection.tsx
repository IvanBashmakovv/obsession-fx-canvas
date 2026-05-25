import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  {
    title_en: 'Join the Program',
    title_sk: 'Pridaj sa do programu',
    desc_en: 'Get instant access to the full education platform and start with the foundation modules.',
    desc_sk: 'Získaš okamžitý prístup k celej platforme a začneš modulmi základov.',
  },
  {
    title_en: 'Learn the System',
    title_sk: 'Nauč sa systém',
    desc_en: 'Follow a structured path covering market structure, risk, psychology and execution.',
    desc_sk: 'Postupuj jasnou cestou: trhová štruktúra, risk, psychológia, exekúcia.',
  },
  {
    title_en: 'Apply the Models',
    title_sk: 'Aplikuj modely',
    desc_en: 'Use the trading models with clear rules, confirmations and risk parameters.',
    desc_sk: 'Používaj obchodné modely s jasnými pravidlami, potvrdeniami a risk parametrami.',
  },
  {
    title_en: 'Get Support',
    title_sk: 'Získaj podporu',
    desc_en: 'Ask questions, review your process and improve your trading with mentor guidance.',
    desc_sk: 'Pýtaj sa, prechádzaj svoj proces a zlepšuj sa s mentorom.',
  },
];

const HowItWorksSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="how" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>
        {t('Process', 'Proces')}
      </p>
      <h2 className="font-heading mb-8 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>
        {t('HOW IT WORKS.', 'AKO TO FUNGUJE.')}
      </h2>
      <p className="font-body text-base leading-relaxed mb-16 reveal-content max-w-3xl" style={{ color: '#BABABA' }}>
        {t(
          'From access to execution — your path is simple and structured.',
          'Od prístupu po exekúciu — tvoja cesta je jednoduchá a štruktúrovaná.'
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-content">
        {steps.map((s, i) => (
          <div
            key={i}
            className="glass-card p-8 reveal-card relative"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <p className="font-label text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: '#D4F000' }}>
              {t('STEP', 'KROK')} 0{i + 1}
            </p>
            <h3 className="font-heading text-2xl mb-3" style={{ color: '#F0EDE6' }}>
              {lang === 'en' ? s.title_en : s.title_sk}
            </h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#AAAAAA' }}>
              {lang === 'en' ? s.desc_en : s.desc_sk}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
