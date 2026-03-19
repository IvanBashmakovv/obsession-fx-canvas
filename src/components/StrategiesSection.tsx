import { useLanguage } from '@/contexts/LanguageContext';

const strategies = [
  { num: '01', name: 'INTRADAY', type_en: 'Day trading', type_sk: 'Denné obchodovanie', desc_en: 'Session-based execution. Asia, London & NY setups. Precision entries within daily structure.', desc_sk: 'Obchodovanie podľa sessions. Ázia, Londýn & NY setupy. Presné vstupy v dennej štruktúre.' },
  { num: '02', name: 'SWING', type_en: 'Multi-day positioning', type_sk: 'Viacdňové pozície', desc_en: 'Higher timeframe bias with lower timeframe entry. Designed for traders who can\'t watch screens all day.', desc_sk: 'Vyšší timeframe bias s nižším timeframe vstupom. Pre traderov, ktorí nemôžu sledovať obrazovky celý deň.' },
  { num: '03', name: 'DYNAMIC', type_en: 'Adaptive system', type_sk: 'Adaptívny systém', desc_en: 'Adapts to market conditions in real time. Dynamic POI selection, flexible risk management.', desc_sk: 'Prispôsobuje sa trhovým podmienkam v reálnom čase. Dynamický výber POI, flexibilný risk management.' },
  { num: '04', name: 'STATIC', type_en: 'Rule-based precision', type_sk: 'Pravidlová presnosť', desc_en: 'Fixed rules, repeatable edge. Pre-defined setups with clear invalidation levels. Foundation for consistent mechanical execution.', desc_sk: 'Fixné pravidlá, opakovateľná výhoda. Preddefinované setupy s jasnými invalidačnými úrovňami.' },
];

const StrategiesSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="strategies" className="py-24 px-6 max-w-7xl mx-auto reveal">
      <p className="text-primary font-body text-[10px] tracking-[4px] uppercase mb-4">{t('Strategies', 'Stratégie')}</p>
      <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-16">{t('4 BATTLE-TESTED STRATEGIES.', '4 OVERENÉ STRATÉGIE.')}</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strategies.map(s => (
          <div key={s.num} className="relative group strategy-underline pb-4 cursor-default">
            <span className="font-heading text-[80px] leading-none text-secondary block">{s.num}</span>
            <h3 className="font-heading text-3xl text-foreground group-hover:text-primary transition-colors mt-2">{s.name}</h3>
            <p className="text-primary font-body text-[10px] tracking-[3px] uppercase mt-1 mb-3">
              {lang === 'en' ? s.type_en : s.type_sk}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {lang === 'en' ? s.desc_en : s.desc_sk}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategiesSection;
