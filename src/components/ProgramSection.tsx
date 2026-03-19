import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const modules = [
  { num: '01', name: 'Intro — Smart Money', lessons: 1, desc_en: 'What is SMC? obsession.fx Vision, Smart Money vs Technical Analysis', desc_sk: 'Čo je SMC? Vízia obsession.fx, Smart Money vs Technická analýza' },
  { num: '02', name: 'Market Structure', lessons: 3, desc_en: 'Market Structure Range, Strong & Weak Swings, Advanced Structure', desc_sk: 'Rozsah trhovej štruktúry, Silné a slabé swingy, Pokročilá štruktúra' },
  { num: '03', name: 'Liquidity', lessons: 2, desc_en: 'What is Liquidity, how it works, Structural Liquidity', desc_sk: 'Čo je likvidita, ako funguje, Štrukturálna likvidita' },
  { num: '04', name: 'Premium / Discount + OTE', lessons: 3, desc_en: 'Fibonacci grid, Optimal Trade Entry, P/D zones', desc_sk: 'Fibonacci mriežka, Optimálny vstup, P/D zóny' },
  { num: '05', name: 'Inefficiency Types', lessons: 5, desc_en: 'FVG, IFVG, Volume Imbalance, Implied FVG', desc_sk: 'FVG, IFVG, Volume Imbalance, Implied FVG' },
  { num: '06', name: 'Order Blocks + Advanced', lessons: 6, desc_en: 'Order Block, Breaker Block, Mitigation Block, Rejection Block, Propulsion Block', desc_sk: 'Order Block, Breaker Block, Mitigation Block, Rejection Block, Propulsion Block' },
  { num: '07', name: 'Order Flow Analysis', lessons: 5, desc_en: 'A to B Concept, Order Flow In/Validation', desc_sk: 'A to B koncept, Order Flow In/Validácia' },
  { num: '08', name: 'Sessions + Advanced', lessons: 8, desc_en: 'Asia/London/NY, Frankfurt & London Narrative, IOF in Session', desc_sk: 'Ázia/Londýn/NY, Frankfurt & Londýn Naratív, IOF v Sessii' },
  { num: '09', name: 'Context — Bias Engineering', lessons: 2, desc_en: 'Bias Engineering, Bias IVNB', desc_sk: 'Bias Engineering, Bias IVNB' },
  { num: '10', name: 'Static vs Dynamic', lessons: 9, desc_en: 'Locked Mode, Static Can Be Dynamic, How to Create a Static Setup', desc_sk: 'Uzamknutý mód, Statický môže byť dynamický, Ako vytvoriť statický setup' },
  { num: '11', name: 'Risk Management', lessons: 3, desc_en: 'Risk/Reward, Position sizing, High vs Low RR', desc_sk: 'Risk/Reward, Veľkosť pozície, Vysoký vs nízky RR' },
  { num: '12', name: 'Backtesting', lessons: 2, desc_en: 'How to backtest correctly, FX Replay for free', desc_sk: 'Ako správne backtestovať, FX Replay zadarmo' },
  { num: '13', name: 'Indices Mechanics', lessons: 4, desc_en: 'Indices vs Forex, Optimal Trade Time', desc_sk: 'Indexy vs Forex, Optimálny čas obchodovania' },
  { num: '14', name: 'News Analysis', lessons: 3, desc_en: 'NFP/CPI, FOMC, macro events', desc_sk: 'NFP/CPI, FOMC, makro udalosti' },
  { num: '15', name: 'Theory 1 + Theory 2', lessons: 14, desc_en: 'Market Hierarchy, Invisible Edge, Market Maker, Sweep/Raid, Global Rebalance', desc_sk: 'Hierarchia trhu, Neviditeľná výhoda, Market Maker, Sweep/Raid, Globálny rebalance' },
  { num: '16', name: 'Psychology', lessons: 3, desc_en: 'Fear, Emotions, FOMO', desc_sk: 'Strach, Emócie, FOMO' },
  { num: '17', name: 'Wyckoff', lessons: 7, desc_en: 'Distribution, Accumulation, Re-distribution, Re-accumulation', desc_sk: 'Distribúcia, Akumulácia, Re-distribúcia, Re-akumulácia' },
  { num: '18', name: 'ICT Mentorship', lessons: 2, desc_en: 'ICT IntraDay Execution Logic, ICT Weekly Templates', desc_sk: 'ICT IntraDay Execution Logic, ICT Weekly Templates' },
];

const ProgramSection = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);
  const totalLessons = modules.reduce((a, m) => a + m.lessons, 0);

  return (
    <section id="program" className="py-24 px-6 max-w-7xl mx-auto">
      <p className="text-primary font-label text-[10px] tracking-[4px] uppercase mb-4 section-tag reveal-heading">{t('Curriculum', 'Učebný plán')}</p>
      <h2 className="font-heading text-6xl md:text-7xl text-foreground mb-8 reveal-heading">{t('THE PROGRAM.', 'PROGRAM.')}</h2>

      <div className="flex items-start gap-8 mb-16 reveal-content">
        <span className="font-heading text-[80px] md:text-[120px] leading-none text-secondary">{totalLessons}+</span>
        <p className="font-body text-sm text-muted-foreground max-w-md pt-4">
          {t(
            'Lessons across 18 modules covering everything from foundational SMC concepts to advanced institutional trading strategies.',
            'Lekcií v 18 moduloch pokrývajúcich všetko od základov SMC po pokročilé inštitucionálne stratégie.'
          )}
        </p>
      </div>

      <div className="border-t border-border reveal-content">
        {modules.map(m => {
          const isOpen = open === m.num;
          return (
            <div key={m.num} className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? null : m.num)}
                className="w-full flex items-center gap-4 md:gap-8 py-5 px-2 text-left group"
              >
                <span className="font-heading text-2xl text-secondary w-8">{m.num}</span>
                <span className={`font-body text-xs tracking-[2px] uppercase flex-1 transition-colors ${isOpen ? 'text-foreground' : 'text-subtle group-hover:text-foreground'}`}>
                  {m.name}
                </span>
                <span className="font-label text-[10px] tracking-[2px] text-label hidden sm:block">
                  {m.lessons} {t('lessons', 'lekcií')}
                </span>
                <span className={`font-heading text-xl transition-all duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-label'}`}>+</span>
              </button>
              <div className={`accordion-content ${isOpen ? 'open' : ''}`} style={{ paddingBottom: isOpen ? '20px' : 0, paddingLeft: '48px', paddingRight: '16px' }}>
                <p className="font-body text-sm text-muted-foreground">
                  {lang === 'en' ? m.desc_en : m.desc_sk}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramSection;
