import { useLanguage } from '@/contexts/LanguageContext';

const topics = [
  { name_en: 'Market Structure', name_sk: 'Trhová štruktúra', desc_en: 'Swings, ranges, advanced structure', desc_sk: 'Swingy, rozsahy, pokročilá štruktúra',
    icon: <path d="M3 20L8 14L13 17L21 4" stroke="currentColor" strokeWidth="2" fill="none" /> },
  { name_en: 'Liquidity', name_sk: 'Likvidita', desc_en: 'Pools, grabs, structural liquidity', desc_sk: 'Pooly, graby, štrukturálna likvidita',
    icon: <path d="M4 12C4 12 8 4 12 12C16 20 20 12 20 12" stroke="currentColor" strokeWidth="2" fill="none" /> },
  { name_en: 'Order Blocks', name_sk: 'Order Blocky', desc_en: 'OB, Breaker, Mitigation, Rejection', desc_sk: 'OB, Breaker, Mitigation, Rejection',
    icon: <><rect x="4" y="4" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="13" y="13" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Fair Value Gaps', name_sk: 'Fair Value Gaps', desc_en: 'FVG, IFVG, Volume Imbalance', desc_sk: 'FVG, IFVG, Volume Imbalance',
    icon: <><rect x="4" y="4" width="16" height="5" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="4" y="15" width="16" height="5" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Sessions', name_sk: 'Sessions', desc_en: 'Asia, London, NY timing', desc_sk: 'Ázia, Londýn, NY timing',
    icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Order Flow', name_sk: 'Order Flow', desc_en: 'A to B, validation logic', desc_sk: 'A to B, validačná logika',
    icon: <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="currentColor" strokeWidth="2" fill="none" /> },
  { name_en: 'Context & Bias', name_sk: 'Kontext a Bias', desc_en: 'Bias engineering, IVNB', desc_sk: 'Bias engineering, IVNB',
    icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 3V12L18 8" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Static Setups', name_sk: 'Statické setupy', desc_en: 'Rule-based, repeatable edge', desc_sk: 'Pravidlové, opakovateľné',
    icon: <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" /> },
  { name_en: 'Dynamic Setups', name_sk: 'Dynamické setupy', desc_en: 'Adaptive, real-time POI', desc_sk: 'Adaptívne, real-time POI',
    icon: <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="currentColor" strokeWidth="2" fill="none" /> },
  { name_en: 'Risk Management', name_sk: 'Risk Management', desc_en: 'R:R, position sizing, drawdown', desc_sk: 'R:R, veľkosť pozície, drawdown',
    icon: <path d="M12 3L4 9V15C4 18.31 7.58 21.36 12 22C16.42 21.36 20 18.31 20 15V9L12 3Z" stroke="currentColor" strokeWidth="2" fill="none" /> },
  { name_en: 'Backtesting', name_sk: 'Backtesting', desc_en: 'FX Replay, correct methodology', desc_sk: 'FX Replay, správna metodológia',
    icon: <><path d="M3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M3 12L6 9M3 12L6 15" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Indices', name_sk: 'Indexy', desc_en: 'Indices vs Forex mechanics', desc_sk: 'Indexy vs Forex mechanika',
    icon: <><rect x="4" y="14" width="3" height="6" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="10" y="8" width="3" height="12" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="16" y="4" width="3" height="16" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'News & Macro', name_sk: 'Správy a Makro', desc_en: 'NFP, CPI, FOMC events', desc_sk: 'NFP, CPI, FOMC udalosti',
    icon: <><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M4 10H20" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M10 4V20" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Market Theory', name_sk: 'Teória trhu', desc_en: 'Hierarchy, Market Maker logic', desc_sk: 'Hierarchia, Market Maker logika',
    icon: <><circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 9V15" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M9 16L12 15L15 16" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Psychology', name_sk: 'Psychológia', desc_en: 'Fear, FOMO, emotional control', desc_sk: 'Strach, FOMO, kontrola emócií',
    icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Wyckoff', name_sk: 'Wyckoff', desc_en: 'Accumulation, distribution cycles', desc_sk: 'Akumulácia, distribučné cykly',
    icon: <path d="M3 17L7 13L11 15L15 9L21 7" stroke="currentColor" strokeWidth="2" fill="none" /> },
  { name_en: 'ICT Concepts', name_sk: 'ICT koncepty', desc_en: 'IntraDay logic, weekly templates', desc_sk: 'IntraDay logika, týždenné šablóny',
    icon: <><rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="10" y="10" width="4" height="4" stroke="currentColor" strokeWidth="2" fill="none" /></> },
  { name_en: 'Prop Strategy', name_sk: 'Prop stratégia', desc_en: 'Challenge rules, account management', desc_sk: 'Pravidlá výzvy, správa účtu',
    icon: <path d="M6 9H18L17 18H7L6 9ZM9 9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V9" stroke="currentColor" strokeWidth="2" fill="none" /> },
];

const ProgramSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="program" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>{t('Curriculum', 'Učebný plán')}</p>
      <h2 className="font-heading mb-8 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('THE PROGRAM.', 'PROGRAM.')}</h2>

      {/* Stats row */}
      <div className="flex flex-wrap gap-16 mb-16 reveal-content">
        {[
          { num: '82+', label: t('lessons', 'lekcií') },
          { num: '20h+', label: t('video explanations', 'video vysvetlení') },
          { num: '4', label: t('strategies', 'stratégie') },
        ].map((s, i) => (
          <div key={i}>
            <span className="font-heading leading-none" style={{ color: '#D4F000', fontSize: 'clamp(48px, 6vw, 80px)' }}>{s.num}</span>
            <p className="font-body text-xs mt-2 uppercase tracking-[0.1em]" style={{ color: '#AAAAAA' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Topic grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal-content">
        {topics.map((topic, i) => (
          <div
            key={i}
            className="glass-card p-4 flex flex-col items-center text-center group reveal-card cursor-default"
            style={{ transitionDelay: `${i * 60}ms` }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = i % 2 === 0 ? 'rgba(212,240,0,0.3)' : 'rgba(107,95,212,0.3)';
              const icon = el.querySelector('svg');
              if (icon) icon.style.color = i % 2 === 0 ? '#D4F000' : '#6B5FD4';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.08)';
              const icon = el.querySelector('svg');
              if (icon) icon.style.color = 'rgba(240,237,230,0.7)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-4"
              style={{ color: 'rgba(240,237,230,0.7)', transition: 'color 0.2s ease-out' }}>
              {topic.icon}
            </svg>
            <h4 className="font-body text-xs font-semibold mb-1 leading-tight" style={{ color: '#F0EDE6' }}>
              {lang === 'en' ? topic.name_en : topic.name_sk}
            </h4>
            <p className="font-body text-[11px] leading-tight" style={{ color: '#999999' }}>
              {lang === 'en' ? topic.desc_en : topic.desc_sk}
            </p>
          </div>
        ))}
      </div>

      <p className="font-body text-sm italic mt-16 reveal-content visible text-primary text-center" style={{ color: '#888888', maxWidth: '100%' }}>
        {t(
          'Every topic. No filler. Only what gets you funded.',
          'Každá téma. Žiadna vata. Len to, čo ťa dostane k funded.'
        )}
      </p>
    </section>
  );
};

export default ProgramSection;
