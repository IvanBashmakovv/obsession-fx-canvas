import { useLanguage } from '@/contexts/LanguageContext';

const cards = [
  {
    title_en: 'Learn the System',
    title_sk: 'Nauč sa systém',
    desc_en: 'Understand the core trading models, market structure and execution logic.',
    desc_sk: 'Pochop kľúčové obchodné modely, trhovú štruktúru a logiku exekúcie.',
  },
  {
    title_en: 'Build Your Risk Model',
    title_sk: 'Postav si risk model',
    desc_en: 'Learn how to protect capital, control drawdown and size positions correctly.',
    desc_sk: 'Nauč sa chrániť kapitál, kontrolovať drawdown a správne sizovať pozície.',
  },
  {
    title_en: 'Execute With Rules',
    title_sk: 'Exekúcia podľa pravidiel',
    desc_en: 'Use defined setups, confirmations and trade management rules.',
    desc_sk: 'Používaj definované setupy, potvrdenia a pravidlá manažmentu obchodu.',
  },
  {
    title_en: 'Get Mentor Support',
    title_sk: 'Mentor podpora',
    desc_en: 'Ask questions, review your process and improve with guidance.',
    desc_sk: 'Pýtaj sa, prechádzaj svoj proces a zlepšuj sa s vedením mentora.',
  },
];

const SolutionSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="solution" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>
        {t('The Solution', 'Riešenie')}
      </p>
      <h2 className="font-heading mb-8 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t('WE TURN TRADING INTO A ', 'PREMENÍME OBCHODOVANIE NA ')}
        <span style={{ color: '#D4F000' }}>{t('STRUCTURED PROCESS.', 'ŠTRUKTÚROVANÝ PROCES.')}</span>
      </h2>
      <p className="font-body text-base leading-relaxed mb-16 reveal-content max-w-3xl" style={{ color: '#BABABA' }}>
        {t(
          'Obsession FX gives you a complete education path: strategy, risk, execution, psychology and mentorship — built for traders who want to trade with rules, not emotions.',
          'Obsession FX ti dáva kompletnú vzdelávaciu cestu: stratégia, risk, exekúcia, psychológia a mentoring — postavené pre traderov, ktorí chcú obchodovať podľa pravidiel, nie emócií.'
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-content">
        {cards.map((c, i) => (
          <div
            key={i}
            className="glass-card p-8 reveal-card"
            style={{ transitionDelay: `${i * 80}ms`, borderTop: '2px solid rgba(212,240,0,0.4)' }}
          >
            <span className="font-heading text-[64px] leading-none block mb-4" style={{ color: 'rgba(212,240,0,0.15)' }}>
              0{i + 1}
            </span>
            <h3 className="font-heading text-2xl mb-3" style={{ color: '#F0EDE6' }}>
              {lang === 'en' ? c.title_en : c.title_sk}
            </h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#AAAAAA' }}>
              {lang === 'en' ? c.desc_en : c.desc_sk}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
