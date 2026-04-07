import { useLanguage } from '@/contexts/LanguageContext';
import RatingsBar from './RatingsBar';

const reviews = [
  { initials: 'MK', bg: '#D4F000', text: '#0E0E0F', country: '🇸🇰', handle: '@martin.k · Slovakia', stars: 5,
    en: "Finally a course that doesn't waste your time. Every module is straight to the point. ivnb actually responds when you have questions — rare in this space.",
    sk: 'Konečne kurz, ktorý neplytváva tvojím časom. Každý modul ide priamo k veci. ivnb skutočne odpovedá na otázky — v tomto priestore rarita.' },
  { initials: 'TN', bg: '#F04E23', text: '#F0EDE6', country: '🇨🇿', handle: '@tomas.n · Czech Republic', stars: 5,
    en: "I tried two other SMC courses before this. Both were 80% filler. obsession.fx is different — dense, practical, and actually explains the why behind everything.",
    sk: 'Skúsil som dva iné SMC kurzy pred týmto. Oba boli z 80% vata. obsession.fx je iný — hustý, praktický a skutočne vysvetľuje prečo za všetkým.' },
  { initials: 'LP', bg: '#6B5FD4', text: '#F0EDE6', country: '🇸🇰', handle: '@lukas.p · Slovakia', stars: 5,
    en: "The 4 strategies alone are worth it. I finally understand the difference between static and dynamic setups. No other course explained this properly.",
    sk: 'Samotné 4 stratégie za to stoja. Konečne chápem rozdiel medzi statickými a dynamickými setupmi. Žiadny iný kurz to poriadne nevysvetlil.' },
  { initials: 'AR', bg: 'rgba(255,255,255,0.06)', text: '#F0EDE6', country: '🇵🇱', handle: '@adam.r · Poland', stars: 5,
    en: "What I appreciate most is the honesty. They don't promise you'll be rich in 3 months. They just give you the tools and let you do the work.",
    sk: 'Najviac si cením úprimnosť. Nesľubujú, že budeš bohatý za 3 mesiace. Len ti dajú nástroje a nechajú ťa pracovať.' },
  { initials: 'JH', bg: '#D4F000', text: '#0E0E0F', country: '🇸🇰', handle: '@juraj.h · Slovakia', stars: 5,
    en: "ivnb is actually active in the community. He reviews setups, gives feedback on homework. You feel like someone actually cares about your progress.",
    sk: 'ivnb je skutočne aktívny v komunite. Hodnotí setupy, dáva feedback na domáce úlohy. Cítiš, že niekomu na tvojom pokroku skutočne záleží.' },
  { initials: 'SM', bg: '#6B5FD4', text: '#F0EDE6', country: '🇦🇹', handle: '@stefan.m · Austria', stars: 5,
    en: "Compact. Dense. No YouTube-style padding. This is the course I wished existed when I started trading two years ago.",
    sk: 'Kompaktný. Hutný. Žiadne YouTube-štýlové natahanie. Toto je kurz, ktorý som si prial, keď som pred dvoma rokmi začal obchodovať.' },
  { initials: 'DK', bg: 'rgba(255,255,255,0.06)', text: '#F0EDE6', country: '🇸🇰', handle: '@daniel.k · Slovakia', stars: 5,
    en: "The sessions module completely changed how I look at timing entries. I was randomly trading all day before — now I have specific windows and a clear process.",
    sk: 'Modul sessions úplne zmenil, ako sa pozerám na timing vstupov. Predtým som obchodoval celý deň náhodne — teraz mám konkrétne okná a jasný proces.' },
  { initials: 'MB', bg: '#F04E23', text: '#F0EDE6', country: '🇭🇺', handle: '@mate.b · Hungary', stars: 5,
    en: "Solid course. Good structure, good mentor, real content. Doesn't try to sell you a lifestyle — just teaches you how to trade. Respect for that.",
    sk: 'Solídny kurz. Dobrá štruktúra, dobrý mentor, reálny obsah. Nesnaží sa predať životný štýl — len učí, ako obchodovať. Rešpekt za to.' },
  { initials: 'PV', bg: '#6B5FD4', text: '#F0EDE6', country: '🇨🇿', handle: '@peter.v · Czech Republic', stars: 4,
    en: "I'm still working through the material but the quality is clearly there. The bias engineering module alone gave me a completely new framework for reading the market.",
    sk: 'Stále prechádzam materiálom, ale kvalita je jasne viditeľná. Samotný modul bias engineering mi dal úplne nový rámec na čítanie trhu.' },
];

const topBorderColors = [
  'rgba(212,240,0,0.4)', 'rgba(240,78,35,0.4)', 'rgba(107,95,212,0.4)',
  'rgba(212,240,0,0.4)', 'rgba(240,78,35,0.4)', 'rgba(107,95,212,0.4)',
  'rgba(212,240,0,0.4)', 'rgba(240,78,35,0.4)', 'rgba(107,95,212,0.4)',
];

const ResultsSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading visible text-2xl text-primary" style={{ color: '#D4F000' }}>{t('Testimonials', 'Referencie')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)' }}>{t('REAL RESULTS.', 'REÁLNE VÝSLEDKY.')}</h2>

      <RatingsBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-content">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card p-8 flex flex-col reveal-card" style={{
            borderTop: `2px solid ${topBorderColors[i]}`,
            transitionDelay: `${i * 60}ms`,
          }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading text-xs" style={{ background: r.bg, color: r.text }}>
                {r.initials}
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= r.stars ? '#D4F000' : 'rgba(255,255,255,0.08)'} xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="font-body text-sm flex-1 mb-6 leading-relaxed" style={{ color: '#BABABA' }}>{lang === 'en' ? r.en : r.sk}</p>
            <p className="font-label tracking-[0.08em] text-base text-primary" style={{ color: '#888888' }}>
              {r.country} <span style={{ color: '#F0EDE6' }}>{r.handle.split(' · ')[0]}</span> · {r.handle.split(' · ')[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
