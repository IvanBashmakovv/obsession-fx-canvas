import { useLanguage } from '@/contexts/LanguageContext';

const cards = [
  {
    icon: '⚠️',
    title_en: 'The Guru Trap',
    title_sk: 'Pasca gurua',
    desc_en: "Someone with a Lamborghini and a ring light tells you trading is easy. You buy their course. Three weeks later you're confused, broke, and they're on their next launch.",
    desc_sk: 'Niekto s Lamborghini a ring lightom ti hovorí že trading je jednoduchý. Kúpiš ich kurz. O tri týždne si zmätený, bez peňazí a oni spúšťajú ďalší kurz.',
  },
  {
    icon: '📦',
    title_en: 'Beautiful Packaging. Empty Box.',
    title_sk: 'Krásne balenie. Prázdna krabica.',
    desc_en: 'High production value. Fancy slides. Zero depth. Most trading courses are 80% motivation and 20% recycled YouTube content you could find for free.',
    desc_sk: 'Vysoká produkčná kvalita. Efektné prezentácie. Nulová hĺbka. Väčšina trading kurzov je 80% motivácia a 20% recyklovaný YouTube obsah ktorý nájdeš zadarmo.',
  },
  {
    icon: '💰',
    title_en: 'The Quick Money Lie',
    title_sk: 'Klamstvo o rýchlych peniazoch',
    desc_en: 'No one tells you the real timeline. No one tells you about the losses. They sell you the destination and hide the journey. Trading is a skill. Skills take time.',
    desc_sk: 'Nikto ti nepovie reálny časový rámec. Nikto ti nepovie o stratách. Predávajú ti destináciu a skrývajú cestu. Trading je zručnosť. Zručnosti vyžadujú čas.',
  },
];

const ProblemSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="problem" className="max-w-[1280px] mx-auto relative z-10" style={{ padding: '100px 56px' }}>
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading" style={{ color: '#D0FF00', fontSize: '11px' }}>
        {t('THE PROBLEM', 'PROBLÉM')}
      </p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#FEFFFC', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t("You've seen this before. We all have.", 'Toto si už videl. My všetci sme videli.')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-content">
        {cards.map((c, i) => (
          <div key={i} className="problem-card reveal-card" style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: '2px solid rgba(255,30,30,0.5)',
            borderRadius: '16px',
            padding: '36px',
            transitionDelay: `${i * 80}ms`,
            transition: 'all 0.3s ease',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '20px' }}>{c.icon}</div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: '#FEFFFC', marginBottom: '12px' }}>
              {lang === 'en' ? c.title_en : c.title_sk}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.75, color: '#AAAAAA' }}>
              {lang === 'en' ? c.desc_en : c.desc_sk}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center reveal-content" style={{
        fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#666666',
        fontStyle: 'italic', marginTop: '48px',
      }}>
        {t('We got tired of watching this. So we built something different.', 'Unavilo nás sledovať to. Preto sme postavili niečo iné.')}
      </p>

      <style>{`
        .problem-card:hover { transform: translateY(-4px); border-top-color: #FF3030 !important; }
      `}</style>
    </section>
  );
};

export default ProblemSection;
