import { useLanguage } from '@/contexts/LanguageContext';

const cards = [
  {
    title_en: 'No Clear Strategy',
    title_sk: 'Žiadna jasná stratégia',
    desc_en: 'You enter trades without a defined model or confirmation process.',
    desc_sk: 'Vstupuješ do obchodov bez definovaného modelu alebo procesu potvrdenia.',
  },
  {
    title_en: 'Weak Risk Control',
    title_sk: 'Slabá kontrola rizika',
    desc_en: 'One bad day can destroy weeks of progress.',
    desc_sk: 'Jeden zlý deň zničí týždne pokroku.',
  },
  {
    title_en: 'Emotional Execution',
    title_sk: 'Emocionálne rozhodnutia',
    desc_en: 'Fear, greed and revenge trading control your decisions.',
    desc_sk: 'Strach, chamtivosť a pomsta ovládajú tvoje rozhodnutia.',
  },
  {
    title_en: 'No Feedback Loop',
    title_sk: 'Žiadna spätná väzba',
    desc_en: 'You repeat the same mistakes because nobody shows you what to fix.',
    desc_sk: 'Opakuješ tie isté chyby, lebo ti nikto neukáže, čo opraviť.',
  },
];

const ProblemSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="problem" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#F04E23' }}>
        {t('The Problem', 'Problém')}
      </p>
      <h2 className="font-heading mb-8 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(40px, 7vw, 84px)', lineHeight: 0.95 }}>
        {t("MOST TRADERS DON'T FAIL ", 'VÄČŠINA TRADEROV ')}
        <span style={{ color: '#F04E23' }}>{t('BECAUSE OF TALENT.', 'NEZLYHÁVA PRE TALENT.')}</span>
        <br />
        {t('THEY FAIL BECAUSE THEY HAVE ', 'ZLYHÁVAJÚ, LEBO NEMAJÚ ')}
        <span style={{ WebkitTextStroke: '1px rgba(240,237,230,0.2)', color: 'transparent' }}>{t('NO SYSTEM.', 'SYSTÉM.')}</span>
      </h2>

      <p className="font-body text-base leading-relaxed mb-16 reveal-content max-w-3xl" style={{ color: '#BABABA' }}>
        {t(
          'Random entries. Emotional exits. No risk model. No clear structure. No review process. That is how most traders lose months, money and confidence. Obsession FX was built to replace chaos with rules, discipline and repeatable execution.',
          'Náhodné vstupy. Emocionálne výstupy. Žiadny risk model. Žiadna jasná štruktúra. Žiadny review proces. Tak väčšina traderov stratí mesiace, peniaze a sebadôveru. Obsession FX vznikol, aby nahradil chaos pravidlami, disciplínou a opakovateľnou exekúciou.'
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-content">
        {cards.map((c, i) => (
          <div
            key={i}
            className="glass-card p-8 reveal-card"
            style={{ transitionDelay: `${i * 80}ms`, borderTop: '2px solid rgba(240,78,35,0.4)' }}
          >
            <span className="font-heading text-[64px] leading-none block mb-4" style={{ color: 'rgba(240,78,35,0.15)' }}>
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

export default ProblemSection;
