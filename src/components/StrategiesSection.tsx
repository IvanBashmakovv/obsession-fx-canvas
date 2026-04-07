import { useLanguage } from '@/contexts/LanguageContext';

const strategies = [
  { num: '01', name: 'INTRADAY', type_en: 'Day trading', type_sk: 'Denné obchodovanie', desc_en: 'Session-based execution. Asia, London & NY setups. Precision entries within daily structure.', desc_sk: 'Obchodovanie podľa sessions. Ázia, Londýn & NY setupy. Presné vstupy v dennej štruktúre.' },
  { num: '02', name: 'SWING', type_en: 'Multi-day positioning', type_sk: 'Viacdňové pozície', desc_en: "Higher timeframe bias with lower timeframe entry. Designed for traders who can't watch screens all day.", desc_sk: 'Vyšší timeframe bias s nižším timeframe vstupom. Pre traderov, ktorí nemôžu sledovať obrazovky celý deň.' },
  { num: '03', name: 'DYNAMIC', type_en: 'Adaptive system', type_sk: 'Adaptívny systém', desc_en: 'Adapts to market conditions in real time. Dynamic POI selection, flexible risk management.', desc_sk: 'Prispôsobuje sa trhovým podmienkam v reálnom čase. Dynamický výber POI, flexibilný risk management.' },
  { num: '04', name: 'STATIC', type_en: 'Rule-based precision', type_sk: 'Pravidlová presnosť', desc_en: 'Fixed rules, repeatable edge. Pre-defined setups with clear invalidation levels. Foundation for consistent mechanical execution.', desc_sk: 'Fixné pravidlá, opakovateľná výhoda. Preddefinované setupy s jasnými invalidačnými úrovňami.' },
];

const StrategiesSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="strategies" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading visible text-2xl bg-primary-foreground text-primary" style={{ color: '#D4F000' }}>{t('Strategies', 'Stratégie')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(40px, 8vw, 96px)' }}>{t('4 BATTLE-TESTED STRATEGIES.', '4 OVERENÉ STRATÉGIE.')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-content">
        {strategies.map((s, i) => (
          <div key={s.num} className="relative group strategy-underline strategy-glow glass-card p-8 cursor-default reveal-card" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="font-heading text-[80px] leading-none block hide-mobile text-primary" style={{ color: 'rgba(212,240,0,0.06)' }}>{s.num}</span>
            <h3 className="font-heading text-3xl group-hover:text-primary transition-colors mt-2" style={{ color: '#F0EDE6' }}>{s.name}</h3>
            <p className="font-label text-[10px] tracking-[0.15em] uppercase mt-2 mb-4" style={{ color: '#D4F000', opacity: 0.8 }}>
              {lang === 'en' ? s.type_en : s.type_sk}
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#AAAAAA' }}>
              {lang === 'en' ? s.desc_en : s.desc_sk}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategiesSection;
