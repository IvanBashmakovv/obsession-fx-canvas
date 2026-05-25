import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 md:py-32 px-6 md:px-12 max-w-[1280px] mx-auto relative z-10">
      <p className="font-label tracking-[0.15em] uppercase mb-6 section-tag reveal-heading text-2xl" style={{ color: '#D4F000' }}>{t('Who we are', 'Kto sme')}</p>
      <h2 className="font-heading mb-16 reveal-heading" style={{ color: '#F0EDE6', fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 0.95 }}>
        {t('BUILT BY TRADERS.', 'POSTAVENÉ TRADERMI.')}<br />
        <span style={{ WebkitTextStroke: '1px rgba(240,237,230,0.2)', color: 'transparent' }}>{t('NOT MARKETERS.', 'NIE MARKETÉRMI.')}</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16 mb-16 reveal-content">
        <div className="space-y-6 font-body text-sm leading-relaxed" style={{ color: '#C4C4C4' }}>
          <p>{t(
            'We have seen every trading course out there: recycled strategies, fake promises, weak explanations and zero real structure.',
            'Videli sme každý trading kurz: recyklované stratégie, falošné sľuby, slabé vysvetlenia a nulová reálna štruktúra.'
          )}</p>
          <p>{t(
            'Obsession FX was built for traders who want something different — a direct, practical and disciplined approach to trading education.',
            'Obsession FX vznikol pre traderov, ktorí chcú niečo iné — priamy, praktický a disciplinovaný prístup k vzdelávaniu.'
          )}</p>
        </div>
        <div className="space-y-6 font-body text-sm leading-relaxed" style={{ color: '#C4C4C4' }}>
          <p>{t(
            'Our mission is simple: help traders stop gambling and start following a structured process.',
            'Naša misia je jednoduchá: pomôcť traderom prestať gemblovať a začať sa riadiť štruktúrovaným procesom.'
          )}</p>
          <p>{t(
            'No hype. No fake lifestyle. No signal chasing. Just education, execution, risk control and discipline.',
            'Žiadny hype. Žiadny falošný lifestyle. Žiadne naháňanie signálov. Iba vzdelanie, exekúcia, kontrola rizika a disciplína.'
          )}</p>
        </div>
      </div>

      <div className="gradient-border-left reveal-content">
        <p className="font-heading text-3xl md:text-5xl leading-tight" style={{ color: '#F0EDE6', fontWeight: 700 }}>
          {t('"Talent is random. ', '"Talent je náhoda. ')}
          <span style={{ color: '#D4F000' }}>{t('Obsession is repeatable."', 'Obsesia je opakovateľná."')}</span>
        </p>
      </div>
    </section>
  );
};


export default MissionSection;
